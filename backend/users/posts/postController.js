// users/posts/postController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./post.js');

router.get('/', verifyToken, (req, res) => {
  query.getPosts(req.userID, (posts) => {
    if (!posts) return res.status(404).json({success: false, msg: 'No posts found'});
    res.status(200).json({success: true, posts});
  })
})

router.post('/create', verifyToken, (req, res) => {
  console.log(req)
  if (!req.body.title || !req.body.content)
    return res.status(400).json({success: false, msg: 'Must send title and content'});
  query.createPost({
    userID: req.userID,
    title: req.body.title,
    content: req.body.content
  }, (newPost) => {
    if (!newPost) res.status(400).json({success: false, msg: 'Post creation failed'});
    res.status(200).json({success:true, msg: 'Post successfully created'});
  });
});

module.exports = router;
