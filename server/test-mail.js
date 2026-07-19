import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

try {
  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.CONTACT_EMAIL_TO,
    subject: "Тест",
    text: "Перевірка відправки",
  });
  console.log("РЕЗУЛЬТАТ:", result);
} catch (err) {
  console.error("ПОМИЛКА:", err);
}