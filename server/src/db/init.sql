CREATE DATABASE player;

USE player;

CREATE TABLE track (
  track_id   INT         NOT NULL UNIQUE,
  artist     VARCHAR(30) NOT NULL,
  title      VARCHAR(30) NOT NULL,
  storage_id VARCHAR(10) NOT NULL,
  PRIMARY KEY (track_id)
);

INSERT INTO track VALUES (0, 'Akute', 'Ctrl', 'track0');
INSERT INTO track VALUES (1, 'Neuro Dubel', 'tut.by', 'track1');
INSERT INTO track VALUES (2, 'Akute', 'Naskroz', 'track2');

COMMIT;