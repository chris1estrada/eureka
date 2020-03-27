CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertBusinessHours`(IN businessID INT(11), IN weekday ENUM('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), IN open_time time, IN closing_time time)
BEGIN
	INSERT INTO business_hours(weekday, open_time, closing_time, business_id) 
	VALUES (weekday, open_time, closing_time, businessID);
END