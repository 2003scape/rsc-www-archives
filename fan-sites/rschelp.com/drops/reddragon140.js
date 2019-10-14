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

var cwcb = 4;  // column width of checkboxes

var notes = "On the first run I took 5 prayer pots and 5 swords to determine best method to kill 300+ reds. On the second run I took 10 prayer pots. At cb 92 with 76 hits I'm pretty much a match for a red dragon, so a little prayer makes me the winner. However to kill so many of them I'm using only prayer. On the 10th run I only took 5 prayer pots and 5 swords to verify the melee xps.";

// run 1

item   [0] = [ "Coins", 1, 690, "" ];  //  (690)
item   [1] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item   [2] = [ "Chocolate Cake", 1, 2, "" ];
item   [3] = [ "Coins", 1, 66, "" ];  //  (756)
item   [4] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item   [5] = [ "Coins", 1, 196, "" ];  //  (952)
item   [6] = [ "Coins", 1, 66, "" ];  //  (1018)
item   [7] = [ "Mithril Axe", 1, 1, "" ];
item   [8] = [ "Coins", 1, 196, "" ];  //  (1214)
item   [9] = [ "Coins", 1, 66, "" ];  //  (1280)
item  [10] = [ "Coins", 1, 66, "" ];  //  (1346)
item  [11] = [ "Coins", 1, 196, "" ];  //  (1542)
item  [12] = [ "Coins", 1, 66, "" ];  //  (1608)
item  [13] = [ "Coins", 1, 66, "" ];  //  (1674)
item  [14] = [ "Coins", 1, 196, "" ];  //  (1870)
item  [15] = [ "Coins", 1, 330, "" ];  //  (2200)
item  [16] = [ "Coins", 1, 66, "" ];  //  (2266)
item  [17] = [ "Coins", 1, 196, "" ];  //  (2462)
item  [18] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)

runs [0] = [ 18, 19 ];  // kills 19, drops 19

// run 2

item  [19] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item  [20] = [ "Coins", 1, 330, "" ];  //  (330)
item  [21] = [ "Coins", 1, 196, "" ];  //  (526)
item  [22] = [ "Chocolate Cake", 1, 1, "" ];
item  [23] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [24] = [ "Coins", 1, 196, "" ];  //  (722)
item  [25] = [ "Coins", 1, 66, "" ];  //  (788)
item  [26] = [ "Coins", 1, 196, "" ];  //  (984)
item  [27] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item  [28] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item  [29] = [ "Coins", 1, 330, "" ];  //  (1314)
item  [30] = [ "Coins", 1, 66, "" ];  //  (1380)
item  [31] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item  [32] = [ "Mithril Axe", 1, 1, "" ];
item  [33] = [ "Coins", 1, 196, "" ];  //  (1576)
item  [34] = [ "Mithril battle Axe", 1, 1, "" ];
item  [35] = [ "Coins", 1, 66, "" ];  //  (1642)
item  [36] = [ "Coins", 1, 330, "" ];  //  (1972)
item  [37] = [ "Coins", 1, 66, "" ];  //  (2038)
item  [38] = [ "Coins", 1, 196, "" ];  //  (2234)
item  [39] = [ "Coins", 1, 66, "" ];  //  (2300)
item  [40] = [ "Coins", 1, 66, "" ];  //  (2366)
item  [41] = [ "Coins", 1, 690, "" ];  //  (3056)
item  [42] = [ "Law-rune", 1, 2, "Rune" ];  //  (6)
item  [43] = [ "Coins", 1, 196, "" ];  //  (3252)
item  [44] = [ "Coins", 1, 66, "" ];  //  (3318)
item  [45] = [ "Chocolate Cake", 1, 1, "" ];
item  [46] = [ "Coins", 1, 196, "" ];  //  (3514)
item  [47] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item  [48] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item  [49] = [ "Coins", 1, 66, "" ];  //  (3580)
item  [50] = [ "Coins", 1, 196, "" ];  //  (3776)
item  [51] = [ "Coins", 1, 196, "" ];  //  (3972)
item  [52] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [53] = [ "Coins", 1, 330, "" ];  //  (4302)
item  [54] = [ "Coins", 1, 196, "" ];  //  (4498)
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Coins", 1, 196, "" ];  //  (4694)
item  [57] = [ "Coins", 1, 66, "" ];  //  (4760)
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Coins", 1, 66, "" ];  //  (4826)

runs [1] = [ 59, 60 ];  // kills 41, drops 41

// run 3

item  [60] = [ "damantite bar", 1, 1, "" ];
item  [61] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [62] = [ "Coins", 1, 196, "" ];  //  (196)
item  [63] = [ "Coins", 1, 66, "" ];  //  (262)
item  [64] = [ "Coins", 1, 196, "" ];  //  (458)
item  [65] = [ "Coins", 1, 196, "" ];  //  (654)
item  [66] = [ "Coins", 1, 196, "" ];  //  (850)
item  [67] = [ "Coins", 1, 196, "" ];  //  (1046)
item  [68] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item  [69] = [ "Coins", 1, 196, "" ];  //  (1242)
item  [70] = [ "Coins", 1, 196, "" ];  //  (1438)
item  [71] = [ "damantite bar", 1, 1, "" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Coins", 1, 196, "" ];  //  (1634)
item  [74] = [ "Coins", 1, 196, "" ];  //  (1830)
item  [75] = [ "Coins", 1, 196, "" ];  //  (2026)
item  [76] = [ "Coins", 1, 196, "" ];  //  (2222)
item  [77] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [78] = [ "Coins", 1, 196, "" ];  //  (2418)
item  [79] = [ "Coins", 1, 196, "" ];  //  (2614)
item  [80] = [ "Coins", 1, 196, "" ];  //  (2810)
item  [81] = [ "Coins", 1, 66, "" ];  //  (2876)
item  [82] = [ "Coins", 1, 196, "" ];  //  (3072)
item  [83] = [ "Coins", 1, 66, "" ];  //  (3138)
item  [84] = [ "Coins", 1, 196, "" ];  //  (3334)
item  [85] = [ "Coins", 1, 330, "" ];  //  (3664)
item  [86] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item  [87] = [ "Coins", 1, 196, "" ];  //  (3860)
item  [88] = [ "Coins", 1, 16, "" ];  //  (3876)
item  [89] = [ "Mithril Axe", 1, 1, "" ];
item  [90] = [ "Coins", 1, 196, "" ];  //  (4072)
item  [91] = [ "Coins", 1, 16, "" ];  //  (4088)
item  [92] = [ "Coins", 1, 330, "" ];  //  (4418)
item  [93] = [ "Mithril Axe", 1, 1, "" ];
item  [94] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)

runs [2] = [ 94, 95 ];  // kills 35, drops 35

// run 4

item  [95] = [ "Coins", 1, 196, "" ];  //  (196)
item  [96] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item  [97] = [ "Coins", 1, 66, "" ];  //  (262)
item  [98] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item  [99] = [ "Coins", 1, 196, "" ];  //  (458)
item [100] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [101] = [ "Coins", 1, 66, "" ];  //  (524)
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Coins", 1, 196, "" ];  //  (720)
item [104] = [ "Coins", 1, 196, "" ];  //  (916)
item [105] = [ "Death-rune", 1, 3, "Rune" ];  //  (6)
item [106] = [ "Coins", 1, 66, "" ];  //  (982)
item [107] = [ "Coins", 1, 196, "" ];  //  (1178)
item [108] = [ "Death-rune", 1, 3, "Rune" ];  //  (9)
item [109] = [ "Coins", 1, 66, "" ];  //  (1244)
item [110] = [ "Coins", 1, 196, "" ];  //  (1440)
item [111] = [ "Mithril Kite Shield", 1, 1, "" ];
item [112] = [ "Nothing", 1, 0, "" ];
item [113] = [ "Coins", 1, 66, "" ];  //  (1506)
item [114] = [ "Rune Long Sword", 1, 1, "" ];
item [115] = [ "Adamantite Plate Mail Body", 1, 1, "" ];
item [116] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [117] = [ "Coins", 1, 196, "" ];  //  (1702)
item [118] = [ "Coins", 1, 66, "" ];  //  (1768)
item [119] = [ "Coins", 1, 196, "" ];  //  (1964)
item [120] = [ "Coins", 1, 66, "" ];  //  (2030)
item [121] = [ "Coins", 1, 196, "" ];  //  (2226)
item [122] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [123] = [ "Coins", 1, 66, "" ];  //  (2292)
item [124] = [ "Coins", 1, 196, "" ];  //  (2488)
item [125] = [ "Coins", 1, 330, "" ];  //  (2818)
item [126] = [ "Coins", 1, 196, "" ];  //  (3014)
item [127] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [128] = [ "Coins", 1, 196, "" ];  //  (3210)
item [129] = [ "Coins", 1, 196, "" ];  //  (3406)
item [130] = [ "Coins", 1, 196, "" ];  //  (3602)
item [131] = [ "Chocolate Cake", 1, 2, "" ];

runs [3] = [ 131, 132 ];  // kills 37, drops 37

// run 5

item [132] = [ "Chocolate Cake", 1, 2, "" ];
item [133] = [ "Coins", 1, 196, "" ];  //  (196)
item [134] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [135] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item [136] = [ "Nothing", 1, 0, "" ];
item [137] = [ "Coins", 1, 196, "" ];  //  (392)
item [138] = [ "Coins", 1, 66, "" ];  //  (458)
item [139] = [ "Coins", 1, 196, "" ];  //  (654)
item [140] = [ "Death-rune", 1, 3, "Rune" ];  //  (6)
item [141] = [ "Mithril battle Axe", 1, 1, "" ];
item [142] = [ "Coins", 1, 66, "" ];  //  (720)
item [143] = [ "Guam Leaf", 1, 1, "Herb" ];
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Coins", 1, 196, "" ];  //  (916)
item [146] = [ "Coins", 1, 66, "" ];  //  (982)
item [147] = [ "Coins", 1, 330, "" ];  //  (1312)
item [148] = [ "Death-rune", 1, 3, "Rune" ];  //  (9)
item [149] = [ "Coins", 1, 66, "" ];  //  (1378)
item [150] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [151] = [ "Coins", 1, 196, "" ];  //  (1574)
item [152] = [ "Coins", 1, 196, "" ];  //  (1770)
item [153] = [ "Coins", 1, 66, "" ];  //  (1836)
item [154] = [ "Coins", 1, 330, "" ];  //  (2166)
item [155] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [156] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [157] = [ "Coins", 1, 196, "" ];  //  (2362)
item [158] = [ "Coins", 1, 196, "" ];  //  (2558)
item [159] = [ "Coins", 1, 66, "" ];  //  (2624)
item [160] = [ "Coins", 1, 196, "" ];  //  (2820)
item [161] = [ "damantite bar", 1, 1, "" ];
item [162] = [ "Coins", 1, 330, "" ];  //  (3150)
item [163] = [ "Coins", 1, 196, "" ];  //  (3346)
item [164] = [ "Coins", 1, 66, "" ];  //  (3412)
item [165] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)

runs [4] = [ 165, 166 ];  // kills 34, drops 34

// run 6

item [166] = [ "Coins", 1, 66, "" ];  //  (66)
item [167] = [ "Coins", 1, 196, "" ];  //  (262)
item [168] = [ "Chocolate Cake", 1, 2, "" ];
item [169] = [ "Coins", 1, 330, "" ];  //  (592)
item [170] = [ "Coins", 1, 66, "" ];  //  (658)
item [171] = [ "Coins", 1, 330, "" ];  //  (988)
item [172] = [ "Coins", 1, 330, "" ];  //  (1318)
item [173] = [ "Coins", 1, 66, "" ];  //  (1384)
item [174] = [ "Coins", 1, 196, "" ];  //  (1580)
item [175] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [176] = [ "Coins", 1, 66, "" ];  //  (1646)
item [177] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [178] = [ "Coins", 1, 196, "" ];  //  (1842)
item [179] = [ "Coins", 1, 196, "" ];  //  (2038)
item [180] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [181] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [182] = [ "Coins", 1, 196, "" ];  //  (2234)
item [183] = [ "Coins", 1, 330, "" ];  //  (2564)
item [184] = [ "Mithril Axe", 1, 1, "" ];
item [185] = [ "Coins", 1, 66, "" ];  //  (2630)
item [186] = [ "Coins", 1, 66, "" ];  //  (2696)
item [187] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [188] = [ "Coins", 1, 196, "" ];  //  (2892)
item [189] = [ "Mithril Axe", 1, 1, "" ];
item [190] = [ "Coins", 1, 330, "" ];  //  (3222)
item [191] = [ "damantite bar", 1, 1, "" ];
item [192] = [ "Coins", 1, 330, "" ];  //  (3552)
item [193] = [ "Coins", 1, 196, "" ];  //  (3748)
item [194] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [195] = [ "Coins", 1, 66, "" ];  //  (3814)
item [196] = [ "Coins", 1, 196, "" ];  //  (4010)
item [197] = [ "Coins", 1, 196, "" ];  //  (4206)
item [198] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [199] = [ "Coins", 1, 16, "" ];  //  (4222)
item [200] = [ "Coins", 1, 330, "" ];  //  (4552)
item [201] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)

runs [5] = [ 201, 202 ];  // kills 36, drops 36

// run 7

item [202] = [ "Coins", 1, 196, "" ];  //  (196)
item [203] = [ "Adamantite Plate Mail Body", 1, 1, "" ];
item [204] = [ "damantite bar", 1, 1, "" ];
item [205] = [ "Mithril Axe", 1, 1, "" ];
item [206] = [ "Coins", 1, 196, "" ];  //  (392)
item [207] = [ "Coins", 1, 66, "" ];  //  (458)
item [208] = [ "Coins", 1, 66, "" ];  //  (524)
item [209] = [ "Coins", 1, 196, "" ];  //  (720)
item [210] = [ "Chocolate Cake", 1, 2, "" ];
item [211] = [ "Nothing", 1, 0, "" ];
item [212] = [ "Coins", 1, 330, "" ];  //  (1050)
item [213] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [214] = [ "Coins", 1, 196, "" ];  //  (1246)
item [215] = [ "Mithril Axe", 1, 1, "" ];
item [216] = [ "Coins", 1, 196, "" ];  //  (1442)
item [217] = [ "Coins", 1, 196, "" ];  //  (1638)
item [218] = [ "damantite bar", 1, 1, "" ];
item [219] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item [220] = [ "Coins", 1, 196, "" ];  //  (1834)
item [221] = [ "Coins", 1, 16, "" ];  //  (1850)
item [222] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [223] = [ "Coins", 1, 196, "" ];  //  (2046)
item [224] = [ "Coins", 1, 66, "" ];  //  (2112)
item [225] = [ "Coins", 1, 196, "" ];  //  (2308)
item [226] = [ "Coins", 1, 66, "" ];  //  (2374)
item [227] = [ "Coins", 1, 66, "" ];  //  (2440)
item [228] = [ "Coins", 1, 66, "" ];  //  (2506)
item [229] = [ "Nothing", 1, 0, "" ];
item [230] = [ "Coins", 1, 196, "" ];  //  (2702)
item [231] = [ "Coins", 1, 66, "" ];  //  (2768)
item [232] = [ "Coins", 1, 16, "" ];  //  (2784)
item [233] = [ "Coins", 1, 66, "" ];  //  (2850)
item [234] = [ "Coins", 1, 66, "" ];  //  (2916)

runs [6] = [ 234, 235 ];  // kills 33, drops 33

// run 8

item [235] = [ "Chocolate Cake", 1, 1, "" ];
item [236] = [ "Coins", 1, 66, "" ];  //  (66)
item [237] = [ "Coins", 1, 66, "" ];  //  (132)
item [238] = [ "Coins", 1, 196, "" ];  //  (328)
item [239] = [ "Rune Long Sword", 1, 1, "" ];
item [240] = [ "Chocolate Cake", 1, 2, "" ];
item [241] = [ "Coins", 1, 196, "" ];  //  (524)
item [242] = [ "Coins", 1, 16, "" ];  //  (540)
item [243] = [ "Coins", 1, 196, "" ];  //  (736)
item [244] = [ "Mithril battle Axe", 1, 1, "" ];
item [245] = [ "Coins", 1, 330, "" ];  //  (1066)
item [246] = [ "Coins", 1, 66, "" ];  //  (1132)
item [247] = [ "Coins", 1, 690, "" ];  //  (1822)
item [248] = [ "Coins", 1, 66, "" ];  //  (1888)
item [249] = [ "Coins", 1, 196, "" ];  //  (2084)
item [250] = [ "Coins", 1, 196, "" ];  //  (2280)
item [251] = [ "Coins", 1, 196, "" ];  //  (2476)
item [252] = [ "Tarromin", 1, 1, "Herb" ];
item [253] = [ "Coins", 1, 66, "" ];  //  (2542)
item [254] = [ "Mithril battle Axe", 1, 1, "" ];
item [255] = [ "Coins", 1, 66, "" ];  //  (2608)
item [256] = [ "Coins", 1, 196, "" ];  //  (2804)
item [257] = [ "Mithril Axe", 1, 1, "" ];
item [258] = [ "Coins", 1, 330, "" ];  //  (3134)
item [259] = [ "damantite bar", 1, 1, "" ];
item [260] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [261] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [262] = [ "Coins", 1, 196, "" ];  //  (3330)
item [263] = [ "Coins", 1, 66, "" ];  //  (3396)
item [264] = [ "Chocolate Cake", 1, 2, "" ];
item [265] = [ "Fire-rune", 1, 50, "Rune" ];  //  (150)
item [266] = [ "Coins", 1, 66, "" ];  //  (3462)
item [267] = [ "Rune Long Sword", 1, 1, "" ];
item [268] = [ "Coins", 1, 66, "" ];  //  (3528)
item [269] = [ "Fire-rune", 1, 50, "Rune" ];  //  (200)
item [270] = [ "Coins", 1, 66, "" ];  //  (3594)
item [271] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)

runs [7] = [ 271, 272 ];  // kills 37, drops 37

// run 9

item [272] = [ "Mithril battle Axe", 1, 1, "" ];
item [273] = [ "Coins", 1, 66, "" ];  //  (66)
item [274] = [ "Coins", 1, 66, "" ];  //  (132)
item [275] = [ "Coins", 1, 66, "" ];  //  (198)
item [276] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [277] = [ "Coins", 1, 66, "" ];  //  (264)
item [278] = [ "Coins", 1, 330, "" ];  //  (594)
item [279] = [ "Mithril battle Axe", 1, 1, "" ];
item [280] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [281] = [ "Coins", 1, 196, "" ];  //  (790)
item [282] = [ "Coins", 1, 196, "" ];  //  (986)
item [283] = [ "Coins", 1, 196, "" ];  //  (1182)
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 66, "" ];  //  (1248)
item [286] = [ "Coins", 1, 196, "" ];  //  (1444)
item [287] = [ "Marrentill", 1, 1, "Herb" ];
item [288] = [ "Rune Long Sword", 1, 1, "" ];
item [289] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [290] = [ "Coins", 1, 690, "" ];  //  (2134)
item [291] = [ "Coins", 1, 66, "" ];  //  (2200)
item [292] = [ "Coins", 1, 66, "" ];  //  (2266)
item [293] = [ "Coins", 1, 196, "" ];  //  (2462)
item [294] = [ "Coins", 1, 196, "" ];  //  (2658)
item [295] = [ "Mithril Axe", 1, 1, "" ];
item [296] = [ "Mithril battle Axe", 1, 1, "" ];
item [297] = [ "Coins", 1, 196, "" ];  //  (2854)
item [298] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [299] = [ "Chocolate Cake", 1, 2, "" ];
item [300] = [ "Coins", 1, 66, "" ];  //  (2920)
item [301] = [ "Coins", 1, 16, "" ];  //  (2936)
item [302] = [ "Coins", 1, 196, "" ];  //  (3132)
item [303] = [ "Coins", 1, 330, "" ];  //  (3462)
item [304] = [ "Coins", 1, 196, "" ];  //  (3658)
item [305] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [306] = [ "Coins", 1, 196, "" ];  //  (3854)

runs [8] = [ 306, 307 ];  // kills 35, drops 35

// run 10

item [307] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [308] = [ "Coins", 1, 196, "" ];  //  (196)
item [309] = [ "Coins", 1, 196, "" ];  //  (392)
item [310] = [ "Coins", 1, 196, "" ];  //  (588)
item [311] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [312] = [ "Mithril Kite Shield", 1, 1, "" ];
item [313] = [ "Coins", 1, 196, "" ];  //  (784)
item [314] = [ "Coins", 1, 330, "" ];  //  (1114)
item [315] = [ "Irit Leaf", 1, 1, "Herb" ];
item [316] = [ "Coins", 1, 196, "" ];  //  (1310)
item [317] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [318] = [ "Coins", 1, 66, "" ];  //  (1376)
item [319] = [ "Coins", 1, 66, "" ];  //  (1442)
item [320] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [321] = [ "Coins", 1, 196, "" ];  //  (1638)
item [322] = [ "Coins", 1, 196, "" ];  //  (1834)
item [323] = [ "Coins", 1, 196, "" ];  //  (2030)
item [324] = [ "Coins", 1, 196, "" ];  //  (2226)
item [325] = [ "Coins", 1, 66, "" ];  //  (2292)
item [326] = [ "Coins", 1, 330, "" ];  //  (2622)
item [327] = [ "Coins", 1, 196, "" ];  //  (2818)
item [328] = [ "Coins", 1, 196, "" ];  //  (3014)
item [329] = [ "Mithril battle Axe", 1, 1, "" ];

runs [9] = [ 329, 330 ];  // kills 23, drops 23

// run 11


// runs [10] = [ x, y ];  // kills ? ( y - 330 ), drops ? ( x - 329 )

/*
item [000] = [ "Coins", 1, 16, "" ];  //  ()
item [000] = [ "Coins", 1, 66, "" ];  //  ()
item [000] = [ "Coins", 1, 196, "" ];  //  ()
item [000] = [ "Coins", 1, 330, "" ];  //  ()
item [000] = [ "Coins", 1, 690, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "damantite bar", 1, 1, "" ];

item [000] = [ "Mithril Axe", 1, 1, "" ];
item [000] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [000] = [ "Mithril battle Axe", 1, 1, "" ];
item [000] = [ "Rune Long Sword", 1, 1, "" ];

item [000] = [ "Mithril Kite Shield", 1, 1, "" ];
item [000] = [ "Adamantite Plate Mail Body", 1, 1, "" ];
item [000] = [ "Dragon Square Shield Left Half", 1, 1, "" ];

item [000] = [ "Chocolate Cake", 1, 1, "" ];
item [000] = [ "Chocolate Cake", 1, 2, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Red Dragon";        // monster's name
var mcbl = 140;                  // monster's combat level
var mindex = 164;                // index into monster data base
var mrpt = 1;                    // number of non-breaking space to add after index name