// posts/comments/comment.js

const db = require('../../config/db');

db.connect();

module.exports = {
  makeComment : (comment, done) => {
    db.get().query('SELECT * FROM comments WHERE commentID = ?', [comment.parentID], (err, rows, field) => {
      if (rows.length > 0) {
        db.get().query('INSERT INTO comments SET ?', [comment], (err, result) => {
          if (err) throw err;
          done(true);
        });
      } else {
        done(false);
      }
    })
  }
}
