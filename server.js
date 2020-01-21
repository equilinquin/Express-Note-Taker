const express = require("express");
const app = express();

const PORT = process.env.PORT || 1000;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/webpage"));

require("./routes/html")(app)
require("./routes/apiNote")(app)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });