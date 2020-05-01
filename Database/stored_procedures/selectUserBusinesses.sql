CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectUserBusinesses`(IN UID INT(11))
BEGIN
    IF exists(SELECT * FROM businesses b WHERE b.owner_id = UID) -- checks to make sure that this user has a business first 
    THEN
    SELECT *
    FROM businesses b
    WHERE b.owner_id = UID;
    END IF;
END