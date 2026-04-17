import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '../system-prompt';
import { rateLimit, clientIp } from '../rate-limit';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const MAX_MESSAGES = 40;
const MAX_CHARS_PER_MESSAGE = 4000;
const MAX_TOTAL_CHARS = 30000;

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    if (!rateLimit(`chat:${ip}`, 30, 10 * 60 * 1000)) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please wait a few minutes.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 });
    }
    if (messages.length > MAX_MESSAGES) {
      return new Response(JSON.stringify({ error: 'Conversation too long' }), { status: 400 });
    }
    let total = 0;
    for (const m of messages) {
      const c = typeof m?.content === 'string' ? m.content : '';
      if (c.length > MAX_CHARS_PER_MESSAGE) {
        return new Response(JSON.stringify({ error: 'Message too long' }), { status: 400 });
      }
      total += c.length;
    }
    if (total > MAX_TOTAL_CHARS) {
      return new Response(JSON.stringify({ error: 'Conversation too long' }), { status: 400 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const stream = await openai.chat.completions.create({
      model: 'gpt-5.4-2026-03-05',
      stream: true,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || '';
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error: any) {
    console.error('Chat API error:', error?.message || error);
    return new Response(JSON.stringify({ error: error?.message || 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
