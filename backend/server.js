const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });


app.post("/upload", upload.single("file"), (req, res) => {
  //LLM API

  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }


  const allowedTypes = ["image/jpeg", "image/png", "video/mp4", "audio/mpeg"];
  if (!allowedTypes.includes(req.file.mimetype)) {
    return res.status(400).send("Invalid file type");
  }
  res.send("File uploaded successfully");
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = { username, password }; 
  const token = jwt.sign(user, "your_jwt_secret", { expiresIn: "1h" });
  res.json({ token });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
