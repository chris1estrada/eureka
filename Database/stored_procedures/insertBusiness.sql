CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertBusiness`(
	IN user_id INT(11), IN email VARCHAR(100), IN passW VARCHAR(100),
    IN name VARCHAR(255), IN address VARCHAR(255), IN lat FLOAT, IN `long` FLOAT, IN menu VARCHAR(255), IN cuisine VARCHAR(45), IN description VARCHAR(1000), IN isAdult TINYINT(4))
BEGIN
	/*Procedure that takes as parameters and insert into corresponding tables 
    both business hours and deal information */
		#Maybe add locks to prevent data corruption
		#DealID has no auto_increment  
    IF NOT EXISTS(SELECT b.owner_id FROM businesses b WHERE b.owner_id = user_id) THEN -- check that business doesn't exist before creating it
        IF EXISTS(SELECT u.user_id FROM users u WHERE u.user_id = user_id AND u.`type`= 'Consumer') THEN
			UPDATE users u SET `type` = 'Both' WHERE u.user_id = user_id; 
			SET @UID := user_id; 
		ELSE
			INSERT INTO users(`type`, email, `password`, date_created)
			VALUES ('Business', email, passW, now());
			SET @UID := last_insert_id(); -- retrieve inserted userID
		END IF;
	   
		INSERT INTO business_users(user_id)
		VALUES(@UID);
		
		INSERT INTO businesses(name, address, lat, `long`, menu, cuisine, description, isAdult, owner_id) 
		VALUES (name, address, lat, `long`, menu, cuisine, description, isAdult, @UID);
		SET @BID := last_insert_id(); -- retrieve businessID
	END IF;
END
