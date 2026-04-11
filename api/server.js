import { createServer } from 'node:http';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from './system-prompt.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SUBMISSIONS_FILE = join(__dirname, '..', 'champion-submissions.json');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const PORT = 3001;

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    try {
      const { messages } = await parseBody(req);

      const stream = await openai.chat.completions.create({
        model: 'gpt-5.4',
        stream: true,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
      });

      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      });

      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        if (text) {
          res.write(text);
        }
      }
      res.end();
    } catch (error) {
      console.error('Chat error:', error);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to process chat' }));
      }
    }
    return;
  }

  // Person lookup — web search to customize the conversation
  if (req.method === 'POST' && req.url === '/api/lookup') {
    try {
      const { name, unit, email } = await parseBody(req);
      const query = `${name} ${unit} Gies College of Business University of Illinois`;

      const response = await openai.responses.create({
        model: 'gpt-4o-mini',
        tools: [{ type: 'web_search_preview' }],
        input: `Search for "${query}" and return a brief professional profile (3-5 sentences). Include: their role/title, what they work on, any recent projects or initiatives mentioned online. If you can't find them, say "No profile found" and nothing else. Do not fabricate information.`,
      });

      const profile = response.output_text || 'No profile found';

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ profile }));
    } catch (error) {
      console.error('Lookup error:', error);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ profile: 'No profile found' }));
    }
    return;
  }

  // Save challenge submission + transcript locally
  if (req.method === 'POST' && req.url === '/api/submit') {
    try {
      const data = await parseBody(req);
      const submissions = existsSync(SUBMISSIONS_FILE)
        ? JSON.parse(readFileSync(SUBMISSIONS_FILE, 'utf-8'))
        : [];
      submissions.push({
        ...data,
        submittedAt: new Date().toISOString(),
      });
      writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
      console.log(`Challenge saved: ${data.challenge?.title || 'untitled'} (${submissions.length} total)`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', count: submissions.length }));
    } catch (error) {
      console.error('Submit error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to save submission' }));
    }
    return;
  }

  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Champion chat API listening on 127.0.0.1:${PORT}`);
});
