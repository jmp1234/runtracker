-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2019 at 02:02 AM
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
-- Database: `runtracker- final project`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `eventName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `eventDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `eventName`, `eventDate`) VALUES
(3, 'Marathon', '2019-05-17');

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
(108, 45, 1.00, 0),
(109, 44, 2.00, 0),
(110, 2, 2.05, 0),
(111, 5, 0.10, 0),
(112, 5, 0.10, 0),
(113, 3, 0.07, 179),
(114, 2, 0.00, 0),
(115, 4, 0.09, 181),
(116, 3, 0.00, 0),
(117, 3, 0.07, 183),
(118, 2, 0.00, 0),
(119, 8, 0.18, 185),
(120, 5, 0.10, 186),
(121, 3, 0.07, 187),
(122, 9, 0.19, 188),
(123, 3, 0.07, 189),
(124, 45, 1.00, 190),
(125, 6, 1.14, 190),
(126, 45, 1.00, 191),
(127, 14, 1.31, 191),
(128, 13, 0.29, 192),
(129, 34, 0.75, 193),
(130, 45, 1.00, 194),
(131, 45, 2.00, 194),
(132, 6, 2.13, 194),
(133, 12, 0.27, 195),
(134, 26, 0.58, 196),
(135, 6, 0.14, 197),
(136, 8, 0.18, 198),
(137, 5, 0.12, 199),
(138, 6, 0.13, 200),
(139, 6, 0.13, 201),
(140, 45, 1.00, 202),
(141, 45, 1.00, 203),
(142, 5, 1.12, 203),
(143, 3, 0.08, 204),
(144, 45, 1.00, 207),
(145, 9, 1.22, 207),
(146, 5, 0.11, 208),
(147, 45, 1.00, 209),
(148, 6, 1.14, 209),
(149, 3, 0.06, 210),
(150, 2, 0.05, 211),
(151, 2, 0.05, 212),
(152, 4, 0.09, 213),
(153, 3, 0.07, 214),
(154, 3, 0.08, 215),
(155, 9, 0.20, 216),
(156, 4, 0.09, 217),
(157, 2, 0.04, 218),
(158, 3, 0.00, 219),
(159, 3, 0.07, 220),
(160, 3, 0.06, 221),
(161, 0, 0.05, 222),
(162, 5, 0.10, 230),
(163, 5, 0.11, 231),
(164, 3, 0.05, 232),
(165, 5, 0.12, 233),
(166, 2, 0.04, 235),
(167, 2, 0.05, 236),
(168, 2, 0.04, 237),
(169, 6, 0.13, 238),
(170, 45, 1.00, 239),
(171, 45, 1.00, 239),
(172, 45, 1.00, 239),
(173, 45, 1.00, 239),
(174, 46, 1.00, 239),
(175, 46, 1.00, 239),
(176, 46, 1.00, 239),
(177, 46, 1.00, 239),
(178, 46, 1.00, 239),
(179, 47, 1.00, 239),
(180, 47, 1.00, 239),
(181, 47, 1.00, 239),
(182, 47, 1.00, 239),
(183, 47, 1.00, 239),
(184, 48, 1.00, 239),
(185, 48, 1.00, 239),
(186, 48, 1.00, 239),
(187, 48, 1.00, 239),
(188, 48, 1.00, 239),
(189, 49, 1.00, 239),
(190, 49, 1.00, 239),
(191, 49, 1.00, 239),
(192, 49, 1.00, 239),
(193, 49, 1.00, 239),
(194, 50, 1.00, 239),
(195, 50, 1.00, 239),
(196, 50, 1.12, 239),
(197, 4, 0.08, 241),
(198, 5, 0.12, 242),
(199, 45, 1.00, 243),
(200, 17, 1.38, 243),
(201, 16, 0.35, 244),
(202, 9, 0.20, 245),
(203, 10, 0.22, 246),
(204, 10, 0.22, 247),
(205, 14, 0.32, 248),
(206, 12, 0.28, 249),
(207, 14, 0.21, 250),
(208, 11, 0.12, 251),
(209, 21, 0.23, 252),
(210, 14, 0.15, 253),
(211, 10, 0.11, 254),
(212, 16, 0.17, 255),
(213, 10, 0.11, 257),
(214, 8, 0.09, 258),
(215, 4, 0.05, 259),
(216, 13, 0.14, 260),
(217, 11, 0.12, 261),
(218, 43, 0.48, 262),
(219, 7, 0.08, 263),
(220, 12, 0.14, 264),
(221, 11, 0.12, 265),
(222, 23, 0.25, 266),
(223, 11, 0.13, 267),
(224, 6, 0.07, 268),
(225, 9, 0.11, 269),
(226, 89, 1.00, 270),
(227, 19, 1.22, 270),
(228, 23, 0.27, 271),
(229, 13, 0.16, 272),
(230, 1, 0.02, 273),
(231, 10, 0.12, 275),
(232, 9, 0.11, 276),
(233, 11, 0.12, 277),
(234, 6, 0.07, 278),
(235, 45, 0.51, 280),
(236, 29, 0.33, 281),
(237, 88, 1.00, 282),
(238, 6, 1.07, 282),
(239, 89, 1.00, 283),
(240, 13, 1.15, 283),
(241, 11, 0.18, 285),
(242, 19, 0.40, 286),
(243, 14, 0.28, 287),
(244, 31, 0.61, 288),
(245, 13, 0.23, 289),
(246, 4, 0.09, 290),
(247, 2, 0.03, 292),
(248, 2, 0.04, 293),
(249, 2, 0.05, 297),
(250, 2, 0.03, 300),
(251, 2, 0.04, 304),
(252, 5, 0.00, 312),
(253, 7, 0.00, 313),
(254, 6, 0.00, 314),
(255, 4, 0.00, 315),
(256, 0, 0.00, 319),
(257, 0, 0.00, 320),
(258, 6, 0.00, 321),
(259, 4, 0.00, 322),
(260, 6, 0.00, 323),
(261, 1, 0.00, 326),
(262, 2, 0.00, 327),
(263, 3, 0.00, 328),
(264, 3, 0.00, 329),
(265, 3, 0.00, 0),
(266, 3, 0.00, 333),
(267, 9, 0.00, 334),
(268, 2, 0.00, 335),
(269, 4, 0.00, 336),
(270, 3, 0.00, 337),
(271, 2, 0.00, 338),
(272, 4, 0.00, 339),
(273, 6, 0.00, 340),
(274, 4, 0.00, 341),
(275, 3, 0.00, 342),
(276, 2, 0.00, 343),
(277, 2, 0.00, 344),
(278, 5, 0.00, 345),
(279, 4, 0.00, 346),
(280, 3, 0.00, 347),
(281, 0, 0.00, 348),
(282, 2, 0.00, 349),
(283, 3, 0.00, 350),
(284, 37, 0.00, 351);

-- --------------------------------------------------------

--
-- Table structure for table `run_stats`
--

CREATE TABLE `run_stats` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `distance` float(7,2) UNSIGNED NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `city` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
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

INSERT INTO `run_stats` (`id`, `distance`, `lat`, `lng`, `city`, `time`, `heart_rate`, `calories`, `pace`, `date`, `user_id`) VALUES
(1, 1.00, 0.000000, 0.000000, '', 700, 0, 0, 700, '2019-04-16 07:12:00', 1),
(2, 4.00, 0.000000, 0.000000, '', 3200, 0, 0, 800, '2019-04-15 08:14:10', 2),
(17, 0.00, 0.000000, 0.000000, '', 1378, 0, 100, 100, '2019-04-25 15:41:28', 1),
(18, 0.00, 0.000000, 0.000000, '', 16889, 0, 100, 100, '2019-04-25 15:47:37', 1),
(171, 1.06, 0.000000, 0.000000, '', 47, 0, 100, 100, '2019-04-28 17:40:56', 3),
(173, 1.08, 0.000000, 0.000000, '', 48, 0, 100, 100, '2019-04-28 18:08:55', 3),
(174, 1.08, 0.000000, 0.000000, '', 48, 0, 100, 100, '2019-04-28 22:29:29', 3),
(176, 1.04, 0.000000, 0.000000, '', 46, 0, 100, 100, '2019-04-29 10:55:46', 3),
(180, 0.00, 0.000000, 0.000000, '', 0, 0, 0, 0, '2019-05-01 19:21:54', 4),
(181, 0.09, 33.634911, -117.740509, '', 4, 0, 1, 100, '2019-05-01 19:22:56', 4),
(182, 0.00, 0.000000, 0.000000, '', 0, 0, 0, 0, '2019-05-01 19:25:32', 4),
(183, 0.07, 33.634907, -117.740494, '', 3, 0, 0, 100, '2019-05-01 19:25:45', 4),
(185, 0.18, 33.634903, -117.740509, '', 8, 0, 2, 100, '2019-05-01 19:36:19', 4),
(190, 1.14, 33.816128, -118.125854, '', 50, 0, 15, 100, '2019-05-02 21:08:19', 3),
(203, 1.12, 33.816128, -118.125862, '', 50, 0, 14, 100, '2019-05-04 16:04:56', 3),
(207, 1.22, 33.816097, -118.125854, '', 54, 0, 16, 100, '2019-05-04 16:24:26', 3),
(209, 1.14, 33.816284, -118.125877, '', 50, 0, 15, 100, '2019-05-04 18:14:19', 3),
(243, 1.38, 33.816269, -118.126015, '', 61, 0, 18, 100, '2019-05-04 19:34:12', 3),
(283, 1.15, 33.816284, -118.125870, '', 102, 0, 30, 100, '2019-05-05 09:40:46', 3),
(334, 0.00, 33.634907, -117.740501, 'Irvine', 9, 0, 0, 100, '2019-05-09 13:03:36', 3),
(343, 0.00, 33.634895, -117.740486, 'Irvine', 2, 0, 0, 100, '2019-05-09 13:14:17', 3),
(345, 0.00, 33.634914, -117.740463, 'Irvine', 5, 0, 0, 100, '2019-05-09 13:18:10', 3),
(346, 0.00, 33.634892, -117.740456, 'Irvine', 4, 0, 0, 100, '2019-05-09 13:21:28', 3),
(347, 0.00, 33.634918, -117.740463, '', 3, 0, 0, 100, '2019-05-09 13:24:00', 3),
(348, 0.00, 33.634930, -117.740471, '', 0, 0, 0, 100, '2019-05-09 13:26:39', 3),
(349, 0.00, 33.634911, -117.740463, 'Irvine', 2, 0, 0, 100, '2019-05-09 14:50:28', 3),
(350, 0.00, 33.630535, -117.743187, 'Laguna Hills', 3, 0, 0, 100, '2019-05-15 10:36:14', 1),
(351, 0.00, 33.630535, -117.743187, 'Laguna Hills', 37, 0, 0, 100, '2019-05-15 10:37:16', 1);

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
(30, 'Johnny', 'Pham', 60, 160, 'johnnypham@google.com', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '2019-04-28 18:41:05'),
(31, 'test', 'test', 0, 0, 'test@test.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '2019-05-16 15:26:29'),
(33, 'test', 'test', 0, 0, 'test@test', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '2019-05-16 15:45:30'),
(34, 'first', 'last', 0, 0, 'email@email.com', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '2019-05-16 15:52:54'),
(35, 'test', 'test', 0, 0, 'test@test', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '2019-05-16 16:04:35'),
(36, 'dude', 'dude', 0, 0, 'dude@dude.com', '2d7a34c9ef8efa2cfdf4b89175f7edec1cd0ddda', '2019-05-16 16:06:15'),
(37, 'firstname', 'lastname', 0, 0, 'email@email.com', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '2019-05-16 16:29:27');

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
(1, 'aec13016bf4171f807a7941c10cf98670403af3c', 1, '2019-05-16 16:41:52', '127.0.0.1'),
(2, '348ff82e56e95ae734863ce72a5a32443b0bb33c', 1, '2019-05-16 16:41:52', '127.0.0.1'),
(3, '98286a4c2574500d4b68725336f5786c2ac751f2', 36, '2019-05-16 16:42:13', '127.0.0.1'),
(4, '8d32a2bef38319ecab1867e3586f3968c073e405', 36, '2019-05-16 16:42:13', '127.0.0.1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=285;

--
-- AUTO_INCREMENT for table `run_stats`
--
ALTER TABLE `run_stats`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=352;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `user_connections`
--
ALTER TABLE `user_connections`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
