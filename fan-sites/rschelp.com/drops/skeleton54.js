/*

 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, Herb, Rune, Gem)
 
 run
 
 0 last drop of run (x, index of last drop of run)
 1 kills in run (y, kill number of x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "";

// run 1

//camelot teleport 1 law 5 airs

item   [0] = [ "Harralander", 1, 1, "Herb" ];
item   [1] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [2] = [ "Marrentill", 1, 1, "Herb" ];
item   [3] = [ "Coins", 1, 25, "" ];  //  (25)
item   [4] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item   [5] = [ "Iron Short Sword", 1, 1, "" ];
item   [6] = [ "Coins", 1, 5, "" ];  //  (30)
item   [7] = [ "Coins", 1, 10, "" ];  //  (40)
item   [8] = [ "Coins", 1, 5, "" ];  //  (45)
item   [9] = [ "Coins", 1, 5, "" ];  //  (50)
item  [10] = [ "Cadantine", 1, 1, "Herb" ];
item  [11] = [ "Dwarf Weed", 1, 1, "Herb" ];
item  [12] = [ "Iron Axe", 1, 1, "" ];
item  [13] = [ "Coins", 1, 10, "" ];  //  (60)
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Coins", 1, 10, "" ];  //  (70)
item  [16] = [ "Coins", 1, 45, "" ];  //  (115)
item  [17] = [ "Iron Simitar", 1, 1, "" ];
item  [18] = [ "Coins", 1, 10, "" ];  //  (125)
item  [19] = [ "Coins", 1, 10, "" ];  //  (135)
item  [20] = [ "Nothing", 1, 0, "" ];
item  [21] = [ "Coins", 1, 65, "" ];  //  (200)
item  [22] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [23] = [ "Coins", 1, 10, "" ];  //  (210)
item  [24] = [ "Coins", 1, 1, "" ];  //  (211)
item  [25] = [ "Coins", 1, 10, "" ];  //  (221)
item  [26] = [ "bronze bar", 1, 1, "" ];
item  [27] = [ "Cadantine", 1, 1, "Herb" ];
item  [28] = [ "Coins", 1, 5, "" ];  //  (226)
item  [29] = [ "Coins", 1, 65, "" ];  //  (291)
item  [30] = [ "Coins", 1, 10, "" ];  //  (301)
item  [31] = [ "Coins", 1, 10, "" ];  //  (311)
item  [32] = [ "Coins", 1, 5, "" ];  //  (316)
item  [33] = [ "Iron Short Sword", 1, 1, "" ];
item  [34] = [ "Coins", 1, 10, "" ];  //  (326)
item  [35] = [ "Nothing", 1, 0, "" ];
item  [36] = [ "Coins", 1, 10, "" ];  //  (336)
item  [37] = [ "Nothing", 1, 0, "" ];
item  [38] = [ "Nothing", 1, 0, "" ];
item  [39] = [ "Coins", 1, 10, "" ];  //  (346)
item  [40] = [ "Coins", 1, 10, "" ];  //  (356)
item  [41] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [42] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item  [43] = [ "Coins", 1, 5, "" ];  //  (361)
item  [44] = [ "Coins", 1, 25, "" ];  //  (386)
item  [45] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [46] = [ "Coins", 1, 10, "" ];  //  (396)
item  [47] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item  [48] = [ "Iron Axe", 1, 1, "" ];
item  [49] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [50] = [ "Marrentill", 1, 1, "Herb" ];
item  [51] = [ "Coins", 1, 5, "" ];  //  (401)
item  [52] = [ "Coins", 1, 25, "" ];  //  (426)
item  [53] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Coins", 1, 10, "" ];  //  (436)
item  [56] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item  [57] = [ "Iron Short Sword", 1, 1, "" ];
item  [58] = [ "Iron Short Sword", 1, 1, "" ];
item  [59] = [ "Coins", 1, 5, "" ];  //  (441)
item  [60] = [ "Coins", 1, 5, "" ];  //  (446)
item  [61] = [ "Iron Short Sword", 1, 1, "" ];
item  [62] = [ "Coins", 1, 10, "" ];  //  (456)
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Coins", 1, 25, "" ];  //  (481)
item  [65] = [ "Iron Short Sword", 1, 1, "" ];
item  [66] = [ "Coins", 1, 25, "" ];  //  (506)
item  [67] = [ "Harralander", 1, 1, "Herb" ];
item  [68] = [ "Iron Simitar", 1, 1, "" ];
item  [69] = [ "Coins", 1, 10, "" ];  //  (516)
item  [70] = [ "Coins", 1, 25, "" ];  //  (541)
item  [71] = [ "Tarromin", 1, 1, "Herb" ];
item  [72] = [ "Coins", 1, 5, "" ];  //  (546)
item  [73] = [ "Coins", 1, 65, "" ];  //  (611)
item  [74] = [ "Coins", 1, 10, "" ];  //  (621)
item  [75] = [ "Coins", 1, 5, "" ];  //  (626)
item  [76] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item  [77] = [ "Coins", 1, 10, "" ];  //  (636)
item  [78] = [ "Coins", 1, 5, "" ];  //  (641)
item  [79] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item  [80] = [ "Air-rune", 1, 10, "Rune" ];  //  (10)
item  [81] = [ "Coins", 1, 5, "" ];  //  (646)
item  [82] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (3)
item  [83] = [ "Coins", 1, 5, "" ];  //  (651)
item  [84] = [ "Coins", 1, 5, "" ];  //  (656)
item  [85] = [ "Air-rune", 1, 10, "Rune" ];  //  (20)
item  [86] = [ "Coins", 1, 10, "" ];  //  (666)
item  [87] = [ "Coins", 1, 5, "" ];  //  (671)
item  [88] = [ "Water-rune", 1, 6, "Rune" ];  //  (18)
item  [89] = [ "Coins", 1, 5, "" ];  //  (676)
item  [90] = [ "Coins", 1, 5, "" ];  //  (681)
item  [91] = [ "Coins", 1, 10, "" ];  //  (691)
item  [92] = [ "Water-rune", 1, 6, "Rune" ];  //  (24)
item  [93] = [ "Coins", 1, 5, "" ];  //  (696)
item  [94] = [ "Coins", 1, 10, "" ];  //  (706)
item  [95] = [ "Coins", 1, 45, "" ];  //  (751)
item  [96] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [97] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item  [98] = [ "Coins", 1, 10, "" ];  //  (761)
item  [99] = [ "Iron Short Sword", 1, 1, "" ];
item [100] = [ "Coins", 1, 10, "" ];  //  (771)
item [101] = [ "Medium Iron Helmet", 1, 1, "" ];
item [102] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item [103] = [ "Coins", 1, 5, "" ];  //  (776)
item [104] = [ "Coins", 1, 5, "" ];  //  (781)
item [105] = [ "Coins", 1, 10, "" ];  //  (791)
item [106] = [ "Air-rune", 1, 10, "Rune" ];  //  (30)
item [107] = [ "Coins", 1, 1, "" ];  //  (792)
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Coins", 1, 25, "" ];  //  (817)
item [110] = [ "Cadantine", 1, 1, "Herb" ];
item [111] = [ "Kwuarm", 1, 1, "Herb" ];
item [112] = [ "Coins", 1, 5, "" ];  //  (822)
item [113] = [ "bronze bar", 1, 1, "" ];
item [114] = [ "Coins", 1, 45, "" ];  //  (867)
item [115] = [ "Coins", 1, 65, "" ];  //  (932)
item [116] = [ "Coins", 1, 65, "" ];  //  (997)
item [117] = [ "uncut emerald", 1, 1, "Gem" ];
item [118] = [ "Coins", 1, 5, "" ];  //  (1002)
item [119] = [ "Coins", 1, 5, "" ];  //  (1007)
item [120] = [ "Coins", 1, 45, "" ];  //  (1052)
item [121] = [ "Water-rune", 1, 6, "Rune" ];  //  (30)
item [122] = [ "Coins", 1, 45, "" ];  //  (1097)
item [123] = [ "Guam Leaf", 1, 1, "Herb" ];
item [124] = [ "Coins", 1, 10, "" ];  //  (1107)
item [125] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (6)
item [126] = [ "Coins", 1, 10, "" ];  //  (1117)
item [127] = [ "Coins", 1, 5, "" ];  //  (1122)
item [128] = [ "Medium Iron Helmet", 1, 1, "" ];
item [129] = [ "Marrentill", 1, 1, "Herb" ];
item [130] = [ "Harralander", 1, 1, "Herb" ];
item [131] = [ "Iron Short Sword", 1, 1, "" ];
item [132] = [ "Coins", 1, 5, "" ];  //  (1127)
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "Coins", 1, 10, "" ];  //  (1137)
item [135] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [136] = [ "Guam Leaf", 1, 1, "Herb" ];
item [137] = [ "Irit Leaf", 1, 1, "Herb" ];
item [138] = [ "Coins", 1, 5, "" ];  //  (1142)
item [139] = [ "Coins", 1, 10, "" ];  //  (1152)
item [140] = [ "Coins", 1, 5, "" ];  //  (1157)
item [141] = [ "Coins", 1, 25, "" ];  //  (1182)
item [142] = [ "Coins", 1, 5, "" ];  //  (1187)
item [143] = [ "Coins", 1, 1, "" ];  //  (1188)
item [144] = [ "Coins", 1, 1, "" ];  //  (1189)
item [145] = [ "Medium Iron Helmet", 1, 1, "" ];
item [146] = [ "Coins", 1, 5, "" ];  //  (1194)
item [147] = [ "Irit Leaf", 1, 1, "Herb" ];
item [148] = [ "Coins", 1, 5, "" ];  //  (1199)
item [149] = [ "bronze bar", 1, 1, "" ];
item [150] = [ "Coins", 1, 10, "" ];  //  (1209)
item [151] = [ "Coins", 1, 5, "" ];  //  (1214)
item [152] = [ "Medium Iron Helmet", 1, 1, "" ];
item [153] = [ "Coins", 1, 5, "" ];  //  (1219)
item [154] = [ "Nothing", 1, 0, "" ];
item [155] = [ "Nothing", 1, 0, "" ];
item [156] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [157] = [ "Coins", 1, 10, "" ];  //  (1229)
item [158] = [ "Water-rune", 1, 6, "Rune" ];  //  (36)
item [159] = [ "Coins", 1, 45, "" ];  //  (1274)
item [160] = [ "Nothing", 1, 0, "" ];
item [161] = [ "bronze bar", 1, 1, "" ];
item [162] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (4)
item [163] = [ "Guam Leaf", 1, 1, "Herb" ];
item [164] = [ "Coins", 1, 5, "" ];  //  (1279)
item [165] = [ "Tarromin", 1, 1, "Herb" ];
item [166] = [ "Medium Iron Helmet", 1, 1, "" ];
item [167] = [ "Coins", 1, 10, "" ];  //  (1289)
item [168] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [169] = [ "Coins", 1, 45, "" ];  //  (1334)
item [170] = [ "Avantoe", 1, 1, "Herb" ];
item [171] = [ "Coins", 1, 5, "" ];  //  (1339)
item [172] = [ "Coins", 1, 10, "" ];  //  (1349)
item [173] = [ "Coins", 1, 10, "" ];  //  (1359)
item [174] = [ "Coins", 1, 10, "" ];  //  (1369)
item [175] = [ "Iron Short Sword", 1, 1, "" ]
item [176] = [ "Coins", 1, 10, "" ];  //  (1379)
item [177] = [ "Coins", 1, 10, "" ];  //  (1389)
item [178] = [ "Guam Leaf", 1, 1, "Herb" ];
item [179] = [ "Coins", 1, 5, "" ];  //  (1394)
item [180] = [ "Nothing", 1, 0, "" ];
item [181] = [ "Avantoe", 1, 1, "Herb" ];
item [182] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (9)

runs [0] = [ 182, 183 ];  // kills 183 drops 183

// run 1

item [183] = [ "Coins", 1, 25, "" ];  //  (25)
item [184] = [ "Coins", 1, 25, "" ];  //  (50)
item [185] = [ "Coins", 1, 10, "" ];  //  (60)
item [186] = [ "Coins", 1, 1, "" ];  //  (61)
item [187] = [ "Iron Axe", 1, 1, "" ];
item [188] = [ "Kwuarm", 1, 1, "Herb" ];
item [189] = [ "Medium Iron Helmet", 1, 1, "" ];
item [190] = [ "Medium Iron Helmet", 1, 1, "" ];
item [191] = [ "Coins", 1, 25, "" ];  //  (86)
item [192] = [ "Tarromin", 1, 1, "Herb" ];
item [193] = [ "Coins", 1, 5, "" ];  //  (91)
item [194] = [ "Guam Leaf", 1, 1, "Herb" ];
item [195] = [ "Coins", 1, 10, "" ];  //  (101)
item [196] = [ "Irit Leaf", 1, 1, "Herb" ];
item [197] = [ "Coins", 1, 5, "" ];  //  (106)
item [198] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [199] = [ "Harralander", 1, 1, "Herb" ];
item [200] = [ "Coins", 1, 10, "" ];  //  (116)
item [201] = [ "bronze bar", 1, 1, "" ];
item [202] = [ "Air-rune", 1, 10, "Rune" ];  //  (10)
item [203] = [ "Coins", 1, 45, "" ];  //  (161)
item [204] = [ "Iron Short Sword", 1, 1, "" ];
item [205] = [ "Coins", 1, 65, "" ];  //  (226)
item [206] = [ "Coins", 1, 5, "" ];  //  (231)
item [207] = [ "Coins", 1, 5, "" ];  //  (236)
item [208] = [ "Coins", 1, 5, "" ];  //  (241)
item [209] = [ "Avantoe", 1, 1, "Herb" ];
item [210] = [ "Coins", 1, 25, "" ];  //  (266)
item [211] = [ "Coins", 1, 5, "" ];  //  (271)
item [212] = [ "Coins", 1, 10, "" ];  //  (281)
item [213] = [ "Coins", 1, 5, "" ];  //  (286)
item [214] = [ "Coins", 1, 5, "" ];  //  (291)
item [215] = [ "Coins", 1, 10, "" ];  //  (301)
item [216] = [ "Coins", 1, 5, "" ];  //  (306)
item [217] = [ "Coins", 1, 5, "" ];  //  (311)
item [218] = [ "Medium Iron Helmet", 1, 1, "" ];
item [219] = [ "bronze bar", 1, 1, "" ];
item [220] = [ "Coins", 1, 5, "" ];  //  (316)
item [221] = [ "Coins", 1, 45, "" ];  //  (361)
item [222] = [ "Coins", 1, 10, "" ];  //  (371)
item [223] = [ "Coins", 1, 5, "" ];  //  (376)
item [224] = [ "Coins", 1, 65, "" ];  //  (441)
item [225] = [ "Coins", 1, 45, "" ];  //  (486)
item [226] = [ "Coins", 1, 10, "" ];  //  (496)
item [227] = [ "Coins", 1, 45, "" ];  //  (541)
item [228] = [ "bronze bar", 1, 1, "" ];
item [229] = [ "Coins", 1, 65, "" ];  //  (606)
item [230] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [231] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item [232] = [ "Coins", 1, 5, "" ];  //  (611)
item [233] = [ "Medium Iron Helmet", 1, 1, "" ];
item [234] = [ "Coins", 1, 65, "" ];  //  (676)
item [235] = [ "Coins", 1, 5, "" ];  //  (681)
item [236] = [ "Coins", 1, 10, "" ];  //  (691)
item [237] = [ "Nothing", 1, 0, "" ];
item [238] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [239] = [ "Coins", 1, 10, "" ];  //  (701)
item [240] = [ "Coins", 1, 5, "" ];  //  (706)
item [241] = [ "Coins", 1, 5, "" ];  //  (711)
item [242] = [ "Coins", 1, 10, "" ];  //  (721)
item [243] = [ "Coins", 1, 5, "" ];  //  (726)
item [244] = [ "Medium Iron Helmet", 1, 1, "" ];
item [245] = [ "Coins", 1, 5, "" ];  //  (731)
item [246] = [ "Marrentill", 1, 1, "Herb" ];
item [247] = [ "bronze bar", 1, 1, "" ];
item [248] = [ "Coins", 1, 5, "" ];  //  (736)
item [249] = [ "Coins", 1, 5, "" ];  //  (741)
item [250] = [ "Iron Simitar", 1, 1, "" ];
item [251] = [ "Guam Leaf", 1, 1, "Herb" ];
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Coins", 1, 5, "" ];  //  (746)
item [254] = [ "Coins", 1, 10, "" ];  //  (756)
item [255] = [ "Medium Iron Helmet", 1, 1, "" ];
item [256] = [ "Nothing", 1, 0, "" ];
item [257] = [ "Coins", 1, 10, "" ];  //  (766)
item [258] = [ "Avantoe", 1, 1, "Herb" ];
item [259] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [260] = [ "Coins", 1, 10, "" ];  //  (776)
item [261] = [ "Medium Iron Helmet", 1, 1, "" ];
item [262] = [ "bronze bar", 1, 1, "" ];
item [263] = [ "Coins", 1, 5, "" ];  //  (781)
item [264] = [ "Medium Iron Helmet", 1, 1, "" ];
item [265] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item [266] = [ "Tarromin", 1, 1, "Herb" ];
item [267] = [ "uncut sapphire", 1, 1, "Gem" ];
item [268] = [ "Coins", 1, 5, "" ];  //  (786)
item [269] = [ "Coins", 1, 10, "" ];  //  (796)
item [270] = [ "Coins", 1, 5, "" ];  //  (801)
item [271] = [ "Air-rune", 1, 10, "Rune" ];  //  (20)
item [272] = [ "Coins", 1, 5, "" ];  //  (806)
item [273] = [ "Coins", 1, 5, "" ];  //  (811)
item [274] = [ "Coins", 1, 10, "" ];  //  (821)
item [275] = [ "Coins", 1, 5, "" ];  //  (826)
item [276] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (6)
item [277] = [ "Marrentill", 1, 1, "Herb" ];
item [278] = [ "Nothing", 1, 0, "" ];
item [279] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (9)
item [280] = [ "Marrentill", 1, 1, "Herb" ];
item [281] = [ "bronze bar", 1, 1, "" ];
item [282] = [ "Air-rune", 1, 10, "Rune" ];  //  (30)
item [283] = [ "Coins", 1, 5, "" ];  //  (831)
item [284] = [ "Harralander", 1, 1, "Herb" ];
item [285] = [ "Coins", 1, 10, "" ];  //  (841)
item [286] = [ "Iron Axe", 1, 1, "" ];
item [287] = [ "Iron Simitar", 1, 1, "" ];
item [288] = [ "Medium Iron Helmet", 1, 1, "" ];
item [289] = [ "Nothing", 1, 0, "" ];
item [290] = [ "Coins", 1, 45, "" ];  //  (886)
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Coins", 1, 5, "" ];  //  (891)
item [293] = [ "Coins", 1, 5, "" ];  //  (896)
item [294] = [ "Coins", 1, 65, "" ];  //  (961)
item [295] = [ "bronze bar", 1, 1, "" ];
item [296] = [ "Avantoe", 1, 1, "Herb" ];
item [297] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [298] = [ "Coins", 1, 5, "" ];  //  (966)
item [299] = [ "Iron Short Sword", 1, 1, "" ];
item [300] = [ "Air-rune", 1, 10, "Rune" ];  //  (40)
item [301] = [ "Coins", 1, 10, "" ];  //  (976)
item [302] = [ "Air-rune", 1, 10, "Rune" ];  //  (50)
item [303] = [ "Coins", 1, 1, "" ];  //  (977)
item [304] = [ "Coins", 1, 5, "" ];  //  (982)
item [305] = [ "Nothing", 1, 0, "" ];
item [306] = [ "Avantoe", 1, 1, "Herb" ];
item [307] = [ "Coins", 1, 5, "" ];  //  (987)
item [308] = [ "Coins", 1, 5, "" ];  //  (992)
item [309] = [ "Coins", 1, 10, "" ];  //  (1002)

runs [1] = [ 309, 310 ];  // kills 127 drops 127

// runs [2] = [ x, y ];  // kills ? ( y - 310 ), drops ? ( x - 309 )

/*
item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 10, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()
item [000] = [ "Coins", 1, 45, "" ];  //  ()
item [000] = [ "Coins", 1, 65, "" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];
item [000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Air-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 5, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "bronze bar", 1, 1, "" ];

item [000] = [ "Bronze Long Sword", 1, 1, "" ];
item [000] = [ "Iron Axe", 1, 1, "" ];
item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Iron Simitar", 1, 1, "" ];
item [000] = [ "Steel Short Sword", 1, 1, "" ];
item [000] = [ "Mithril dagger", 1, 1, "" ];

item [000] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [000] = [ "Medium Iron Helmet", 1, 1, "" ];
item [000] = [ "Iron Kite Shield", 1, 1, "" ];
item [000] = [ "Dragon Square Shield Left Half", 1, 1, "" ];

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "skeleton";          // monster's name
var mcbl = 54;                   // monster's combat level
var mindex = 124;                // index into monster data base
var mrpt = 1;                    // number of non-breaking space to add after index name