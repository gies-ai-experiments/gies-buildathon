const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL || '';

export async function POST(request: Request) {
  const data = await request.json();

  // Try Google Sheets webhook
  if (SHEETS_WEBHOOK_URL) {
    try {
      await fetch(SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error('Sheets webhook failed:', e);
    }
  }

  // Log to stdout for Vercel logs (always works)
  console.log('CHALLENGE_SUBMISSION:', JSON.stringify(data, null, 2));

  return Response.json({ status: 'ok' });
}
