CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectDealHours`(IN BID INT)
BEGIN
	SELECT dh.type, dh.weekday, dh.start_time, dh.end_time, dh.start_datetime, dh.end_datetime
    FROM deal_hours dh
    JOIN deals d USING (deal_id)
    JOIN business_deals bd USING (deal_id)
    WHERE bd.business_id = BID;
END