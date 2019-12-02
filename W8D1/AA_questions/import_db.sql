PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  body TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
  FOREIGN KEY (parent_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Ned', 'Smith'),
  ('Kush', 'Brown');

INSERT INTO
  questions (title, body, user_id)
VALUES
  ('SQL', 'How to use SELECT?', 1),
  ('Ruby', 'Syntax?', 2);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (1, 2),
  (2, 1),
  (2, 2);

INSERT INTO
  replies (user_id, question_id, parent_id, body)
VALUES
  (1, 2, NULL, 'Use semicolons'),
  (2, 2, 1, 'Ok, thank you'),
  (2, 1, NULL, 'Use SELECT'),
  (1, 1, 3, 'Ok, thanks');

INSERT INTO
  question_likes (user_id, question_id)
VALUES
  (1, 2);
