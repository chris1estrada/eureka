-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: business_discovery
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about` (
  `about_id` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `faq` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`about_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_deals`
--

DROP TABLE IF EXISTS `business_deals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_deals` (
  `bus_deals_id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) NOT NULL,
  `deal_id` int(11) NOT NULL,
  PRIMARY KEY (`bus_deals_id`),
  KEY `fk_business_deals_business_idx` (`business_id`),
  KEY `fk_business_deals_deals_idx` (`deal_id`),
  CONSTRAINT `fk_business_deals_business` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_business_deals_deals` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`deal_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_deals`
--

LOCK TABLES `business_deals` WRITE;
/*!40000 ALTER TABLE `business_deals` DISABLE KEYS */;
INSERT INTO `business_deals` VALUES (1,1,1),(4,7,2),(5,10,3),(7,1,4),(8,7,5),(16,7,6),(22,10,7),(26,36,10),(28,16,14);
/*!40000 ALTER TABLE `business_deals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_hours`
--

DROP TABLE IF EXISTS `business_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_hours` (
  `bus_hours_id` int(11) NOT NULL AUTO_INCREMENT,
  `weekday` enum('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') NOT NULL,
  `open_time` time NOT NULL,
  `closing_time` time NOT NULL,
  `business_id` int(11) NOT NULL,
  PRIMARY KEY (`bus_hours_id`),
  KEY `fk_bushours_business_idx` (`business_id`),
  CONSTRAINT `fk_bushours_business` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_hours`
--

LOCK TABLES `business_hours` WRITE;
/*!40000 ALTER TABLE `business_hours` DISABLE KEYS */;
INSERT INTO `business_hours` VALUES (3,'Monday','01:00:00','05:00:00',1),(4,'Thursday','00:00:00','24:00:00',1),(5,'Friday','05:00:00','17:00:00',1),(6,'Thursday','12:00:00','21:00:00',7),(7,'Friday','09:00:00','12:00:00',7),(8,'Tuesday','09:00:00','22:00:00',7),(9,'Wednesday','09:00:00','22:00:00',7),(10,'Saturday','09:00:00','22:00:00',10),(11,'Sunday','09:00:00','22:00:00',10),(12,'Monday','00:00:00','24:00:00',10),(13,'Tuesday','09:00:00','23:00:00',10),(14,'Wednesday','09:00:00','23:00:00',16),(15,'Saturday','09:00:00','24:00:00',16),(25,'Tuesday','05:00:00','22:00:00',33),(28,'Tuesday','05:00:00','22:00:00',36),(29,'Thursday','11:00:00','23:00:00',16);
/*!40000 ALTER TABLE `business_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_images`
--

DROP TABLE IF EXISTS `business_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_images` (
  `bus_image_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `path` varchar(255) NOT NULL,
  `business_id` int(11) NOT NULL,
  PRIMARY KEY (`bus_image_id`),
  KEY `fk_bus_images_business_idx` (`business_id`),
  CONSTRAINT `fk_bus_images_business` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_images`
--

LOCK TABLES `business_images` WRITE;
/*!40000 ALTER TABLE `business_images` DISABLE KEYS */;
INSERT INTO `business_images` VALUES (10,'images','/folder',36),(11,'building.png','c://images//business',16);
/*!40000 ALTER TABLE `business_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_users`
--

DROP TABLE IF EXISTS `business_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_users` (
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_buser_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_users`
--

LOCK TABLES `business_users` WRITE;
/*!40000 ALTER TABLE `business_users` DISABLE KEYS */;
INSERT INTO `business_users` VALUES (44),(50),(51),(53),(55),(56),(57),(87);
/*!40000 ALTER TABLE `business_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `businesses`
--

DROP TABLE IF EXISTS `businesses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `businesses` (
  `business_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `lat` float NOT NULL,
  `long` float NOT NULL,
  `menu` varchar(255) NOT NULL,
  `cuisine` varchar(45) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `isAdult` tinyint(4) NOT NULL DEFAULT '0',
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `owner_id` int(11) NOT NULL,
  PRIMARY KEY (`business_id`),
  UNIQUE KEY `owner_id_UNIQUE` (`owner_id`),
  KEY `fk_business_user_idx` (`owner_id`),
  CONSTRAINT `fk_business_user` FOREIGN KEY (`owner_id`) REFERENCES `business_users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `businesses`
--

LOCK TABLES `businesses` WRITE;
/*!40000 ALTER TABLE `businesses` DISABLE KEYS */;
INSERT INTO `businesses` VALUES (1,'McDonalds','656 Delsea Dr, Glassboro, NJ 08028',39.7059,-75.1808,'menu.pdf','fast food','This place sells burgers',0,'2020-03-05 22:18:09',51),(7,'Wendys','620 Woodbury Glassboro Rd, Sewell, NJ 08080',39.7307,-75.1314,'wmenu.pdf','fast food','This place also sells burgers',0,'2020-03-05 23:23:37',50),(10,'Popeyes','332 Delsea Dr, Glassboro, NJ 08028',39.7089,-75.1135,'menu.pdf','fast food','This place sells chicken',0,'2020-03-06 00:53:46',53),(13,'Pancheros','Burrito Street',101.3,12.2,'menu.pdf','fast food','This place sells burritos',0,'2020-03-06 14:41:29',56),(16,'Burger King','456 Bradfield Way',111.1,80.4,'Menuuu.txt','Some cuisine','We sell all type of food',0,'2020-03-12 00:39:10',57),(33,'Pizza Hut','555 street',80.3,70.1,'menu.png','fast food','We sell pizzas',0,'2020-03-26 17:24:55',55),(36,'Red Robin','678 street',77.3,74.1,'menu.png','fast food','We sell steaks',0,'2020-03-26 18:17:15',44);
/*!40000 ALTER TABLE `businesses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumers`
--

DROP TABLE IF EXISTS `consumers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumers` (
  `user_id` int(11) NOT NULL,
  `dob` date NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_consumer_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumers`
--

LOCK TABLES `consumers` WRITE;
/*!40000 ALTER TABLE `consumers` DISABLE KEYS */;
INSERT INTO `consumers` VALUES (1,'2020-03-05','Bob','Dylan'),(48,'2020-02-05','Jake','Pop'),(52,'2020-02-05','Ryan','Hardin'),(54,'2020-02-05','Tom','Thompson'),(55,'1997-11-01','Erica','Johnson'),(87,'1990-01-01','John','Smith');
/*!40000 ALTER TABLE `consumers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deal_hours`
--

DROP TABLE IF EXISTS `deal_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deal_hours` (
  `deal_hours_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` enum('Recurring','Limited') DEFAULT NULL,
  `weekday` enum('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `start_datetime` datetime DEFAULT NULL,
  `end_datetime` datetime DEFAULT NULL,
  `deal_id` int(11) NOT NULL,
  PRIMARY KEY (`deal_hours_id`),
  KEY `fk_deal_hours_deals_id_idx` (`deal_id`),
  CONSTRAINT `fk_deal_hours_deals_id` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`deal_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deal_hours`
--

LOCK TABLES `deal_hours` WRITE;
/*!40000 ALTER TABLE `deal_hours` DISABLE KEYS */;
INSERT INTO `deal_hours` VALUES (2,'Limited',NULL,NULL,NULL,'2020-02-03 22:00:00','2020-05-03 00:00:00',1),(4,'Limited',NULL,NULL,NULL,'2020-03-04 04:00:00','2020-06-05 08:00:00',2),(6,'Limited',NULL,NULL,NULL,'2020-03-10 09:00:00','2020-03-22 05:00:00',3),(7,'Recurring','Friday','11:00:00','01:00:00',NULL,NULL,4),(9,'Recurring','Saturday','15:00:00','16:00:00',NULL,NULL,5),(11,'Limited',NULL,NULL,NULL,'2020-01-09 17:00:00','2020-09-10 18:00:00',6),(23,'Recurring','Sunday','08:00:00','12:00:00',NULL,NULL,7),(27,'Limited',NULL,NULL,NULL,'2020-03-30 00:00:00','2020-04-30 00:00:00',14);
/*!40000 ALTER TABLE `deal_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deals`
--

DROP TABLE IF EXISTS `deals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deals` (
  `deal_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`deal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deals`
--

LOCK TABLES `deals` WRITE;
/*!40000 ALTER TABLE `deals` DISABLE KEYS */;
INSERT INTO `deals` VALUES (1,'2 large sodas for $2'),(2,'15% off on all desserts'),(3,'Free donut if you tell us a joke'),(4,'All the money from the cash register if you rob us'),(5,'Job offer if you find one of our employees sleeping while on duty'),(6,'Sure, extra cheese on your pizza (even if we don\'t sell pizzas)'),(7,'$5 off on orders above $30'),(8,'Our deal: give us money, we give you food...'),(9,'Test'),(10,'We sell pizzas'),(11,'We sell steaks'),(12,'We sell chicken'),(14,'burger for $1');
/*!40000 ALTER TABLE `deals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `likes_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`likes_id`),
  KEY `fk_likes_user_idx` (`user_id`),
  KEY `fk_likes_business_idx` (`business_id`),
  CONSTRAINT `fk_likes_business` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_likes_user` FOREIGN KEY (`user_id`) REFERENCES `consumers` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,1,7,4),(2,48,10,4),(3,52,10,3),(4,54,1,3);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!50001 DROP VIEW IF EXISTS `user_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `user_info` AS SELECT 
 1 AS `user_id`,
 1 AS `name`,
 1 AS `email`,
 1 AS `dob`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` enum('Consumer','Business','Admin','Both') NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Consumer','Bob@gmail.com','Dylan','2001-01-01 00:00:00'),(26,'Consumer','elmo@sesamestreet.com','iscool','2002-01-01 00:00:00'),(28,'Consumer','ryan@gmail.com','hardin','2020-03-05 21:06:01'),(29,'Consumer','chris45@yahoo.com','brickwall','2020-03-05 21:18:13'),(31,'Consumer','kevin111@lolol.com','quickone','2020-03-05 21:20:35'),(43,'Consumer','batman@gotham.com','joker','2020-03-05 21:25:31'),(44,'Both','joker@gotham.com','batman','2020-03-05 21:26:31'),(48,'Consumer','uml@gmail.com','password','2020-03-05 21:47:50'),(50,'Business','live@gmail.com','restaurant','2020-03-05 21:49:46'),(51,'Business','hello@gmail.com','bug','2020-03-05 21:53:37'),(52,'Consumer','ryanhardin@gmail.com','catdog123','2020-03-06 00:51:51'),(53,'Business','sweetcandy@gmail.com','candycane','2020-03-06 00:52:02'),(54,'Consumer','funnyguy@gmail.com','catdog123','2020-03-06 00:55:54'),(55,'Both','cloudyday@gmail.com','catdog123','2020-03-06 14:36:16'),(56,'Business','jamesflowers@gmail.com','flowerboy','2020-03-06 14:36:57'),(57,'Both','test@gmail.com','randomPass2','2020-01-01 01:01:01'),(87,'Both','updateTest@gmail.com','ttttt','2020-03-26 00:38:46');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'business_discovery'
--

--
-- Dumping routines for database 'business_discovery'
--
/*!50003 DROP FUNCTION IF EXISTS `is_open` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `checkLogin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `checkLogin`(IN email VARCHAR(100), IN password VARCHAR(100), OUT success SMALLINT(4))
BEGIN
/* Login procedure which receives an email and hashed password and then checks against the database.
   If the email exists and the password is correct return success (1), else fail (0).*/ 
	IF(EXISTS(SELECT * 
			  FROM users u
			  WHERE u.email = email AND 
				    u.password = password)) THEN 
			  SET success := 1; 
	ELSE
		SET success = 0;
	END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `filterBusiness` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `filterBusiness`(IN radius FLOAT, IN userLong FLOAT, IN userLat FLOAT, IN cuisine VARCHAR(45))
BEGIN
/*Create Filter Business procedure which takes a radius, latitude, longitude, and cuisine tags 
  then returns a list of corresponding businesses.
  
  TODO fix issues retrieving second point (argument mismatch)*/
	SELECT b.name, b.`long`, b.lat, b.cuisine
    FROM businesses b
	WHERE radius >= ST_distance_sphere(
						POINT(userLong, userLat), 
                        POINT(b.`long`, b.lat)
					 ) / 1609 -- to change meters to miles
          AND b.cuisine = cuisine;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_active_deals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `get_active_deals`(IN BID INT(11), IN tz time)
BEGIN
#Checks if specified business has any current deals.
SET @time_zone = tz;
 SELECT b.name, group_concat(concat_ws(',',  concat(d.description, ' - Ends: ', date_format(dh.end_datetime, '%m/%d/%Y %h:%i %p'), '\n'))) as deals
    FROM deals d
    JOIN deal_hours dh USING (deal_id)
    JOIN business_deals bd USING (deal_id)
    JOIN businesses b USING (business_id)
	WHERE bd.business_id = 10 AND dh.end_datetime > NOW();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertBusiness` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertBusiness`(
	IN user_id INT(11), IN email VARCHAR(100), IN passW VARCHAR(100),
    IN name VARCHAR(255), IN address VARCHAR(255), IN lat FLOAT, IN `long` FLOAT, IN menu VARCHAR(255), IN cuisine VARCHAR(45), IN description VARCHAR(1000), IN isAdult TINYINT(4))
BEGIN
	/*Procedure that takes as parameters and insert into corresponding tables 
    both business hours and deal information */
		#Maybe add locks to prevent data corruption
		#DealID has no auto_increment  
    IF NOT EXISTS(SELECT b.owner_id FROM businesses b WHERE b.owner_id = user_id) THEN -- check that business doesn't exist before creating it
        IF EXISTS(SELECT u.user_id FROM users u WHERE u.user_id = user_id AND u.`type`= 'Consumer') THEN
			UPDATE users u SET `type` = 'Both' WHERE u.user_id = user_id; 
			SET @UID := user_id; 
		ELSE
			INSERT INTO users(`type`, email, `password`, date_created)
			VALUES ('Business', email, passW, now());
			SET @UID := last_insert_id(); -- retrieve inserted userID
		END IF;
	   
		INSERT INTO business_users(user_id)
		VALUES(@UID);
		
		INSERT INTO businesses(name, address, lat, `long`, menu, cuisine, description, isAdult, owner_id) 
		VALUES (name, address, lat, `long`, menu, cuisine, description, isAdult, @UID);
		SET @BID := last_insert_id(); -- retrieve businessID
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertBusinessHours` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertBusinessHours`(IN businessID INT(11), IN weekday ENUM('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), IN open_time time, IN closing_time time)
BEGIN
	INSERT INTO business_hours(weekday, open_time, closing_time, business_id) 
	VALUES (weekday, open_time, closing_time, businessID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertDeal` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertDeal`(
	IN BID INT(11), description varchar(1000), IN deal_type ENUM('Recurring', 'Limited'), 
    IN day_deal ENUM('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), IN start_time TIME, IN end_time TIME,
    IN start_datetime DATETIME, end_datetime DATETIME)
BEGIN
	INSERT INTO deals(description) 
    VALUES(description);
    SET @DID = last_insert_id();
    
    INSERT INTO business_deals(business_id, deal_id)
    VALUES(BID, @DID);
    
    #Fields are optional depending on the selection (limited/Recurring)
    #for Limited option, null must be passed for deal_day 
    IF deal_type = 'Limited' THEN
		INSERT INTO deal_hours(type, start_datetime, end_datetime, deal_id) 
		VALUES('Limited', start_datetime, end_datetime, @DID);
	ELSEIF deal_type = 'Recurring' THEN
		INSERT INTO deal_hours(type, weekday, start_time, end_time, deal_id) 
		VALUES('Recurring', day_deal, start_time, end_time, @DID);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertImage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertImage`(IN businessID INT(11), IN image_name VARCHAR(45), IN path_name VARCHAR(255))
BEGIN
	INSERT INTO business_images(`name`, `path`, business_id)
	VALUES(image_name, path_name, businessID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `insertUser`(in user_type enum('consumer', 'business', 'admin', 'both'), in email varchar(100), in password varchar(100), in dob Date, in first_name varchar(100), in last_name varchar(100), out new_user_id int(11))
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
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `selectBusiness` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectBusiness`(in business_id int)
BEGIN
/* Business procedure that receives a business ID and returns: business_name, address, 
   lat, lng, menu, business_hours, cuisine, description, deals */
   
	SELECT type into @type 
	FROM users u INNER JOIN businesses b
    WHERE u.user_id = b.owner_id AND b.owner_id = business_id;
	
    IF (@type = 'Business') THEN 
		SELECT b.`name`, b.address, b.lat, b.`long`, b.`description`, b.cuisine, b.menu, 
			   CONCAT (bh.open_time,' - ', bh.closing_time, ' / ' , bh.weekday) AS hours, 
               d.`description`
		FROM businesses b 
        JOIN business_hours bh ON b.business_id = bh.business_id
        JOIN business_deals bd ON b.business_id = bd.business_id
        JOIN deals d ON d.deal_id = bd.deal_id
        WHERE b.business_id = business_id;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `selectUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `selectUser`(in consumer_id int)
begin

select type into @type -- puts result into the variable
from users
where user_id = consumer_id;
if (@type = 'consumer')
then select * 
from users join consumers using (user_id)
where user_id = consumer_id;
else select *
from users
where user_id = consumer_id;
end if;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateBusiness` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updateBusiness`(
	IN BID INT(11), IN `name` VARCHAR(255), IN address VARCHAR(255), IN lat FLOAT, IN `long` FLOAT, 
    IN menu VARCHAR(255), IN cuisine VARCHAR(45), IN `description` VARCHAR(1000), IN isAdult TINYINT(4))
BEGIN
	# Procedure that receives new data for an existing business and updates entrys that are not null
    # For numeric types (lat, long and is Adult) the word 'null' needs to be passed from the client side
    IF EXISTS (SELECT * FROM businesses b WHERE b.business_id = BID) THEN
		IF `name` IS NOT NULL AND `name` != '' THEN
			UPDATE businesses b SET b.`name` = `name` 		
			WHERE b.business_id = BID;
		END IF;
        IF address IS NOT NULL AND address != '' THEN
			UPDATE businesses b SET	b.address = address 
			WHERE b.business_id = BID;
		END IF;
        IF lat IS NOT NULL THEN     
			UPDATE businesses b SET b.lat = lat 		
			WHERE b.business_id = BID;
		END IF;
		IF `long`IS NOT NULL THEN 
			UPDATE businesses b SET b.`long` = `long`
			WHERE b.business_id = BID;
		END IF;
        IF menu IS NOT NULL AND menu != '' THEN
			UPDATE businesses b SET b.menu = menu 		
			WHERE b.business_id = BID;
		END IF;
        IF cuisine IS NOT NULL AND cuisine != '' THEN   
			UPDATE businesses b SET b.cuisine = cuisine 
			WHERE b.business_id = BID;
		END IF;
        IF `description` IS NOT NULL AND `description` != '' THEN
			UPDATE businesses b SET b.`description` = `description` 
			WHERE b.business_id = BID;
		END IF;
		IF isAdult IS NOT NULL THEN
			UPDATE businesses b SET b.isAdult = isAdult 
			WHERE b.business_id = BID; 
		END IF;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updatePassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrator`@`localhost` PROCEDURE `updatePassword`(
	IN user_id INT(11), 
    IN curr_password VARCHAR(100), 
    IN new_password VARCHAR(100),
    OUT success SMALLINT(4))
BEGIN
/* Procedure that receives user_id, current password hash, and new password hash.
   If current password hash matches stored password for corresponding user_id 
   then update to new password hash*/ 
    IF(EXISTS(SELECT *
			  FROM users u
			  WHERE u.user_id = user_id AND u.password = curr_password)) THEN 
			UPDATE users u SET u.password = new_password
			WHERE u.user_id = user_id;
        SET success := 1;
	ELSE
		SET success := 0;
	END IF; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `user_info`
--

/*!50001 DROP VIEW IF EXISTS `user_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`administrator`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_info` AS (select `u`.`user_id` AS `user_id`,concat(`c`.`first_name`,' ',`c`.`last_name`) AS `name`,`u`.`email` AS `email`,`c`.`dob` AS `dob` from (`users` `u` join `consumers` `c` on((`u`.`user_id` = `c`.`user_id`)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-03  8:31:01
