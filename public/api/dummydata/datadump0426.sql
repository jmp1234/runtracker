-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 26, 2019 at 07:30 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `runbuddy`
--

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
(3, 13.00, 20000, 0, 0, 900, '2019-04-13 08:15:08', 3),
(4, 26.00, 42207, 0, 0, 900, '2019-04-06 06:35:18', 4),
(5, 100.00, 1073, 0, 100, 100, '2019-04-20 15:54:45', 0),
(6, 100.00, 923, 0, 100, 100, '2019-04-20 15:54:47', 0),
(7, 100.00, 0, 0, 100, 100, '2019-04-22 11:47:59', 0),
(8, 9.00, 1588, 0, 100, 100, '2019-04-24 12:04:59', 0),
(17, 0.00, 1378, 0, 100, 100, '2019-04-25 15:41:28', 1),
(18, 0.00, 16889, 0, 100, 100, '2019-04-25 15:47:37', 1),
(19, 26.00, 40000, 0, 100, 100, '2019-04-25 00:00:00', 3),
(28, 0.00, 25194, 0, 100, 100, '2019-04-25 21:46:15', 1),
(30, 0.00, 14, 0, 100, 100, '2019-04-25 22:26:05', 1),
(40, 3.00, 4, 0, 100, 100, '2019-04-25 23:23:00', 3),
(41, 3.00, 23, 0, 100, 100, '2019-04-25 23:24:24', 3),
(61, 50.00, 3, 0, 100, 100, '2019-04-26 00:00:06', 3),
(62, 0.00, 6, 0, 100, 100, '2019-04-26 00:00:57', 3),
(64, 0.00, 6, 0, 100, 100, '2019-04-26 00:11:32', 3),
(67, 0.07, 4, 0, 100, 100, '2019-04-26 00:17:17', 3),
(68, 0.43, 24, 0, 100, 100, '2019-04-26 00:27:26', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `run_stats`
--
ALTER TABLE `run_stats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `run_stats`
--
ALTER TABLE `run_stats`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
