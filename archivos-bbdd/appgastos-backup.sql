CREATE DATABASE  IF NOT EXISTS `appgastos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `appgastos`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: appgastos
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_request` date DEFAULT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `surname` varchar(60) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `department` varchar(60) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `project_code` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `general_type` varchar(20) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `reason` mediumtext COLLATE utf8mb4_unicode_520_ci,
  `date_expense` date DEFAULT NULL,
  `type` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `attached` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `departure_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `overnight` tinyint DEFAULT NULL,
  `trip_origin` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `trip_destination` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `means_transport` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `if_car_km` float DEFAULT NULL,
  `product_link` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `provider` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `units` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `requested_training` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `training_hours` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `training_schedule` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `number_people` int DEFAULT NULL,
  `hotel_link` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_expenses_users1_idx` (`users_id`),
  CONSTRAINT `fk_expenses_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `surname` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `role` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `department` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo_electronico_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'María','García Pérez','validator','mariagarcia@empresa.es','123456','managment'),(2,'Juan','González Hurtado','employee','juangonzalez@empresa.es','654321','development');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06 21:28:33
