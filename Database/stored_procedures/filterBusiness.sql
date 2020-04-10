CREATE DEFINER=`administrator`@`localhost` PROCEDURE `filterBusiness`(radius FLOAT, uLat FLOAT, uLong FLOAT, filter1 VARCHAR(45), filter2 VARCHAR(45))
BEGIN
	#Searches database for businesses which meet the radius and cuisine filter criteria specified by the user.
    
    #Both Filters active
	IF(filter1 IS NOT NULL AND filter2 IS NOT NULL) THEN
		SELECT
			b.business_id, b.name, b.address, b.cuisine, if(is_open(b.business_id), 'true', 'false') as 'open', b.lat, b.long, get_image(b.business_id) as 'image',
            (3959 * acos (
			cos ( radians( uLat ) )
			* cos( radians( `lat` ) )
			* cos( radians( `long` ) - radians( uLong ) )
			+ sin ( radians( uLat ) )
			* sin( radians( `lat` ) )
			)
		) AS distance
		FROM businesses b
		WHERE b.cuisine = filter1 OR b.cuisine = filter2
		HAVING distance < radius
		ORDER BY distance;
        
	#Only filter1 active
	ELSEIF(filter1 IS NOT NULL) THEN
		SELECT
			b.business_id, b.name, b.address, b.cuisine, if(is_open(b.business_id), 'true', 'false') as 'open', b.lat, b.long, get_image(b.business_id) as 'image',
            (3959 * acos (
			cos ( radians( uLat ) )
			* cos( radians( `lat` ) )
			* cos( radians( `long` ) - radians( uLong ) )
			+ sin ( radians( uLat ) )
			* sin( radians( `lat` ) )
			)
		) AS distance
		FROM businesses b
		WHERE b.cuisine = filter1
		HAVING distance < radius
		ORDER BY distance;
        
	#Only filter2 active
	ELSEIF(filter2 IS NOT NULL) THEN
		SELECT
			b.business_id, b.name, b.address, b.cuisine, if(is_open(b.business_id), 'true', 'false') as 'open', b.lat, b.long, get_image(b.business_id) as 'image',
            (3959 * acos (
			cos ( radians( uLat ) )
			* cos( radians( `lat` ) )
			* cos( radians( `long` ) - radians( uLong ) )
			+ sin ( radians( uLat ) )
			* sin( radians( `lat` ) )
			)
		) AS distance
		FROM businesses b
		WHERE b.cuisine = filter2
		HAVING distance < radius
		ORDER BY distance;
        
	#No filters
	ELSE
		SELECT
			b.business_id, b.name, b.address, b.cuisine, if(is_open(b.business_id), 'true', 'false') as 'open', b.lat, b.long, get_image(b.business_id) as 'image',
            (3959 * acos (
			cos ( radians( uLat ) )
			* cos( radians( `lat` ) )
			* cos( radians( `long` ) - radians( uLong ) )
			+ sin ( radians( uLat ) )
			* sin( radians( `lat` ) )
			)
		) AS distance
		FROM businesses b
		HAVING distance < radius
		ORDER BY distance;
	END IF;
END