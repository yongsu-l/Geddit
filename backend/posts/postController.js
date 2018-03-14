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

//More routes
const comment = require('./comments');
const vote    = require('./votes');

router.use('/comment', comment['router']);
router.use('/vote', vote['router']);

router.get('/', (req, res) => {
  if (!req.query.id) res.status(400).json({success: false, msg: 'No postID query specified'});
  query.getPostByID(req.query.id, (post) => {
    if (!post) res.status(404).json({success: false, msg: 'No post found'});
    else res.status(200).json({success: true, post});
  })
});

module.exports = router;
