// posts/postController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./post');

router.get('/', (req, res) => {
  if (!req.query.postID) res.status(400).json({success: false, msg: 'No postID query specified'});
  query.getPostByID(req.query.postID, (posts) => {
    if (!posts) res.status(404).json({success: false, msg: 'No post found'});
    res.status(200).json({success: true, posts});
  })
});

module.exports = router;
