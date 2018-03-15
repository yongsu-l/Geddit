// posts/votes/vote.js

const db = require('../../config/db');

db.connect();

module.exports = {
  makeVote : (vote, done) => {
    db.get().query('SELECT * FROM postVotes WHERE postID = ? AND userID = ?', [vote.postID, vote.userID], (err, row, fields) => {
      if (row.length === 0) {
        db.get().query('INSERT INTO postVotes SET ?', [vote], (err, result) => {
          if (err) throw err;
          db.get().query('UPDATE posts SET votes = votes + 1 WHERE postID = ?', [vote.postID], (err, row, fields) => {
            if (err) throw err;
            done(result);
          })
        })
      } else {
        done(false);
      }
    })
  }
}
