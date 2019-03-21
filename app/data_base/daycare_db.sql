DROP DATABASE IF EXISTS `daycare_db`;
CREATE DATABASE `daycare_db`;
USE daycare_db;

CREATE TABLE children (
id INT AUTO_INCREMENT NOT NULL,
child_name VARCHAR(255) NOT NULL,
child_last_name VARCHAR(255) NOT NULL,
date_of_birth DATE NOT NULL,
parent_name VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM children;

CREATE TABLE activities (
id INT AUTO_INCREMENT,
child_name VARCHAR(255) NOT NULL,
activity_option VARCHAR(255) NOT NULL,
activity_type VARCHAR(255) NOT NULL,
activity_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM activities;


CREATE TABLE messages (
id INT AUTO_INCREMENT NOT NULL,
child_name VARCHAR(255) NOT NULL,
message_from_parent VARCHAR(255) NOT NULL,
status_message BOOLEAN DEFAULT FALSE NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM messages;
-- DELETE  FROM children WHERE id= 1;
