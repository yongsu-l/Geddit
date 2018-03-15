// feeds/feed.js

const db = require('../config/db');

db.connect();

module.exports = {
  getNewFeed(page, done) {
    db.get().query('SELECT * FROM posts ORDER BY dateCreated DESC LIMIT 20 OFFSET ?', [(page - 1) * 20],(err, rows, fields) => {
      if (err) throw err;
      done(rows);
    });
  },
  getTopFeed(page, done) {
    db.get().query('SELECT * FROM posts ORDER BY votes DESC LIMIT 20 OFFSET ?', [(page - 1) * 20], (err, rows, fields) => {
      if (err) throw err;
      done(rows);
    });
  }
};
