const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const pool = require("./pool");

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
});

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(3000, async () => {
  console.log(`server start`);
  try {
    const connection = await pool.getConnection();
    console.log("Connection to the database!");
    connection.release();
  } catch (e) {
    console.log("DB Connection Error");
  }
});
