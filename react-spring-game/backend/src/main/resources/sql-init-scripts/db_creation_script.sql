CREATE database IF NOT EXISTS `week_11_project`;
USE `week_11_project`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(100),
    primary key (`id`)
) engine=InnoDB auto_increment=1 default charset=latin1;
