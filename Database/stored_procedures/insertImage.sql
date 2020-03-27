CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertImage`(IN businessID INT(11), IN image_name VARCHAR(45), IN path_name VARCHAR(255))
BEGIN
	INSERT INTO business_images(`name`, `path`, business_id)
	VALUES(image_name, path_name, businessID);
END