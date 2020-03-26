CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertBusiness`(
	IN user_id INT(11),
	IN email VARCHAR(100), IN passW VARCHAR(100),
    IN name VARCHAR(255), IN address VARCHAR(255), IN lat FLOAT, IN `long` FLOAT, IN menu VARCHAR(255), IN cuisine VARCHAR(45), IN description VARCHAR(1000), IN isAdult TINYINT(4),
    IN weekday ENUM('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), IN open_time time, IN closing_time time, 
    IN image_name VARCHAR(45), IN path_name VARCHAR(255),
	IN dealID INT(11), IN deal_description VARCHAR(1000))
BEGIN
	/*Procedure that takes as parameters and insert into corresponding tables 
    both business hours and deal information
    */
    
    #TODO insert more than one day / deal / image. Maybe add locks to prevent data corruption
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
		
		INSERT INTO business_hours(weekday, open_time, closing_time, business_id) 
		VALUES (weekday, open_time, closing_time, @BID);
	  
		INSERT INTO business_images(`name`, `path`, business_id)
		VALUES(image_name, path_name, @BID);
	  
		INSERT INTO deals(deal_id, description)
		VALUES (dealID, description); 
		SET @DID := last_insert_id(); -- retrieve dealID
			
		INSERT INTO business_deals(business_id, deal_id) 
		VALUES (@BID, @DID);
	END IF;
END
