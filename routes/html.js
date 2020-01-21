const path = require("path");

module.exports = app => {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../webpage/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../webpage/notes.html"));
  });
};
