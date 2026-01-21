'use strict';

const messages = [];

function addMessage({ name, email, message }) {
  const id = messages.length + 1;
  const createdAt = new Date().toISOString();
  const record = { id, name, email, message, createdAt };
  messages.push(record);
  return record;
}

function getMessages() {
  return messages;
}

module.exports = { addMessage, getMessages };