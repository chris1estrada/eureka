CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updateBusiness`(
	IN business_id INT(11), IN name VARCHAR(255), IN address VARCHAR(255), IN lat FLOAT, IN `long` FLOAT, 
    IN menu VARCHAR(255), IN cuisine VARCHAR(45), IN description VARCHAR(1000), IN isAdult TINYINT(4))
BEGIN
	# Procedure that receives new data for an existing business and updates entry
	# ---- (optional values) maybe pass nulls from client side ----
	SELECT type INTO @type
    FROM users
    WHERE user_id = business_id;
    
    IF(@type = 'Business') THEN    
		IF name IS NOT NULL THEN
			UPDATE businesses b SET b.name = name 		
			WHERE b.owner_id = business_id;
		END IF;
        IF address IS NOT NULL THEN
			UPDATE businesses b SET	b.address = address 
			WHERE b.owner_id = business_id;
		END IF;
        IF lat IS NOT NULL THEN     
			UPDATE businesses b SET b.lat = lat 		
			WHERE b.owner_id = business_id;
		END IF;
		IF `long`IS NOT NULL THEN 
			UPDATE businesses b SET b.long = `long`
			WHERE b.owner_id = business_id;
		END IF;
        IF menu IS NOT NULL THEN
			UPDATE businesses b SET b.menu = menu 		
			WHERE b.owner_id = business_id;
		END IF;
        IF cuisine IS NOT NULL THEN   
			UPDATE businesses b SET b.cuisine = cuisine 
			WHERE b.owner_id = business_id;
		END IF;
        IF description IS NOT NULL THEN
			UPDATE businesses b SET b.description = description 
			WHERE b.owner_id = business_id;
		END IF;
		IF isAdult IS NOT NULL THEN
			UPDATE businesses b SET b.isAdult = isAdult 
			WHERE b.owner_id = business_id; 
		END IF;
	END IF;
END