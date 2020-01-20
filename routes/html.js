const path = require("path");

const html = app => {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../notes.html"));
  });
};

module.exports = html;
