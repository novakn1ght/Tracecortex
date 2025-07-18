const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.post('/login', (req, res) => {
  const { email } = req.body;
  console.log("User login:", email);
  res.json({ message: "Login successful" });
});

app.post('/start-case', (req, res) => {
  const data = req.body;
  console.log("New Case:", data);
  res.json({ message: "Case submitted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});