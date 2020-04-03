CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectBusinessHours`(IN BID int)
BEGIN
	SELECT bh.weekday, bh.open_time, bh.closing_time
    FROM business_hours bh
    WHERE business_id = BID;
END