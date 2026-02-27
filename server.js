import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const app = express();

/* ===========================
   ✅ CORS (Vercel + preview + local)
=========================== */

const allowedOrigins = new Set([
  "https://portfolio-v2-azure-nine.vercel.app",
  "http://localhost:5173",
]);

const vercelPreviewRegex = /^https:\/\/portfolio-v2-azure-nine.*\.vercel\.app$/;

const corsOptions = {
  origin: (origin, cb) => {
    // Postman / server-to-server
    if (!origin) return cb(null, true);

    const ok = allowedOrigins.has(origin) || vercelPreviewRegex.test(origin);
    console.log("CORS origin =", origin, "=>", ok ? "ALLOWED" : "BLOCKED");

    return cb(null, ok);
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

/* ===========================
   ✅ PostgreSQL (Railway safe)
=========================== */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

/* ===========================
   ✅ Debug route to confirm deploy
=========================== */
app.get("/__health", (req, res) => {
  res.json({
    ok: true,
    origin: req.headers.origin || null,
    time: new Date().toISOString(),
  });
});

/* ===========================
   ✅ Routes
=========================== */
app.get("/", (req, res) => res.send("Backend is running 🚀"));

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur API Projects:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/projects/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects WHERE id = $1", [
      req.params.id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erreur API Project by id:", error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));