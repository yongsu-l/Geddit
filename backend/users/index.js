// users/userController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./user');

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), CONFIG.secretKey, {expiresIn: '24h'});
};

router.get('/', (req, res) => {
  return res.status(200).send("Hello World");
});

router.post('/create', (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.status(400).send("You must send username and password");
  query.emailExists(req.body.email, (emailCheck) => {
    if(emailCheck)
      return res.status(400).json({
        success: false,
        msg: "A user with that email already exists"
      });
    else {
      query.usernameExists(req.body.username, (usernameCheck) => {
        if(usernameCheck)
          return res.status(400).json({
            success: false,
            msg: "A user with that username already exists"
          });
        else {
          query.createUser({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          }, (newUser) => {
            createToken(newUser);
            res.status(200).json({
              sucess: true,
              msg: "User successfully created"
            });
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.status(400).json({
      success: false,
      msg: "You must pass both username and password"
    });
  query.getUser(req.body.username, (user) => {
    if (!user)
      return res.status(401).json({
        success: false,
        msg: "Username does not exist"
      });
    if (user.password !== req.body.password) {
      return res.status(401).json({
        success: false,
        msg: "Username and Password do not match"
      });
    }
    res.status(201).json({
      success: true,
      id_token: createToken(user)
    });
  });
});

router.get('/profile', verifyToken, (req, res) => {
  //console.log(req.userID)
  query.getUserByID(req.userID, (user) => {
    if (!user) return res.status(404).json({success: false, msg: 'No user found'});

    res.status(200).json({success: true, user});
  }) 
})

module.exports = router;
