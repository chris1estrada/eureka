CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updateBusinessHours`(IN BID INT(11), IN weekday ENUM('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), IN open_time time, IN closing_time time)
BEGIN
-- For this procedure you need to specify your business id, the day to edit, and then the hours that you wanted to change.
		 IF EXISTS (SELECT * FROM business_hours b WHERE b.business_id = BID) THEN
        IF `open_time` IS NOT NULL AND `open_time` != '' THEN
			UPDATE business_hours b SET b.`open_time` = `open_time` 		
			WHERE b.business_id = BID AND b.weekday = `weekday`; -- Checks to make sure you only grab that day of the week and not all of them
		END IF;
        IF `closing_time` IS NOT NULL AND `closing_time` != '' THEN
			UPDATE business_hours b SET b.`closing_time` = `closing_time` 		
			WHERE b.business_id = BID AND b.weekday = `weekday`;
		END IF;
	END IF;
END