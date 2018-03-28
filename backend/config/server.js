// app.js

const app         = require('express')();
const bodyParser  = require('body-parser');
const colors      = require('colors');
const db          = require('./db');
const port        = process.env.PORT || '3001';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to Geddit REST API'));

//API Routes 
const user = require('../users');
const post = require('../posts');
const feed = require('../feeds');

app.use('/user', user['router']);
app.use('/post', post['router']);
app.use('/feed', feed['router']);

app.listen(port, () => {
  console.log("Server is up and running on port ".green + port.yellow);
});
