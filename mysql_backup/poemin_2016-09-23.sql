# ************************************************************
# Sequel Pro SQL dump
# Version 4499
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.10)
# Database: poemin
# Generation Time: 2016-09-23 07:57:04 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table dynasty
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dynasty`;

CREATE TABLE `dynasty` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL COMMENT '朝代名称',
  `year_start` int(5) DEFAULT NULL COMMENT '开始年份',
  `year_end` int(5) DEFAULT NULL COMMENT '结束年份',
  `year_text` varchar(20) DEFAULT NULL COMMENT '年份文本',
  `year_num` tinyint(4) DEFAULT NULL COMMENT '年数',
  `poetId` text COMMENT '诗人id数组',
  `poetName` text COMMENT '诗人名字数组',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `dynasty` WRITE;
/*!40000 ALTER TABLE `dynasty` DISABLE KEYS */;

INSERT INTO `dynasty` (`id`, `name`, `year_start`, `year_end`, `year_text`, `year_num`, `poetId`, `poetName`)
VALUES
	(1,'先秦',NULL,-221,'公元前21世纪--公元前221年',NULL,'[1,2,3]','[\'屈原\',\'宋玉\',\'荆轲\']');

/*!40000 ALTER TABLE `dynasty` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table poems
# ------------------------------------------------------------

DROP TABLE IF EXISTS `poems`;

CREATE TABLE `poems` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL COMMENT '名字',
  `authorId` int(11) DEFAULT NULL COMMENT '作者id',
  `authorName` varchar(30) DEFAULT NULL COMMENT '作者',
  `collection` varchar(30) DEFAULT NULL COMMENT '诗集',
  `content` varchar(500) DEFAULT '' COMMENT '正文',
  `dynastyId` int(11) DEFAULT NULL COMMENT '朝代id',
  `dynasty` varchar(10) DEFAULT NULL COMMENT '朝代',
  `ad_year` int(5) DEFAULT NULL COMMENT '公元年',
  `translateText` varchar(500) DEFAULT NULL COMMENT '译文',
  `updatetime` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  `annotation` mediumtext COMMENT '注释',
  `reference` mediumtext COMMENT '参考',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `poems` WRITE;
/*!40000 ALTER TABLE `poems` DISABLE KEYS */;

INSERT INTO `poems` (`id`, `title`, `authorId`, `authorName`, `collection`, `content`, `dynastyId`, `dynasty`, `ad_year`, `translateText`, `updatetime`, `annotation`, `reference`)
VALUES
	(1,'关雎',122,'佚名','《诗经》','关关雎鸠，在河之洲。\n窈窕淑女，君子好逑。\n参差荇菜，左右流之。\n窈窕淑女，寤寐求之。\n求之不得，寤寐思服。\n悠哉悠哉，辗转反侧。\n参差荇菜，左右采之。\n窈窕淑女，琴瑟友之。\n参差荇菜，左右芼之。\n窈窕淑女，钟鼓乐之。',1,'先秦',-1200,'关关和鸣的雎鸠，相伴在河中的小洲。\n那美丽贤淑的女子，是君子的好配偶。\n参差不齐的荇菜，从左到右去捞它。\n那美丽贤淑的女子，醒来睡去都想追求她。\n追求却没法得到，白天黑夜便总思念她。\n长长的思念哟，叫人翻来覆去难睡下。\n参差不齐的荇菜，从左到右去采它。\n那美丽贤淑的女子，奏起琴瑟来亲近她。\n参差不齐的荇菜，从左到右去拔它。\n那美丽贤淑的女子，敲起钟鼓来取悦她。',NULL,'⑴关关：象声词，雌雄二鸟相互应和的叫声。雎鸠（jū jiū）：一种水鸟名，即王鴡。\n⑵洲：水中的陆地。\n⑶窈窕（yǎo tiǎo）淑女：贤良美好的女子。窈窕，身材体态美好的样子。窈，深邃，喻女子心灵美；窕，幽美，喻女子仪表美。淑，好，善良。\n⑷好逑（hǎo qiú）：好的配偶。逑，“仇”的假借字，匹配。\n⑸参差：长短不齐的样子。荇（xìng）菜：水草类植物。圆叶细茎，根生水底，叶浮在水面，可供食用。\n⑹左右流之：时而向左、时而向右地择取荇菜。这里是以勉力求取荇菜，隐喻“君子”努力追求“淑女”。流，义同“求”，这里指摘取。之：指荇菜。\n⑺寤寐（wù mèi）：醒和睡。指日夜。寤，醒觉。寐，入睡。又，马瑞辰《毛诗传笺注通释》说：“寤寐，犹梦寐。”也可通。\n⑻思服：思念。服，想。 《毛传》：“服，思之也。”\n⑼悠哉（yōu zāi）悠哉：意为“悠悠”，就是长。这句是说思念绵绵不断。悠，感思。见《尔雅·释诂》郭璞注。哉，语气助词。悠哉悠哉，犹言“想念呀，想念呀”。\n⑽辗转反侧：翻覆不能入眠。辗，古字作展。展转，即反侧。反侧，犹翻覆。\n⑾琴瑟友之：弹琴鼓瑟来亲近她。琴、瑟，皆弦乐器。琴五或七弦，瑟二十五或五十弦。友：用作动词，此处有亲近之意。这句说，用琴瑟来亲近“淑女”。\n⑿芼（mào）：择取，挑选。\n⒀钟鼓乐之：用钟奏乐来使她快乐。乐，使动用法，使……快乐。','1、骆玉明 等．先秦诗鉴赏辞典．上海：上海辞书出版社，1998：1-6．\n2、朱熹．诗经集传．上海：上海古籍出版社，1987：1-2．'),
	(2,'离骚',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `poems` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table poets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `poets`;

CREATE TABLE `poets` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) DEFAULT NULL COMMENT '用户名',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(15) DEFAULT NULL COMMENT '手机',
  `nickName` varchar(20) DEFAULT NULL COMMENT '昵称',
  `penName` varchar(20) DEFAULT NULL COMMENT '笔名',
  `realName` varchar(20) DEFAULT NULL COMMENT '真实姓名',
  `vInfo` varchar(20) DEFAULT NULL COMMENT '认证信息',
  `sex` tinyint(1) DEFAULT NULL COMMENT '性别',
  `age` tinyint(100) DEFAULT NULL COMMENT '年龄',
  `homePage` varchar(30) DEFAULT NULL COMMENT '主页/博客',
  `city` varchar(8) DEFAULT NULL COMMENT '城市',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `userName`, `email`, `phone`, `nickName`, `penName`, `realName`, `vInfo`, `sex`, `age`, `homePage`, `city`, `address`)
VALUES
	(1,'木有枝','878877528@qq.com',NULL,'木有枝',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),
	(2,'冯唐',NULL,NULL,'冯唐','冯唐','张海鹏','诗人',NULL,NULL,'fengtang.com','北京',NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
