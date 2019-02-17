const notesService = require("../services/notesService");

exports.list = (req, res) => {
  res.json(notesService.getNotes());
};

exports.create = (req, res) => {
  res.send(
    {
      Error: 'Not Implemented',
      Request: req.body
    }
  );
};

exports.get = (req, res) => {
  res.send(
    {
      Error: 'Not Implemented',
      Request: req.query
    }
  );
}

exports.update = (req, res) => {
  res.send(
    {
      Error: 'Not Implemented',
      Request: req.body
    }
  );
}

exports.delete = (req, res) => {
  res.send(
    {
      Error: 'Not Implemented',
      Request: req.query
    }
  );
}