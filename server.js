// server.js
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

let globalStatus = { enabled: true };

app.get('/api/subscriptionStatus', (req, res) => {
  res.json(globalStatus);
});

app.post('/api/disableAll', (req, res) => {
  globalStatus.enabled = false;
  res.json({ message: "All features disabled" });
});

app.post('/api/enableAll', (req, res) => {
  globalStatus.enabled = true;
  res.json({ message: "All features enabled" });
});

app.listen(3000, () => console.log("Running on port 3000"));
