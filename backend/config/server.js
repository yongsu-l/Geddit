// app.js

require('./config');

const app         = require('express')();
const bodyParser  = require('body-parser');
const colors      = require('colors');
const db          = require('./db');
const cors        = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to Geddit REST API'));
app.use(cors());

app.all('*', function(req, res, next) {
  var origin = req.get('origin'); 
  res.header('Access-Control-Allow-Origin', "https://geddit-db.github.io");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
  res.header('Acess-Control-Allow-Methods', 'PUT');
  next();
});

//API Routes 
const user = require('../users');
const post = require('../posts');
const feed = require('../feeds');

app.use('/user', user['router']);
app.use('/post', post['router']);
app.use('/feed', feed['router']);

app.listen(CONFIG.port, () => {
  console.log("Server is up and running on port ".green + CONFIG.port.yellow);
});
