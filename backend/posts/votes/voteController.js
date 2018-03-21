// posts/votes/voteController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./vote');

router.put('/', verifyToken, (req, res) => {
  if (!req.body.postID || !req.body.upvote) res.status(400).json({success: false, msg: 'Need postID and voteOption'});
  query.makeVote({
    userID: req.userID,
    postID: req.body.postID,
    upvote: req.body.upvote
  }, (vote) => {
    if (!vote) res.status(400).json({success: false, msg : 'Failed to vote'});
    else res.status(201).json({success: true, msg: 'Vote placed'});
  });
});

module.exports = router;
