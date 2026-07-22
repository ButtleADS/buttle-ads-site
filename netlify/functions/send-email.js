import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token) {
  if (!token) return false;
  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  });
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, company, requestType, message, recaptchaToken } = body;

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return Response.json({ ok: false, error: "reCAPTCHA failed" }, { status: 403 });
  }

  try {
    await resend.emails.send({
      from: "ButtleADS <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Nowe zapytanie: ${name}`,
      text: `Imię: ${name}
Email: ${email}
Telefon: ${phone || "—"}
Firma: ${company || "—"}
Rodzaj: ${requestType || "—"}

${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
};