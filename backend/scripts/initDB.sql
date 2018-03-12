CREATE DATABASE IF NOT EXISTS geddit;
USE geddit;

CREATE TABLE IF NOT EXISTS users (
  userID int NOT NULL AUTO_INCREMENT, 
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  firstname varchar(255) DEFAULT NULL,
  lastname varchar(255) DEFAULT NULL,
  Primary Key (userID)
);

CREATE TABLE IF NOT EXISTS posts (
  postID int NOT NULL AUTO_INCREMENT, 
  userID int NOT NULL,
  title TinyText NOT NULL,
  body MediumText NOT NULL,
  dateCreated datetime DEFAULT NOW(),
  lastUpdated datetime DEFAULT NOW() ON UPDATE NOW(),
  Primary Key (postID),
  Foreign Key (userID) REFERENCES users(userID)
);

CREATE TABLE IF NOT EXISTS comments (
  commentID int NOT NULL AUTO_INCREMENT,
  postID int NOT NULL,
  userID int NOT NULL,
  parentID int DEFAULT NULL,
  body Text NOT NULL,
  dateCreated datetime DEFAULT NOW(),
  lastUpdated datetime DEFAULT NOW() ON UPDATE NOW(),
  Primary Key (commentID),
  Foreign Key (postID) REFERENCES posts(postID),
  Foreign Key (userID) REFERENCES users(userID)
);

CREATE TABLE IF NOT EXISTS postVotes (
  postID int NOT NULL,
  userID int NOT NULL,
  Foreign Key (postID) REFERENCES posts(postID),
  Foreign Key (userID) REFERENCES users(userID)
);

CREATE TABLE IF NOT EXISTS commentVotes (
  commentID int NOT NULL,
  userID int NOT NULL,
  Foreign Key (commentID) REFERENCES comments(commentID),
  Foreign Key (userID) REFERENCES users(userID)
);
