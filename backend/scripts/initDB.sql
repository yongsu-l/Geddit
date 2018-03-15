CREATE DATABASE IF NOT EXISTS geddit;
USE geddit;

CREATE TABLE IF NOT EXISTS users (
  userID int NOT NULL AUTO_INCREMENT, 
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) DEFAULT NULL,
  Primary Key (userID)
);

CREATE TABLE IF NOT EXISTS posts (
  postID int NOT NULL AUTO_INCREMENT, 
  userID int NOT NULL,
  title TinyText NOT NULL,
  content MediumText NOT NULL,
  dateCreated datetime DEFAULT NOW(),
  lastUpdated datetime DEFAULT NOW() ON UPDATE NOW(),
  votes int DEFAULT 0 NOT NULL,
  Primary Key (postID),
  Foreign Key (userID) REFERENCES users(userID)
);

CREATE TABLE IF NOT EXISTS comments (
  commentID int NOT NULL AUTO_INCREMENT,
  postID int NOT NULL,
  userID int NOT NULL,
  parentID int DEFAULT NULL,
  content Text NOT NULL,
  dateCreated datetime DEFAULT NOW(),
  lastUpdated datetime DEFAULT NOW() ON UPDATE NOW(),
  Primary Key (commentID),
  Foreign Key (postID) REFERENCES posts(postID),
  Foreign Key (userID) REFERENCES users(userID),
  Foreign Key (parentID) REFERENCES comments(commentID)
);

CREATE TABLE IF NOT EXISTS postVotes (
  postID int NOT NULL,
  userID int NOT NULL,
  upvote boolean NOT NULL,
  Foreign Key (postID) REFERENCES posts(postID),
  Foreign Key (userID) REFERENCES users(userID)
);

CREATE TABLE IF NOT EXISTS commentVotes (
  commentID int NOT NULL,
  userID int NOT NULL,
  upvote boolean NOT NULL,
  Foreign Key (commentID) REFERENCES comments(commentID),
  Foreign Key (userID) REFERENCES users(userID)
);
