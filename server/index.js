import express from "express";
import cors from "cors";
import "dotenv/config";
import contactRouter from "./routes/contact.js";

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.send("ButtleADS API is running");
});

app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});