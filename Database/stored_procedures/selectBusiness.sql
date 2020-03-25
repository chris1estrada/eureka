CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectBusiness`(in business_id int)
BEGIN
/* Business procedure that receives a business ID and returns: business_name, address, 
   lat, lng, menu, business_hours, cuisine, description, deals */
   
	SELECT type into @type 
	FROM users u INNER JOIN businesses b
    WHERE u.user_id = b.owner_id AND b.owner_id = business_id;
	
    IF (@type = 'Business') THEN 
		SELECT b.`name`, b.address, b.lat, b.`long`, b.`description`, b.cuisine, b.menu, 
			   CONCAT (bh.open_time,' - ', bh.closing_time, ' / ' , bh.weekday) AS hours, 
               d.`description`
		FROM businesses b 
        JOIN business_hours bh ON b.business_id = bh.business_id
        JOIN business_deals bd ON b.business_id = bd.business_id
        JOIN deals d ON d.deal_id = bd.deal_id
        WHERE b.business_id = business_id;
	END IF;
END