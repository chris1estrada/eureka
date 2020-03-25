CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertDeal`(
	IN BID INT(11), deal_id int(11), description varchar(1000), IN deal_type ENUM('Recurring', 'Limited'), 
    IN day_deal ENUM('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), IN start_time TIME, IN end_time TIME,
    IN start_datetime DATETIME, end_datetime DATETIME)
BEGIN
    #deal_id not auto_incremented
	INSERT INTO deals(deal_id, description) 
    VALUES(deal_id, description);
    SET @DID = last_insert_id();
    
    INSERT INTO business_deals(business_id, deal_id)
    VALUES(BID, @DID);
    
    IF deal_type = 'Limited' THEN
		INSERT INTO deal_hours(type, start_datetime, end_datetime, deal_id) 
		VALUES('Limited', start_datetime, end_datetime, @DID);
	ELSEIF deal_type = 'Recurring' THEN
		INSERT INTO deal_hours(type, weekday, start_time, end_time, deal_id) 
		VALUES('Recurringt', day_deal, start_time, end_time, @DID);
    END IF;
END