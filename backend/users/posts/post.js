// users/posts/post.js

const db = require('../../config/db');

db.connect();

module.exports = {
  getPosts: (userID, done) => {
    db.get().query('SELECT * FROM posts WHERE userID = ?', [userID], (err, rows, fields) => {
      if (err) throw err;
      done(rows);
    });
  },

  createPost: (post, done) => {
    db.get().query('INSERT INTO posts SET ?', [post], (err, result) => {
      if (err) throw err;
      done(result.insertId);
    })
  }
};
