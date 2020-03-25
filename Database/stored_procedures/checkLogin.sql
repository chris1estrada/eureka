CREATE DEFINER=`administrator`@`localhost` PROCEDURE `checkLogin`(IN email VARCHAR(100), IN password VARCHAR(100), OUT success SMALLINT(4))
BEGIN
/* Login procedure which receives an email and hashed password and then checks against the database.
   If the email exists and the password is correct return success (1), else fail (0).*/ 
	IF(EXISTS(SELECT * 
			  FROM users u
			  WHERE u.email = email AND 
				    u.password = password)) THEN 
			  SET success := 1; 
	ELSE
		SET success = 0;
	END IF; 
END