CREATE DEFINER=`administrator`@`localhost` FUNCTION `get_image`(BID int) RETURNS varchar(100) CHARSET latin1
BEGIN
	#To be used with filterBusiness procedure to retrieve a single image path for specified business.
	SELECT CONCAT(bi.path, "/", bi.name)
	FROM business_images bi
	JOIN businesses b USING (business_id)
	WHERE bi.business_id = BID
	LIMIT 1
    INTO @image;
RETURN @image;
END