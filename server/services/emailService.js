import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async ({ name, email, phone, company, requestType, message }) => {
  return resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.CONTACT_EMAIL,
    subject: `Нова заявка від ${name}`,
    html: `
      <h2>Нова заявка з сайту ButtleADS</h2>
      <p><b>Ім'я:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Телефон:</b> ${phone || "—"}</p>
      <p><b>Компанія:</b> ${company || "—"}</p>
      <p><b>Тип запиту:</b> ${requestType || "—"}</p>
      <p><b>Повідомлення:</b></p>
      <p>${message}</p>
    `,
  });
};