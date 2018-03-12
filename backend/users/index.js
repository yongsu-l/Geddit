// users/index.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

var query = require('./user');

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), CONFIG.secretKey, {expiresIn: 60*60*5});
};

router.get('/', (req, res) => {
  return res.status(200).send("Hello World");
});

router.post('/create', (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email)
    return res.status(400).send("You must send username, password and email");
  query.emailExists(req.body.email, (emailCheck) => {
    if(emailCheck)
      return res.status(400).send("A user with that email exists");
    else {
      query.usernameExists(req.body.username, (usernameCheck) => {
        if(usernameCheck)
          return res.status(400).send("A user with that username exists");
        else {
          query.createUser({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          }, (newUser) => {
            createToken(newUser);
            res.status(200).send("User successfully created");
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.status(400).send("You must send username and password");
  query.getUser(req.body.username, (user) => {
    if (!user)
      return res.status(401).send("The username does not exist");
    if (user.password !== req.body.password) {
      return res.status(401).send("The username and password do not match");
    }
    res.status(201).send({
      id_token: createToken(user)
    });
  });
});

module.exports = router;
