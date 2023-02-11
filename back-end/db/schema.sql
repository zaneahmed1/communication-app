DROP DATABASE IF EXISTS buttons_dev;
CREATE DATABASE buttons_dev;

\c buttons_dev;
CREATE TABLE buttons (
    id SERIAL PRIMARY KEY,
    button_category TEXT,
    button_label TEXT,
    button_message TEXT,
    button_image VARCHAR(2083),
    button_navigate TEXT
)