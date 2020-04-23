CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectDeals`(IN BID int)
BEGIN
	SELECT bdv.*, if(is_active(bdv.deal_id), "true", "false") as 'active'
    FROM business_deals_view bdv
    WHERE business_id = BID;
END