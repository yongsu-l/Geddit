// posts/post.js

const db = require('../config/db');

db.connect();

module.exports = {
  getPostByID : (postID, done) => {
    db.get().query('SELECT * FROM posts WHERE postID = ? LIMIT 1', [postID], (err, post_rows, fields) => {
      if (err) throw err;
      db.get().query('SELECT * FROM comments where postID = ?', [postID], (err, comment_rows, fields) => {
        post = post_rows[0];
        post.comments = comment_rows;
        done(post);
      })
    })
  }
}
