CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updateBusiness`(
	IN BID INT(11), IN `name` VARCHAR(255), IN address VARCHAR(255), IN lat FLOAT, IN `long` FLOAT, 
    IN menu VARCHAR(255), IN cuisine VARCHAR(45), IN `description` VARCHAR(1000), IN isAdult TINYINT(4), IN phone_number Char(12))
BEGIN
	# Procedure that receives new data for an existing business and updates entrys that are not null
    # For numeric types (lat, long and is Adult) the word 'null' needs to be passed from the client side
    IF EXISTS (SELECT * FROM businesses b WHERE b.business_id = BID) THEN
		IF `name` IS NOT NULL AND `name` != '' THEN
			UPDATE businesses b SET b.`name` = `name` 		
			WHERE b.business_id = BID;
		END IF;
        IF address IS NOT NULL AND address != '' THEN
			UPDATE businesses b SET	b.address = address 
			WHERE b.business_id = BID;
		END IF;
        IF lat IS NOT NULL THEN     
			UPDATE businesses b SET b.lat = lat 		
			WHERE b.business_id = BID;
		END IF;
		IF `long`IS NOT NULL THEN 
			UPDATE businesses b SET b.`long` = `long`
			WHERE b.business_id = BID;
		END IF;
        IF menu IS NOT NULL AND menu != '' THEN
			UPDATE businesses b SET b.menu = menu 		
			WHERE b.business_id = BID;
		END IF;
        IF cuisine IS NOT NULL AND cuisine != '' THEN   
			UPDATE businesses b SET b.cuisine = cuisine 
			WHERE b.business_id = BID;
		END IF;
        IF `description` IS NOT NULL AND `description` != '' THEN
			UPDATE businesses b SET b.`description` = `description` 
			WHERE b.business_id = BID;
		END IF;
		IF isAdult IS NOT NULL THEN
			UPDATE businesses b SET b.isAdult = isAdult 
			WHERE b.business_id = BID; 
		END IF;
         IF phone_number IS NOT NULL AND phone_number != '' THEN
			UPDATE businesses b SET b.phone_number = phone_number 
			WHERE b.business_id = BID;
		END IF;
	END IF;
END
