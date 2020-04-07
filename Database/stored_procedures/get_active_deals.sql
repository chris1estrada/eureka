CREATE DEFINER=`administrator`@`localhost` PROCEDURE `get_active_deals`(IN BID INT(11), IN tz time)
BEGIN
#Checks if specified business has any current deals.
SET @time_zone = tz;
 SELECT b.name, group_concat(concat_ws(',',  concat(d.description, ' - Ends: ', date_format(dh.end_datetime, '%m/%d/%Y %h:%i %p'), '\n'))) as deals
    FROM deals d
    JOIN deal_hours dh USING (deal_id)
    JOIN business_deals bd USING (deal_id)
    JOIN businesses b USING (business_id)
	WHERE bd.business_id = BID AND dh.end_datetime > NOW();
END