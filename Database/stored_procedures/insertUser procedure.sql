CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertUser`(in user_type enum('consumer', 'business', 'admin', 'both'), in email varchar(100), in password varchar(45), in dob Date, in first_name varchar(100), in last_name varchar(100), out new_user_id int(11))
begin
INSERT INTO users (`type`, email, `password`) values(user_type, email, `password`);
set @uid = last_insert_id();
if (user_type = 'consumer')
then
Insert into consumers(user_id, dob, first_name, last_name) values(@uid, dob, first_name, last_name);
elseif (user_type = 'business')
then 
Insert into business_users(user_id) values(@uid);
end if;

-- return newly created userid
set new_user_id := last_insert_id();
end
