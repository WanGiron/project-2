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

INSERT INTO children(child_name, child_last_name, date_of_birth, parent_name) VALUE('thomas', 'Minoungou', '2010-02-03',  'pascal');
INSERT INTO children(child_name, child_last_name, date_of_birth, parent_name) VALUE('baby', 'Sava','2011-12-02', 'will');
INSERT INTO children(child_name, child_last_name, date_of_birth, parent_name) VALUE('rnakada','sage','2010-05-01', 'ry');
INSERT INTO children(child_name, child_last_name, date_of_birth, parent_name) VALUE('lydia','Savadogo','2009-11-13', 'Sidi Savadogo');

SELECT * FROM children;

CREATE TABLE activities (
id INT AUTO_INCREMENT,
child_name VARCHAR(255) NOT NULL,
activity_option VARCHAR(255) NOT NULL,
activity_type VARCHAR(255) NOT NULL,
activity_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO activities(child_name, activity_option, activity_type) VALUE('baby','Soccer');
INSERT INTO activities(child_name, activity_type) VALUE('thomas','Programming');
INSERT INTO activities(child_name, activity_type) VALUE('thomas','lunch');
INSERT INTO activities(child_name, activity_type) VALUE('rnakada','Afternoon nap');


SELECT * FROM activities;


CREATE TABLE messages (
id INT AUTO_INCREMENT NOT NULL,
child_name VARCHAR(255) NOT NULL,
message_from_parent VARCHAR(255) NOT NULL,
status_message BOOLEAN DEFAULT FALSE NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE users (
id INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
username VARCHAR(255) NOT NULL,
about TEXT(255),
email VARCHAR(255),
password VARCHAR(255) NOT NULL,
last_login DATE,
status ENUM('active', 'inactive') DEFAULT 'active',
PRIMARY KEY(id)
);

DROP TABLE users;
SELECT * FROM users;
-- DELETE  FROM children WHERE id= 1;
