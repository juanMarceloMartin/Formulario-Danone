const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cronTask = require("./helpers/cronTask");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("db ok!"))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/front/public/index.html"))
);
app.use("/users", require("./routes/users"));
app.use("/email", require("./routes/emailExists"));
app.use("/phone", require("./routes/phoneExists"));
app.use("/cuit", require("./routes/cuitExists"));

app.listen(PORT, console.log("Server started on port " + PORT));
cronTask();

module.exports = app;
