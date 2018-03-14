// posts/post.js

const db = require('../config/db');

db.connect();

function parseComment(data) {
  var idToNodeMap = {};
  var root = [];

  data.forEach((datum) => {
    datum.comments = [];

    idToNodeMap[datum.commentID] = datum;


  })
}

module.exports = {
  getPostByID : (postID, done) => {
    db.get().query('SELECT * FROM posts WHERE postID = ? LIMIT 1', [postID], (err, post_rows, fields) => {
      if (err) throw err;
      if (post_rows.length === 0) return done(null);
      db.get().query('SELECT * FROM comments where postID = ?', [postID], (err, comment_rows, fields) => {
        //Add the comments to the post before return
        post = post_rows[0];
        //Iterate through the list to get the child comments into the parent comments
        comments = {}
        post_comments = []
        if (comment_rows.length !== 0)
          for (i = 0; i < comment_rows.length; i++) {
            comments[comment_rows[i].commentID] = comment_rows[i];
          };
        for (i = 0; i < comment_rows.length; i++) {
          if (comment_rows[i].parentID === null)
            post_comments.append(comment_rows[i]);
        }
        //Query to get the upvotes
        done(post.comments = post_comments);
      });
    });
  }
};
