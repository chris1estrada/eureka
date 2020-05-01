CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectUser`(in consumer_id int)
begin

select type into @type -- puts result into the variable
from users
where user_id = consumer_id;
if (@type = 'both' or @type = 'consumer')
then select * 
from users join consumers using (user_id)
where user_id = consumer_id;
else select *
from users
where user_id = consumer_id;
end if;
end
