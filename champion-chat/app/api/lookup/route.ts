import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const { name, unit } = await request.json();
    const query = `${name} ${unit} Gies College of Business University of Illinois`;

    const response = await openai.responses.create({
      model: 'gpt-4o-mini',
      tools: [{ type: 'web_search_preview' as any }],
      input: `Search for "${query}" and return a brief professional profile (3-5 sentences). Include: their role/title, what they work on, any recent projects or initiatives mentioned online. If you can't find them, say "No profile found" and nothing else. Do not fabricate information.`,
    });

    const profile = (response as any).output_text || 'No profile found';
    return Response.json({ profile });
  } catch (error) {
    console.error('Lookup error:', error);
    return Response.json({ profile: 'No profile found' });
  }
}
