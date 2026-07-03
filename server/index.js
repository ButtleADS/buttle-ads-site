import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const text = `Нова заявка:\nІм'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`;

  try {
    await fetch(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: process.env.TG_CHAT_ID, text }),
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: "Помилка відправки" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});