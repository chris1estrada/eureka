CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updateDealHours&Desc`(
	IN BID INT(11), IN deal_id INT(11),
    IN deal_type ENUM('Recurring', 'Limited'), IN weekday ENUM('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), 
    IN start_time TIME, IN end_time TIME, IN start_datetime DATETIME, end_datetime DATETIME, 
    IN `description` varchar(1000))
BEGIN
	#Note: Null needs to be passed for weekday and date/datetime values if not used
	#Fields are optional depending on the selection (limited/Recurring) 
    
	#Check if business has the specified deal that needs to be modified
     IF EXISTS (SELECT * FROM business_deals bd WHERE bd.business_id = BID AND bd.deal_id = deal_id) THEN
		#Current deal type (in case it needs to be modified)
		SET @dtype = (SELECT dh.`type` FROM deal_hours dh WHERE dh.deal_id = deal_id);
	
		IF deal_type = 'Limited' THEN
			IF start_datetime IS NOT NULL THEN
				UPDATE deal_hours dh SET dh.start_datetime = start_datetime
				WHERE dh.deal_id = deal_id;
            		END IF;
            		IF end_datetime IS NOT NULL THEN
				UPDATE deal_hours dh SET dh.end_datetime = end_datetime
				WHERE dh.deal_id = deal_id;
            		END IF;
            
            		#Remove info if we are changing the deal from recurring to limited
            		IF @dtype = 'Recurring' THEN
				UPDATE deal_hours dh SET dh.`type` = 'Limited', dh.weekday = null, dh.start_time = null, dh.end_time = null 
				WHERE dh.deal_id = deal_id;
            		END IF;    
           
		ELSEIF deal_type = 'Recurring' THEN
            		IF weekday IS NOT NULL THEN
				UPDATE deal_hours dh SET dh.weekday = weekday
				WHERE dh.deal_id = deal_id;
            		END IF;
             		IF start_time IS NOT NULL THEN
				UPDATE deal_hours dh SET dh.start_time = start_time
				WHERE dh.deal_id = deal_id;
            		END IF;
            		IF end_time IS NOT NULL THEN
				UPDATE deal_hours dh SET dh.end_time = end_time
				WHERE dh.deal_id = deal_id;
            		END IF;
            
			#Remove info if we are changing the deal from limited to recurring
            		IF @dtype = 'Limited' THEN
				UPDATE deal_hours dh SET dh.`type` = 'Recurring', dh.start_datetime = null, dh.end_datetime = null
				WHERE dh.deal_id = deal_id;
           		 END IF;  
		END IF;
        
		# Update deal description 
         	IF `description` IS NOT NULL AND `description` != '' THEN
			UPDATE deals d SET d.`description` = `description` 		
			WHERE d.deal_id = deal_id; 
		END IF;
    END IF;
END
