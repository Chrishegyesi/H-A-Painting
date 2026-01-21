'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createMessage, listMessages } = require('../controllers/userMessageController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/messages', listMessages);
app.post('/messages', createMessage);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});