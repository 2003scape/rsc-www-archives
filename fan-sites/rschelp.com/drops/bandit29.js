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

item   [0] = [ "Ranarr Weed", 1, 1, "Herb" ];  // 1
item   [1] = [ "Coins", 1, 12, "" ];  //  (12)
item   [2] = [ "Nothing", 1, 0, "" ];
item   [3] = [ "Iron Scimitar", 1, 1, "" ];
item   [4] = [ "Longbow", 1, 1, "" ];
item   [5] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [6] = [ "Harralander", 1, 1, "Herb" ];
item   [7] = [ "Harralander", 1, 1, "Herb" ];
item   [8] = [ "Nothing", 1, 0, "" ];
item   [9] = [ "Coins", 1, 12, "" ];  // 10  (24)
item  [10] = [ "Nothing", 1, 0, "" ];
item  [11] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [12] = [ "Coins", 1, 12, "" ];  //  (36)
item  [13] = [ "coal", 1, 1, "" ];
item  [14] = [ "Marrentill", 1, 1, "Herb" ];
item  [15] = [ "Coins", 1, 1, "" ];  //  (37)
item  [16] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Coins", 1, 12, "" ];  //  (49)
item  [19] = [ "Coins", 1, 35, "" ];  // 20  (84)
item  [20] = [ "Coins", 1, 53, "" ];  //  (137)
item  [21] = [ "Coins", 1, 12, "" ];  //  (149)
item  [22] = [ "Coins", 1, 1, "" ];  //  (150)
item  [23] = [ "Coins", 1, 53, "" ];  //  (203)
item  [24] = [ "Tarromin", 1, 1, "Herb" ];
item  [25] = [ "Coins", 1, 35, "" ];  //  (238)
item  [26] = [ "Coins", 1, 53, "" ];  //  (291)
item  [27] = [ "Coins", 1, 35, "" ];  //  (326)
item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Coins", 1, 35, "" ];  // 30  (361)
item  [30] = [ "Coins", 1, 35, "" ];  //  (396)
item  [31] = [ "coal", 1, 1, "" ];
item  [32] = [ "Coins", 1, 12, "" ];  //  (408)
item  [33] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item  [34] = [ "uncut emerald", 1, 1, "Gem" ];
item  [35] = [ "Iron Scimitar", 1, 1, "" ];
item  [36] = [ "Nature-rune", 1, 1, "Rune" ];  //  (1)
item  [37] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [38] = [ "Coins", 1, 35, "" ];  //  (443)
item  [39] = [ "Coins", 1, 35, "" ];  // 40  (478)
item  [40] = [ "Harralander", 1, 1, "Herb" ];
item  [41] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [42] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item  [43] = [ "Coins", 1, 12, "" ];  //  (490)
item  [44] = [ "Coins", 1, 1, "" ];  //  (491)
item  [45] = [ "Coins", 1, 35, "" ];  //  (526)
item  [46] = [ "Coins", 1, 35, "" ];  //  (561)
item  [47] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [48] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [49] = [ "Tarromin", 1, 1, "Herb" ];  // 50
item  [50] = [ "Coins", 1, 53, "" ];  //  (614)
item  [51] = [ "Harralander", 1, 1, "Herb" ];
item  [52] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [53] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item  [54] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [55] = [ "Coins", 1, 53, "" ];  //  (667)
item  [56] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Harralander", 1, 1, "Herb" ];
item  [59] = [ "Nothing", 1, 0, "" ];  // 60
item  [60] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item  [61] = [ "Harralander", 1, 1, "Herb" ];
item  [62] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [63] = [ "coal", 1, 1, "" ];
item  [64] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item  [65] = [ "Coins", 1, 12, "" ];  //  (679)
item  [66] = [ "Coins", 1, 35, "" ];  //  (714)
item  [67] = [ "Coins", 1, 35, "" ];  //  (749)
item  [68] = [ "Harralander", 1, 1, "Herb" ];
item  [69] = [ "Coins", 1, 12, "" ];  // 70  (761)
item  [70] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item  [71] = [ "Coins", 1, 53, "" ];  //  (814)
item  [72] = [ "Coins", 1, 53, "" ];  //  (867)
item  [73] = [ "Marrentill", 1, 1, "Herb" ];
item  [74] = [ "Coins", 1, 12, "" ];  //  (879)
item  [75] = [ "Coins", 1, 12, "" ];  //  (891)
item  [76] = [ "coal", 1, 1, "" ];
item  [77] = [ "Coins", 1, 35, "" ];  //  (926)
item  [78] = [ "Coins", 1, 35, "" ];  //  (961)
item  [79] = [ "Coins", 1, 1, "" ];  // 80  (962)
item  [80] = [ "Steel Square Shield", 1, 1, "" ];
item  [81] = [ "Coins", 1, 35, "" ];  //  (997)
item  [82] = [ "Iron Scimitar", 1, 1, "" ];
item  [83] = [ "Coins", 1, 12, "" ];  //  (1009)
item  [84] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (8)
item  [85] = [ "Steel Square Shield", 1, 1, "" ];
item  [86] = [ "Coins", 1, 1, "" ];  //  (1010)
item  [87] = [ "Air-rune", 1, 7, "Rune" ];  //  (7)
item  [88] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item  [89] = [ "Guam Leaf", 1, 1, "Herb" ];  // 90
item  [90] = [ "Coins", 1, 1, "" ];  //  (1011)
item  [91] = [ "Kwuarm", 1, 1, "Herb" ];
item  [92] = [ "Guam Leaf", 2, 1, "Herb" ];
item  [93] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [94] = [ "Coins", 1, 12, "" ];  //  (1023)
item  [95] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Water-rune", 1, 6, "Rune" ];  //  (18)
item  [99] = [ "Iron Scimitar", 1, 1, "" ];
item [100] = [ "Water-rune", 1, 6, "Rune" ];  // 100  (24)
item [101] = [ "Iron Scimitar", 1, 1, "" ];
item [102] = [ "Water-rune", 1, 6, "Rune" ];  //  (30)
item [103] = [ "Coins", 2, 35, "" ];  //  (1058)
item [104] = [ "Marrentill", 1, 1, "Herb" ];
item [105] = [ "Coins", 1, 35, "" ];  //  (1093)
item [106] = [ "Coins", 1, 35, "" ];  //  (1128)
item [107] = [ "Harralander", 1, 1, "Herb" ];
item [108] = [ "Marrentill", 1, 1, "Herb" ];
item [109] = [ "Coins", 1, 35, "" ];  //  (1163)
item [110] = [ "Coins", 1, 1, "" ];  //  (1164)
item [111] = [ "Coins", 1, 35, "" ];  // 110  (1199)
item [112] = [ "Coins", 1, 35, "" ];  //  (1234)
item [113] = [ "Coins", 1, 1, "" ];  //  (1235)
item [114] = [ "Nothing", 1, 0, "" ];
item [115] = [ "Air-rune", 1, 7, "Rune" ];  //  (14)
item [116] = [ "Coins", 1, 1, "" ];  //  (1236)
item [117] = [ "Harralander", 1, 1, "Herb" ];
item [118] = [ "Coins", 1, 35, "" ];  //  (1271)
item [119] = [ "Guam Leaf", 1, 1, "Herb" ];
item [120] = [ "Steel Square Shield", 1, 1, "" ];
item [121] = [ "Steel Square Shield", 1, 1, "" ];  // 120
item [122] = [ "Coins", 1, 53, "" ];  //  (1324)
item [123] = [ "Coins", 1, 35, "" ];  //  (1359)
item [124] = [ "Coins", 1, 53, "" ];  //  (1412)
item [125] = [ "Coins", 1, 53, "" ];  //  (1465)
item [126] = [ "coal", 1, 1, "" ];
item [127] = [ "Guam Leaf", 1, 1, "Herb" ];
item [128] = [ "Guam Leaf", 1, 1, "Herb" ];
item [129] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (12)
item [130] = [ "Tarromin", 1, 1, "Herb" ];
item [131] = [ "uncut ruby", 1, 1, "Gem" ];  // 130
item [132] = [ "Coins", 1, 53, "" ];  //  (1518)
item [133] = [ "Coins", 1, 35, "" ];  //  (1553)
item [134] = [ "Harralander", 2, 1, "Herb" ];
item [135] = [ "Law-rune", 1, 2, "Rune" ];  //  (6)
item [136] = [ "Coins", 1, 35, "" ];  //  (1588)
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Harralander", 1, 1, "Herb" ];
item [139] = [ "Coins", 1, 53, "" ];  //  (1641)
item [140] = [ "Iron Scimitar", 1, 1, "" ];
item [141] = [ "coal", 1, 1, "" ];
item [142] = [ "Mind-rune", 1, 1, "Rune" ];  // 140  (1)
item [143] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (16)
item [144] = [ "Air-rune", 1, 7, "Rune" ];  //  (21)
item [145] = [ "Coins", 1, 53, "" ];  //  (1694)
item [146] = [ "Coins", 1, 35, "" ];  //  (1729)
item [147] = [ "Harralander", 2, 1, "Herb" ];
item [148] = [ "Marrentill", 1, 1, "Herb" ];
item [149] = [ "Nothing", 1, 0, "" ];
item [150] = [ "Irit Leaf", 1, 1, "Herb" ];
item [151] = [ "Coins", 1, 35, "" ];  //  (1764)
item [152] = [ "Coins", 1, 1, "" ];  //  (1765)
item [153] = [ "Coins", 1, 12, "" ];  // 150  (1777)
item [154] = [ "Marrentill", 1, 1, "Herb" ];
item [155] = [ "Marrentill", 2, 1, "Herb" ];
item [156] = [ "Guam Leaf", 1, 1, "Herb" ];
item [157] = [ "Harralander", 2, 1, "Herb" ];
item [158] = [ "Guam Leaf", 1, 1, "Herb" ];
item [159] = [ "Iron Scimitar", 1, 1, "" ];
item [160] = [ "Coins", 1, 35, "" ];  //  (1812)
item [161] = [ "Iron Scimitar", 1, 1, "" ];
item [162] = [ "Coins", 1, 53, "" ];  //  (1865)
item [163] = [ "Harralander", 2, 1, "Herb" ];
item [164] = [ "Guam Leaf", 1, 1, "Herb" ];
item [165] = [ "Harralander", 1, 1, "Herb" ];
item [166] = [ "Nothing", 1, 0, "" ];  // 160
item [167] = [ "Coins", 1, 80, "" ];  //  (1945)
item [168] = [ "Coins", 1, 53, "" ];  //  (1998)
item [169] = [ "Coins", 1, 12, "" ];  //  (2010)
item [170] = [ "Coins", 1, 53, "" ];  //  (2063)

runs [0] = [ 170, 164 ];  // kills 164, drops 170

// run 2

item [171] = [ "Marrentill", 1, 1, "Herb" ];  //  165
item [172] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [173] = [ "Coins", 1, 80, "" ];  //  (80)
item [174] = [ "Harralander", 1, 1, "Herb" ];
item [175] = [ "Guam Leaf", 1, 1, "Herb" ];
item [176] = [ "Harralander", 1, 1, "Herb" ];  // 170
item [177] = [ "Nature-rune", 1, 1, "Rune" ];  //  (1)
item [178] = [ "Coins", 1, 35, "" ];  //  (115)
item [179] = [ "Coins", 1, 1, "" ];  //  (116)
item [180] = [ "Coins", 1, 35, "" ];  //  (151)
item [181] = [ "Coins", 1, 1, "" ];  //  (152)
item [182] = [ "Irit Leaf", 1, 1, "Herb" ];
item [183] = [ "Coins", 1, 35, "" ];  //  (187)
item [184] = [ "Guam Leaf", 1, 1, "Herb" ];
item [185] = [ "Guam Leaf", 1, 1, "Herb" ];
item [186] = [ "Coins", 1, 12, "" ];  //  180  (199)
item [187] = [ "Mind-rune", 1, 1, "Rune" ];  //  (1)
item [188] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [189] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item [190] = [ "Tarromin", 1, 1, "Herb" ];
item [191] = [ "Marrentill", 1, 1, "Herb" ];
item [192] = [ "Guam Leaf", 1, 1, "Herb" ];
item [193] = [ "Coins", 1, 35, "" ];  //  (234)
item [194] = [ "Guam Leaf", 2, 1, "Herb" ];
item [195] = [ "Guam Leaf", 1, 1, "Herb" ];
item [196] = [ "Coins", 1, 35, "" ];  //  (269)
item [197] = [ "Guam Leaf", 1, 1, "Herb" ];  //  190
item [198] = [ "Coins", 1, 12, "" ];  //  (281)
item [199] = [ "Longbow", 1, 1, "" ];
item [200] = [ "Tarromin", 1, 1, "Herb" ];
item [201] = [ "Coins", 1, 12, "" ];  //  (293)
item [202] = [ "Harralander", 1, 1, "Herb" ];
item [203] = [ "Coins", 1, 80, "" ];  //  (373)
item [204] = [ "Coins", 1, 35, "" ];  //  (408)
item [205] = [ "Coins", 1, 53, "" ];  //  (461)
item [206] = [ "Coins", 1, 35, "" ];  //  (496)
item [207] = [ "Coins", 1, 35, "" ];  //  200  (531)
item [208] = [ "coal", 1, 1, "" ];
item [209] = [ "Air-rune", 1, 7, "Rune" ];  //  (7)
item [210] = [ "Coins", 1, 12, "" ];  //  (543)
item [211] = [ "Harralander", 1, 1, "Herb" ];
item [212] = [ "Coins", 1, 53, "" ];  //  (596)
item [213] = [ "Avantoe", 1, 1, "Herb" ];
item [214] = [ "coal", 1, 1, "" ];
item [215] = [ "Nothing", 1, 0, "" ];
item [216] = [ "Coins", 1, 12, "" ];  //  (608)
item [217] = [ "Tarromin", 1, 1, "Herb" ];  //  210
item [218] = [ "Coins", 1, 35, "" ];  //  (643)
item [219] = [ "Guam Leaf", 2, 1, "Herb" ];
item [220] = [ "Irit Leaf", 1, 1, "Herb" ];
item [221] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item [222] = [ "Harralander", 1, 1, "Herb" ];
item [223] = [ "Steel Square Shield", 1, 1, "" ];
item [224] = [ "Coins", 1, 35, "" ];  //  (678)
item [225] = [ "Coins", 1, 35, "" ];  //  (713)
item [226] = [ "Iron Scimitar", 1, 1, "" ];
item [227] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [228] = [ "Coins", 1, 12, "" ];  //  220  (725)
item [229] = [ "Coins", 1, 53, "" ];  //  (778)
item [230] = [ "Coins", 1, 35, "" ];  //  (813)
item [231] = [ "Guam Leaf", 1, 1, "Herb" ];
item [232] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [233] = [ "Coins", 1, 35, "" ];  //  (848)
item [234] = [ "Coins", 1, 35, "" ];  //  (883)
item [235] = [ "Coins", 1, 35, "" ];  //  (918)
item [236] = [ "Coins", 1, 35, "" ];  //  (953)
item [237] = [ "Coins", 1, 12, "" ];  //  (965)
item [238] = [ "Coins", 1, 12, "" ];  //  230  (977)
item [239] = [ "Coins", 1, 53, "" ];  //  (1030)
item [240] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [241] = [ "Coins", 1, 80, "" ];  //  (1110)
item [242] = [ "Coins", 1, 12, "" ];  //  (1122)
item [243] = [ "uncut emerald", 1, 1, "Gem" ];
item [244] = [ "Marrentill", 1, 1, "Herb" ];
item [245] = [ "Harralander", 1, 1, "Herb" ];
item [246] = [ "Irit Leaf", 1, 1, "Herb" ];
item [247] = [ "Coins", 1, 1, "" ];  //  (1123)
item [248] = [ "Coins", 1, 35, "" ];  //  240  (1158)
item [249] = [ "Coins", 1, 35, "" ];  //  (1193)
item [250] = [ "Iron Scimitar", 1, 1, "" ];
item [251] = [ "Coins", 1, 1, "" ];  //  (1194)
item [252] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item [253] = [ "Coins", 1, 12, "" ];  //  (1206)

runs [1] = [ 253, 245 ];  // kills 81, drops 83

// run 3

item [254] = [ "Coins", 1, 53, "" ];  //  246  (53)
item [255] = [ "Coins", 1, 53, "" ];  //  (106)
item [256] = [ "Iron Scimitar", 1, 1, "" ];
item [257] = [ "Marrentill", 1, 1, "Herb" ];
item [258] = [ "Coins", 1, 53, "" ];  //  250  (159)
item [259] = [ "Coins", 1, 35, "" ];  //  (194)
item [260] = [ "Coins", 1, 53, "" ];  //  (247)
item [261] = [ "Coins", 1, 35, "" ];  //  (282)
item [262] = [ "Iron Scimitar", 1, 1, "" ];
item [263] = [ "Marrentill", 1, 1, "Herb" ];
item [264] = [ "Coins", 1, 35, "" ];  //  (317)
item [265] = [ "Steel Square Shield", 1, 1, "" ];
item [266] = [ "Harralander", 1, 1, "Herb" ];
item [267] = [ "Iron Scimitar", 1, 1, "" ];
item [268] = [ "Guam Leaf", 1, 1, "Herb" ];  //  260
item [269] = [ "coal", 1, 1, "" ];
item [270] = [ "Coins", 1, 53, "" ];  //  (370)
item [271] = [ "Coins", 1, 35, "" ];  //  (405)
item [272] = [ "Coins", 2, 35, "" ];  //  (440)
item [273] = [ "Harralander", 1, 1, "Herb" ];
item [274] = [ "coal", 1, 1, "" ];
item [275] = [ "Coins", 1, 35, "" ];  //  (475)
item [276] = [ "Coins", 1, 35, "" ];  //  (510)
item [277] = [ "Coins", 1, 35, "" ];  //  (545)
item [278] = [ "Coins", 1, 53, "" ];  //  (598)
item [279] = [ "Coins", 1, 35, "" ];  //  270  (633)
item [280] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [281] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item [282] = [ "Coins", 1, 35, "" ];  //  (668)
item [283] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [284] = [ "Coins", 1, 53, "" ];  //  (721)
item [285] = [ "Coins", 1, 35, "" ];  //  (756)
item [286] = [ "Coins", 1, 53, "" ];  //  (809)
item [287] = [ "Coins", 1, 35, "" ];  //  (844)
item [288] = [ "Harralander", 1, 1, "Herb" ];
item [289] = [ "Coins", 1, 1, "" ];  //  280  (845)
item [290] = [ "Coins", 2, 35, "" ];  //  (880)
item [291] = [ "Harralander", 1, 1, "Herb" ];
item [292] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item [293] = [ "coal", 1, 1, "" ];
item [294] = [ "Coins", 1, 35, "" ];  //  (915)
item [295] = [ "Tarromin", 1, 1, "Herb" ];
item [296] = [ "Coins", 1, 1, "" ];  //  (916)
item [297] = [ "Coins", 1, 1, "" ];  //  (917)
item [298] = [ "uncut emerald", 1, 1, "Gem" ];
item [299] = [ "Coins", 1, 35, "" ];  //  (952)
item [300] = [ "Guam Leaf", 1, 1, "Herb" ];  //  290
item [301] = [ "Irit Leaf", 1, 1, "Herb" ];
item [302] = [ "Steel Square Shield", 1, 1, "" ];
item [303] = [ "Coins", 1, 53, "" ];  //  (1005)
item [304] = [ "Coins", 1, 53, "" ];  //  (1058)
item [305] = [ "Tarromin", 2, 1, "Herb" ];
item [306] = [ "Guam Leaf", 1, 1, "Herb" ];
item [307] = [ "Irit Leaf", 1, 1, "Herb" ];
item [308] = [ "Coins", 1, 35, "" ];  //  (1093)
item [309] = [ "Coins", 1, 1, "" ];  //  (1094)
item [310] = [ "Irit Leaf", 1, 1, "Herb" ];
item [311] = [ "Iron Scimitar", 1, 1, "" ];  //  300
item [312] = [ "Coins", 1, 1, "" ];  //  (1095)
item [313] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item [314] = [ "Iron Scimitar", 1, 1, "" ];
item [315] = [ "Harralander", 1, 1, "Herb" ];
item [316] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item [317] = [ "Guam Leaf", 1, 1, "Herb" ];
item [318] = [ "Coins", 1, 35, "" ];  //  (1130)
item [319] = [ "Tarromin", 1, 1, "Herb" ];
item [320] = [ "Nature-rune", 1, 1, "Rune" ];  //  (1)
item [321] = [ "Coins", 1, 53, "" ];  //  310  (1183)
item [322] = [ "Guam Leaf", 1, 1, "Herb" ];
item [323] = [ "Kwuarm", 1, 1, "Herb" ];
item [324] = [ "Nature-rune", 1, 1, "Rune" ];  //  (2)
item [325] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (8)
item [326] = [ "Coins", 1, 35, "" ];  //  (1218)
item [327] = [ "Guam Leaf", 1, 1, "Herb" ];
item [328] = [ "Tarromin", 1, 1, "Herb" ];
item [329] = [ "Coins", 1, 12, "" ];  //  (1230)
item [330] = [ "coal", 1, 1, "" ];
item [331] = [ "Coins", 1, 53, "" ];  //  320  (1283)
item [332] = [ "Kwuarm", 1, 1, "Herb" ];
item [333] = [ "Coins", 1, 12, "" ];  //  (1295)
item [334] = [ "Coins", 1, 1, "" ];  //  (1296)
item [335] = [ "Coins", 1, 12, "" ];  //  (1308)
item [336] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [337] = [ "Coins", 1, 35, "" ];  //  (1343)
item [338] = [ "Iron Scimitar", 1, 1, "" ];
item [339] = [ "Coins", 1, 35, "" ];  //  (1378)
item [340] = [ "Coins", 1, 35, "" ];  //  (1413)
item [341] = [ "Coins", 1, 12, "" ];  //  330  (1425)
item [342] = [ "Irit Leaf", 1, 1, "Herb" ];
item [343] = [ "Coins", 1, 35, "" ];  //  (1460)
item [344] = [ "Coins", 1, 53, "" ];  //  (1513)
item [345] = [ "Coins", 1, 35, "" ];  //  (1548)
item [346] = [ "Guam Leaf", 1, 1, "Herb" ];
item [347] = [ "Coins", 1, 35, "" ];  //  (1583)
item [348] = [ "Coins", 1, 53, "" ];  //  (1636)
item [349] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [350] = [ "Coins", 1, 12, "" ];  //  (1648)
item [351] = [ "Guam Leaf", 1, 1, "Herb" ];  //  340
item [352] = [ "Irit Leaf", 1, 1, "Herb" ];
item [353] = [ "Coins", 1, 53, "" ];  //  (1701)
item [354] = [ "Coins", 1, 35, "" ];  //  (1736)
item [355] = [ "Coins", 1, 12, "" ];  //  (1748)
item [356] = [ "Coins", 1, 35, "" ];  //  (1783)
item [357] = [ "Coins", 1, 12, "" ];  //  (1795)
item [358] = [ "Coins", 1, 12, "" ];  //  (1807)
item [359] = [ "Guam Leaf", 1, 1, "Herb" ];
item [360] = [ "Coins", 1, 1, "" ];  //  (1808)
item [361] = [ "coal", 1, 1, "" ];  //  350
item [362] = [ "Coins", 1, 53, "" ];  //  (1861)
item [363] = [ "Coins", 2, 35, "" ];  //  (1896)
item [364] = [ "Harralander", 1, 1, "Herb" ];
item [365] = [ "Coins", 1, 35, "" ];  //  (1931)

runs [2] = [ 365, 353 ];  // kills 108, drops 112

// runs [3] = [ x, y ];  // kills ? ( y - 353 ), drops ? ( x - 365 )

/*
item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 35, "" ];  //  ()
item [000] = [ "Coins", 1, 53, "" ];  //  ()
item [000] = [ "Coins", 1, 80, "" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];

item [000] = [ "Air-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];

item [000] = [ "Iron Scimitar", 1, 1, "" ];
item [000] = [ "Steel Square Shield", 1, 1, "" ];

item [000] = [ "Longbow", 1, 1, "" ];
item [000] = [ "coal", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Bandit";        // monster's name
var mcbl = 29;               // monster's combat level
var mindex = 74;             // index into monster data base
var mrpt = 2;                // number of non-breaking space to add after index name