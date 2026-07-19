
// ==========================================
// 1. ІМПОРТИ — підключаємо бібліотеки
// ==========================================
import express from "express";       // фреймворк для створення веб-сервера
import cors from "cors";             // дозволяє React-фронтенду з іншого домену звертатись сюди
import dotenv from "dotenv";         // читає значення з .env файлу
import { Resend } from "resend";     // сервіс для відправки email

// Завантажуємо .env — після цього рядка всі значення з .env
// доступні через process.env.НАЗВА_ЗМІННОЇ
dotenv.config();

// ==========================================
// 2. НАЛАШТУВАННЯ EXPRESS
// ==========================================
const app = express();

// Дозволяє серверу розуміти JSON, який надсилає React (fetch з body: JSON.stringify(...))
app.use(express.json({ limit: "10kb" }));

// CORS — без цього браузер заблокує запити з biconn.github.io на цей сервер,
// бо це "інший домен" (Render, а не GitHub Pages)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // напр. "https://biconn.github.io"
  })
);

// Клієнт Resend — ним будемо відправляти email
const resend = new Resend(process.env.RESEND_API_KEY);

// ==========================================
// 3. ТЕСТОВИЙ РОУТ (щоб перевірити, що сервер живий)
// ==========================================
// Якщо відкрити https://твій-бекенд.onrender.com/ в браузері —
// побачиш цей текст. Просто для діагностики.
app.get("/", (req, res) => {
  res.send("ButtleADS API is running");
});

// ==========================================
// 4. ФУНКЦІЯ ПЕРЕВІРКИ reCAPTCHA
// ==========================================
// Приймає token, який React отримав від reCAPTCHA-віджету на фронтенді.
// Відправляє його в Google, і Google каже: "так, це людина" або "ні, схоже на бота".
async function verifyRecaptcha(token) {
  // Якщо React взагалі не надіслав token — одразу відхиляємо, нема сенсу питати Google
  if (!token) return false;

  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY, // наш приватний ключ (тільки на сервері!)
    response: token,                          // token, який прийшов від React
  });

    try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
    });
    const data = await response.json();
    return data.success === true;
  } catch (err) {
    console.error("reCAPTCHA request failed:", err);
    return false;
  }
}

// ==========================================
// 5. ГОЛОВНИЙ РОУТ — приймає дані форми
// ==========================================
// React робить: fetch("https://бекенд.onrender.com/api/contact", { method: "POST", body: {...} })
// Ось цей код обробляє такий запит.
app.post("/api/contact", async (req, res) => {
  // Розкладаємо дані, які прийшли з тіла запиту (req.body)
  const {
    name,
    email,
    phone,
    company,
    requestType,
    message,
    recaptchaToken, // це поле додасш у formData на фронтенді
  } = req.body;

  // --- Крок А: базова валідація обов'язкових полів ---
  if (!name || !email || !message) {
    // 400 = "Bad Request", тобто клієнт надіслав щось некоректне
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  // --- Крок Б: перевірка reCAPTCHA ---
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    // 403 = "Forbidden", тобто відмовляємо в доступі
    return res.status(403).json({ ok: false, error: "reCAPTCHA verification failed" });
  }

  // --- Крок В: відправка email через Resend ---
  try {
    await resend.emails.send({
      from: "ButtleADS Contact <onboarding@resend.dev>", // поки без свого домену
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,                  // куди прийде лист (твоя пошта)
      subject: `Нова заявка від ${name}`,
      text: `
Ім'я: ${name}
Email: ${email}
Телефон: ${phone || "—"}
Компанія: ${company || "—"}
Тип запиту: ${requestType || "—"}
Повідомлення:
${message}
      `,
    });

    // Все ок — кажемо React "успіх"
    return res.json({ ok: true });
  } catch (err) {
    // Якщо Resend впав з помилкою — логуємо в консоль Render (для дебагу)
    // і кажемо React "помилка на сервері"
    console.error("Email send error:", err);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

// ==========================================
// 6. ЗАПУСК СЕРВЕРА
// ==========================================
// process.env.PORT — Render сам підставляє порт, локально буде 3000 з .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});