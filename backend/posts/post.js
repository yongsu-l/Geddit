// posts/post.js

const db = require('../config/db');

db.connect();

function parseComment(data) {
  var idToNodeMap = {};
  var root = [];

  data.forEach((datum) => {
    datum.comments = [];

    idToNodeMap[datum.commentID] = datum;

    if (datum.parentID === null) {
      root.push(datum);
      delete datum.parentID;
    }
    else {
      parentNode = idToNodeMap[datum.parentID];
      if (datum.parentID !== null)
        parentNode.comments.push(datum);
      delete datum.parentID;
    }
  });

  return root;
}

module.exports = {
  getPostByID : (postID, done) => {
    db.get().query(`SELECT title, content, dateCreated, votes, username
                    FROM posts NATURAL JOIN users WHERE postID = ? LIMIT 1`, [postID], (err, post_rows, fields) => {
      if (err) throw err;
      if (post_rows.length === 0) return done(null);
      db.get().query('SELECT * FROM comments where postID = ?', [postID], (err, comment_rows, fields) => {
        //Add the comments to the post before return
        post = post_rows[0];
        //Iterate through the list to get the child comments into the parent comments
        const comments = parseComment(comment_rows);
        //Query to get the upvotes
        post['comments'] = comments;
        done(post);
      });
    });
  }
};
