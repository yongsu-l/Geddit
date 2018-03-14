USE geddit;
INSERT INTO users SET username = 'test123', password = 'password';
INSERT INTO posts SET userID = 1, title = 'Awesome title', content = 'Content';
INSERT INTO comments SET userID = 1, postID = 1, content = 'Awesome comment';
