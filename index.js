import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Get current file path
const __dirname = dirname(fileURLToPath(import.meta.url));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home"); // No need for the full path, just the filename without .ejs
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
