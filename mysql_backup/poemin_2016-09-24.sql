# ************************************************************
# Sequel Pro SQL dump
# Version 4499
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.10)
# Database: poemin
# Generation Time: 2016-09-23 16:19:42 +0000
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
  `content` longtext COMMENT '正文',
  `dynastyId` int(11) DEFAULT NULL COMMENT '朝代id',
  `dynasty` varchar(10) DEFAULT NULL COMMENT '朝代',
  `ad_year` int(5) DEFAULT NULL COMMENT '公元年',
  `translateText` longtext COMMENT '译文',
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
	(2,'离骚',22,'屈原',NULL,'帝高阳之苗裔兮，朕皇考曰伯庸。\n摄提贞于孟陬兮，惟庚寅吾以降。\n皇览揆余初度兮，肇锡余以嘉名：\n名余曰正则兮，字余曰灵均。\n纷吾既有此内美兮，又重之以修能。\n扈江离与辟芷兮，纫秋兰以为佩。\n汨余若将不及兮，恐年岁之不吾与。\n朝搴阰之木兰兮，夕揽洲之宿莽。\n日月忽其不淹兮，春与秋其代序。\n惟草木之零落兮，恐美人之迟暮。(惟 通：唯)\n不抚壮而弃秽兮，何不改乎此度?\n乘骐骥以驰骋兮，来吾道夫先路！\n昔三后之纯粹兮，固众芳之所在。\n杂申椒与菌桂兮，岂惟纫夫蕙茝！\n彼尧、舜之耿介兮，既遵道而得路。\n何桀纣之猖披兮，夫惟捷径以窘步。\n惟夫党人之偷乐兮，路幽昧以险隘。\n岂余身之殚殃兮，恐皇舆之败绩！\n忽奔走以先后兮，及前王之踵武。\n荃不查余之中情兮，反信谗而齌怒。\n余固知謇謇之为患兮，忍而不能舍也。\n指九天以为正兮，夫惟灵修之故也。\n曰黄昏以为期兮，羌中道而改路！\n初既与余成言兮，后悔遁而有他。\n余既不难夫离别兮，伤灵修之数化。\n余既滋兰之九畹兮，又树蕙之百亩。\n畦留夷与揭车兮，杂杜衡与芳芷。\n冀枝叶之峻茂兮，愿俟时乎吾将刈。\n虽萎绝其亦何伤兮，哀众芳之芜秽。\n众皆竞进以贪婪兮，凭不厌乎求索。\n羌内恕己以量人兮，各兴心而嫉妒。\n忽驰骛以追逐兮，非余心之所急。\n老冉冉其将至兮，恐修名之不立。\n朝饮木兰之坠露兮，夕餐秋菊之落英。\n苟余情其信姱以练要兮，长顑颔亦何伤。\n掔木根以结茞兮，贯薜荔之落蕊。\n矫菌桂以纫蕙兮，索胡绳之纚纚。\n謇吾法夫前修兮，非世俗之所服。\n虽不周于今之人兮，愿依彭咸之遗则。\n长太息以掩涕兮，哀民生之多艰。\n余虽好修姱以鞿羁兮，謇朝谇而夕替。\n既替余以蕙纕兮，又申之以揽茝。\n亦余心之所善兮，虽九死其犹未悔。\n怨灵修之浩荡兮，终不察夫民心。\n众女嫉余之蛾眉兮，谣诼谓余以善淫。\n固时俗之工巧兮，偭规矩而改错。\n背绳墨以追曲兮，竞周容以为度。\n忳郁邑余侘傺兮，吾独穷困乎此时也。\n宁溘死以流亡兮，余不忍为此态也。\n鸷鸟之不群兮，自前世而固然。\n何方圜之能周兮，夫孰异道而相安？\n屈心而抑志兮，忍尤而攘诟。\n伏清白以死直兮，固前圣之所厚。\n悔相道之不察兮，延伫乎吾将反。\n回朕车以复路兮，及行迷之未远。\n步余马于兰皋兮，驰椒丘且焉止息。\n进不入以离尤兮，退将复修吾初服。\n制芰荷以为衣兮，集芙蓉以为裳。\n不吾知其亦已兮，苟余情其信芳。\n高余冠之岌岌兮，长余佩之陆离。\n芳与泽其杂糅兮，唯昭质其犹未亏。\n忽反顾以游目兮，将往观乎四荒。\n佩缤纷其繁饰兮，芳菲菲其弥章。\n民生各有所乐兮，余独好修以为常。\n虽体解吾犹未变兮，岂余心之可惩。\n女嬃之婵媛兮，申申其詈予，曰：\n「鲧婞直以亡身兮，终然夭乎羽之野。\n汝何博謇而好修兮，纷独有此姱节？\n薋菉葹以盈室兮，判独离而不服。」\n众不可户说兮，孰云察余之中情？\n世并举而好朋兮，夫何茕独而不予听？\n依前圣以节中兮，喟凭心而历兹。\n济沅、湘以南征兮，就重华而敶词：\n启《九辩》与《九歌》兮，夏康娱以自纵。\n不顾难以图后兮，五子用失乎家衖。\n羿淫游以佚畋兮，又好射夫封狐。\n固乱流其鲜终兮，浞又贪夫厥家。\n浇身被服强圉兮，纵欲而不忍。\n日康娱而自忘兮，厥首用夫颠陨。\n夏桀之常违兮，乃遂焉而逢殃。\n后辛之菹醢兮，殷宗用而不长。\n汤、禹俨而祗敬兮，周论道而莫差。\n举贤才而授能兮，循绳墨而不颇。\n皇天无私阿兮，览民德焉错辅。\n夫维圣哲以茂行兮，苟得用此下土。\n瞻前而顾后兮，相观民之计极。\n夫孰非义而可用兮？孰非善而可服？\n阽余身而危死兮，览余初其犹未悔。\n不量凿而正枘兮，固前修以菹醢。\n曾歔欷余郁邑兮，哀朕时之不当。\n揽茹蕙以掩涕兮，沾余襟之浪浪。\n跪敷衽以陈辞兮，耿吾既得此中正。\n驷玉虬以桀鹥兮，溘埃风余上征。\n朝发轫于苍梧兮，夕余至乎县圃。\n欲少留此灵琐兮，日忽忽其将暮。\n吾令羲和弭节兮，望崦嵫而勿迫。\n路漫漫其修远兮，吾将上下而求索。\n饮余马于咸池兮，总余辔乎扶桑。\n折若木以拂日兮，聊逍遥以相羊。\n前望舒使先驱兮，后飞廉使奔属。\n鸾皇为余先戒兮，雷师告余以未具。\n吾令凤鸟飞腾兮，继之以日夜。\n飘风屯其相离兮，帅云霓而来御。\n纷总总其离合兮，斑陆离其上下。\n吾令帝阍开关兮，倚阊阖而望予。\n时暧暧其将罢兮，结幽兰而延伫。\n世溷浊而不分兮，好蔽美而嫉妒。\n朝吾将济于白水兮，登阆风而绁马。\n忽反顾以流涕兮，哀高丘之无女。\n溘吾游此春宫兮，折琼枝以继佩。\n及荣华之未落兮，相下女之可诒。\n吾令丰隆乘云兮，求宓妃之所在。\n解佩纕以结言兮，吾令謇修以为理。\n纷总总其离合兮，忽纬繣其难迁。\n夕归次于穷石兮，朝濯发乎洧盘。\n保厥美以骄傲兮，日康娱以淫游。\n虽信美而无礼兮，来违弃而改求。\n览相观于四极兮，周流乎天余乃下。\n望瑶台之偃蹇兮，见有娀之佚女。\n吾令鸩为媒兮，鸩告余以不好。\n雄鸠之鸣逝兮，余犹恶其佻巧。\n心犹豫而狐疑兮，欲自适而不可。\n凤皇既受诒兮，恐高辛之先我。\n欲远集而无所止兮，聊浮游以逍遥。\n及少康之未家兮，留有虞之二姚。\n理弱而媒拙兮，恐导言之不固。\n世溷浊而嫉贤兮，好蔽美而称恶。\n闺中既以邃远兮，哲王又不寤。\n怀朕情而不发兮，余焉能忍而与此终古？\n索琼茅以筳篿兮，命灵氛为余占之。\n曰：「两美其必合兮，孰信修而慕之？\n思九州之博大兮，岂惟是其有女？」\n曰：「勉远逝而无狐疑兮，孰求美而释女？\n何所独无芳草兮，尔何怀乎故宇？」\n世幽昧以昡曜兮，孰云察余之善恶？\n民好恶其不同兮，惟此党人其独异！\n户服艾以盈要兮，谓幽兰其不可佩。\n览察草木其犹未得兮，岂珵美之能当？\n苏粪壤以充祎兮，谓申椒其不芳。\n欲从灵氛之吉占兮，心犹豫而狐疑。\n巫咸将夕降兮，怀椒糈而要之。\n百神翳其备降兮，九疑缤其并迎。\n皇剡剡其扬灵兮，告余以吉故。\n曰：「勉升降以上下兮，求矩矱之所同。\n汤、禹俨而求合兮，挚、咎繇而能调。\n苟中情其好修兮，又何必用夫行媒？\n说操筑于傅岩兮，武丁用而不疑。\n吕望之鼓刀兮，遭周文而得举。\n宁戚之讴歌兮，齐桓闻以该辅。\n及年岁之未晏兮，时亦犹其未央。\n恐鹈鴃之先鸣兮，使夫百草为之不芳。」\n何琼佩之偃蹇兮，众薆然而蔽之。\n惟此党人之不谅兮，恐嫉妒而折之。\n时缤纷其变易兮，又何可以淹留？\n兰芷变而不芳兮，荃蕙化而为茅。\n何昔日之芳草兮，今直为此萧艾也？\n岂其有他故兮，莫好修之害也！\n余以兰为可恃兮，羌无实而容长。\n委厥美以从俗兮，苟得列乎众芳。\n椒专佞以慢慆兮，樧又欲充夫佩帏。\n既干进而务入兮，又何芳之能祗？\n固时俗之流从兮，又孰能无变化？\n览椒兰其若兹兮，又况揭车与江离？\n惟兹佩之可贵兮，委厥美而历兹。\n芳菲菲而难亏兮，芬至今犹未沬。\n和调度以自娱兮，聊浮游而求女。\n及余饰之方壮兮，周流观乎上下。\n灵氛既告余以吉占兮，历吉日乎吾将行。\n折琼枝以为羞兮，精琼爢以为粻。\n为余驾飞龙兮，杂瑶象以为车。\n何离心之可同兮？吾将远逝以自疏。\n邅吾道夫昆仑兮，路修远以周流。\n扬云霓之晻蔼兮，鸣玉鸾之啾啾。\n朝发轫于天津兮，夕余至乎西极。\n凤皇翼其承旗兮，高翱翔之翼翼。\n忽吾行此流沙兮，遵赤水而容与。\n麾蛟龙使梁津兮，诏西皇使涉予。\n路修远以多艰兮，腾众车使径待。\n路不周以左转兮，指西海以为期。\n屯余车其千乘兮，齐玉轪而并驰。\n驾八龙之婉婉兮，载云旗之委蛇。\n抑志而弭节兮，神高驰之邈邈。\n奏《九歌》而舞《韶》兮，聊假日以偷乐。\n陟升皇之赫戏兮，忽临睨夫旧乡。\n仆夫悲余马怀兮，蜷局顾而不行。\n乱曰：已矣哉！\n国无人莫我知兮，又何怀乎故都！\n既莫足与为美政兮，吾将从彭咸之所居！',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(3,'再别康桥',NULL,'徐志摩',NULL,'轻轻的我走了，\n正如我轻轻的来；\n我轻轻的招手，\n作别西天的云彩。\n　\n那河畔的金柳，\n是夕阳中的新娘；\n波光里的艳影，\n在我的心头荡漾。\n　\n软泥上的青荇，\n油油的在水底招摇；\n在康河的柔波里，\n我甘心做一条水草！\n　\n那榆荫下的一潭，\n不是清泉，\n是天上虹；\n揉碎在浮藻间，\n沉淀着彩虹似的梦。\n　\n寻梦？撑一支长篙，\n向青草更青处漫溯；\n满载一船星辉，\n在星辉斑斓里放歌。\n　\n但我不能放歌，\n悄悄是别离的笙箫；\n夏虫也为我沉默，\n沉默是今晚的康桥！\n　\n悄悄的我走了，\n正如我悄悄的来；\n我挥一挥衣袖，\n不带走一片云彩。\n\n1928.11.6 中国海上',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(4,'越人歌',NULL,'佚名',NULL,'今夕何夕兮，搴舟中流。\n今日何日兮，得与王子同舟。\n蒙羞被好兮，不訾诟耻。\n心几烦而不绝兮，得知王子。\n山有木兮木有枝，心悦君兮君不知。',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(5,'静夜思',NULL,'李白',NULL,'床前明月光，疑是地上霜。\n举头望明月，低头思故乡。',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(6,'断章',NULL,'卞之琳',NULL,'你站在桥上看风景\n看风景的人在楼上看你\n明月装饰了你的窗子\n你装饰了别人的梦',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(7,'当你老了',NULL,'叶芝',NULL,'当你老了',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(8,'相信未来',NULL,'食指',NULL,'当蜘蛛网',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(9,'面朝大海 春暖花开',NULL,'海子',NULL,'从明天起',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(10,'见与不见',NULL,'仓央嘉措',NULL,'你见，或者不见我',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(11,'雨巷',NULL,'戴望舒',NULL,'撑着油纸伞，独自\n彷徨在悠长、悠长\n又寂寥的雨巷，\n我希望逢着\n一个丁香一样的\n结着愁怨的姑娘。\n她是有\n丁香一样的颜色，\n丁香一样的芬芳，\n丁香一样的忧愁，\n在雨中哀怨，\n哀怨又彷徨；\n她彷徨在寂寥的雨巷，\n撑着油纸伞\n像我一样，\n像我一样地\n默默彳亍着\n冷漠、凄清，又惆怅。\n她默默地走近，\n走近，又投出\n太息一般的眼光\n她飘过\n像梦一般地，\n像梦一般地凄婉迷茫。\n像梦中飘过\n一枝丁香地，\n我身旁飘过这个女郎；\n她静默地远了，远了，\n到了颓圮的篱墙，\n走尽这雨巷。\n在雨的哀曲里，\n消了她的颜色，\n散了她的芬芳，\n消散了，甚至她的\n太息般的眼光\n丁香般的惆怅。\n撑着油纸伞，独自\n彷徨在悠长、悠长\n又寂寥的雨巷，\n我希望飘过\n一个丁香一样的\n结着愁怨的姑娘。',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(12,'蒹葭',NULL,'佚名',NULL,'蒹葭苍苍',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(13,'你是人间四月天',NULL,'林徽因',NULL,'我说你是人间的四月天',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(14,'错误',NULL,'郑愁予',NULL,'我打江南走过',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(15,'乡愁',NULL,'余光中',NULL,'小时侯\n乡愁是一枚小小的邮票\n我在这头\n母亲在那头\n长大后\n乡愁是一张窄窄的船票\n我在这头\n新娘在那头\n后来呵\n乡愁是一方矮矮的坟墓\n我在外头\n母亲呵在里头\n而现在\n乡愁是一湾浅浅的海峡\n我在这头\n大陆在那头',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

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
