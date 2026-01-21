'use strict';
const { addMessage, getMessages } = require('../models/userMessagesModel');

function createMessage(req, res) {
  const { name, email, address, serviceType, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields: name, email, message' });
  }
  const saved = addMessage({ name, email, address, serviceType, message });
  return res.status(201).json({ success: true, data: saved });
}

function listMessages(req, res) {
  return res.json({ success: true, data: getMessages() });
}

module.exports = { createMessage, listMessages };