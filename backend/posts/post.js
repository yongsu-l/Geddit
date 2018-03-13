// posts/post.js

const db = require('../config/db');

db.connect();

module.exports = {
  getPostByID : (postID, done) => {
    db.get().query('SELECT * FROM posts WHERE postID = ? LIMIT 1', [postID], (err, rows, fields) => {
      if (err) throw err;
      done(rows[0]);
    })
  }
}
