-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2018 at 11:49 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `info071011`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_mst`
--

CREATE TABLE `admin_mst` (
  `admin_id` int(11) NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `mobile_no` varchar(15) NOT NULL,
  `date` datetime NOT NULL,
  `admin_img` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `gender` enum('m','f') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_mst`
--

INSERT INTO `admin_mst` (`admin_id`, `full_name`, `email_id`, `mobile_no`, `date`, `admin_img`, `username`, `password`, `gender`) VALUES
(1, 'pradeep bhosle', 'pradeep@gmail.com', '9967544174', '2018-11-28 00:00:00', 'avatar-07.jpg', 'pradeep07', 'pradeep@kevu07', 'm'),
(3, 'Kaivallya Bhosle', 'kevu@gmail.com', '9967144741', '2018-12-04 00:00:00', 'avatar-07.jpg', 'kevu07', 'kevu@123', 'm'),
(4, 'Ashwat bhosle', 'ashwat@gmail.com', '9967544174', '2018-11-27 00:00:00', 'avatar-07.jpg', 'ashwat10', 'ashwat@kevu07', 'm'),
(5, 'Neha Pradeep bhosle', 'neha27@gmail.com', '9967544174', '2018-11-26 00:00:00', 'avatar-07.jpg', 'neha27', 'neha@kevu071027', 'f'),
(7, 'paddy bhosle', 'paddybhosle@gmail.com', '9685741236', '2018-12-05 00:22:00', 'avatar-07.jpg', 'paddy123bhosle', 'admin@123', 'm'),
(8, 'ghgfhgfhgf', 'asdas@gmail.com', '7845123698', '2018-12-25 16:17:00', 'avatar-07.jpg', 'testing123', 'testin@123', 'm');

-- --------------------------------------------------------

--
-- Table structure for table `category_mst`
--

CREATE TABLE `category_mst` (
  `cat_id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_mst`
--

INSERT INTO `category_mst` (`cat_id`, `category`) VALUES
(1, 'boats'),
(2, 'camping'),
(3, 'library'),
(5, 'slim framwork');

-- --------------------------------------------------------

--
-- Table structure for table `education_mst`
--

CREATE TABLE `education_mst` (
  `educ_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `university` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `passing_year` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `education_mst`
--

INSERT INTO `education_mst` (`educ_id`, `title`, `university`, `description`, `passing_year`) VALUES
(1, 'sadasdasdasd', 'mumbai university', 'dsadasdasd dasdasdasdadasdasdasd', '2015-12-24 00:00:00'),
(2, 'botany bsc', 'mumbai university', 'botan bsc asdnasknd dasdsan nskldnkas dksndkasnd', '2017-12-24 00:00:00'),
(13, 'fdsdsf', 'fdsfdsf', 'fdsfdsfs', '2018-12-24 07:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `exprience_id` int(11) NOT NULL,
  `start_year` datetime NOT NULL,
  `end_year` datetime NOT NULL,
  `exprience_title` varchar(250) NOT NULL,
  `office_name` varchar(200) NOT NULL,
  `exprience_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`exprience_id`, `start_year`, `end_year`, `exprience_title`, `office_name`, `exprience_description`) VALUES
(1, '2015-02-02 00:00:00', '2018-12-01 00:00:00', 'asdsadas', 'dasdasd', 'dasdasdasd'),
(2, '2015-02-02 00:00:00', '2018-12-01 00:00:00', 'pradeep bhosle', 'craftsvilla', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '),
(4, '2017-05-04 07:54:00', '2018-12-04 04:05:00', 'dsadsadas', 'dsadasdasd', 'dasdasdasdas');

-- --------------------------------------------------------

--
-- Table structure for table `pages_mst`
--

CREATE TABLE `pages_mst` (
  `page_id` int(11) NOT NULL,
  `page_title` varchar(300) NOT NULL,
  `page_content` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages_mst`
--

INSERT INTO `pages_mst` (`page_id`, `page_title`, `page_content`, `date`) VALUES
(63, 'About Us', '<h3>I am Web Designer &amp; Web Developer</h3>\n\n<p>I&#39;m Pradeep Bhosle Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>\n\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.</p>\n\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio eligendi ut incidunt nihil cupiditate veniam facere odit excepturi dolores? Sunt eaque, facere voluptate necessitatibus sequi non voluptates itaque, sint harum quod eveniet</p>\n', '2018-12-05 15:09:00'),
(64, 'dasdasd', '<p>dasdasdas</p>\n', '2018-12-13 02:31:00'),
(65, 'dasasd', '<p>dasdasd</p>\n', '2018-12-13 02:37:00'),
(66, 'fddsfsdfs', '<p>dsfdsfsdf</p>\n', '2018-12-13 02:31:00'),
(69, 'kevu123456789', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. pradeep end hi kevu&nbsp;</p>\n', '2018-12-22 17:02:00');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_mst`
--

CREATE TABLE `portfolio_mst` (
  `port_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `caption` varchar(200) NOT NULL,
  `url` varchar(50) NOT NULL,
  `client` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `skill` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `visit_website` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portfolio_mst`
--

INSERT INTO `portfolio_mst` (`port_id`, `cat_id`, `caption`, `url`, `client`, `date`, `skill`, `description`, `visit_website`) VALUES
(1, 1, 'View from a boat', 'boat_01.jpeg', 'unotech', '2018-01-10 00:00:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ''),
(2, 1, 'View from a boat', 'boat_01.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(3, 1, 'Sailing the coast', 'boat_02.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(4, 1, 'The water was nice', 'boat_03.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(5, 1, 'Sunset at the docks', 'boat_05.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(6, 2, 'Camping Trip 17', 'camping_01.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(7, 2, 'Kim and Jessie', 'camping_02.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(8, 2, 'View from the top', 'camping_03.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(9, 2, 'On the trail', 'camping_04.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(10, 2, 'Our camping spot', 'camping_05.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(11, 2, 'RV Life', 'camping_06.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(12, 2, 'Hiking trip 2017', 'camping_07.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(13, 3, 'Big library', 'library_01.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(14, 3, 'Stacks', 'library_02.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(15, 3, 'Saturday afternoon', 'library_03.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(16, 3, 'Local library', 'library_04.jpeg', '', '0000-00-00 00:00:00', '', '', ''),
(17, 2, 'dsadasdas', 'C:\\fakepath\\61rXH-PSVhL._SL1000_.jpg', 'dsadasdasdasd', '2018-12-13 12:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasdasdas</p>\n', ''),
(18, 2, 'dasdasdas', 'C:\\fakepath\\61rXH-PSVhL._SL1000_.jpg', 'dsadasdasd', '2018-12-13 17:14:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasd</p>\n', ''),
(19, 2, 'testing123', 'ngimg.jpg', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(20, 2, 'testing123', 'about-img.png', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(21, 2, 'testing123', 'skill-background.png', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(22, 2, 'testing123', 'banner.png', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(23, 2, 'prdaeep kevu', 'Lighthouse.jpg', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(24, 2, 'prdaeep kevu', '0F0B5508_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(25, 3, 'mom kevu', '0F0B5549_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(26, 3, 'mom kevu', '0F0B5487_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(27, 2, 'sasdasasdasd', '0F0B5522_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(28, 2, 'sasdasasdasd', '0F0B5593_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(29, 2, 'sasdasasdasd', '0F0B5856_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(30, 2, 'sasdasasdasd', '0F0B5856_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(31, 2, 'sasdasasdasd', '0F0B5841_resize.JPG', 'dadasdasdas', '2018-01-09 18:30:00', 'html, css, bootstrap, jquery, javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', ''),
(32, 2, 'dsadasdas', '0F0B5492_resize.JPG', 'dsdasdasdasd', '0000-00-00 00:00:00', 'dasd ,dsadas ,dasdasd ,dasdas das,', '<p>sdadasdasda</p>\n', ''),
(33, 3, 'pradeep bhosle 123456789', '0F0B5856_resize.JPG', 'craftsvillla ', '2018-12-16 02:43:00', 'html, css, angular cli, php, wordpress', '<p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n', ''),
(34, 1, 'ashwat bhosle', 'IMG_3229.JPG', 'pradeep bhosle', '0000-00-00 00:00:00', 'playing, waching, smil, happy', '<p>Why do we use it?</p>\n\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n', ''),
(35, 2, 'kevu', 'IMG_3319.JPG', 'pradeep', '2018-12-16 10:58:00', 'php, mysql, html', '<p>Why do we use it?</p>\n\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n', ''),
(36, 2, 'neha ', 'IMG_3287.JPG', 'kevu', '2018-12-16 11:05:00', 'php, mysql, html', '<p>Where does it come from?</p>\n\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\n\n<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\n', ''),
(37, 1, 'bools', 'IMG_3400.JPG', 'asdasd', '0000-00-00 00:00:00', 'playing, waching, smil, happy', '<p>Where does it come from?</p>\n\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\n\n<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\n', ''),
(38, 2, 'matchbox', 'IMG_3440.JPG', 'dsdasdasdasd', '0000-00-00 00:00:00', 'html, css, angular cli, php, wordpress', '<p>Where does it come from?</p>\n\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\n\n<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\n', 'http://pradeepbhosle.lifekeepteaching.com/testing/uiRefrence/'),
(40, 1, 'mobile api', 'IMG_3403.JPG', 'xami', '2018-12-16 17:53:00', 'ionic, mysql, php, angular cli', '<h2>Where does it come from?</h2>\n\n<p style=\"text-align:justify\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\n\n<p><span style=\"background-color:#1abc9c\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>\n', 'https://www.lipsum.com/'),
(41, 1, 'mobile api', 'IMG_3234.JPG', 'xami', '2018-12-16 12:23:00', 'ionic, mysql, php, angular cli', '<h2>Where does it come from?</h2>\n\n<p style=\"text-align:justify\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\n\n<p><span style=\"background-color:#1abc9c\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>\n', 'https://www.lipsum.com/'),
(42, 0, '', '', '', '0000-00-00 00:00:00', '', '', ''),
(43, 2, 'dasasdasd das', '0F0B5617_resize.JPG', 'dsadasdsad', '2018-12-18 00:00:00', 'dasas , dsadsa, dasdas, dsadasdasd', 'dasdasdasd dasd dsad das dasdasdasdas dasdasdasd', 'http://localhost:8080/api/portfolio/1'),
(44, 1, 'tesrubf123', '', 'dasdasdasdasd', '2018-12-19 00:00:00', 'adsadas, dsadasd, dasdasd, dasdasdas', 'dasda dsa dsa asdsadas ddas das sa dasdasdasdasdasd <p>dsadasdasdasdasd</p>', 'localhost:8080'),
(45, 1, '', '', '', '0000-00-00 00:00:00', '', '', ''),
(46, 1, 'testingupload img', '', '', '0000-00-00 00:00:00', '', '', ''),
(47, 2, 'dsdasdas', 'boat_01.jpeg', 'dsadasdasd', '2018-12-20 08:13:00', 'dsadsa, dsadas, dasdas, dasdasd', '<p>dasdasdasd dasdasdas dasdas das</p>', 'localhost:4200'),
(48, 1, 'testingupload img', '227114.jpg', '', '0000-00-00 00:00:00', '', '', ''),
(49, 1, 'testingupload img', '846699.jpg', '', '0000-00-00 00:00:00', '', '', ''),
(50, 1, 'testingupload img', '944872.jpg', '', '0000-00-00 00:00:00', '', '', ''),
(51, 1, 'testingupload img', '798487.jpg', '', '0000-00-00 00:00:00', '', '', ''),
(60, 1, 'testingupload img', '387179.jpg', 'testingupload', '2018-12-20 00:00:00', 'testing, testing, testing123', '<p>dsadasd dsadasdas dasdasdasd</p>', 'localhost:4200'),
(61, 2, 'dasdsa', '368788.jpg', 'dsdasdasdasd', '0000-00-00 00:00:00', 'dsadasd dsdsad', '<p>dasdasdas</p>\n', 'dsadasd'),
(62, 2, 'phonecasr', '439155.jpg', 'asus', '2018-12-21 17:22:00', 'playing, waching, smil, happy', '<p>dsasdasdasdas</p>\n', 'localhost:8080'),
(63, 2, 'sadasdsadsad', '753601.jpg', 'dsdasdasdasd', '0000-00-00 00:00:00', 'dasd ,dsadas ,dasdasd ,dasdas das,', '<p>dsadasdas</p>\n', 'dasdsad'),
(64, 5, 'Portfolio Add', '72312.jpg', 'dasdasdas', '0000-00-00 00:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasdasda</p>\n', 'localhost:8080'),
(66, 2, 'admin testing', '961864.jpg', 'dsdasdasdasd', '2018-12-22 12:12:00', 'php, mysql, ng ', '<p>dsadadsa</p>\n', 'localhost:8080'),
(67, 2, 'cahrging adaptor', '60560.jpg', 'Mia1 ', '2018-12-22 12:19:00', 'ionic, angular cli, slim framwork, mysql', '<h2><strong>Hello EveryBody</strong></h2>\n\n<p>this is demp app using ionic framwork and backend slim php rest api which is server fast ans smooth working.</p>\n', 'localhost:8080'),
(68, 2, 'cahrging adaptor', '333255.jpg', 'Mia1 ', '2018-12-22 12:19:00', 'ionic, angular cli, slim framwork, mysql', '<h2><strong>Hello EveryBody</strong></h2>\n\n<p>this is demp app using ionic framwork and backend slim php rest api which is server fast ans smooth working.</p>\n', 'localhost:8080'),
(70, 2, 'cahrging adaptor10', '225894.jpg', 'Mia1 ', '2018-12-22 12:19:00', 'ionic, angular cli, slim framwork, mysql', '<h2><strong>Hello EveryBody</strong></h2>\n\n<p>this is demp app using ionic framwork and backend slim php rest api which is server fast ans smooth working.</p>\n', 'localhost:8080'),
(71, 3, 'last try demo', 'C:\\fakepath\\Penguins.jpg', 'dsdasdasdasd rtyyy demo', '2018-12-22 12:26:00', 'dasd ,dsadas ,dasdasd ,dasdas das,as', '<p>dsadasdas rttry demo</p>\n', 'localhost:8080'),
(76, 1, 'dsadasdas', '262391.', 'dsdasdasdasd', '0000-00-00 00:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dassadasd</p>\n', 'dasdsad'),
(77, 3, 'dsadasdasdasdas', '673341.', 'dasdasdasdasd', '2018-12-23 10:00:00', 'php, mysql, ng ', '<p>dsadasdas</p>\n', 'localhost:8080'),
(78, 1, 'dsadasdas', '46815.', 'dsdasdasdasd', '2018-12-23 10:02:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsas</p>\n', 'localhost:8080'),
(79, 2, 'dsadasdas', '478774.', 'dsdasdasdasd', '0000-00-00 00:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasd</p>\n', 'localhost:8080'),
(80, 1, 'dsadasdas', '819372.', 'dsdasdasdasd', '0000-00-00 00:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasdas</p>\n', 'localhost:8080'),
(81, 2, 'testing123654', '399969.', 'testing321', '2018-12-23 01:08:00', 'php, mysql, ng ', '<p>dsaasdasd</p>\n', 'localhost:8080'),
(82, 1, 'dasdasdasd', '297720.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(83, 1, 'dasdasdasd', '421460.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(84, 1, 'dasdasdasd', '531225.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(85, 1, 'dasdasdasd', '307214.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(86, 1, 'dasdasdasd', '252306.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(87, 2, 'estingt', '242527.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(88, 2, 'estingt', '343945.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(89, 2, 'estingt', '737463.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(90, 2, 'estingt', '925585.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(91, 2, 'estingt', '909049.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(92, 2, 'estingt', '765962.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(93, 2, 'estingt', '752572.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(94, 2, 'estingt', '591806.jpg', 'dsadasd', '0201-12-20 00:00:00', 'asdas, dasdas, dsadasd, dsadas', 'testing', 'localhost:8080'),
(95, 1, 'dsadasdas', '461017.', 'dsdasdasdasd', '0000-00-00 00:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasd</p>\n', 'localhost:8080'),
(96, 1, 'dsadasdas', '241952.', 'dsdasdasdasd', '0000-00-00 00:00:00', 'dasdasdsadas', '<p>dsdasda</p>\n', 'localhost:8080'),
(97, 2, 'dsadasdasd', '987588.', 'dsadasdasdasd', '0000-00-00 00:00:00', 'asdasd, dsad , dsadasd, dsa dasd', '<p>dsadasdas</p>\n', 'localhost:8080'),
(98, 1, 'eqeqweqwe', '284304.', 'ewqeqweqw', '0000-00-00 00:00:00', 'ewqewqeqwe', '<p>eqweqwewqe</p>\n', 'localhost:8080'),
(99, 2, 'dsadasdas', '623409.', '32132112', '0000-00-00 00:00:00', 'eqweqwewq', '<p>eqweqwewq</p>\n', 'localhost:8080'),
(110, 0, '', '', '', '0000-00-00 00:00:00', '', '', ''),
(111, 0, '', '', '', '0000-00-00 00:00:00', '', '', ''),
(112, 0, '', '', '', '0000-00-00 00:00:00', '', '', ''),
(113, 0, '', '', '', '0000-00-00 00:00:00', '', '', ''),
(114, 2, 'afklasdnlasdlnasl', 'IMG-20141014-WA0003.jpg', 'nasnaslcnas', '0000-00-00 00:00:00', ';gmd;lm;ldmv;ldvdnv;ldv', '<p>nas;lcas;lcm;lasmc;las csmc;las ;lcasm;lcas m;lcsam</p>\n', 'dsadasdasdas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_mst`
--
ALTER TABLE `admin_mst`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `category_mst`
--
ALTER TABLE `category_mst`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `education_mst`
--
ALTER TABLE `education_mst`
  ADD PRIMARY KEY (`educ_id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`exprience_id`);

--
-- Indexes for table `pages_mst`
--
ALTER TABLE `pages_mst`
  ADD PRIMARY KEY (`page_id`);

--
-- Indexes for table `portfolio_mst`
--
ALTER TABLE `portfolio_mst`
  ADD PRIMARY KEY (`port_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_mst`
--
ALTER TABLE `admin_mst`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `category_mst`
--
ALTER TABLE `category_mst`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `education_mst`
--
ALTER TABLE `education_mst`
  MODIFY `educ_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `exprience_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pages_mst`
--
ALTER TABLE `pages_mst`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `portfolio_mst`
--
ALTER TABLE `portfolio_mst`
  MODIFY `port_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
