CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectBusinessImages`(IN BID int)
BEGIN
	SELECT bi.name, bi.path
    FROM business_images bi
    WHERE bi.business_id = BID;
END