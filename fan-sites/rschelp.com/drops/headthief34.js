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

var cwcb = 5;  // column width of checkboxes

var notes = "";

// run 1

item   [0] = [ "Nothing", 1, 0, "" ];
item   [1] = [ "Nothing", 1, 0, "" ];
item   [2] = [ "Marrentill", 1, 1, "Herb" ];
item   [3] = [ "Tarromin", 1, 1, "Herb" ];
item   [4] = [ "Coins", 1, 3, "" ];  //  (3)
item   [5] = [ "Coins", 1, 3, "" ];  //  (6)
item   [6] = [ "Coins", 1, 5, "" ];  //  (11)
item   [7] = [ "Nothing", 1, 0, "" ];
item   [8] = [ "Nothing", 1, 0, "" ];
item   [9] = [ "Coins", 1, 3, "" ];  //  (14)
item  [10] = [ "Coins", 1, 3, "" ];  //  (17)
item  [11] = [ "Medium Bronze Helmet", 1, 1, "" ];
item  [12] = [ "Mind-rune", 1, 6, "Rune" ];  //  (6)
item  [13] = [ "Mind-rune", 1, 6, "Rune" ];  //  (12)
item  [14] = [ "Dwarf Weed", 1, 1, "Herb" ];
item  [15] = [ "Coins", 1, 3, "" ];  //  (20)
item  [16] = [ "Coins", 1, 3, "" ];  //  (23)
item  [17] = [ "Coins", 1, 3, "" ];  //  (26)
item  [18] = [ "Coins", 1, 5, "" ];  //  (31)
item  [19] = [ "Coins", 1, 3, "" ];  //  (34)
item  [20] = [ "Coins", 1, 3, "" ];  //  (37)
item  [21] = [ "Coins", 1, 3, "" ];  //  (40)
item  [22] = [ "Coins", 1, 15, "" ];  //  (55)
item  [23] = [ "Fishing Bait", 1, 1, "" ];  //  (1)
item  [24] = [ "Avantoe", 1, 1, "Herb" ];
item  [25] = [ "Coins", 1, 5, "" ];  //  (60)
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Nothing", 1, 0, "" ];
item  [28] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [29] = [ "Coins", 1, 5, "" ];  //  (65)
item  [30] = [ "Coins", 1, 3, "" ];  //  (68)
item  [31] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [32] = [ "Avantoe", 1, 1, "Herb" ];
item  [33] = [ "Coins", 1, 3, "" ];  //  (71)
item  [34] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [35] = [ "Coins", 1, 5, "" ];  //  (76)
item  [36] = [ "Coins", 1, 3, "" ];  //  (79)
item  [37] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [38] = [ "Coins", 1, 3, "" ];  //  (82)
item  [39] = [ "Nothing", 1, 0, "" ];
item  [40] = [ "Coins", 1, 3, "" ];  //  (85)
item  [41] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [42] = [ "Coins", 1, 3, "" ];  //  (88)
item  [43] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [44] = [ "Harralander", 1, 1, "Herb" ];
item  [45] = [ "Coins", 1, 3, "" ];  //  (91)
item  [46] = [ "Coins", 1, 3, "" ];  //  (94)
item  [47] = [ "Coins", 1, 3, "" ];  //  (97)
item  [48] = [ "Coins", 1, 3, "" ];  //  (100)
item  [49] = [ "Coins", 1, 5, "" ];  //  (105)
item  [50] = [ "Coins", 1, 3, "" ];  //  (108)
item  [51] = [ "Coins", 1, 3, "" ];  //  (111)
item  [52] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [53] = [ "Tarromin", 1, 1, "Herb" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Nothing", 1, 0, "" ];
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Coins", 1, 5, "" ];  //  (116)
item  [60] = [ "Coins", 1, 3, "" ];  //  (119)
item  [61] = [ "Coins", 1, 3, "" ];  //  (122)
item  [62] = [ "Coins", 1, 3, "" ];  //  (125)
item  [63] = [ "Cabbage", 1, 1, "" ];
item  [64] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (7)
item  [65] = [ "Coins", 1, 3, "" ];  //  (128)
item  [66] = [ "Nothing", 1, 0, "" ];
item  [67] = [ "Tarromin", 1, 1, "Herb" ];
item  [68] = [ "Coins", 1, 3, "" ];  //  (131)
item  [69] = [ "Mind-rune", 1, 6, "Rune" ];  //  (18)
item  [70] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (14)
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Fire-rune", 1, 4, "Rune" ];  //  (4)
item  [73] = [ "Harralander", 1, 1, "Herb" ];
item  [74] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [75] = [ "Fire-rune", 1, 4, "Rune" ];  //  (8)
item  [76] = [ "Coins", 1, 15, "" ];  //  (146)
item  [77] = [ "Coins", 1, 3, "" ];  //  (149)
item  [78] = [ "Coins", 1, 25, "" ];  //  (174)
item  [79] = [ "Coins", 1, 3, "" ];  //  (177)
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Nothing", 1, 0, "" ];
item  [82] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (21)
item  [83] = [ "Coins", 1, 5, "" ];  //  (182)
item  [84] = [ "Harralander", 1, 1, "Herb" ];
item  [85] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item  [86] = [ "Earth-rune", 1, 3, "Rune" ];  //  (3)
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Coins", 1, 3, "" ];  //  (185)
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Harralander", 1, 1, "Herb" ];
item  [92] = [ "copper ore", 1, 1, "" ];
item  [93] = [ "Coins", 1, 3, "" ];  //  (188)
item  [94] = [ "Coins", 1, 5, "" ];  //  (193)
item  [95] = [ "Harralander", 1, 1, "Herb" ];
item  [96] = [ "Coins", 1, 3, "" ];  //  (196)
item  [97] = [ "Coins", 1, 3, "" ];  //  (199)
item  [98] = [ "Coins", 1, 3, "" ];  //  (202)
item  [99] = [ "Guam Leaf", 1, 1, "Herb" ];

runs [0] = [ 99, 100 ];  // kills 100 drops 100

// run 2

item [100] = [ "Nothing", 1, 0, "" ];
item [101] = [ "Tarromin", 1, 1, "Herb" ];
item [102] = [ "Cabbage", 1, 1, "" ];
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Marrentill", 1, 1, "Herb" ];
item [105] = [ "Coins", 1, 3, "" ];  //  (3)
item [106] = [ "Coins", 1, 3, "" ];  //  (6)
item [107] = [ "Coins", 1, 3, "" ];  //  (9)
item [108] = [ "Coins", 1, 3, "" ];  //  (12)
item [109] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (7)
item [110] = [ "Coins", 1, 3, "" ];  //  (15)
item [111] = [ "Coins", 1, 3, "" ];  //  (18)
item [112] = [ "Cabbage", 1, 1, "" ];
item [113] = [ "Coins", 1, 3, "" ];  //  (21)
item [114] = [ "Coins", 1, 3, "" ];  //  (24)
item [115] = [ "Coins", 1, 3, "" ];  //  (27)
item [116] = [ "Guam Leaf", 1, 1, "Herb" ];
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Coins", 1, 3, "" ];  //  (30)
item [119] = [ "Nothing", 1, 0, "" ];
item [120] = [ "Coins", 1, 3, "" ];  //  (33)
item [121] = [ "Coins", 1, 3, "" ];  //  (36)
item [122] = [ "Coins", 1, 3, "" ];  //  (39)
item [123] = [ "Coins", 1, 5, "" ];  //  (44)
item [124] = [ "Coins", 1, 3, "" ];  //  (47)
item [125] = [ "Coins", 1, 25, "" ];  //  (72)
item [126] = [ "Marrentill", 1, 1, "Herb" ];
item [127] = [ "Coins", 1, 3, "" ];  //  (75)
item [128] = [ "copper ore", 1, 1, "" ];
item [129] = [ "Coins", 1, 15, "" ];  //  (90)
item [130] = [ "Nothing", 1, 0, "" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Coins", 1, 3, "" ];  //  (93)
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "Coins", 1, 3, "" ];  //  (96)
item [135] = [ "Nothing", 1, 0, "" ];
item [136] = [ "Coins", 1, 5, "" ];  //  (101)
item [137] = [ "Coins", 1, 3, "" ];  //  (104)
item [138] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Fishing Bait", 1, 1, "" ];  //  (1)
item [142] = [ "Coins", 1, 5, "" ];  //  (109)
item [143] = [ "Nothing", 1, 0, "" ];
item [144] = [ "Fire-rune", 1, 4, "Rune" ];  //  (4)
item [145] = [ "Kwuarm", 1, 1, "Herb" ];
item [146] = [ "Coins", 1, 3, "" ];  //  (112)
item [147] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (14)
item [148] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [149] = [ "Coins", 1, 5, "" ];  //  (117)
item [150] = [ "Coins", 1, 3, "" ];  //  (120)
item [151] = [ "Coins", 1, 15, "" ];  //  (135)
item [152] = [ "Nothing", 1, 0, "" ];
item [153] = [ "Nothing", 1, 0, "" ];
item [154] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [155] = [ "Coins", 1, 3, "" ];  //  (138)
item [156] = [ "Nothing", 1, 0, "" ];
item [157] = [ "Nothing", 1, 0, "" ];
item [158] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item [159] = [ "Coins", 1, 5, "" ];  //  (143)
item [160] = [ "Cabbage", 1, 1, "" ];
item [161] = [ "Coins", 1, 3, "" ];  //  (146)
item [162] = [ "Coins", 1, 3, "" ];  //  (149)
item [163] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (21)
item [164] = [ "Coins", 1, 3, "" ];  //  (152)
item [165] = [ "Coins", 1, 3, "" ];  //  (155)
item [166] = [ "Coins", 1, 3, "" ];  //  (158)
item [167] = [ "Coins", 1, 3, "" ];  //  (161)
item [168] = [ "Coins", 1, 3, "" ];  //  (164)
item [169] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [170] = [ "Guam Leaf", 1, 1, "Herb" ];
item [171] = [ "Nothing", 1, 0, "" ];
item [172] = [ "Coins", 1, 3, "" ];  //  (167)
item [173] = [ "Coins", 1, 3, "" ];  //  (170)
item [174] = [ "Coins", 1, 3, "" ];  //  (173)
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Coins", 1, 3, "" ];  //  (176)
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Coins", 1, 3, "" ];  //  (179)
item [179] = [ "Coins", 1, 3, "" ];  //  (182)
item [180] = [ "Coins", 1, 3, "" ];  //  (185)
item [181] = [ "Nothing", 1, 0, "" ];
item [182] = [ "Coins", 1, 3, "" ];  //  (188)
item [183] = [ "Nothing", 1, 0, "" ];
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Coins", 1, 3, "" ];  //  (191)
item [186] = [ "Marrentill", 1, 1, "Herb" ];
item [187] = [ "Coins", 1, 3, "" ];  //  (194)
item [188] = [ "Coins", 1, 3, "" ];  //  (197)
item [189] = [ "Marrentill", 1, 1, "Herb" ];
item [190] = [ "Coins", 1, 3, "" ];  //  (200)
item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "copper ore", 1, 1, "" ];
item [194] = [ "Coins", 1, 5, "" ];  //  (205)
item [195] = [ "Coins", 1, 3, "" ];  //  (208)
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Coins", 1, 3, "" ];  //  (211)
item [199] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (28)
item [200] = [ "Coins", 1, 5, "" ];  //  (216)
item [201] = [ "Coins", 1, 15, "" ];  //  (231)
item [202] = [ "Coins", 1, 3, "" ];  //  (234)
item [203] = [ "Guam Leaf", 1, 1, "Herb" ];
item [204] = [ "Nothing", 1, 0, "" ];
item [205] = [ "Coins", 1, 3, "" ];  //  (237)
item [206] = [ "Coins", 1, 3, "" ];  //  (240)
item [207] = [ "Nothing", 1, 0, "" ];
item [208] = [ "Fishing Bait", 1, 1, "" ];  //  (2)
item [209] = [ "Guam Leaf", 1, 1, "Herb" ];
item [210] = [ "Nothing", 1, 0, "" ];
item [211] = [ "Fishing Bait", 1, 1, "" ];  //  (3)
item [212] = [ "Coins", 1, 3, "" ];  //  (243)
item [213] = [ "Harralander", 1, 1, "Herb" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Avantoe", 1, 1, "Herb" ];
item [216] = [ "Coins", 1, 3, "" ];  //  (246)
item [217] = [ "Fishing Bait", 1, 1, "" ];  //  (4)
item [218] = [ "Coins", 1, 3, "" ];  //  (249)
item [219] = [ "Coins", 1, 5, "" ];  //  (254)
item [220] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (35)
item [221] = [ "Coins", 1, 3, "" ];  //  (257)
item [222] = [ "Coins", 1, 3, "" ];  //  (260)
item [223] = [ "Coins", 1, 3, "" ];  //  (263)
item [224] = [ "Coins", 1, 3, "" ];  //  (266)
item [225] = [ "Mind-rune", 1, 6, "Rune" ];  //  (6)
item [226] = [ "Coins", 1, 15, "" ];  //  (281)
item [227] = [ "Nothing", 1, 0, "" ];
item [228] = [ "Fishing Bait", 1, 1, "" ];  //  (5)
item [229] = [ "Coins", 1, 3, "" ];  //  (284)
item [230] = [ "Coins", 1, 3, "" ];  //  (287)
item [231] = [ "Nothing", 1, 0, "" ];
item [232] = [ "Coins", 1, 3, "" ];  //  (290)
item [233] = [ "Harralander", 1, 1, "Herb" ];
item [234] = [ "Fishing Bait", 1, 1, "" ];  //  (6)
item [235] = [ "Iron dagger", 1, 1, "" ];
item [236] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [237] = [ "Coins", 1, 5, "" ];  //  (295)
item [238] = [ "Coins", 1, 15, "" ];  //  (310)
item [239] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (2)
item [240] = [ "Coins", 1, 5, "" ];  //  (315)
item [241] = [ "Nothing", 1, 0, "" ];
item [242] = [ "Nothing", 1, 0, "" ];
item [243] = [ "Coins", 1, 3, "" ];  //  (318)
item [244] = [ "Coins", 1, 3, "" ];  //  (321)
item [245] = [ "Nothing", 1, 0, "" ];
item [246] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [247] = [ "Avantoe", 1, 1, "Herb" ];
item [248] = [ "Coins", 1, 3, "" ];  //  (324)
item [249] = [ "Nothing", 1, 0, "" ];
item [250] = [ "Guam Leaf", 1, 1, "Herb" ];
item [251] = [ "Coins", 1, 3, "" ];  //  (327)
item [252] = [ "Coins", 1, 5, "" ];  //  (332)
item [253] = [ "Coins", 1, 3, "" ];  //  (335)
item [254] = [ "Nothing", 1, 0, "" ];
item [255] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (3)
item [256] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [257] = [ "Coins", 1, 3, "" ];  //  (338)
item [258] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [259] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [260] = [ "Mind-rune", 1, 6, "Rune" ];  //  (12)
item [261] = [ "Coins", 1, 3, "" ];  //  (341)
item [262] = [ "Coins", 1, 3, "" ];  //  (344)
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Earth-rune", 1, 3, "Rune" ];  //  (3)
item [265] = [ "copper ore", 1, 1, "" ];
item [266] = [ "Nothing", 1, 0, "" ];
item [267] = [ "copper ore", 1, 1, "" ];
item [268] = [ "Coins", 1, 3, "" ];  //  (347)
item [269] = [ "Marrentill", 1, 1, "Herb" ];
item [270] = [ "Coins", 1, 15, "" ];  //  (362)
item [271] = [ "Coins", 1, 3, "" ];  //  (365)
item [272] = [ "Marrentill", 1, 1, "Herb" ];
item [273] = [ "Coins", 1, 15, "" ];  //  (380)
item [274] = [ "Coins", 1, 3, "" ];  //  (383)
item [275] = [ "Coins", 1, 15, "" ];  //  (398)
item [276] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [277] = [ "Fishing Bait", 1, 1, "" ];  //  (7)
item [278] = [ "Nothing", 1, 0, "" ];
item [279] = [ "Coins", 1, 3, "" ];  //  (401)
item [280] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (42)
item [281] = [ "Coins", 1, 3, "" ];  //  (404)
item [282] = [ "Coins", 1, 3, "" ];  //  (407)
item [283] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (4)
item [284] = [ "Coins", 1, 3, "" ];  //  (410)
item [285] = [ "Marrentill", 1, 1, "Herb" ];
item [286] = [ "Fire-rune", 1, 4, "Rune" ];  //  (8)
item [287] = [ "Nothing", 1, 0, "" ];
item [288] = [ "Coins", 1, 3, "" ];  //  (413)
item [289] = [ "Coins", 1, 3, "" ];  //  (416)
item [290] = [ "Guam Leaf", 1, 1, "Herb" ];
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Nothing", 1, 0, "" ];
item [293] = [ "Coins", 1, 3, "" ];  //  (419)
item [294] = [ "Mind-rune", 1, 6, "Rune" ];  //  (18)
item [295] = [ "Coins", 1, 5, "" ];  //  (424)
item [296] = [ "Avantoe", 1, 1, "Herb" ];
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Mind-rune", 1, 6, "Rune" ];  //  (24)
item [299] = [ "Nothing", 1, 0, "" ];

runs [1] = [ 299, 300 ];  // kills 300 drops 300

// runs [1] = [ x, y ];  // kills ? ( y - 100 ), drops ? ( x - 99 )

/*
item [000] = [ "Coins", 1, 3, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()

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

item [000] = [ "Earth-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Fishing Bait", 1, 1, "" ];  //  ()
item [000] = [ "copper ore", 1, 1, "" ];
item [000] = [ "Leather Gloves", 1, 1, "" ];
item [000] = [ "Cabbage", 1, 1, "" ];

item [000] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  ()
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Medium Bronze Helmet", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Head Thief";       // monster's name
var mcbl = 34;                  // monster's combat level
var mindex = 94;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name