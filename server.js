const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-with, Content-Type,Accept");
  res.header("Access-Control-Allow-Origin", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});

const db = require("./models");
db.sequelize.sync();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to 5C application." });
});

require("./routes/user.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
