const NOTES = require("../models/mock-notes");

const getNotes = () => {
  return JSON.parse(NOTES);
};

module.exports = {
  getNotes
};
