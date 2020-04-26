CREATE DEFINER=`administrator`@`localhost` FUNCTION `is_active`(DID INT) RETURNS tinyint(1)
BEGIN
    -- Check if deal is active, returning 1 if true or 0 if false.
	-- Select Deal Type then check if active based on whether deal is recurring or limited.
	SELECT bdv.deal_type into @type
    FROM business_deals_view bdv
    WHERE bdv.deal_id = DID LIMIT 1;
    SET @is_active = 0;
    
	IF @type = 'Recurring' THEN
		SET @weekday = DAYNAME(CURRENT_DATE());
		SELECT bdv.deal_start_time, bdv.deal_end_time
		into @start, @end
		FROM business_deals_view bdv
		WHERE bdv.deal_id = DID
		AND bdv.deal_weekday = @weekday;
    
		IF (CURRENT_TIME() BETWEEN @start and @end) THEN
			SET @is_active = 1;
		ELSE 
			SET @is_active = 0;
		END IF;
	ELSEIF @type = 'Limited' THEN
		SET @is_active = 0;
        SELECT bdv.deal_start_date, bdv.deal_end_date
        into @startDate, @endDate
        FROM business_deals_view bdv
        WHERE bdv.deal_id = DID;
        
        IF (CURRENT_TIMESTAMP() BETWEEN @startDate and @endDate) THEN
			SET @is_active = 1;
		ELSE
			SET @is_active = 0;
		END IF;
    ELSE
		SET @is_active = 0;
	END IF;
    
RETURN @is_active;
END