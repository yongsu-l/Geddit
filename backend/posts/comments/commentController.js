// posts/comments/commentController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./comment');

router.put('/', verifyToken, (req, res) => {
  if (!req.body.content || !req.body.postID)
    res.status(400).json({success: false, msg: 'Must provide comment and postID'});
  query.makeComment({
    userID: req.userID,
    postID: req.body.postID,
    parentID: req.body.parentID,
    content: req.body.content
  }, (newComment) => {
    if (!newComment) res.status(400).json({success: false, msg : 'Failed to make comment'});
    else res.status(201).json({success: true, newComment});
  })
  
})

module.exports = router;
