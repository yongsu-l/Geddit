// feeds/feed.js

const db = require('../config/db');

db.connect();

module.exports = {
  getNewFeed(page, done) {
    db.get().query(`SELECT postID, title, username, content, dateCreated, votes 
    from posts NATURAL JOIN users ORDER BY dateCreated DESC LIMIT 20 OFFSET ?`, [(page - 1) * 20], (err, rows, fields) => {
      if (err) throw err;
      done(rows);
    });
  },
  getTopFeed(page, done) {
    db.get().query(`SELECT postID, title, username, content, dateCreated, votes 
    FROM posts NATURAL JOIN users ORDER BY votes DESC LIMIT 20 OFFSET ?`, [(page - 1) * 20], (err, rows, fields) => {
      if (err) throw err;
      done(rows);
    });
  },
  getPostCount(done) {
    db.get().query('SELECT COUNT(*) as totalCount FROM posts', (err, rows, field) => {
      done(rows[0].totalCount);
    })
  }
};
