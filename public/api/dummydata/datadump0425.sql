-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2019 at 08:22 PM
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
  `time` mediumint(9) NOT NULL,
  `mileage` mediumint(9) NOT NULL,
  `run_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `miles`
--

INSERT INTO `miles` (`id`, `time`, `mileage`, `run_id`) VALUES
(1, 700, 1, 1),
(2, 800, 1, 2),
(3, 900, 1, 3),
(4, 1800, 2, 3),
(5, 2700, 3, 3),
(6, 900, 1, 4),
(7, 1800, 2, 4),
(8, 2700, 3, 4),
(9, 3600, 4, 4),
(10, 4500, 5, 4),
(11, 5400, 6, 4),
(12, 10300, 7, 4),
(13, 11200, 8, 4),
(14, 12100, 9, 4),
(15, 13000, 10, 4),
(16, 22031, 1, 1),
(17, 22042, 1, 1),
(18, 21255, 2, 1),
(19, 8139, 3, 1),
(20, 0, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `run_stats`
--

CREATE TABLE `run_stats` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `distance` mediumint(8) UNSIGNED NOT NULL,
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
(1, 1, 700, 0, 0, 700, '2019-04-16 07:12:00', 1),
(2, 4, 3200, 0, 0, 800, '2019-04-15 08:14:10', 2),
(3, 13, 20000, 0, 0, 900, '2019-04-13 08:15:08', 3),
(4, 26, 42207, 0, 0, 900, '2019-04-06 06:35:18', 4),
(5, 100, 1073, 0, 100, 100, '2019-04-20 15:54:45', 0),
(6, 100, 923, 0, 100, 100, '2019-04-20 15:54:47', 0),
(7, 100, 0, 0, 100, 100, '2019-04-22 11:47:59', 0),
(8, 9, 1588, 0, 100, 100, '2019-04-24 12:04:59', 0),
(9, 1, 23665, 0, 100, 100, '2019-04-24 18:16:20', 1),
(10, 0, 14520, 0, 100, 100, '2019-04-24 19:06:44', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `age` tinyint(3) UNSIGNED NOT NULL,
  `height` smallint(5) UNSIGNED NOT NULL,
  `weight` smallint(5) UNSIGNED NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `gender`, `age`, `height`, `weight`, `email`, `password`, `date`) VALUES
(1, 'Alice', 'Le', 'female', 30, 63, 120, 'lealice927@gmail.com', 'e38ad214943daad1d64c102faec29de4afe9da3d', '0000-00-00 00:00:00'),
(2, 'Jaime', 'Kim', 'female', 28, 66, 130, 'jaimekim@email.com', '2aa60a8ff7fcd473d321e0146afd9e26df395147', '0000-00-00 00:00:00'),
(3, 'Johnny', 'Pham', 'male', 22, 70, 150, 'johnnypham@email.com', '1119cfd37ee247357e034a08d844eea25f6fd20f', '0000-00-00 00:00:00'),
(4, 'David', 'Lee', 'male', 28, 68, 150, 'davidlee@email.com', 'a1d7584daaca4738d499ad7082886b01117275d8', '0000-00-00 00:00:00');

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
(15, '462270427cdb4cd524fa92a6dcefb882a8970955', 29, '2019-04-24 19:06:14', '127.0.0.1');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `run_stats`
--
ALTER TABLE `run_stats`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `user_connections`
--
ALTER TABLE `user_connections`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
