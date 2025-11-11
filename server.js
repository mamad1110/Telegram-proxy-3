import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 10000;

// مسیر هدف (تلگرام)
const target = "https://api.telegram.org";

// ساخت پروکسی به سمت تلگرام
app.use(
  "/",
  createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log(`🔄 Proxying: ${req.method} ${req.url}`);
    },
    onError: (err, req, res) => {
      console.error("❌ Proxy Error:", err.message);
      res.status(500).send("Proxy Error");
    },
  })
);

app.get("/", (req, res) => {
  res.send("✅ Telegram Proxy Server is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
