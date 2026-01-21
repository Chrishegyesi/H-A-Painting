'use strict';

const messages = [];

function addMessage({ name, email, address, serviceType, message }) {
  const id = messages.length + 1;
  const createdAt = new Date().toISOString();
  const record = { id, name, email, address, serviceType, message, createdAt };
  messages.push(record);
  return record;
}

function getMessages() {
  return messages;
}

module.exports = { addMessage, getMessages };