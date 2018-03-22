// feeds/feedController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./feed');

router.get('/', (req, res) => {
  if (!req.query.type || !req.query.page) res.status(400).json({success: false, msg: 'No type specified'})
  else if (req.query.type === 'new') {
    query.getNewFeed(req.query.page, (posts) => {
      if (posts.length === 0) res.status(400).json({success: false, msg: 'No posts returned'});
      else res.status(200).json({success: true, posts, postCount: posts.length});
    })
  } else if (req.query.type === 'top') {
    query.getTopFeed(req.query.page, (posts) => {
      if (posts.length === 0) res.status(400).json({success: false, msg: 'No posts returned'});
      else res.status(200).json({success: true, posts, postCount: post.length});
    })
  } else {
    res.status(404).json({success: false, msg: 'Failed'});
  }
});

module.exports = router;
