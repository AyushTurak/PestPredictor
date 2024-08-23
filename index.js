import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

// Get current file path
const __dirname = dirname(fileURLToPath(import.meta.url));

// Set the view engine to EJS
app.set("view engine", "ejs");

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false, // he session will not be resaved if it hasn't been modified, which can improve performance by reducing unnecessary database or memory store operations.
//     saveUninitialized: true, // it means that sessions will be saved to the session store even if they are new and haven't been modified. This is useful for tracking visits and enabling login mechanisms from the start.
//   })
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(passport.initialize());
// app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home"); // No need for the full path, just the filename without .ejs
});

app.get("/sign-up", (req, res) => {
  res.render("signUp");
});

app.get("/sign-in", (req, res) => {
  res.render("signIn");
});

app.get("/disease", (req, res) => {
  res.render("disease");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
