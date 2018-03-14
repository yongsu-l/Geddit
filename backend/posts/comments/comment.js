// posts/comments/comment.js

const db = require('../../config/db');

db.connect();

module.exports = {
  makeComment : (comment, done) => {
    db.get().query('INSERT INTO comments SET ?', [comment], (err, result) => {
      if (err) throw err;
      done(result);
    });
  }
}
