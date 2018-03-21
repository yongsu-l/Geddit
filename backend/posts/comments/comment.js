// posts/comments/comment.js

const db = require('../../config/db');

db.connect();

module.exports = {
  makeComment : (comment, done) => {
    db.get().query('INSERT INTO comments SET ?', [comment], (err, result) => {
      if (err) throw err;
      db.get().query(`SELECT commentID, username, content, dateCreated 
                      FROM comments NATURAL JOIN users WHERE commentID = ? LIMIT 1`, [result.insertId], (err, row, result) => {
        if (err) throw err;
        done(row[0]);
      });
    });
  }
}
