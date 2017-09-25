-- LEVEL
INSERT INTO `level`(`name`, `number`) 
VALUES ("Admin","0");
INSERT INTO `level`(`name`, `number`) 
VALUES ("User","1");
INSERT INTO `level`(`name`, `number`) 
VALUES ("Guest","2");

-- PLACE
INSERT INTO `place`(`number`, `level_number`) 
VALUES (1, 0);
INSERT INTO `place`(`number`, `level_number`) 
VALUES (2, 1);
INSERT INTO `place`(`number`, `level_number`) 
VALUES (3, 2);

-- ACCESS
INSERT INTO `access` (`id`, `h1`, `h2`, `place_id`, `level_number`) 
VALUES (NULL, '09:00:00', '20:30:00', '1', '1');
VALUES (NULL, '09:00:00', '20:30:00', '2', '2');

-- USERS
INSERT INTO `user` (`id`, `matricule`, `lastname`, `firstname`, `createdAt`, `updatedAt`, `image_path`, `email`, `password`, `digicode`, `phone`, `level_number`) VALUES (NULL, '7845125425', 'RAJARATNAM', 'Jeyaksan', '2017-07-18', '2017-07-18', '', 'jeyaksan.rajaratnam@valkyri.fr', '9B5E3900E37A1C03277F426CE76C62C7672544E54A373D24C937DD10B81CEC1E4554DB59823F77E3B8BB0DA5F2EB9130B75AD427FEC65127143EE58801EF8F48', '123456', '0754541254', '0');
INSERT INTO `user` (`id`, `matricule`, `lastname`, `firstname`, `createdAt`, `updatedAt`, `image_path`, `email`, `password`, `digicode`, `phone`, `level_number`) VALUES (NULL, '7845125426', 'HACHEMI', 'Ahmed', '2017-07-18', '2017-07-18', '', 'ahmed.hachemi@valkyri.fr', '9B5E3900E37A1C03277F426CE76C62C7672544E54A373D24C937DD10B81CEC1E4554DB59823F77E3B8BB0DA5F2EB9130B75AD427FEC65127143EE58801EF8F48', '123456', '0654125452', '1');
INSERT INTO `user` (`id`, `matricule`, `lastname`, `firstname`, `createdAt`, `updatedAt`, `image_path`, `email`, `password`, `digicode`, `phone`, `level_number`) VALUES (NULL, '7845125427', 'DENNU', 'Nicolas', '2017-07-18', '2017-07-18', '', 'nicolas.dennu@valkyri.fr', '9B5E3900E37A1C03277F426CE76C62C7672544E54A373D24C937DD10B81CEC1E4554DB59823F77E3B8BB0DA5F2EB9130B75AD427FEC65127143EE58801EF8F48', '123456', '0652485625', '2');
INSERT INTO `user` (`id`, `matricule`, `lastname`, `firstname`, `createdAt`, `updatedAt`, `image_path`, `email`, `password`, `digicode`, `phone`, `level_number`) VALUES (NULL, '7845125428', 'SANANES', 'Frederic', '2017-07-18', '2017-07-18', '', 'fsananes@esgi.fr', '9B5E3900E37A1C03277F426CE76C62C7672544E54A373D24C937DD10B81CEC1E4554DB59823F77E3B8BB0DA5F2EB9130B75AD427FEC65127143EE58801EF8F48', '123456', '0652415625', '2');