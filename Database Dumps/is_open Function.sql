CREATE DEFINER=`administrator`@`localhost` FUNCTION `is_open`(BID int) RETURNS tinyint(1)
BEGIN
# Function which checks business hours tables based on business_id against current date/time then returns 1 for true or 0 for false.
	SET @weekday = DAYNAME(CURRENT_DATE());

    SELECT bh.open_time, bh.closing_time 
    into @open, @close
    FROM businesses b
    JOIN business_hours bh USING (business_id)
    WHERE bh.business_id = BID
    AND bh.weekday = @weekday;
    
    IF (CURRENT_TIME() BETWEEN @open and @close) THEN
		SET @is_open = 1;
    ELSE 
		SET @is_open = 0;
	END IF;
    
    SET @open = null;
    SET @close = null;
    
RETURN @is_open;
END