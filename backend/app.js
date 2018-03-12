// app.js

require('./config/config');

const app         = require('express')();
const bodyParser  = require('body-parser');
const colors      = require('colors');
const db          = require('./db');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

db.connect();

app.get('/', (req, res) => res.send('root'));

//API Routes 
var user = require('./users');
app.use('/user', user);

app.listen(CONFIG.port, () => {
  console.log("Server is up and running on port ".green + CONFIG.port.yellow);
});
