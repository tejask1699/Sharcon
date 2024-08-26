// server.js
const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// Example endpoint for file upload
app.post("/upload", upload.single("file"), (req, res) => {
  // Here, add logic to interact with LLM API

  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  // Example: Validate file type and size
  const allowedTypes = ["image/jpeg", "image/png", "video/mp4", "audio/mpeg"];
  if (!allowedTypes.includes(req.file.mimetype)) {
    return res.status(400).send("Invalid file type");
  }

  // Proceed with processing or sending to LLM API
  res.send("File uploaded successfully");
});

// Example authentication endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Authenticate user (example)
  // Generate and return JWT token

  // Replace with actual user authentication logic
  const user = { id: 1, username, password }; // Example user
  const token = jwt.sign(user, "your_jwt_secret", { expiresIn: "1h" });
  res.json({ token });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
