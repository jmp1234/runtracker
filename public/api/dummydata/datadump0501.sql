-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2019 at 11:54 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitness-final-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `miles`
--

CREATE TABLE `miles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `time` mediumint(9) UNSIGNED NOT NULL,
  `mileage` float(7,2) UNSIGNED NOT NULL,
  `run_id` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `miles`
--

INSERT INTO `miles` (`id`, `time`, `mileage`, `run_id`) VALUES
(1, 700, 1.00, 1),
(2, 800, 1.00, 2),
(3, 900, 1.00, 3),
(4, 1800, 2.00, 3),
(5, 2700, 3.00, 3),
(6, 900, 1.00, 4),
(7, 1800, 2.00, 4),
(8, 2700, 3.00, 4),
(9, 3600, 4.00, 4),
(10, 4500, 5.00, 4),
(11, 5400, 6.00, 4),
(12, 10300, 7.00, 4),
(13, 11200, 8.00, 4),
(14, 12100, 9.00, 4),
(15, 13000, 10.00, 4),
(16, 22031, 1.00, 1),
(17, 22042, 1.00, 1),
(18, 21255, 2.00, 1),
(19, 8139, 3.00, 1),
(20, 0, 4.00, 1),
(36, 45, 1.00, 150),
(37, 45, 2.00, 150),
(77, 45, 1.00, 159),
(78, 45, 1.00, 161),
(79, 45, 1.00, 162),
(84, 45, 1.00, 165),
(86, 8, 0.20, 165),
(87, 45, 1.00, 166),
(88, 5, 1.12, 166),
(89, 45, 1.00, 167),
(90, 3, 1.06, 167),
(91, 45, 1.00, 168),
(92, 45, 2.00, 168),
(93, 6, 2.13, 168),
(96, 28, 0.62, 170),
(97, 45, 1.00, 171),
(98, 2, 1.06, 171),
(99, 45, 1.00, 172),
(100, 45, 1.00, 173),
(101, 3, 1.08, 173),
(102, 45, 1.00, 174),
(103, 4, 1.08, 174),
(104, 11, 0.24, 175),
(105, 45, 1.00, 176),
(106, 1, 1.04, 176),
(107, 1, 0.03, 177),
(108, 25, 0.56, 0);

-- --------------------------------------------------------

--
-- Table structure for table `run_stats`
--

CREATE TABLE `run_stats` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `distance` float(7,2) UNSIGNED NOT NULL,
  `time` mediumint(8) UNSIGNED NOT NULL,
  `heart_rate` tinyint(3) UNSIGNED NOT NULL,
  `calories` mediumint(8) UNSIGNED NOT NULL,
  `pace` mediumint(8) NOT NULL,
  `date` datetime NOT NULL,
  `user_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `run_stats`
--

INSERT INTO `run_stats` (`id`, `distance`, `time`, `heart_rate`, `calories`, `pace`, `date`, `user_id`) VALUES
(1, 1.00, 700, 0, 0, 700, '2019-04-16 07:12:00', 1),
(2, 4.00, 3200, 0, 0, 800, '2019-04-15 08:14:10', 2),
(17, 0.00, 1378, 0, 100, 100, '2019-04-25 15:41:28', 1),
(18, 0.00, 16889, 0, 100, 100, '2019-04-25 15:47:37', 1),
(168, 2.13, 95, 0, 100, 100, '2019-04-28 15:58:55', 3),
(170, 0.62, 27, 0, 100, 100, '2019-04-28 17:15:55', 3),
(171, 1.06, 47, 0, 100, 100, '2019-04-28 17:40:56', 3),
(173, 1.08, 48, 0, 100, 100, '2019-04-28 18:08:55', 3),
(174, 1.08, 48, 0, 100, 100, '2019-04-28 22:29:29', 3),
(175, 0.24, 10, 0, 100, 100, '2019-04-29 00:47:49', 3),
(176, 1.04, 46, 0, 100, 100, '2019-04-29 10:55:46', 3),
(177, 0.03, 1, 0, 100, 100, '2019-04-29 10:59:51', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `height` smallint(5) UNSIGNED NOT NULL,
  `weight` smallint(5) UNSIGNED NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `height`, `weight`, `email`, `password`, `date`) VALUES
(1, 'Alice', 'Le', 63, 120, 'lealice927@gmail.com', 'e38ad214943daad1d64c102faec29de4afe9da3d', '0000-00-00 00:00:00'),
(2, 'Jaime', 'Kim', 66, 130, 'jaimekim@email.com', '2aa60a8ff7fcd473d321e0146afd9e26df395147', '0000-00-00 00:00:00'),
(3, 'Johnny', 'Pham', 70, 150, 'johnnypham@email.com', '1119cfd37ee247357e034a08d844eea25f6fd20f', '0000-00-00 00:00:00'),
(4, 'David', 'Lee', 68, 150, 'davidlee@email.com', 'a1d7584daaca4738d499ad7082886b01117275d8', '0000-00-00 00:00:00'),
(30, 'Johnny', 'Pham', 60, 160, 'johnnypham@google.com', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '2019-04-28 18:41:05');

-- --------------------------------------------------------

--
-- Table structure for table `user_connections`
--

CREATE TABLE `user_connections` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `token` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `users_id` bigint(20) UNSIGNED NOT NULL,
  `created` datetime NOT NULL,
  `ip_address` varchar(14) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_connections`
--

INSERT INTO `user_connections` (`id`, `token`, `users_id`, `created`, `ip_address`) VALUES
(1, '5e4fb80b11594ea2d523ff4d5a5dc8dcbeff0b5e', 1, '2019-04-23 15:41:28', '127.0.0.1'),
(2, 'a6909d7e31723d3959e51ec752d45efe1e951181', 1, '2019-04-23 15:42:27', '127.0.0.1'),
(3, 'e4ab0222863d8875d218e8e78d372dd65365b29b', 1, '2019-04-23 16:25:35', '127.0.0.1'),
(4, '74d43091b566c0ec8cd192bc296eef7eccac5c77', 1, '2019-04-24 12:04:13', '127.0.0.1'),
(5, '165be81d5299ab2a8051112d04e28d957e69c7f7', 2, '2019-04-24 12:15:22', '127.0.0.1'),
(6, 'fcf1062331f91e66399b491aacc265bb8630b3fe', 1, '2019-04-24 12:43:14', '127.0.0.1'),
(7, '5cda3a390670b4e972576947a7f4071621d4c072', 1, '2019-04-24 13:21:58', '127.0.0.1'),
(8, 'bc224c493447e0f45c85c770cf21c08b95807579', 20, '2019-04-24 15:56:20', '127.0.0.1'),
(9, 'fa74d79fffe7170559427e5d52aad3adc84fc4dc', 21, '2019-04-24 16:29:40', '127.0.0.1'),
(10, 'e7b73705a5cd00e36e94722931dc028f6ccb33c1', 22, '2019-04-24 16:36:10', '127.0.0.1'),
(11, '8f37c789ad8f49a2647a550ea2612095481337b7', 1, '2019-04-24 18:15:28', '127.0.0.1'),
(12, '5727c86bb97fe08500735e435363f5d0d1244030', 23, '2019-04-24 18:15:50', '127.0.0.1'),
(13, '77391d6cdfeec619d9354c08139c202c3be3bc11', 24, '2019-04-24 18:27:25', '127.0.0.1'),
(14, 'afe4b7afc8d44b67c7e5a8478a7f9186d328a001', 28, '2019-04-24 18:30:14', '127.0.0.1'),
(15, '462270427cdb4cd524fa92a6dcefb882a8970955', 29, '2019-04-24 19:06:14', '127.0.0.1'),
(16, '4718e215e3a6c50b2304394e610ded360049a10c', 3, '2019-04-25 11:57:25', '127.0.0.1'),
(17, '10caca23315fc238a42c4d363116f00a372299e8', 3, '2019-04-25 15:51:20', '127.0.0.1'),
(18, 'c5f103dcc0b4fd94e566fb22bfe2fde202210100', 3, '2019-04-26 13:03:01', '127.0.0.1'),
(19, 'f6644e8ee74c3c4316b095db556958f57edeaa8e', 3, '2019-04-26 13:14:57', '127.0.0.1'),
(20, '07fb8abddc57ed2f0348eeede481695251094a97', 3, '2019-04-26 13:19:05', '127.0.0.1'),
(21, 'f20839f20088a487b67efa69b2a7d4b5da2219f6', 3, '2019-04-26 13:29:29', '127.0.0.1'),
(22, '98fdac6e7e45abf1cde72ab99f0e7cf19036eba5', 3, '2019-04-26 13:29:41', '127.0.0.1'),
(23, '188776c49f18bc82a3f6f3d97007ba685f74f3e6', 3, '2019-04-26 13:29:55', '127.0.0.1'),
(24, '54f55818503d1465add3885068272426659c74dd', 3, '2019-04-26 13:31:56', '127.0.0.1'),
(25, '1043b16722a6fa7bd2a07b0d8170721c6f28aba4', 3, '2019-04-26 13:31:58', '127.0.0.1'),
(26, 'd53dcf2a9cc02a980bc984b035ecc6b285fc51a5', 3, '2019-04-26 13:31:58', '127.0.0.1'),
(27, '6b40e867f2823628b045d0d82812cc446c521251', 3, '2019-04-26 13:31:58', '127.0.0.1'),
(28, 'a39ab1250406f6022130d85ea9c3408367998984', 3, '2019-04-26 13:31:58', '127.0.0.1'),
(29, 'df7a48fe7013ef15372ffcf4c4e61508f6c1936e', 3, '2019-04-26 13:33:29', '127.0.0.1'),
(30, '534192a652d7f5b3586884386fc42effa19c92e7', 3, '2019-04-26 13:36:46', '127.0.0.1'),
(31, 'cd99d580c4ab0b967b53851d5fd86e296e82fb05', 3, '2019-04-26 13:48:20', '127.0.0.1'),
(32, '0e6a377d4dac6b1ea427cd6b8f24cc7ac02578b0', 3, '2019-04-26 13:52:47', '127.0.0.1'),
(33, '5ac42a782399a5a797bf319e5db0f317e3009adf', 3, '2019-04-26 13:55:26', '127.0.0.1'),
(34, '6fe35416d8102d6f59bf1766df25d94154d3511f', 3, '2019-04-26 14:01:42', '127.0.0.1'),
(35, 'fc0d11deb8165e4508e29d22fcb762b7b9a38bfb', 3, '2019-04-26 14:02:45', '127.0.0.1'),
(36, '6e23cf8fcb9491f41f1bf2211389aac03d67b35a', 3, '2019-04-26 14:10:34', '127.0.0.1'),
(37, 'd0d5b64bbd949e1027c116c32fb002015de1ad94', 3, '2019-04-26 17:00:53', '127.0.0.1'),
(38, '9f7328a3b742cd9d3b80e50bcb860edc426152a5', 3, '2019-04-26 17:03:31', '127.0.0.1'),
(39, '65ef17b3777077db61bdb518a5c9cf66028deb39', 3, '2019-04-26 17:14:45', '127.0.0.1'),
(40, 'e108b0c884f20339ba87473442f11bb9d2ed555b', 3, '2019-04-26 17:17:23', '127.0.0.1'),
(41, 'd08dc6e02d22cae80b7bb348c1abe7ba50d911ca', 3, '2019-04-26 17:22:18', '127.0.0.1'),
(42, '6408e8e11f22fa5a325a3c1cb8836f83ead5cfad', 3, '2019-04-28 13:43:37', '127.0.0.1'),
(43, 'cbba1568e40691723c1bafa158456753a14030bf', 30, '2019-04-28 18:41:05', '127.0.0.1'),
(44, 'ccc33e597a073fee51d1d407e0ef1c3fbc49550a', 3, '2019-04-28 18:41:46', '127.0.0.1'),
(45, 'db36e93ea111530491819a7656f4b1d0b104bef7', 3, '2019-04-29 00:50:28', '127.0.0.1'),
(46, 'e76b0f864275b0258a502eec733f822b9cdc0029', 1, '2019-05-01 13:30:19', '127.0.0.1'),
(47, 'e6b54745a3fe653d3fda07f61a66251de92c1b86', 1, '2019-05-01 13:30:19', '127.0.0.1'),
(48, 'e608f0fa33e9f3932385dc70f013086050bd335f', 3, '2019-05-01 13:32:32', '127.0.0.1'),
(49, 'a62067712cc5ddaabd25434b3824e914db82ef88', 3, '2019-05-01 13:32:32', '127.0.0.1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `miles`
--
ALTER TABLE `miles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `run_stats`
--
ALTER TABLE `run_stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `users` ADD FULLTEXT KEY `last_name` (`last_name`);

--
-- Indexes for table `user_connections`
--
ALTER TABLE `user_connections`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `miles`
--
ALTER TABLE `miles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `run_stats`
--
ALTER TABLE `run_stats`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user_connections`
--
ALTER TABLE `user_connections`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
