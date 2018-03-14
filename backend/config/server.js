// app.js

require('./config');

const app         = require('express')();
const bodyParser  = require('body-parser');
const colors      = require('colors');
const db          = require('./db');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to Geddit REST API'));

//API Routes 
const user = require('../users');
const post = require('../posts');

app.use('/user', user['router']);
app.use('/post', post['router']);

app.listen(CONFIG.port, () => {
  console.log("Server is up and running on port ".green + CONFIG.port.yellow);
});
