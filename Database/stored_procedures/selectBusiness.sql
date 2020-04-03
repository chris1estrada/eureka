CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectBusiness`(IN BID int)
BEGIN
	#Selects business information from business_info view. To be used with select_business_images, select_business_hours, and select_deals
	select * from business_info bi
    WHERE bi.business_id = BID;
END