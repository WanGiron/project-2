DROP DATABASE IF EXISTS `daycare_db`;
CREATE DATABASE `daycare_db`;
USE daycare_db;

CREATE TABLE children (
id INT AUTO_INCREMENT NOT NULL,
child_name VARCHAR(255) NOT NULL,
parent_name VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO children(child_name, parent_name) VALUE('thomas', 'pascal');
INSERT INTO children(child_name, parent_name) VALUE('baby', 'will');
INSERT INTO children(child_name, parent_name) VALUE('rnakada', 'ry');
INSERT INTO children(child_name, parent_name) VALUE('lydia Savadogo', 'Sidi Savadogo');

SELECT * FROM children;

CREATE TABLE activities (
id INT AUTO_INCREMENT,
child_name VARCHAR(255) NOT NULL,
activity_type VARCHAR(255) NOT NULL,
activity_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO activities(child_name, activity_type) VALUE('baby','Soccer');
INSERT INTO activities(child_name, activity_type) VALUE('thomas','Programming');
INSERT INTO activities(child_name, activity_type) VALUE('thomas','lunch');
INSERT INTO activities(child_name, activity_type) VALUE('rnakada','Afternoon nap');


SELECT * FROM activities;
-- DELETE  FROM children WHERE id= 1;
