-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2019 at 08:50 PM
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
(15, 13000, 10, 4);

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
(4, 26, 42207, 0, 0, 900, '2019-04-06 06:35:18', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `date`) VALUES
(1, 'Alice', 'Le', 'lealice927@gmail.com', 'e38ad214943daad1d64c102faec29de4afe9da3d', '0000-00-00 00:00:00'),
(2, 'Jaime', 'Kim', 'jaimekim@email.com', '2aa60a8ff7fcd473d321e0146afd9e26df395147', '0000-00-00 00:00:00'),
(3, 'Johnny', 'Pham', 'johnnypham@email.com', '1119cfd37ee247357e034a08d844eea25f6fd20f', '0000-00-00 00:00:00'),
(4, 'David', 'Lee', 'davidlee@email.com', 'a1d7584daaca4738d499ad7082886b01117275d8', '0000-00-00 00:00:00');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `run_stats`
--
ALTER TABLE `run_stats`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_connections`
--
ALTER TABLE `user_connections`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
