DROP DATABASE IF EXISTS buttons_dev;
CREATE DATABASE buttons_dev;

\c buttons_dev;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    uuid TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    photourl TEXT
);

CREATE TABLE buttons (
    id SERIAL PRIMARY KEY,
    button_category TEXT,
    button_label TEXT,
    button_message TEXT,
    button_image VARCHAR(2083),
    button_navigate TEXT
)