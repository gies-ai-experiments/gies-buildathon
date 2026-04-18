const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || '';

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

  // Email notification via Resend
  if (RESEND_API_KEY && NOTIFY_EMAIL) {
    try {
      const challenge = data.challenge || {};
      const subject = `New Challenge Submission: ${challenge.title || 'Untitled'} — ${challenge.name || 'Unknown'}`;
      const html = `
        <h2>New Champion Challenge Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${challenge.name || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Unit</td><td style="padding:8px;border:1px solid #ddd;">${challenge.unit || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${challenge.email || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Track</td><td style="padding:8px;border:1px solid #ddd;">${challenge.track || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Title</td><td style="padding:8px;border:1px solid #ddd;">${challenge.title || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Problem</td><td style="padding:8px;border:1px solid #ddd;">${challenge.problem || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Solution</td><td style="padding:8px;border:1px solid #ddd;">${challenge.solution || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Impact</td><td style="padding:8px;border:1px solid #ddd;">${challenge.impact || '—'}</td></tr>
        </table>
        <h3 style="margin-top:24px;">Full Transcript</h3>
        <pre style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;font-size:13px;">${data.transcript || '(no transcript)'}</pre>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Champion Bot <onboarding@resend.dev>',
          to: NOTIFY_EMAIL,
          subject,
          html,
        }),
      });
    } catch (e) {
      console.error('Email notification failed:', e);
    }
  }

  // Log to stdout for Vercel logs (always works)
  console.log('CHALLENGE_SUBMISSION:', JSON.stringify(data, null, 2));

  return Response.json({ status: 'ok' });
}
