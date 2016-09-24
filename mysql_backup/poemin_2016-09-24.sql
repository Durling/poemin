# ************************************************************
# Sequel Pro SQL dump
# Version 4499
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.10)
# Database: poemin
# Generation Time: 2016-09-24 13:45:48 +0000
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
  `countryId` int(11) DEFAULT NULL COMMENT '国家id',
  `famous` tinyint(1) DEFAULT NULL COMMENT '是否著名',
  `magnum_opus` tinyint(1) DEFAULT NULL COMMENT '是否代表作',
  `country` varchar(10) DEFAULT NULL COMMENT '国家',
  `time_place` varchar(20) DEFAULT NULL COMMENT '时间地点',
  `ad_year` int(5) DEFAULT NULL COMMENT '公元年',
  `translateText` longtext COMMENT '译文',
  `updatetime` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  `annotation` mediumtext COMMENT '注释',
  `reference` mediumtext COMMENT '参考',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `poems` WRITE;
/*!40000 ALTER TABLE `poems` DISABLE KEYS */;

INSERT INTO `poems` (`id`, `title`, `authorId`, `authorName`, `collection`, `content`, `dynastyId`, `dynasty`, `countryId`, `famous`, `magnum_opus`, `country`, `time_place`, `ad_year`, `translateText`, `updatetime`, `annotation`, `reference`)
VALUES
	(1,'关雎',122,'佚名','《诗经》','关关雎鸠，在河之洲。\n窈窕淑女，君子好逑。\n参差荇菜，左右流之。\n窈窕淑女，寤寐求之。\n求之不得，寤寐思服。\n悠哉悠哉，辗转反侧。\n参差荇菜，左右采之。\n窈窕淑女，琴瑟友之。\n参差荇菜，左右芼之。\n窈窕淑女，钟鼓乐之。',1,'先秦',NULL,1,NULL,NULL,NULL,-1200,'关关和鸣的雎鸠，相伴在河中的小洲。\n那美丽贤淑的女子，是君子的好配偶。\n参差不齐的荇菜，从左到右去捞它。\n那美丽贤淑的女子，醒来睡去都想追求她。\n追求却没法得到，白天黑夜便总思念她。\n长长的思念哟，叫人翻来覆去难睡下。\n参差不齐的荇菜，从左到右去采它。\n那美丽贤淑的女子，奏起琴瑟来亲近她。\n参差不齐的荇菜，从左到右去拔它。\n那美丽贤淑的女子，敲起钟鼓来取悦她。',NULL,'⑴关关：象声词，雌雄二鸟相互应和的叫声。雎鸠（jū jiū）：一种水鸟名，即王鴡。\n⑵洲：水中的陆地。\n⑶窈窕（yǎo tiǎo）淑女：贤良美好的女子。窈窕，身材体态美好的样子。窈，深邃，喻女子心灵美；窕，幽美，喻女子仪表美。淑，好，善良。\n⑷好逑（hǎo qiú）：好的配偶。逑，“仇”的假借字，匹配。\n⑸参差：长短不齐的样子。荇（xìng）菜：水草类植物。圆叶细茎，根生水底，叶浮在水面，可供食用。\n⑹左右流之：时而向左、时而向右地择取荇菜。这里是以勉力求取荇菜，隐喻“君子”努力追求“淑女”。流，义同“求”，这里指摘取。之：指荇菜。\n⑺寤寐（wù mèi）：醒和睡。指日夜。寤，醒觉。寐，入睡。又，马瑞辰《毛诗传笺注通释》说：“寤寐，犹梦寐。”也可通。\n⑻思服：思念。服，想。 《毛传》：“服，思之也。”\n⑼悠哉（yōu zāi）悠哉：意为“悠悠”，就是长。这句是说思念绵绵不断。悠，感思。见《尔雅·释诂》郭璞注。哉，语气助词。悠哉悠哉，犹言“想念呀，想念呀”。\n⑽辗转反侧：翻覆不能入眠。辗，古字作展。展转，即反侧。反侧，犹翻覆。\n⑾琴瑟友之：弹琴鼓瑟来亲近她。琴、瑟，皆弦乐器。琴五或七弦，瑟二十五或五十弦。友：用作动词，此处有亲近之意。这句说，用琴瑟来亲近“淑女”。\n⑿芼（mào）：择取，挑选。\n⒀钟鼓乐之：用钟奏乐来使她快乐。乐，使动用法，使……快乐。','1、骆玉明 等．先秦诗鉴赏辞典．上海：上海辞书出版社，1998：1-6．\n2、朱熹．诗经集传．上海：上海古籍出版社，1987：1-2．'),
	(2,'离骚',22,'屈原',NULL,'帝高阳之苗裔兮，朕皇考曰伯庸。\n摄提贞于孟陬兮，惟庚寅吾以降。\n皇览揆余初度兮，肇锡余以嘉名：\n名余曰正则兮，字余曰灵均。\n纷吾既有此内美兮，又重之以修能。\n扈江离与辟芷兮，纫秋兰以为佩。\n汨余若将不及兮，恐年岁之不吾与。\n朝搴阰之木兰兮，夕揽洲之宿莽。\n日月忽其不淹兮，春与秋其代序。\n惟草木之零落兮，恐美人之迟暮。(惟 通：唯)\n不抚壮而弃秽兮，何不改乎此度?\n乘骐骥以驰骋兮，来吾道夫先路！\n昔三后之纯粹兮，固众芳之所在。\n杂申椒与菌桂兮，岂惟纫夫蕙茝！\n彼尧、舜之耿介兮，既遵道而得路。\n何桀纣之猖披兮，夫惟捷径以窘步。\n惟夫党人之偷乐兮，路幽昧以险隘。\n岂余身之殚殃兮，恐皇舆之败绩！\n忽奔走以先后兮，及前王之踵武。\n荃不查余之中情兮，反信谗而齌怒。\n余固知謇謇之为患兮，忍而不能舍也。\n指九天以为正兮，夫惟灵修之故也。\n曰黄昏以为期兮，羌中道而改路！\n初既与余成言兮，后悔遁而有他。\n余既不难夫离别兮，伤灵修之数化。\n余既滋兰之九畹兮，又树蕙之百亩。\n畦留夷与揭车兮，杂杜衡与芳芷。\n冀枝叶之峻茂兮，愿俟时乎吾将刈。\n虽萎绝其亦何伤兮，哀众芳之芜秽。\n众皆竞进以贪婪兮，凭不厌乎求索。\n羌内恕己以量人兮，各兴心而嫉妒。\n忽驰骛以追逐兮，非余心之所急。\n老冉冉其将至兮，恐修名之不立。\n朝饮木兰之坠露兮，夕餐秋菊之落英。\n苟余情其信姱以练要兮，长顑颔亦何伤。\n掔木根以结茞兮，贯薜荔之落蕊。\n矫菌桂以纫蕙兮，索胡绳之纚纚。\n謇吾法夫前修兮，非世俗之所服。\n虽不周于今之人兮，愿依彭咸之遗则。\n长太息以掩涕兮，哀民生之多艰。\n余虽好修姱以鞿羁兮，謇朝谇而夕替。\n既替余以蕙纕兮，又申之以揽茝。\n亦余心之所善兮，虽九死其犹未悔。\n怨灵修之浩荡兮，终不察夫民心。\n众女嫉余之蛾眉兮，谣诼谓余以善淫。\n固时俗之工巧兮，偭规矩而改错。\n背绳墨以追曲兮，竞周容以为度。\n忳郁邑余侘傺兮，吾独穷困乎此时也。\n宁溘死以流亡兮，余不忍为此态也。\n鸷鸟之不群兮，自前世而固然。\n何方圜之能周兮，夫孰异道而相安？\n屈心而抑志兮，忍尤而攘诟。\n伏清白以死直兮，固前圣之所厚。\n悔相道之不察兮，延伫乎吾将反。\n回朕车以复路兮，及行迷之未远。\n步余马于兰皋兮，驰椒丘且焉止息。\n进不入以离尤兮，退将复修吾初服。\n制芰荷以为衣兮，集芙蓉以为裳。\n不吾知其亦已兮，苟余情其信芳。\n高余冠之岌岌兮，长余佩之陆离。\n芳与泽其杂糅兮，唯昭质其犹未亏。\n忽反顾以游目兮，将往观乎四荒。\n佩缤纷其繁饰兮，芳菲菲其弥章。\n民生各有所乐兮，余独好修以为常。\n虽体解吾犹未变兮，岂余心之可惩。\n女嬃之婵媛兮，申申其詈予，曰：\n「鲧婞直以亡身兮，终然夭乎羽之野。\n汝何博謇而好修兮，纷独有此姱节？\n薋菉葹以盈室兮，判独离而不服。」\n众不可户说兮，孰云察余之中情？\n世并举而好朋兮，夫何茕独而不予听？\n依前圣以节中兮，喟凭心而历兹。\n济沅、湘以南征兮，就重华而敶词：\n启《九辩》与《九歌》兮，夏康娱以自纵。\n不顾难以图后兮，五子用失乎家衖。\n羿淫游以佚畋兮，又好射夫封狐。\n固乱流其鲜终兮，浞又贪夫厥家。\n浇身被服强圉兮，纵欲而不忍。\n日康娱而自忘兮，厥首用夫颠陨。\n夏桀之常违兮，乃遂焉而逢殃。\n后辛之菹醢兮，殷宗用而不长。\n汤、禹俨而祗敬兮，周论道而莫差。\n举贤才而授能兮，循绳墨而不颇。\n皇天无私阿兮，览民德焉错辅。\n夫维圣哲以茂行兮，苟得用此下土。\n瞻前而顾后兮，相观民之计极。\n夫孰非义而可用兮？孰非善而可服？\n阽余身而危死兮，览余初其犹未悔。\n不量凿而正枘兮，固前修以菹醢。\n曾歔欷余郁邑兮，哀朕时之不当。\n揽茹蕙以掩涕兮，沾余襟之浪浪。\n跪敷衽以陈辞兮，耿吾既得此中正。\n驷玉虬以桀鹥兮，溘埃风余上征。\n朝发轫于苍梧兮，夕余至乎县圃。\n欲少留此灵琐兮，日忽忽其将暮。\n吾令羲和弭节兮，望崦嵫而勿迫。\n路漫漫其修远兮，吾将上下而求索。\n饮余马于咸池兮，总余辔乎扶桑。\n折若木以拂日兮，聊逍遥以相羊。\n前望舒使先驱兮，后飞廉使奔属。\n鸾皇为余先戒兮，雷师告余以未具。\n吾令凤鸟飞腾兮，继之以日夜。\n飘风屯其相离兮，帅云霓而来御。\n纷总总其离合兮，斑陆离其上下。\n吾令帝阍开关兮，倚阊阖而望予。\n时暧暧其将罢兮，结幽兰而延伫。\n世溷浊而不分兮，好蔽美而嫉妒。\n朝吾将济于白水兮，登阆风而绁马。\n忽反顾以流涕兮，哀高丘之无女。\n溘吾游此春宫兮，折琼枝以继佩。\n及荣华之未落兮，相下女之可诒。\n吾令丰隆乘云兮，求宓妃之所在。\n解佩纕以结言兮，吾令謇修以为理。\n纷总总其离合兮，忽纬繣其难迁。\n夕归次于穷石兮，朝濯发乎洧盘。\n保厥美以骄傲兮，日康娱以淫游。\n虽信美而无礼兮，来违弃而改求。\n览相观于四极兮，周流乎天余乃下。\n望瑶台之偃蹇兮，见有娀之佚女。\n吾令鸩为媒兮，鸩告余以不好。\n雄鸠之鸣逝兮，余犹恶其佻巧。\n心犹豫而狐疑兮，欲自适而不可。\n凤皇既受诒兮，恐高辛之先我。\n欲远集而无所止兮，聊浮游以逍遥。\n及少康之未家兮，留有虞之二姚。\n理弱而媒拙兮，恐导言之不固。\n世溷浊而嫉贤兮，好蔽美而称恶。\n闺中既以邃远兮，哲王又不寤。\n怀朕情而不发兮，余焉能忍而与此终古？\n索琼茅以筳篿兮，命灵氛为余占之。\n曰：「两美其必合兮，孰信修而慕之？\n思九州之博大兮，岂惟是其有女？」\n曰：「勉远逝而无狐疑兮，孰求美而释女？\n何所独无芳草兮，尔何怀乎故宇？」\n世幽昧以昡曜兮，孰云察余之善恶？\n民好恶其不同兮，惟此党人其独异！\n户服艾以盈要兮，谓幽兰其不可佩。\n览察草木其犹未得兮，岂珵美之能当？\n苏粪壤以充祎兮，谓申椒其不芳。\n欲从灵氛之吉占兮，心犹豫而狐疑。\n巫咸将夕降兮，怀椒糈而要之。\n百神翳其备降兮，九疑缤其并迎。\n皇剡剡其扬灵兮，告余以吉故。\n曰：「勉升降以上下兮，求矩矱之所同。\n汤、禹俨而求合兮，挚、咎繇而能调。\n苟中情其好修兮，又何必用夫行媒？\n说操筑于傅岩兮，武丁用而不疑。\n吕望之鼓刀兮，遭周文而得举。\n宁戚之讴歌兮，齐桓闻以该辅。\n及年岁之未晏兮，时亦犹其未央。\n恐鹈鴃之先鸣兮，使夫百草为之不芳。」\n何琼佩之偃蹇兮，众薆然而蔽之。\n惟此党人之不谅兮，恐嫉妒而折之。\n时缤纷其变易兮，又何可以淹留？\n兰芷变而不芳兮，荃蕙化而为茅。\n何昔日之芳草兮，今直为此萧艾也？\n岂其有他故兮，莫好修之害也！\n余以兰为可恃兮，羌无实而容长。\n委厥美以从俗兮，苟得列乎众芳。\n椒专佞以慢慆兮，樧又欲充夫佩帏。\n既干进而务入兮，又何芳之能祗？\n固时俗之流从兮，又孰能无变化？\n览椒兰其若兹兮，又况揭车与江离？\n惟兹佩之可贵兮，委厥美而历兹。\n芳菲菲而难亏兮，芬至今犹未沬。\n和调度以自娱兮，聊浮游而求女。\n及余饰之方壮兮，周流观乎上下。\n灵氛既告余以吉占兮，历吉日乎吾将行。\n折琼枝以为羞兮，精琼爢以为粻。\n为余驾飞龙兮，杂瑶象以为车。\n何离心之可同兮？吾将远逝以自疏。\n邅吾道夫昆仑兮，路修远以周流。\n扬云霓之晻蔼兮，鸣玉鸾之啾啾。\n朝发轫于天津兮，夕余至乎西极。\n凤皇翼其承旗兮，高翱翔之翼翼。\n忽吾行此流沙兮，遵赤水而容与。\n麾蛟龙使梁津兮，诏西皇使涉予。\n路修远以多艰兮，腾众车使径待。\n路不周以左转兮，指西海以为期。\n屯余车其千乘兮，齐玉轪而并驰。\n驾八龙之婉婉兮，载云旗之委蛇。\n抑志而弭节兮，神高驰之邈邈。\n奏《九歌》而舞《韶》兮，聊假日以偷乐。\n陟升皇之赫戏兮，忽临睨夫旧乡。\n仆夫悲余马怀兮，蜷局顾而不行。\n乱曰：已矣哉！\n国无人莫我知兮，又何怀乎故都！\n既莫足与为美政兮，吾将从彭咸之所居！',NULL,'战国',NULL,1,NULL,'楚',NULL,NULL,NULL,NULL,NULL,NULL),
	(3,'再别康桥',NULL,'徐志摩',NULL,'轻轻的我走了，\n正如我轻轻的来；\n我轻轻的招手，\n作别西天的云彩。\n　\n那河畔的金柳，\n是夕阳中的新娘；\n波光里的艳影，\n在我的心头荡漾。\n　\n软泥上的青荇，\n油油的在水底招摇；\n在康河的柔波里，\n我甘心做一条水草！\n　\n那榆荫下的一潭，\n不是清泉，\n是天上虹；\n揉碎在浮藻间，\n沉淀着彩虹似的梦。\n　\n寻梦？撑一支长篙，\n向青草更青处漫溯；\n满载一船星辉，\n在星辉斑斓里放歌。\n　\n但我不能放歌，\n悄悄是别离的笙箫；\n夏虫也为我沉默，\n沉默是今晚的康桥！\n　\n悄悄的我走了，\n正如我悄悄的来；\n我挥一挥衣袖，\n不带走一片云彩。',NULL,NULL,NULL,NULL,NULL,NULL,'1928.11.6 中国海上',NULL,NULL,NULL,NULL,NULL),
	(4,'越人歌',NULL,'佚名',NULL,'今夕何夕兮，搴舟中流。\n今日何日兮，得与王子同舟。\n蒙羞被好兮，不訾诟耻。\n心几烦而不绝兮，得知王子。\n山有木兮木有枝，心悦君兮君不知。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(5,'静夜思',NULL,'李白',NULL,'床前明月光，疑是地上霜。\n举头望明月，低头思故乡。',NULL,'唐',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(6,'断章',NULL,'卞之琳',NULL,'你站在桥上看风景\n看风景的人在楼上看你\n明月装饰了你的窗子\n你装饰了别人的梦',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(7,'当你老了',NULL,'叶芝',NULL,'当你老了',NULL,NULL,NULL,NULL,1,'爱尔兰',NULL,NULL,NULL,NULL,NULL,NULL),
	(8,'相信未来',NULL,'食指',NULL,'当蜘蛛网',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(9,'面朝大海 春暖花开',NULL,'海子',NULL,'从明天起',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(10,'见与不见',NULL,'仓央嘉措',NULL,'你见，或者不见我',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(11,'雨巷',NULL,'戴望舒',NULL,'撑着油纸伞，独自\n彷徨在悠长、悠长\n又寂寥的雨巷，\n我希望逢着\n一个丁香一样的\n结着愁怨的姑娘。\n她是有\n丁香一样的颜色，\n丁香一样的芬芳，\n丁香一样的忧愁，\n在雨中哀怨，\n哀怨又彷徨；\n她彷徨在寂寥的雨巷，\n撑着油纸伞\n像我一样，\n像我一样地\n默默彳亍着\n冷漠、凄清，又惆怅。\n她默默地走近，\n走近，又投出\n太息一般的眼光\n她飘过\n像梦一般地，\n像梦一般地凄婉迷茫。\n像梦中飘过\n一枝丁香地，\n我身旁飘过这个女郎；\n她静默地远了，远了，\n到了颓圮的篱墙，\n走尽这雨巷。\n在雨的哀曲里，\n消了她的颜色，\n散了她的芬芳，\n消散了，甚至她的\n太息般的眼光\n丁香般的惆怅。\n撑着油纸伞，独自\n彷徨在悠长、悠长\n又寂寥的雨巷，\n我希望飘过\n一个丁香一样的\n结着愁怨的姑娘。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(12,'蒹葭',NULL,'佚名',NULL,'蒹葭苍苍',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(13,'你是人间四月天',NULL,'林徽因',NULL,'我说你是人间的四月天',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(14,'错误',NULL,'郑愁予',NULL,'我打江南走过',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(15,'乡愁',NULL,'余光中',NULL,'小时侯\n乡愁是一枚小小的邮票\n我在这头\n母亲在那头\n长大后\n乡愁是一张窄窄的船票\n我在这头\n新娘在那头\n后来呵\n乡愁是一方矮矮的坟墓\n我在外头\n母亲呵在里头\n而现在\n乡愁是一湾浅浅的海峡\n我在这头\n大陆在那头',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(16,'海江',NULL,'海江',NULL,'海江',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(17,'死水',NULL,'闻一多',NULL,'这是一沟绝望的死水',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(18,'致橡树',NULL,'舒婷',NULL,'我如果爱你',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(19,'湖心岛茵尼斯弗利岛',NULL,'',NULL,'我就要起身走了',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(20,'春晓',NULL,'孟浩然',NULL,'春眠不觉晓',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(21,'世界上最遥远的距离',NULL,'泰戈尔',NULL,'世界上最遥远的距离',NULL,NULL,NULL,NULL,NULL,'印度',NULL,NULL,NULL,NULL,NULL,NULL),
	(22,'一代人',NULL,'顾城',NULL,'黑夜给了我黑色的眼睛\n我却用它寻找光明',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(23,'穿过大半个中国去睡你',NULL,'余秀华',NULL,'其实，睡你和被你睡是差不多的，无非是\n两具肉体碰撞的力，无非是这力催开的花朵\n无非是这花朵虚拟出的春天让我们误以为生命被重新打开\n大半个中国，什么都在发生：火山在喷，河流在枯\n一些不被关心的政治犯和流民\n一路在枪口的麋鹿和丹顶鹤\n我是穿过枪林弹雨去睡你\n我是把无数的黑夜摁进一个黎明去睡你\n我是无数个我奔跑成一个我去睡你\n当然我也会被一些蝴蝶带入歧途\n把一些赞美当成春天\n把一个和横店类似的村庄当成故乡\n而它们\n都是我去睡你必不可少的理由',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(24,'对白云的赞美',NULL,'乌青',NULL,'天上的白云真白啊\n真的，很白很白\n非常白\n非常非常十分白\n极其白\n贼白\n简直白死了\n啊',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(25,'西溪漫步',NULL,'木有枝',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(26,'螃蟹在剥我的壳',NULL,'小雨',NULL,'螃蟹在剥我的壳，笔记本在学我。\n漫天的我落在枫叶上雪花上。\n而你在想我。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(27,'沁园春·雪',NULL,'毛泽东',NULL,'北国风光',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(28,'哈哈哈',NULL,'瓦巴蛋',NULL,'什么鬼',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(29,'初见',NULL,'木有枝',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(30,'在水一方',NULL,'佚名',NULL,'白露轻枕叶凝霜，\n蒹葭微雨意悠长，\n难赋深情隔岸烟润隐衣裳。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(31,'私奔',NULL,'冯唐',NULL,'那是爱 \n那是癌 \n那是如来',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(32,'一起',NULL,'冯唐',NULL,'想和你在海边 \n一坐一夜 \n一日千年',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(33,'北京雨',NULL,'冯唐',NULL,'北京雨 \n深圳雨 \n昆明雨 \n不见你到处是雨',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(34,'春',NULL,'冯唐',NULL,'春水初生\n春林初盛\n春风十里，不如你',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(35,'印',NULL,'冯唐',NULL,'我把月亮戳到天上\n天就是我的\n我把脚踩入地里\n地就是我的\n我亲吻你\n你就是我的',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(36,'可遇不可求的事',NULL,'冯唐',NULL,'后海有树的院子　\n夏代有工的玉\n此时此刻的云\n二十来岁的你',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(37,'远和近',NULL,'顾城',NULL,'你， \n一会看我， \n一会看云。 \n我觉得， \n你看我时很远， \n你看云时很近。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(38,'感觉',NULL,'顾城',NULL,'天是灰色的 \n路是灰色的 \n楼是灰色的 \n雨是灰色的 \n在一片死灰中 \n走过两个孩子 \n一个鲜红 \n一个淡绿',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(39,'回答',NULL,'北岛',NULL,'卑鄙是卑鄙者的通行证，\n高尚是高尚者的墓志铭，\n看吧，在那镀金的天空中，\n飘满了死者弯曲的倒影。\n\n冰川纪过去了，\n为什么到处都是冰凌？\n好望角发现了，\n为什么死海里千帆相竞？\n\n我来到这个世界上，\n只带着纸、绳索和身影，\n为了在审判前，\n宣读那些被判决的声音。\n\n告诉你吧，世界\n我--不--相--信！\n纵使你脚下有一千名挑战者，\n那就把我算作第一千零一名。\n\n我不相信天是蓝的，\n我不相信雷的回声，\n我不相信梦是假的，\n我不相信死无报应。\n\n如果海洋注定要决堤，\n就让所有的苦水都注入我心中，\n如果陆地注定要上升，\n就让人类重新选择生存的峰顶。\n\n新的转机和闪闪星斗，\n正在缀满没有遮拦的天空。\n那是五千年的象形文字，\n那是未来人们凝视的眼睛。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(40,'致橡树',NULL,'舒婷',NULL,'我如果爱你——\n绝不学攀援的凌霄花，\n借你的高枝炫耀自己；\n我如果爱你——\n绝不学痴情的鸟儿，\n为绿荫重复单调的歌曲；\n也不止像泉源，\n常年送来清凉的慰藉；\n也不止像险峰，\n增加你的高度，衬托你的威仪。\n甚至日光，\n甚至春雨。\n不，这些都还不够！\n我必须是你近旁的一株木棉，\n作为树的形象和你站在一起。\n根，紧握在地下；\n叶，相触在云里。\n每一阵风过，\n我们都互相致意，\n但没有人，\n听懂我们的言语。\n你有你的铜枝铁干，\n像刀，像剑，\n也像戟；\n我有我红硕的花朵，\n像沉重的叹息，\n又像英勇的火炬。\n我们分担寒潮、风雷、霹雳；\n我们共享雾霭、流岚、虹霓。\n仿佛永远分离，\n却又终身相依。\n这才是伟大的爱情，\n坚贞就在这里：\n爱——\n不仅爱你伟岸的身躯，\n也爱你坚持的位置，\n足下的土地。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(41,'爱情是人类的通病',NULL,'余幼幼',NULL,'有时候花整天的时间看电影\n从法国到英国再到美国\n每个故事都会碰到一对男女\n仅仅是碰到\n过后的情节任由他们自己去发展\n悲欢离合都是虚构\n但谁也不能拒绝爱情的真实',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(42,'法国电影',NULL,'余幼幼',NULL,'操我\n不是让你来真的\n这是一部法国电影的名字\n电影里的情景\n都是真的\n看完我就哑然了\n底层的人\n被上流人操\n同时也被自己的同胞操\n完事后\n自己收拾摊子\n绕开艺术的街道\n在黑巷里穿行\n法国这样的国家\n也有不浪漫的时候',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(43,'匆忙的一天',NULL,'乌青',NULL,'我匆忙的从床上起来\n匆匆忙忙地吃饭\n匆匆忙忙的上网\n然后匆忙出门\n在街上匆匆忙忙地转了一圈\n回到家\n这一天我什么也没干\n只是非常匆忙',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(44,'一把好乳',NULL,'沈浩波',NULL,'她一上车\n我就盯住她了\n胸脯高耸\n屁股隆起\n真是让人\n垂涎欲滴\n我盯住她的胸\n死死盯住\n那鼓胀的胸啊\n我要能把它看穿就好了\n她终于被我看得\n不自在了\n将身边的小女儿\n一把抱到胸前\n正好挡住我的视线\n嗨，\n我说女人\n你别以为这样\n我就会收回目光\n我仍然死死盯着\n这回盯住的\n是她女儿\n那张俏俏的小脸\n嗨，\n我说女人\n别看你的女儿\n现在一脸天真无邪\n长大之后\n肯定也是\n一把好乳',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(45,'绝望',NULL,'沈浩波',NULL,'公共汽车在结冰的路面上摇摇晃晃\n它八面透风，像一个破纸篓\n它发出很大声响\n像冬天咳嗽着吐不出痰来的糟老头\n\n而我正在呵出热气\n让它把窗玻璃搅得一团模糊\n我想这样，窗外的冰雪会离我远些\n\n这时我看到对面的女人正在朝我微笑\n她的头发很长，垂在脸庞上\n在光线暗淡的车厢里，我看不清她的模样\n她穿着红色的羽绒服，\n映照得车厢微微发亮\n\n我不禁有些轻狂\n朝玻璃吹气就像吹气球\n并且用手指在窗玻璃上写字\n我瞥见那个女人一直在朝我微笑\n她歪着脖子看我，我心里面暖和极了\n\n而当我抱以微笑，定睛看它\n我不禁被它的容貌惊得呆了——\n\n她不仅歪着脖子，而且还歪着嘴唇\n她哪里是在微笑啊\n你看她的嘴唇歪在一边\n向着上下左右伸展扭动\n仿佛是在说话，更像是在恶狠狠的诅咒\n\n她真的是在注视着我\n眼中充满诡异，仿佛在看冰雪\n我匆忙扭过头去，而窗外冰雪连天\n一下映入眼帘。\n\n2000/1/7',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(46,'早发白帝城',NULL,'李白',NULL,'朝辞白帝彩云间，千里江陵一日还。\n两岸猿声啼不住，轻舟已过万重山。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(47,'将进酒·君不见黄河之水天上来',NULL,'李白',NULL,'君不见黄河之水天上来，奔流到海不复回。\n君不见高堂明镜悲白发，朝如青丝暮成雪。\n人生得意须尽欢，莫使金樽空对月。\n天生我材必有用，千金散尽还复来。\n烹羊宰牛且为乐，会须一饮三百杯。\n岑夫子，丹丘生，将进酒，杯莫停。\n与君歌一曲，请君为我侧耳听。\n钟鼓馔玉不足贵，但愿长醉不复醒。\n古来圣贤皆寂寞，惟有饮者留其名。\n陈王昔时宴平乐，斗酒十千恣欢谑。\n主人何为言少钱，径须沽取对君酌。\n五花马，千金裘，\n呼儿将出换美酒，与尔同销万古愁。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(48,'秋登宣城谢眺北楼',NULL,'李白',NULL,'江城如画里，山晓望晴空。\n两水夹明镜，双桥落彩虹。\n人烟寒橘柚，秋色老梧桐。\n谁念北楼上，临风怀谢公。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(49,'静女',NULL,'佚名',NULL,'静女其姝，俟我于城隅。\n爱而不见，搔首踟蹰。\n静女其娈，贻我彤管。\n彤管有炜，说怿女美。\n自牧归荑，洵美且异。\n匪女之为美，美人之贻。',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

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
