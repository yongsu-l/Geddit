// posts/post.js

const db = require('../db');

db.connect();

exports.createPost = function(post, done) {

  db.get().query('INSERT INTO posts SET ?', [post], (err, result) => {
    if (err) throw err;
    const newPost = {
      postID: result.postID,
      userID: result.userID,
      title: result.title,
      body: result.body,
      dateCreated: result.dateCreated,
      lastUpdated: result.lastUpdated
    };
    done(newPost);
  })
}

exports.getPost = function(username, done) {
  db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], (err, rows, fields) => {
    if (err) throw err;
    done(rows[0]);
  });
}

