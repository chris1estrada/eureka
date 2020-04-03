CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectDeals`(IN BID int)
BEGIN
	SELECT d.description as 'deals'
    FROM deals d
    JOIN business_deals bd USING (deal_id)
    WHERE bd.business_id = BID;
END