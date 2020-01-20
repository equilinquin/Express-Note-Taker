const path = require("path");

const open = app => {
  app.get("/api/notes", function(reg, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
};

module.exports = open;