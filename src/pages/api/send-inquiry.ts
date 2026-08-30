import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, phone, email, message } = data;

    if (!name || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name, phone number, and message requirement are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set.');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service configuration is pending (RESEND_API_KEY not found in environment).' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = import.meta.env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'Ashapura Enterprise <onboarding@resend.dev>';
    const toEmail = import.meta.env.RESEND_TO_EMAIL || process.env.RESEND_TO_EMAIL || 'kuldeepnc02@gmail.com';

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email && email.includes('@') ? email : undefined,
      subject: `Steel Inquiry & Rate Request - ${name} (${phone})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
          <div style="background: #141E37; padding: 24px 30px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">Ashapura Enterprise</h2>
            <p style="margin: 4px 0 0; font-size: 13px; color: #E30613; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Steel Quotation & Material Requirement</p>
          </div>
          
          <div style="padding: 30px; color: #334155;">
            <p style="margin-top: 0; font-size: 15px; line-height: 1.5; color: #0f172a;">A customer has submitted a new material requirement / quotation request:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 600; color: #64748b; width: 140px;">Customer Name:</td>
                <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Contact Number:</td>
                <td style="padding: 10px 0; font-weight: 700; color: #E30613;"><a href="tel:${phone}" style="color: #E30613; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Email Address:</td>
                <td style="padding: 10px 0; color: #0f172a;">${email || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #64748b; vertical-align: top;">Material Requirement:</td>
                <td style="padding: 10px 0; color: #0f172a; line-height: 1.6; white-space: pre-wrap; font-weight: 500;">${message}</td>
              </tr>
            </table>

            <div style="margin-top: 26px; padding: 14px; background: #f8fafc; border-radius: 8px; font-size: 12px; color: #64748b; text-align: center; border: 1px solid #edf2f7;">
              <strong style="color: #141E37; display: block; margin-bottom: 2px;">Ashapura Enterprise — Iron & Steel Merchant</strong>
              51/1, GIDC Estate, Odhav, Ahmedabad | +91 98250 31940 / +91 96382 55045
            </div>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend API Error:', emailResponse.error);
      return new Response(
        JSON.stringify({ success: false, error: emailResponse.error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: emailResponse.data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('API send-inquiry error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error?.message || 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
