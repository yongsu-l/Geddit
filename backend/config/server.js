// server.js 

try {
  var app         = require('express')();
  var bodyParser  = require('body-parser');
  var colors      = require('colors');
  var db          = require('./db');
  require('dotenv').config();
} catch(error) {
  console.error("ERROR: Not all dependencies are loaded");
  console.log(error);
  process.exit(1);
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is up and running on port ".green + PORT.yellow);
});
