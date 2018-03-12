// users/user.js

const db = require('../db');

db.connect();

exports.createUser = function(user, done) {

  db.get().query('INSERT INTO users SET ?', [user], (err, result) => {
    if (err) throw err;
    const newUser = {
      userID: result.userID,
      username: result.username,
      password: result.password,
      email: result.email
    };
    done(newUser);
  })
}

exports.getUser = function(username, done) {
  db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], (err, rows, fields) => {
    if (err) throw err;
    done(rows[0]);
  });
}

exports.emailExists = function(email, done) {
  db.get().query('SELECT * FROM users WHERE email = ? LIMIT 1', [email], (err, rows, fields) => {
    if (err) throw err;
    done(rows.length > 0);
  })
}

exports.usernameExists = function(username, done) {
  db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], (err, rows, fields) => {
    if (err) throw err;
    done(rows.length > 0);
  })
}
