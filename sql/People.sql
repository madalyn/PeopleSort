CREATE TABLE People (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    middleInitial CHAR(1) NULL,
    pet CHAR(1) NULL,
    birthday DATE NULL,
    favoriteColor VARCHAR(255) NOT NULL
);