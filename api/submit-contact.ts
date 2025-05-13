import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Missing required fields: name, email, and message.');
  }

  try {
    // Replace 'your_verified_email@example.com' with your actual verified email in Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain/email
      to: 'ayo12ammar24@gmail.com', // Replace with the email you want to receive messages at
      subject: `New message from ${name} via Contact Form`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Error sending message.', error: error.message });
  }
}
