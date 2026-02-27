import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const app = express();

/* ===========================
   ✅ CORS (Vercel + Local)
=========================== */

const allowedOrigins = new Set([
  "https://portfolio-v2-azure-nine.vercel.app",
  "http://localhost:5173",
]);

// accepte aussi les preview deployments Vercel
const isVercelPreview = (origin) =>
  /^https:\/\/portfolio-v2-azure-nine.*\.vercel\.app$/.test(origin);

// (Optionnel) log pour debug (Railway logs)
app.use((req, res, next) => {
  if (req.headers.origin) console.log("Origin:", req.headers.origin);
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      // Postman / server-to-server
      if (!origin) return callback(null, true);

      if (allowedOrigins.has(origin) || isVercelPreview(origin)) {
        return callback(null, true);
      }

      // Refuse silently 
      return callback(null, false);
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ===========================
   ✅ Body parser
=========================== */
app.use(express.json());

/* ===========================
   ✅ PostgreSQL Connection (Railway safe)
=========================== */

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Railway Postgres: SSL 
  ssl: { rejectUnauthorized: false },
});

/* ===========================
   ✅ Test Route
=========================== */

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ===========================
   ✅ GET ALL PROJECTS
=========================== */

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur API Projects:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===========================
   ✅ GET ONE PROJECT
=========================== */

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

/* ===========================
   ✅ Global Error Handler
=========================== */
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ message: "Server error" });
});

/* ===========================
   ✅ Server Listen
=========================== */

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});