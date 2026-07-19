import { Router } from "express";
import { verifyCaptcha } from "../services/captchaService.js";
import { sendContactEmail } from "../services/emailService.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message, recaptchaToken } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!recaptchaToken) {
      return res.status(400).json({ error: "Captcha token missing" });
    }

    const captchaValid = await verifyCaptcha(recaptchaToken);
    if (!captchaValid) {
      return res.status(400).json({ error: "Captcha verification failed" });
    }

    await sendContactEmail(req.body);

    res.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;