CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `administrator`@`localhost` 
    SQL SECURITY DEFINER
VIEW `business_deals_view` AS
    SELECT 
        `b`.`business_id` AS `business_id`,
        `d`.`deal_id` AS `deal_id`,
        `b`.`name` AS `business_name`,
        `d`.`description` AS `deal_description`,
        `dh`.`type` AS `deal_type`,
        `dh`.`weekday` AS `deal_weekday`,
        `dh`.`start_time` AS `deal_start_time`,
        `dh`.`end_time` AS `deal_end_time`,
        `dh`.`start_datetime` AS `deal_start_date`,
        `dh`.`end_datetime` AS `deal_end_date`
    FROM
        (((`businesses` `b`
        JOIN `business_deals` `bd` ON ((`b`.`business_id` = `bd`.`business_id`)))
        JOIN `deals` `d` ON ((`bd`.`deal_id` = `d`.`deal_id`)))
        JOIN `deal_hours` `dh` ON ((`bd`.`deal_id` = `dh`.`deal_id`)))
    ORDER BY `b`.`business_id` , `d`.`deal_id`