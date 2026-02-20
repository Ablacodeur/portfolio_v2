import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

/* ===========================
   ✅ PostgreSQL Connection
=========================== */

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
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

app.get("/api/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM projects WHERE id = $1",
      [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

/* ===========================
   ✅ Server Listen
=========================== */

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
