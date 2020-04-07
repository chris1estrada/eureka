CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `administrator`@`localhost` 
    SQL SECURITY DEFINER
VIEW `business_info` AS
    SELECT 
        `b`.`business_id` AS `business_id`,
        `b`.`name` AS `name`,
        `b`.`address` AS `address`,
        `b`.`menu` AS `menu`,
        `b`.`description` AS `description`,
        `b`.`isAdult` AS `isAdult`
    FROM
        `businesses` `b`