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

var notes = "";

// run 1

item   [0] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [1] = [ "Coins", 1, 15, "" ];  //  (15)
item   [2] = [ "Coins", 1, 28, "" ];  //  (43)
item   [3] = [ "Coins", 1, 62, "" ];  //  (105)
item   [4] = [ "Coins", 1, 15, "" ];  //  (120)
item   [5] = [ "Snape grass", 1, 1, "" ];
item   [6] = [ "Snape grass", 1, 1, "" ];
item   [7] = [ "Coins", 1, 15, "" ];  //  (135)
item   [8] = [ "Coins", 1, 62, "" ];  //  (197)
item   [9] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item  [10] = [ "Coins", 1, 62, "" ];  //  (259)
item  [11] = [ "Gold", 1, 1, "" ];
item  [12] = [ "Tarromin", 1, 1, "Herb" ];
item  [13] = [ "Gold", 1, 1, "" ];
item  [14] = [ "Coins", 1, 42, "" ];  //  (301)
item  [15] = [ "Snape grass", 1, 1, "" ];
item  [16] = [ "Coins", 1, 28, "" ];  //  (329)
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Nothing", 1, 0, "" ];
item  [19] = [ "Limpwurt root", 1, 1, "" ];
item  [20] = [ "Coins", 1, 15, "" ];  //  (344)
item  [21] = [ "Mithril Spear", 1, 1, "" ];
item  [22] = [ "Bronze Spear", 1, 2, "" ];
item  [23] = [ "Coins", 1, 15, "" ];  //  (359)
item  [24] = [ "Snape grass", 1, 1, "" ];
item  [25] = [ "Coins", 1, 15, "" ];  //  (374)
item  [26] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  (4)
item  [27] = [ "Avantoe", 1, 1, "Herb" ];
item  [28] = [ "Tarromin", 1, 1, "Herb" ];
item  [29] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item  [30] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item  [31] = [ "Snape grass", 1, 1, "" ];
item  [32] = [ "Mithril Spear", 1, 1, "" ];
item  [33] = [ "Coins", 1, 15, "" ];  //  (389)
item  [34] = [ "Snape grass", 1, 1, "" ];
item  [35] = [ "Nature-rune", 1, 2, "Rune" ];  //  (8)
item  [36] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  (8)
item  [37] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  (12)
item  [38] = [ "Limpwurt root", 1, 1, "" ];
item  [39] = [ "Limpwurt root", 1, 1, "" ];
item  [40] = [ "Coins", 1, 15, "" ];  //  (404)
item  [41] = [ "Snape grass", 1, 1, "" ];

runs [0] = [ 41, 42 ];  // kills 42 drops 42

// run 2

item  [42] = [ "Coins", 1, 42, "" ];  //  (42)
item  [43] = [ "Bronze Spear", 1, 2, "" ];
item  [44] = [ "Snape grass", 1, 1, "" ];
item  [45] = [ "Coins", 1, 15, "" ];  //  (57)
item  [46] = [ "Limpwurt root", 1, 1, "" ];
item  [47] = [ "Coins", 1, 28, "" ];  //  (85)
item  [48] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item  [49] = [ "Coins", 1, 15, "" ];  //  (100)
item  [50] = [ "Snape grass", 1, 1, "" ];
item  [51] = [ "Bronze Spear", 1, 2, "" ];
item  [52] = [ "Coins", 1, 42, "" ];  //  (142)
item  [53] = [ "Snape grass", 1, 1, "" ];
item  [54] = [ "Limpwurt root", 1, 1, "" ];
item  [55] = [ "Snape grass", 1, 1, "" ];
item  [56] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item  [57] = [ "Coins", 1, 42, "" ];  //  (184)
item  [58] = [ "Poison antidote(2 dose)", 1, 1, "" ];
item  [59] = [ "Coins", 1, 15, "" ];  //  (199)
item  [60] = [ "Snape grass", 1, 1, "" ];
item  [61] = [ "Limpwurt root", 1, 1, "" ];
item  [62] = [ "Iron Spear", 1, 1, "" ];
item  [63] = [ "Coins", 1, 15, "" ];  //  (214) Poisoned
item  [64] = [ "Coins", 1, 15, "" ];  //  (229)
item  [65] = [ "Coins", 1, 62, "" ];  //  (291)
item  [66] = [ "Limpwurt root", 1, 1, "" ];
item  [67] = [ "Coins", 1, 62, "" ];  //  (353)
item  [68] = [ "Limpwurt root", 1, 1, "" ];
item  [69] = [ "Coins", 1, 15, "" ];  //  (368)
item  [70] = [ "Snape grass", 1, 1, "" ];
item  [71] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item  [72] = [ "Nature-rune", 1, 2, "Rune" ];  //  (8)
item  [73] = [ "Coins", 1, 15, "" ];  //  (383)
item  [74] = [ "Limpwurt root", 1, 1, "" ];
item  [75] = [ "Nothing", 1, 0, "" ];
item  [76] = [ "Snape grass", 1, 1, "" ];
item  [77] = [ "Coins", 1, 62, "" ];  //  (445)
item  [78] = [ "Snape grass", 1, 1, "" ];
item  [79] = [ "Bronze Spear", 1, 2, "" ];
item  [80] = [ "Gold", 1, 1, "" ];
item  [81] = [ "Coins", 1, 28, "" ];  //  (473)
item  [82] = [ "Bronze Spear", 1, 1, "" ];
item  [83] = [ "Nature-rune", 1, 2, "Rune" ];  //  (10)
item  [84] = [ "Coins", 1, 28, "" ];  //  (501)
item  [85] = [ "Limpwurt root", 1, 1, "" ];
item  [86] = [ "Limpwurt root", 1, 1, "" ];
item  [87] = [ "Snape grass", 1, 1, "" ];
item  [88] = [ "Snape grass", 1, 1, "" ];
item  [89] = [ "Marrentill", 1, 1, "Herb" ];
item  [90] = [ "Coins", 1, 28, "" ];  //  (529)
item  [91] = [ "Coins", 1, 28, "" ];  //  (557)
item  [92] = [ "Limpwurt root", 1, 1, "" ];
item  [93] = [ "Snape grass", 1, 1, "" ];
item  [94] = [ "Coins", 1, 28, "" ];  //  (585)
item  [95] = [ "Coins", 1, 28, "" ];  //  (613)
item  [96] = [ "uncut emerald", 1, 1, "Gem" ];
item  [97] = [ "Snape grass", 1, 1, "" ];
item  [98] = [ "Coins", 1, 28, "" ];  //  (641)
item  [99] = [ "Harralander", 1, 1, "Herb" ];
item [100] = [ "Coins", 1, 28, "" ];  //  (669)
item [101] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  (5)
item [102] = [ "Coins", 1, 42, "" ];  //  (711)
item [103] = [ "Snape grass", 1, 1, "" ];

runs [1] = [ 103, 104 ];  // kills 62 drops 62

// run 3

item [104] = [ "Coins", 1, 28, "" ];  //  (28)
item [105] = [ "Limpwurt root", 1, 1, "" ];
item [106] = [ "Limpwurt root", 1, 1, "" ];
item [107] = [ "Snape grass", 1, 1, "" ];
item [108] = [ "Gold", 1, 1, "" ];
item [109] = [ "Coins", 1, 15, "" ];  //  (43)
item [110] = [ "Snape grass", 1, 1, "" ];
item [111] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [112] = [ "Coins", 1, 15, "" ];  //  (58)
item [113] = [ "Limpwurt root", 1, 1, "" ];
item [114] = [ "Coins", 1, 15, "" ];  //  (73)
item [115] = [ "Coins", 1, 28, "" ];  //  (101)
item [116] = [ "Bronze Spear", 1, 2, "" ];
item [117] = [ "Coins", 1, 15, "" ];  //  (116)
item [118] = [ "Snape grass", 1, 1, "" ];
item [119] = [ "Coins", 1, 15, "" ];  //  (131)
item [120] = [ "Snape grass", 1, 1, "" ];
item [121] = [ "Coins", 1, 28, "" ];  //  (159)
item [122] = [ "Poison antidote(3 dose)", 1, 1, "" ];
item [123] = [ "Snape grass", 1, 1, "" ];
item [124] = [ "Coins", 1, 28, "" ];  //  (187)
item [125] = [ "Snape grass", 1, 1, "" ];
item [126] = [ "Gold", 1, 1, "" ];
item [127] = [ "Snape grass", 1, 1, "" ];
item [128] = [ "Coins", 1, 42, "" ];  //  (229)
item [129] = [ "Gold", 1, 1, "" ];
item [130] = [ "Coins", 1, 15, "" ];  //  (244)
item [131] = [ "Coins", 1, 62, "" ];  //  (306)
item [132] = [ "Limpwurt root", 1, 1, "" ];
item [133] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [134] = [ "Coins", 1, 15, "" ];  //  (321)
item [135] = [ "Snape grass", 1, 1, "" ];
item [136] = [ "Mithril Spear", 1, 1, "" ];
item [137] = [ "Bronze Spear", 1, 1, "" ];
item [138] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  (5)
item [139] = [ "Coins", 1, 28, "" ];  //  (349)
item [140] = [ "Gold", 1, 1, "" ];
item [141] = [ "Bronze Spear", 1, 1, "" ];
item [142] = [ "Bronze Spear", 1, 1, "" ];
item [143] = [ "Coins", 1, 15, "" ];  //  (364)
item [144] = [ "Snape grass", 1, 1, "" ];
item [145] = [ "Coins", 1, 15, "" ];  //  (379)
item [146] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  (10)
item [147] = [ "Coins", 1, 28, "" ];  //  (407)
item [148] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  (15)
item [149] = [ "Coins", 1, 28, "" ];  //  (435) Poisoned
item [150] = [ "Gold", 1, 1, "" ];

runs [2] = [ 150, 151 ];  // kills 47 drops 47

// run 4

item [151] = [ "Limpwurt root", 1, 1, "" ];
item [152] = [ "Limpwurt root", 1, 1, "" ];
item [153] = [ "Kwuarm", 1, 1, "Herb" ];
item [154] = [ "Mithril Spear", 1, 1, "" ];
item [155] = [ "Tarromin", 1, 1, "Herb" ];
item [156] = [ "Limpwurt root", 1, 1, "" ];
item [157] = [ "Coins", 1, 28, "" ];  //  (28)
item [158] = [ "Coins", 1, 15, "" ];  //  (43)
item [159] = [ "Coins", 1, 15, "" ];  //  (58)
item [160] = [ "Snape grass", 1, 1, "" ];
item [161] = [ "Bronze Spear", 1, 1, "" ];
item [162] = [ "Coins", 1, 28, "" ];  //  (86)
item [163] = [ "Coins", 1, 28, "" ];  //  (114)
item [164] = [ "Snape grass", 1, 1, "" ];
item [165] = [ "Harralander", 1, 1, "Herb" ];
item [166] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [167] = [ "Bronze Spear", 1, 1, "" ];
item [168] = [ "Coins", 1, 28, "" ];  //  (142)
item [169] = [ "Coins", 1, 28, "" ];  //  (170)
item [170] = [ "Coins", 1, 28, "" ];  //  (198)
item [171] = [ "Snape grass", 1, 1, "" ];
item [172] = [ "Coins", 1, 15, "" ];  //  (213)
item [173] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item [174] = [ "Gold", 1, 1, "" ];
item [175] = [ "Bronze Spear", 1, 1, "" ];
item [176] = [ "Snape grass", 1, 1, "" ];
item [177] = [ "Coins", 1, 15, "" ];  //  (228)
item [178] = [ "Coins", 1, 62, "" ];  //  (290)
item [179] = [ "Limpwurt root", 1, 1, "" ];
item [180] = [ "Coins", 1, 28, "" ];  //  (318)
item [181] = [ "Snape grass", 1, 1, "" ];
item [182] = [ "Coins", 1, 15, "" ];  //  (333)
item [183] = [ "Tarromin", 1, 1, "Herb" ];
item [184] = [ "Bronze Spear", 1, 2, "" ];
item [185] = [ "Gold", 1, 1, "" ];
item [186] = [ "Coins", 1, 15, "" ];  //  (348)
item [187] = [ "Poison antidote(3 dose)", 1, 1, "" ];
item [188] = [ "Coins", 1, 28, "" ];  //  (376)
item [189] = [ "Bronze Spear", 1, 2, "" ];
item [190] = [ "Coins", 1, 15, "" ];  //  (391)
item [191] = [ "Coins", 1, 15, "" ];  //  (406)
item [192] = [ "Coins", 1, 15, "" ];  //  (421)
item [193] = [ "Iron Spear", 1, 1, "" ];
item [194] = [ "Snape grass", 1, 1, "" ];
item [195] = [ "Bronze Spear", 1, 2, "" ];
item [196] = [ "Snape grass", 1, 1, "" ];
item [197] = [ "Coins", 1, 42, "" ];  //  (463)
item [198] = [ "Bronze Spear", 1, 1, "" ];
item [199] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  (4)
item [200] = [ "Guam Leaf", 1, 1, "Herb" ];
item [201] = [ "Snape grass", 1, 1, "" ];
item [202] = [ "Snape grass", 1, 1, "" ];
item [203] = [ "Coins", 1, 15, "" ];  //  (478)
item [204] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item [205] = [ "Snape grass", 1, 1, "" ];
item [206] = [ "Coins", 1, 62, "" ];  //  (540)
item [207] = [ "Snape grass", 1, 1, "" ];

runs [3] = [ 207, 208 ];  // kills 57 drops 57

// run 5

item [208] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  (5)
item [209] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [210] = [ "Coins", 1, 15, "" ];  //  (15)
item [211] = [ "Snape grass", 1, 1, "" ];
item [212] = [ "Coins", 1, 15, "" ];  //  (30)
item [213] = [ "Coins", 1, 15, "" ];  //  (45)
item [214] = [ "Limpwurt root", 1, 1, "" ];
item [215] = [ "Coins", 1, 15, "" ];  //  (60)
item [216] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item [217] = [ "Bronze Spear", 1, 2, "" ];
item [218] = [ "Guam Leaf", 1, 1, "Herb" ];
item [219] = [ "Gold", 1, 1, "" ];
item [220] = [ "Coins", 1, 15, "" ];  //  (75)
item [221] = [ "Gold", 1, 1, "" ];
item [222] = [ "Snape grass", 1, 1, "" ];
item [223] = [ "Snape grass", 1, 1, "" ];
item [224] = [ "Limpwurt root", 1, 1, "" ];
item [225] = [ "Guam Leaf", 1, 1, "Herb" ];
item [226] = [ "Snape grass", 1, 1, "" ];
item [227] = [ "Tarromin", 1, 1, "Herb" ];
item [228] = [ "Coins", 1, 15, "" ];  //  (90)
item [229] = [ "Coins", 1, 15, "" ];  //  (105) Poisoned
item [230] = [ "Snape grass", 1, 1, "" ];
item [231] = [ "Coins", 1, 15, "" ];  //  (120)
item [232] = [ "Snape grass", 1, 1, "" ];
item [233] = [ "Coins", 1, 28, "" ];  //  (148)
item [234] = [ "Nothing", 1, 0, "" ];
item [235] = [ "Harralander", 1, 1, "Herb" ];
item [236] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item [237] = [ "Coins", 1, 62, "" ];  //  (210)
item [238] = [ "Coins", 1, 28, "" ];  //  (238)
item [239] = [ "Bronze Spear", 1, 1, "" ];
item [240] = [ "Poison antidote(3 dose)", 1, 1, "" ];
item [241] = [ "Coins", 1, 28, "" ];  //  (266)
item [242] = [ "Snape grass", 1, 1, "" ];
item [243] = [ "Nature-rune", 1, 2, "Rune" ];  //  (8)
item [244] = [ "Marrentill", 1, 1, "Herb" ];
item [245] = [ "Limpwurt root", 1, 1, "" ];
item [246] = [ "Snape grass", 1, 1, "" ];
item [247] = [ "Coins", 1, 28, "" ];  //  (294)
item [248] = [ "Coins", 1, 28, "" ];  //  (322)
item [249] = [ "Nature-rune", 1, 2, "Rune" ];  //  (10)
item [250] = [ "Limpwurt root", 1, 1, "" ];
item [251] = [ "Bronze Spear", 1, 2, "" ];
item [252] = [ "Coins", 1, 62, "" ];  //  (384)
item [253] = [ "Coins", 1, 28, "" ];  //  (412)
item [254] = [ "Limpwurt root", 1, 1, "" ];
item [255] = [ "Snape grass", 1, 1, "" ];  // Poisoned
item [256] = [ "Snape grass", 1, 1, "" ];
item [257] = [ "Poison antidote(2 dose)", 1, 1, "" ];
item [258] = [ "Gold", 1, 1, "" ];
item [259] = [ "Coins", 1, 28, "" ];  //  (440)
item [260] = [ "Nothing", 1, 0, "" ];
item [261] = [ "Coins", 1, 15, "" ];  //  (455)
item [262] = [ "Gold", 1, 1, "" ];
item [263] = [ "Coins", 1, 15, "" ];  //  (470)
item [264] = [ "Iron Spear", 1, 1, "" ];
item [265] = [ "Coins", 1, 15, "" ];  //  (485)
item [266] = [ "Coins", 1, 62, "" ];  //  (547)
item [267] = [ "Snape grass", 1, 1, "" ];

runs [4] = [ 267, 268 ];  // kills 60 drops 60

// run 6

item [268] = [ "Snape grass", 1, 1, "" ];
item [269] = [ "Gold", 1, 1, "" ];
item [270] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [271] = [ "Avantoe", 1, 1, "Herb" ];
item [272] = [ "Bronze Spear", 1, 1, "" ];
item [273] = [ "Coins", 1, 15, "" ];  //  (15)
item [274] = [ "uncut sapphire", 1, 1, "Gem" ];
item [275] = [ "Guam Leaf", 1, 1, "Herb" ];
item [276] = [ "Limpwurt root", 1, 1, "" ];
item [277] = [ "Mithril Spear", 1, 1, "" ];
item [278] = [ "Bronze Spear", 1, 2, "" ];
item [279] = [ "Snape grass", 1, 1, "" ];
item [280] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  (5)
item [281] = [ "Coins", 1, 28, "" ];  //  (43)
item [282] = [ "Snape grass", 1, 1, "" ];
item [283] = [ "Guam Leaf", 1, 1, "Herb" ];
item [284] = [ "Poison antidote(2 dose)", 1, 1, "" ];
item [285] = [ "Coins", 1, 15, "" ];  //  (58)
item [286] = [ "Coins", 1, 42, "" ];  //  (100)
item [287] = [ "Coins", 1, 62, "" ];  //  (162)
item [288] = [ "Coins", 1, 15, "" ];  //  (177)
item [289] = [ "Bronze Spear", 1, 2, "" ];
item [290] = [ "Coins", 1, 15, "" ];  //  (192)
item [291] = [ "Marrentill", 1, 1, "Herb" ];
item [292] = [ "Bronze Spear", 1, 2, "" ];
item [293] = [ "Coins", 1, 42, "" ];  //  (234)
item [294] = [ "Snape grass", 1, 1, "" ];
item [295] = [ "Limpwurt root", 1, 1, "" ];
item [296] = [ "Coins", 1, 28, "" ];  //  (262)
item [297] = [ "Snape grass", 1, 1, "" ];
item [298] = [ "Coins", 1, 28, "" ];  //  (290)
item [299] = [ "Limpwurt root", 1, 1, "" ];
item [300] = [ "Coins", 1, 15, "" ];  //  (305)
item [301] = [ "Poison antidote(2 dose)", 1, 1, "" ];
item [302] = [ "Gold", 1, 1, "" ];
item [303] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  (4)
item [304] = [ "Coins", 1, 62, "" ];  //  (367)
item [305] = [ "Limpwurt root", 1, 1, "" ];
item [306] = [ "Snape grass", 1, 1, "" ];
item [307] = [ "Limpwurt root", 1, 1, "" ];
item [308] = [ "Limpwurt root", 1, 1, "" ];
item [309] = [ "Coins", 1, 28, "" ];  //  (395)
item [310] = [ "Snape grass", 1, 1, "" ];
item [311] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  (8)
item [312] = [ "Gold", 1, 1, "" ];

runs [5] = [ 312, 313 ];  // kills 45 drops 45

// runs [7] = [ x, y ];  // kills ? ( y - 313 ), drops ? ( x - 312 )

/*
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 28, "" ];  //  ()
item [000] = [ "Coins", 1, 42, "" ];  //  ()
item [000] = [ "Coins", 1, 62, "" ];  //  ()
item [000] = [ "Coins", 1, 70, "" ];  //  ()
item [000] = [ "Coins", 1, 72, "" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];  // Dwarf Weed
item [000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Nature-rune", 1, 2, "Rune" ];  //  ()

item [000] = [ "Snape grass", 1, 1, "" ];
item [000] = [ "Limpwurt root", 1, 1, "" ];
item [000] = [ "Poison antidote(2 dose)", 1, 1, "" ];
item [000] = [ "Poison antidote(3 dose)", 1, 1, "" ];
item [000] = [ "Poison Bronze Arrows", 1, 5, "Arrows" ];  //  ()
item [000] = [ "Poison Crossbow bolts", 1, 4, "" ];  //  ()
item [000] = [ "Gold", 1, 1, "" ];

item [000] = [ "Bronze Spear", 1, 1, "" ];
item [000] = [ "Bronze Spear", 1, 2, "" ];
item [000] = [ "Iron Spear", 1, 1, "" ];
item [000] = [ "Steel Spear", 1, 1, "" ];
item [000] = [ "Mithril Spear", 1, 1, "" ];

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

var mname = "Tribesman";        // monster's name
var mcbl = 39;                  // monster's combat level
var mindex = 102;               // index into monster data base
var mrpt = 1;                   // number of non-breaking space to add after index name