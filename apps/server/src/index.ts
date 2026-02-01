import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req: Request, res: Response) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required" });
  }

  // Here you can add logic to send email, save to database, etc.
  console.log("Contact form submission:", {
    email,
    message,
    timestamp: new Date(),
  });

  res.json({ success: true, message: "Message received successfully" });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
