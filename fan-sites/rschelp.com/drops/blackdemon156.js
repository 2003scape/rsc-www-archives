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

var notes = "On run 3 ran into a few Poison Spiders, so ran low of hits and had to use prayer to restore them.";

// run 1

item   [0] = [ "Coins", 1, 132, "" ];  //  (132)
item   [1] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item   [2] = [ "defense Potion(3 dose)", 1, 1, "" ];
item   [3] = [ "Coins", 1, 132, "" ];  //  (264)
item   [4] = [ "Coins", 1, 132, "" ];  //  (396)
item   [5] = [ "Black Axe", 1, 1, "" ];
item   [6] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [7] = [ "Kwuarm", 1, 1, "Herb" ];
item   [8] = [ "Coins", 1, 132, "" ];  //  (528)
item   [9] = [ "Coins", 1, 132, "" ];  //  (660)
item  [10] = [ "Harralander", 1, 1, "Herb" ];
item  [11] = [ "Coins", 1, 132, "" ];  //  (792)
item  [12] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item  [13] = [ "Coins", 1, 44, "" ];  //  (836)
item  [14] = [ "Coins", 1, 132, "" ];  //  (968)
item  [15] = [ "Coins", 1, 220, "" ];  //  (1188)
item  [16] = [ "Coins", 1, 132, "" ];  //  (1320)
item  [17] = [ "Tarromin", 1, 1, "Herb" ];
item  [18] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item  [19] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item  [20] = [ "Coins", 1, 132, "" ];  //  (1452)

runs [0] = [ 20, 21 ];  // kills 21, drops 21

// run 2

item  [21] = [ "Coins", 1, 44, "" ];  //  (44)
item  [22] = [ "uncut emerald", 1, 1, "Gem" ];
item  [23] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item  [24] = [ "Coins", 1, 220, "" ];  //  (264)
item  [25] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item  [26] = [ "Coins", 1, 44, "" ];  //  (308)
item  [27] = [ "Kwuarm", 1, 1, "Herb" ];
item  [28] = [ "Coins", 1, 132, "" ];  //  (440)
item  [29] = [ "Nothing", 1, 0, "" ];
item  [30] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [31] = [ "Avantoe", 1, 1, "Herb" ];
item  [32] = [ "Coins", 1, 132, "" ];  //  (572)
item  [33] = [ "Black Short Sword", 1, 1, "" ];
item  [34] = [ "Coins", 1, 132, "" ];  //  (704)
item  [35] = [ "Coins", 1, 132, "" ];  //  (836)
item  [36] = [ "Steel battle Axe", 1, 1, "" ];
item  [37] = [ "Coins", 1, 132, "" ];  //  (968)
item  [38] = [ "Coins", 1, 132, "" ];  //  (1100)
item  [39] = [ "Black Short Sword", 1, 1, "" ];
item  [40] = [ "Coins", 1, 132, "" ];  //  (1232)
item  [41] = [ "Coins", 1, 132, "" ];  //  (1364)
item  [42] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)

runs [1] = [ 42, 43 ];  // kills 22, drops 22

// run 3

item  [43] = [ "Coins", 1, 132, "" ];  //  (132)
item  [44] = [ "Coins", 1, 220, "" ];  //  (352)
item  [45] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item  [46] = [ "Coins", 1, 132, "" ];  //  (484)
item  [47] = [ "Rune Chain Mail Body", 1, 1, "" ];
item  [48] = [ "Coins", 1, 132, "" ];  //  (616)
item  [49] = [ "Coins", 1, 132, "" ];  //  (748)
item  [50] = [ "Coins", 1, 132, "" ];  //  (880)
item  [51] = [ "Coins", 1, 132, "" ];  //  (1012)
item  [52] = [ "Coins", 1, 132, "" ];  //  (1144)
item  [53] = [ "Coins", 1, 132, "" ];  //  (1276)
item  [54] = [ "Coins", 1, 30, "" ];  //  (1306)
item  [55] = [ "Coins", 1, 132, "" ];  //  (1438)
item  [56] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [57] = [ "Coins", 1, 132, "" ];  //  (1570)
item  [58] = [ "Coins", 1, 30, "" ];  //  (1600)
item  [59] = [ "Coins", 1, 132, "" ];  //  (1732)

runs [2] = [ 59, 60 ];  // kills 17, drops 17

// run 4

item  [60] = [ "damantite bar", 1, 1, "" ];
item  [61] = [ "Coins", 1, 44, "" ];  //  (44)
item  [62] = [ "Coins", 1, 132, "" ];  //  (176)
item  [63] = [ "Black Short Sword", 1, 1, "" ];
item  [64] = [ "Nothing", 1, 0, "" ];
item  [65] = [ "Coins", 1, 132, "" ];  //  (308)
item  [66] = [ "Coins", 1, 132, "" ];  //  (440)
item  [67] = [ "Black Short Sword", 1, 1, "" ];
item  [68] = [ "Tarromin", 1, 1, "Herb" ];
item  [69] = [ "Harralander", 1, 1, "Herb" ];
item  [70] = [ "Coins", 1, 132, "" ];  //  (572)
item  [71] = [ "Lobster", 1, 2, "" ];
item  [72] = [ "Coins", 1, 132, "" ];  //  (704)
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Coins", 1, 30, "" ];  //  (734)
item  [75] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item  [76] = [ "Coins", 1, 30, "" ];  //  (764)
item  [77] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [78] = [ "Avantoe", 1, 1, "Herb" ];

runs [3] = [ 78, 79 ];  // kills 19, drops 19

// run 5

item  [79] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item  [80] = [ "Coins", 1, 220, "" ];  //  (220)
item  [81] = [ "Coins", 1, 132, "" ];  //  (352)
item  [82] = [ "Tarromin", 1, 1, "Herb" ];
item  [83] = [ "Avantoe", 1, 1, "Herb" ];
item  [84] = [ "Coins", 1, 132, "" ];  //  (484)
item  [85] = [ "Coins", 1, 132, "" ];  //  (616)
item  [86] = [ "Black Short Sword", 1, 1, "" ];
item  [87] = [ "Black Short Sword", 1, 1, "" ];
item  [88] = [ "Coins", 1, 220, "" ];  //  (836)
item  [89] = [ "Coins", 1, 132, "" ];  //  (968)
item  [90] = [ "Blood-rune", 1, 5, "Rune" ];  //  (10)
item  [91] = [ "Rune Chain Mail Body", 1, 1, "" ];
item  [92] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [93] = [ "Coins", 1, 132, "" ];  //  (1100)
item  [94] = [ "Kwuarm", 1, 1, "Herb" ];
item  [95] = [ "Coins", 1, 132, "" ];  //  (1232)
item  [96] = [ "Black Short Sword", 1, 1, "" ];
item  [97] = [ "Kwuarm", 1, 1, "Herb" ];
item  [98] = [ "Coins", 1, 132, "" ];  //  (1364)

runs [4] = [ 98, 99 ];  // kills 20, drops 20

// run 6

item  [99] = [ "Coins", 1, 132, "" ];  //  (132)
item [100] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Black Short Sword", 1, 1, "" ];
item [103] = [ "Steel battle Axe", 1, 1, "" ];
item [104] = [ "Black Short Sword", 1, 1, "" ];
item [105] = [ "Black Short Sword", 1, 1, "" ];
item [106] = [ "Coins", 1, 132, "" ];  //  (264)
item [107] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "uncut sapphire", 1, 1, "Gem" ];
item [110] = [ "Coins", 1, 30, "" ];  //  (294)
item [111] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item [112] = [ "Guam Leaf", 1, 1, "Herb" ];
item [113] = [ "Coins", 1, 132, "" ];  //  (426)
item [114] = [ "Steel battle Axe", 1, 1, "" ];
item [115] = [ "Coins", 1, 132, "" ];  //  (558)
item [116] = [ "Coins", 1, 132, "" ];  //  (690)
item [117] = [ "Blood-rune", 1, 5, "Rune" ];  //  (10)
item [118] = [ "Black Axe", 1, 1, "" ];
item [119] = [ "Mithril Kite Shield", 1, 1, "" ];
item [120] = [ "Coins", 1, 220, "" ];  //  (910)
item [121] = [ "Coins", 1, 132, "" ];  //  (1042)

runs [5] = [ 121, 122 ];  // kills 23, drops 23

// run 7

item [122] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [123] = [ "Coins", 1, 132, "" ];  //  (132)
item [124] = [ "Coins", 1, 44, "" ];  //  (176)
item [125] = [ "Coins", 1, 460, "" ];  //  (636)
item [126] = [ "Coins", 1, 132, "" ];  //  (768)
item [127] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [128] = [ "Coins", 1, 132, "" ];  //  (900)
item [129] = [ "Guam Leaf", 1, 1, "Herb" ];
item [130] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [131] = [ "damantite bar", 1, 1, "" ];
item [132] = [ "Steel battle Axe", 1, 1, "" ];
item [133] = [ "Tarromin", 1, 1, "Herb" ];
item [134] = [ "Rune Chain Mail Body", 1, 1, "" ];
item [135] = [ "Coins", 1, 132, "" ];  //  (1032)
item [136] = [ "Steel battle Axe", 1, 1, "" ];
item [137] = [ "Coins", 1, 132, "" ];  //  (1164)
item [138] = [ "Coins", 1, 132, "" ];  //  (1296)
item [139] = [ "Black Short Sword", 1, 1, "" ];
item [140] = [ "Coins", 1, 132, "" ];  //  (1428)
item [141] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (30)
item [142] = [ "Fire-rune", 1, 25, "Rune" ];  //  (25)
item [143] = [ "uncut emerald", 1, 1, "Gem" ];
item [144] = [ "Coins", 1, 132, "" ];  //  (1560)
item [145] = [ "Coins", 1, 132, "" ];  //  (1692)

runs [6] = [ 145, 146 ];  // kills 0, drops 0

// run 8

item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Coins", 1, 30, "" ];  //  (30)
item [148] = [ "Guam Leaf", 1, 1, "Herb" ];
item [149] = [ "Coins", 1, 132, "" ];  //  (162)
item [150] = [ "Coins", 1, 30, "" ];  //  (192)
item [151] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [152] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [153] = [ "Marrentill", 1, 1, "Herb" ];
item [154] = [ "Coins", 1, 30, "" ];  //  (222)
item [155] = [ "Marrentill", 1, 1, "Herb" ];
item [156] = [ "Coins", 1, 30, "" ];  //  (252)
item [157] = [ "Cadantine", 1, 1, "Herb" ];
item [158] = [ "Air-rune", 1, 50, "Rune" ];  //  (100)
item [159] = [ "Coins", 1, 44, "" ];  //  (296)
item [160] = [ "Coins", 1, 30, "" ];  //  (326)
item [161] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [162] = [ "Coins", 1, 30, "" ];  //  (356)
item [163] = [ "Guam Leaf", 1, 1, "Herb" ];
item [164] = [ "Coins", 1, 132, "" ];  //  (488)
item [165] = [ "Air-rune", 1, 50, "Rune" ];  //  (150)
item [166] = [ "Tarromin", 1, 1, "Herb" ];
item [167] = [ "Black Axe", 1, 1, "" ];
item [168] = [ "Coins", 1, 220, "" ];  //  (708)
item [169] = [ "Ranarr Weed", 1, 1, "Herb" ];

runs [7] = [ 169, 170 ];  // kills 24, drops 24

// run 9

item [170] = [ "Coins", 1, 220, "" ];  //  (220)
item [171] = [ "Coins", 1, 132, "" ];  //  (352)
item [172] = [ "Marrentill", 1, 1, "Herb" ];
item [173] = [ "defense Potion(3 dose)", 1, 1, "" ];
item [174] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item [175] = [ "Coins", 1, 132, "" ];  //  (484)
item [176] = [ "Coins", 1, 132, "" ];  //  (616)
item [177] = [ "Coins", 1, 132, "" ];  //  (748)
item [178] = [ "defense Potion(3 dose)", 1, 1, "" ];
item [179] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [180] = [ "Steel battle Axe", 1, 1, "" ];
item [181] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [182] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [183] = [ "Coins", 1, 132, "" ];  //  (880)
item [184] = [ "Marrentill", 1, 1, "Herb" ];
item [185] = [ "Black Axe", 1, 1, "" ];
item [186] = [ "Guam Leaf", 1, 1, "Herb" ];
item [187] = [ "Marrentill", 1, 1, "Herb" ];
item [188] = [ "Coins", 1, 30, "" ];  //  (910)
item [189] = [ "Law-rune", 1, 3, "Rune" ];  //  (3)
item [190] = [ "Coins", 1, 44, "" ];  //  (954)

runs [8] = [ 190, 191 ];  // kills 21, drops 21

// run 10

item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Coins", 1, 220, "" ];  //  (220)
item [193] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [194] = [ "Coins", 1, 132, "" ];  //  (352)
item [195] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item [196] = [ "Coins", 1, 132, "" ];  //  (484)
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Coins", 1, 132, "" ];  //  (616)
item [199] = [ "Kwuarm", 1, 1, "Herb" ];
item [200] = [ "Irit Leaf", 1, 1, "Herb" ];
item [201] = [ "Avantoe", 1, 1, "Herb" ];
item [202] = [ "Guam Leaf", 1, 1, "Herb" ];
item [203] = [ "Coins", 1, 132, "" ];  //  (748)
item [204] = [ "Guam Leaf", 1, 1, "Herb" ];
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Steel battle Axe", 1, 1, "" ];
item [207] = [ "Coins", 1, 132, "" ];  //  (880)
item [208] = [ "Coins", 1, 132, "" ];  //  (1012)
item [209] = [ "Coins", 1, 132, "" ];  //  (1144)
item [210] = [ "Guam Leaf", 1, 1, "Herb" ];
item [211] = [ "Coins", 1, 132, "" ];  //  (1276)
item [212] = [ "Black Short Sword", 1, 1, "" ];

runs [9] = [ 212, 213 ];  // kills 22, drops 22

// run 11

item [213] = [ "Harralander", 1, 1, "Herb" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [216] = [ "Kwuarm", 1, 1, "Herb" ];
item [217] = [ "Black Short Sword", 1, 1, "" ];
item [218] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [219] = [ "Coins", 1, 132, "" ];  //  (132)
item [220] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item [221] = [ "Coins", 1, 132, "" ];  //  (264)
item [222] = [ "Coins", 1, 132, "" ];  //  (396)
item [223] = [ "Coins", 1, 132, "" ];  //  (528)
item [224] = [ "Coins", 1, 132, "" ];  //  (660)
item [225] = [ "Coins", 1, 132, "" ];  //  (792)
item [226] = [ "uncut sapphire", 1, 1, "Gem" ];
item [227] = [ "Guam Leaf", 1, 1, "Herb" ];
item [228] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [229] = [ "Coins", 1, 132, "" ];  //  (924)
item [230] = [ "Coins", 1, 220, "" ];  //  (1144)
item [231] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [232] = [ "Marrentill", 1, 1, "Herb" ];

runs [10] = [ 232, 233 ];  // kills 20, drops 20

// run 12

item [233] = [ "Half of a key (loop)", 1, 1, "" ];
item [234] = [ "Law-rune", 1, 3, "Rune" ];  //  (3)
item [235] = [ "Coins", 1, 44, "" ];  //  (44)
item [236] = [ "Coins", 1, 132, "" ];  //  (176)
item [237] = [ "Coins", 1, 132, "" ];  //  (308)
item [238] = [ "Coins", 1, 220, "" ];  //  (528)
item [239] = [ "defense Potion(3 dose)", 1, 1, "" ];
item [240] = [ "defense Potion(3 dose)", 1, 1, "" ];  // 2 dose ?
item [241] = [ "Coins", 1, 132, "" ];  //  (660)
item [242] = [ "Coins", 1, 132, "" ];  //  (792)
item [243] = [ "uncut sapphire", 1, 1, "Gem" ];
item [244] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [245] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [246] = [ "Coins", 1, 30, "" ];  //  (822)
item [247] = [ "Lobster", 1, 2, "" ];
item [248] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (30)
item [249] = [ "Coins", 1, 132, "" ];  //  (954)
item [250] = [ "Blood-rune", 1, 5, "Rune" ];  //  (5)
item [251] = [ "Avantoe", 1, 1, "Herb" ];
item [252] = [ "Coins", 1, 132, "" ];  //  (1086)
item [253] = [ "Nothing", 1, 0, "" ];
item [254] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)

runs [11] = [ 254, 255 ];  // kills 22, drops 22

// run 13

item [255] = [ "Coins", 1, 460, "" ];  //  (460)
item [256] = [ "Coins", 1, 220, "" ];  //  (680)
item [257] = [ "Kwuarm", 1, 1, "Herb" ];
item [258] = [ "Coins", 1, 132, "" ];  //  (812)
item [259] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [260] = [ "Steel battle Axe", 1, 1, "" ];
item [261] = [ "Guam Leaf", 1, 1, "Herb" ];
item [262] = [ "Coins", 1, 132, "" ];  //  (944)
item [263] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [264] = [ "Black Short Sword", 1, 1, "" ];
item [265] = [ "Coins", 1, 132, "" ];  //  (1076)
item [266] = [ "Coins", 1, 132, "" ];  //  (1208)
item [267] = [ "Irit Leaf", 1, 1, "Herb" ];
item [268] = [ "Rune Square Shield", 1, 1, "" ];
item [269] = [ "Tarromin", 1, 1, "Herb" ];
item [270] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [271] = [ "Coins", 1, 220, "" ];  //  (1428)
item [272] = [ "Coins", 1, 132, "" ];  //  (1560)
item [273] = [ "Cadantine", 1, 1, "Herb" ];
item [274] = [ "Coins", 1, 132, "" ];  //  (1692)
item [275] = [ "defense Potion(3 dose)", 1, 1, "" ];
item [276] = [ "Rune Chain Mail Body", 1, 1, "" ];
item [277] = [ "Coins", 1, 220, "" ];  //  (1912)
item [278] = [ "Coins", 1, 132, "" ];  //  (2044)

runs [12] = [ 278, 279 ];  // kills 24, drops 24

// run 14

item [279] = [ "Tarromin", 1, 1, "Herb" ];
item [280] = [ "Coins", 1, 132, "" ];  //  (132)
item [281] = [ "Guam Leaf", 1, 1, "Herb" ];
item [282] = [ "Tarromin", 1, 1, "Herb" ];
item [283] = [ "Coins", 1, 460, "" ];  //  (592)
item [284] = [ "Coins", 1, 30, "" ];  //  (622)
item [285] = [ "Marrentill", 1, 1, "Herb" ];
item [286] = [ "Coins", 1, 132, "" ];  //  (754)
item [287] = [ "Coins", 1, 132, "" ];  //  (886)
item [288] = [ "Law-rune", 1, 3, "Rune" ];  //  (3)
item [289] = [ "Coins", 1, 44, "" ];  //  (930)
item [290] = [ "Air-rune", 1, 50, "Rune" ];  //  (50)
item [291] = [ "Coins", 1, 220, "" ];  //  (1150)
item [292] = [ "Coins", 1, 132, "" ];  //  (1282)
item [293] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [294] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [295] = [ "Coins", 1, 132, "" ];  //  (1414)
item [296] = [ "Air-rune", 1, 50, "Rune" ];  //  (100)
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Steel battle Axe", 1, 1, "" ];
item [299] = [ "Dwarf Weed", 1, 1, "Herb" ];

runs [13] = [ 299, 300 ];  // kills 21, drops 21

// run 15

item [300] = [ "Coins", 1, 44, "" ];  //  (44)
item [301] = [ "uncut emerald", 1, 1, "Gem" ];
item [302] = [ "Coins", 1, 132, "" ];  //  (176)
item [303] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [304] = [ "Coins", 1, 460, "" ];  //  (636)
item [305] = [ "Coins", 1, 132, "" ];  //  (768)

runs [14] = [ 305, 306 ];  // kills 0, drops 0

// runs [14] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*
item [000] = [ "Coins", 1, 30, "" ];  //  ()
item [000] = [ "Coins", 1, 44, "" ];  //  ()
item [000] = [ "Coins", 1, 132, "" ];  //  ()
item [000] = [ "Coins", 1, 220, "" ];  //  ()
item [000] = [ "Coins", 1, 460, "" ];  //  ()

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
item [000] = [ "Air-rune", 1, 75, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 25, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 5, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Steel battle Axe", 1, 1, "" ];
item [000] = [ "Black Axe", 1, 1, "" ];
item [000] = [ "Black Short Sword", 1, 1, "" ];
item [000] = [ "Rune Long Sword", 1, 1, "" ];
item [000] = [ "Rune battle Axe", 1, 1, "" ];
item [000] = [ "rune 2-handed Sword", 1, 1, "" ];

item [000] = [ "Mithril Kite Shield", 1, 1, "" ];
item [000] = [ "Medium Rune Helmet", 1, 1, "" ];
item [000] = [ "Rune Chain Mail Body", 1, 1, "" ];
item [000] = [ "Rune Square Shield", 1, 1, "" ];
item [000] = [ "Rune Kite Shield", 1, 1, "" ];
item [000] = [ "Dragon medium Helmet", 1, 1, "" ];

item [000] = [ "damantite bar", 1, 1, "" ];
item [000] = [ "Runite bar", 1, 1, "" ];

item [000] = [ "coal Certificate", 1, 20, "" ];
item [000] = [ "silver certificate (Ore)", 1, 20, "" ];

item [000] = [ "Bronze Arrows", 1, 300, "Arrows" ];
item [000] = [ "Lobster", 1, 2, "" ];
item [000] = [ "defense Potion(3 dose)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Black Demon";          // monster's name
var mcbl = 156;                     // monster's combat level
var mindex = 166;                   // index into monster data base
var mrpt = 1;                       // number of non-breaking space to add after index name