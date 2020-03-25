CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updatePassword`(
	IN user_id INT(11), 
    IN curr_password VARCHAR(100), 
    IN new_password VARCHAR(100),
    OUT success SMALLINT(4))
BEGIN
/* Procedure that receives user_id, current password hash, and new password hash.
   If current password hash matches stored password for corresponding user_id 
   then update to new password hash*/ 
    IF(EXISTS(SELECT *
			  FROM users u
			  WHERE u.user_id = user_id AND u.password = curr_password)) THEN 
			UPDATE users u SET u.password = new_password
			WHERE u.user_id = user_id;
        SET success := 1;
	ELSE
		SET success := 0;
	END IF; 
END