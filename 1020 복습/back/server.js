const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./pool");
const HttpExceoption = require("./exceptions/http.exceoptions");

app.use(express.json());
app.use(cors());

app.post("/users", async (req, res) => {
  try {
    const { userid, userpw, username } = req.body;
    if (!userid || !userpw || !username) throw new HttpExceoption("XX");

    const sql = "INSERT INTO users(id,pw, name) VALUES(?,?,?)";
    const [{ affectedRows }] = await pool.query(sql, [userid]);
    if (!affectedRows) throw new HttpExceoption("db xx");
    const [[result]] = await pool.query(
      "SELECT id,name FROM users WHERE id=?",
      [userid]
    );
    res.json({ inserted: true, ...result });
  } catch (e) {}
});

app.post("/login", (req, res) => {
  const { userid, userpw } = req.body;
  if (userid === "admin" && userpw === "1234") {
    res.status(200).json({ result: "ok" });
  } else {
    res.status(400).json();
  }
});

app.get("/users", (req, res) => {
  res.json();
});

app.get("/users/:id", (req, res) => {
  res.json();
});

app.listen(4000, async () => {
  try {
    const connection = await pool.createPool();
    console.log("DB connect success");
    console.log("Back server start");
    connection.release();
  } catch (e) {
    console.log("DB connection error");
  }
});
