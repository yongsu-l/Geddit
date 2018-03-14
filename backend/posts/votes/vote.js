// posts/votes/vote.js

const db = require('../../config/db');

db.connect();

module.exports = {
  makeVote : (vote, done) => {
    db.get().query('INSERT INTO postVotes SET ?', [vote], (err, result) => {
      if (err) throw err;
      done(result);
    })
  }
}
