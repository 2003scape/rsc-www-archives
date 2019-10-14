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

var notes = "I only took half as much food on the 2nd run to get to a kill count of at least 300, but decided to keep going until I ran out of food.";

/*

   itype2
   
   0 item type (item [n][3])
   1 true = item qty count, false = item type count

*/

itype2.push([ "1B1b", false ]);
itype2.push([ "2B2b", false ]);

itype2l = itype2.length;

// run 1

item   [0] = [ "Marrentill", 1, 1, "Herb" ];
item   [1] = [ "Coins", 1, 22, "" ];  //  (22) 992 (1000 - 30)
item   [2] = [ "banana", 1, 2, "" ];
item   [3] = [ "Bronze Spear", 1, 1, "" ];
item   [4] = [ "Bronze Spear", 1, 1, "" ];
item   [5] = [ "Coins", 1, 22, "" ];  //  (44) 1014
item   [6] = [ "Coins", 1, 22, "" ];  //  (66) 1036
item   [7] = [ "Bronze Spear", 1, 1, "" ];
item   [8] = [ "Bronze Spear", 1, 1, "" ];
item   [9] = [ "Coins", 1, 22, "" ];  // 10, (88) 1058
item  [10] = [ "Bronze Spear", 1, 1, "" ];
item  [11] = [ "Coins", 1, 22, "" ];  //  (110) 1080
item  [12] = [ "banana", 1, 2, "" ];
item  [13] = [ "Kwuarm", 1, 1, "Herb" ];
item  [14] = [ "banana", 1, 1, "" ];
item  [15] = [ "Bronze Spear", 1, 1, "" ];
item  [16] = [ "Bronze Spear", 1, 1, "" ];
item  [17] = [ "Marrentill", 1, 1, "Herb" ];
item  [18] = [ "Bronze Spear", 1, 1, "" ];
item  [19] = [ "Pineapples", 1, 2, "" ];  // 20
item  [20] = [ "Coins", 1, 22, "" ];  //  (132) 1102

// item  [21] = [ "Bones + Big Bones", 1, 2, "" ];

item  [21] = [ "Bones", 2, 2, "2B2b" ];
item  [22] = [ "Big Bones", 1, 2, "" ];

item  [23] = [ "Bronze Spear", 1, 1, "" ];
item  [24] = [ "Tarromin", 1, 1, "Herb" ];
item  [25] = [ "Nature-rune", 1, 7, "Rune" ];  //  (7)
item  [26] = [ "Pineapples", 1, 2, "" ];
item  [27] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [28] = [ "banana", 1, 2, "" ];
item  [29] = [ "Bronze Spear", 1, 1, "" ];
item  [30] = [ "Knife", 1, 1, "" ];  // 30
item  [31] = [ "Nature-rune", 1, 7, "Rune" ];  //  (14)
item  [32] = [ "Knife", 1, 1, "" ];
item  [33] = [ "Coins", 1, 22, "" ];  //  (154) 1124
item  [34] = [ "Coins", 1, 22, "" ];  //  (176) 1146
item  [35] = [ "Coins", 1, 22, "" ];  //  (198) 1168
item  [36] = [ "Nature-rune", 1, 3, "Rune" ];  //  (17)
item  [37] = [ "Marrentill", 1, 1, "Herb" ];
item  [38] = [ "Bronze Spear", 1, 1, "" ];
item  [39] = [ "Iron Spear", 1, 1, "" ];
item  [40] = [ "banana", 1, 2, "" ];  // 40
item  [41] = [ "Bronze Spear", 1, 1, "" ];
item  [42] = [ "Nature-rune", 1, 3, "Rune" ];  //  (20)
item  [43] = [ "Pineapples", 1, 2, "" ];
item  [44] = [ "Coins", 1, 22, "" ];  //  (220) 1190
item  [45] = [ "Pineapples", 1, 2, "" ];
item  [46] = [ "Bronze Spear", 1, 1, "" ];
item  [47] = [ "Bronze Spear", 1, 1, "" ];
item  [48] = [ "Coins", 1, 22, "" ];  //  (242) 1212
item  [49] = [ "Coins", 1, 22, "" ];  //  (264) 1234
item  [50] = [ "Pineapples", 1, 2, "" ];  // 50
item  [51] = [ "Nothing", 1, 0, "" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Coins", 1, 22, "" ];  //  (286) 1256
item  [54] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [55] = [ "Bronze Spear", 1, 1, "" ];
item  [56] = [ "Pineapples", 1, 2, "" ];
item  [57] = [ "Pineapples", 1, 2, "" ];
item  [58] = [ "Iron Spear", 1, 1, "" ];
item  [59] = [ "Pineapples", 1, 2, "" ];
item  [60] = [ "Pineapples", 1, 2, "" ];  // 60
item  [61] = [ "banana", 1, 2, "" ];
item  [62] = [ "Bronze Spear", 1, 1, "" ];
item  [63] = [ "Pineapples", 1, 2, "" ];
item  [64] = [ "Knife", 1, 1, "" ];
item  [65] = [ "Nothing", 1, 0, "" ];
item  [66] = [ "Coins", 1, 22, "" ];  //  (308) 1278
item  [67] = [ "Coins", 1, 22, "" ];  //  (330) 1300
item  [68] = [ "banana", 1, 1, "" ];
item  [69] = [ "Bronze Spear", 1, 1, "" ];

// item  [69] = [ "Bones + Big Bones", 1, 1, "" ];  // 70

item  [70] = [ "Bones", 2, 1, "1B1b" ];  // 70
item  [71] = [ "Big Bones", 1, 1, "" ];

item  [72] = [ "Bronze Spear", 1, 1, "" ];
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "banana", 1, 1, "" ];
item  [75] = [ "Iron Spear", 1, 1, "" ];
item  [76] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [77] = [ "Pineapples", 1, 2, "" ];
item  [78] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [79] = [ "Knife", 1, 1, "" ];

// item  [78] = [ "Bones + Big Bones", 1, 1, "" ];

item  [80] = [ "Bones", 2, 1, "1B1b" ];
item  [81] = [ "Big Bones", 1, 1, "" ];

item  [82] = [ "banana", 1, 1, "" ];  // 80
item  [83] = [ "Bronze Spear", 1, 1, "" ];
item  [84] = [ "Coins", 1, 22, "" ];  //  (352) 1322
item  [85] = [ "Bronze Spear", 1, 1, "" ];
item  [86] = [ "banana", 1, 2, "" ];
item  [87] = [ "Iron Spear", 1, 1, "" ];
item  [88] = [ "Coins", 1, 22, "" ];  //  (374) 1344
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Iron Spear", 1, 1, "" ];  // 90
item  [93] = [ "Coins", 1, 22, "" ];  //  (396) 1366
item  [94] = [ "Nothing", 1, 0, "" ];
item  [95] = [ "Avantoe", 1, 1, "Herb" ];
item  [96] = [ "Bronze Spear", 1, 1, "" ];
item  [97] = [ "Bronze Spear", 1, 1, "" ];
item  [98] = [ "Harralander", 1, 1, "Herb" ];
item  [99] = [ "Bronze Spear", 1, 1, "" ];
item [100] = [ "Marrentill", 1, 1, "Herb" ];
item [101] = [ "Coins", 1, 22, "" ];  //  (418) 1388
item [102] = [ "Nothing", 1, 0, "" ];  // 100
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Coins", 1, 22, "" ];  //  (440) 1410
item [105] = [ "Marrentill", 1, 1, "Herb" ];
item [106] = [ "Marrentill", 1, 1, "Herb" ];
item [107] = [ "Pineapples", 1, 2, "" ];
item [108] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [109] = [ "Bronze Spear", 1, 1, "" ];
item [110] = [ "Coins", 1, 22, "" ];  //  (462) 1432
item [111] = [ "Knife", 1, 1, "" ];
item [112] = [ "Bronze Spear", 1, 1, "" ];  // 110
item [113] = [ "Coins", 1, 22, "" ];  //  (484) 1454
item [114] = [ "Coins", 1, 22, "" ];  //  (506) 1476
item [115] = [ "Nothing", 1, 0, "" ];
item [116] = [ "banana", 1, 1, "" ];
item [117] = [ "banana", 1, 2, "" ];
item [118] = [ "Bronze Spear", 1, 1, "" ];
item [119] = [ "Bronze Spear", 1, 1, "" ];
item [120] = [ "Pineapples", 1, 2, "" ];
item [121] = [ "Nature-rune", 1, 1, "Rune" ];  //  (21)
item [122] = [ "Coins", 1, 22, "" ];  // 120  (528) 1498
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "banana", 1, 2, "" ];
item [125] = [ "Knife", 1, 1, "" ];
item [126] = [ "Nature-rune", 1, 3, "Rune" ];  //  (24)
item [127] = [ "Nothing", 1, 0, "" ];
item [128] = [ "Coins", 1, 22, "" ];  //  (550) 1520
item [129] = [ "Coins", 1, 22, "" ];  //  (572) 1542
item [130] = [ "Pineapples", 1, 2, "" ];
item [131] = [ "Coins", 1, 22, "" ];  //  (594) 1564
item [132] = [ "Coins", 1, 22, "" ];  // 130  (616) 1586
item [133] = [ "Guam Leaf", 1, 1, "Herb" ];
item [134] = [ "Pineapples", 1, 2, "" ];
item [135] = [ "Bronze Spear", 1, 1, "" ];
item [136] = [ "banana", 1, 2, "" ];
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Coins", 1, 22, "" ];  //  (638) 1608
item [139] = [ "Pineapples", 1, 2, "" ];
item [140] = [ "Coins", 1, 22, "" ];  //  (660) 1630
item [141] = [ "Nothing", 1, 0, "" ];
item [142] = [ "Coins", 1, 22, "" ];  // 140  (682) 1652
item [143] = [ "Tarromin", 1, 1, "Herb" ];
item [144] = [ "Coins", 1, 22, "" ];  //  (704) 1674
item [145] = [ "Coins", 1, 22, "" ];  //  (726) 1696
item [146] = [ "Pineapples", 1, 2, "" ];
item [147] = [ "Pineapples", 1, 2, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Nothing", 1, 0, "" ];
item [150] = [ "Coins", 1, 22, "" ];  //  (748) 1718
item [151] = [ "Coins", 1, 22, "" ];  //  (770) 1740
item [152] = [ "Iron Spear", 1, 1, "" ];  // 150
item [153] = [ "Coins", 1, 22, "" ];  //  (792) 1762
item [154] = [ "Bronze Spear", 1, 1, "" ];
item [155] = [ "Nature-rune", 1, 3, "Rune" ];  //  (27)
item [156] = [ "banana", 1, 1, "" ];
item [157] = [ "Bronze Spear", 1, 1, "" ];
item [158] = [ "Harralander", 1, 1, "Herb" ];
item [159] = [ "banana", 1, 1, "" ];
item [160] = [ "banana", 1, 1, "" ];
item [161] = [ "banana", 1, 2, "" ];
item [162] = [ "Bronze Spear", 1, 1, "" ];  // 160
item [163] = [ "Pineapples", 1, 2, "" ];
item [164] = [ "Pineapples", 1, 2, "" ];
item [165] = [ "Bronze Spear", 1, 1, "" ];
item [166] = [ "Bronze Spear", 1, 1, "" ];
item [167] = [ "banana", 1, 2, "" ];
item [168] = [ "Coins", 1, 22, "" ];  //  (814) 1784
item [169] = [ "Bronze Spear", 1, 1, "" ];
item [170] = [ "Nothing", 1, 0, "" ];
item [171] = [ "Nothing", 1, 0, "" ];
item [172] = [ "banana", 1, 2, "" ];  // 170
item [173] = [ "Bronze Spear", 1, 1, "" ];
item [174] = [ "Pineapples", 1, 2, "" ];
item [175] = [ "Bronze Spear", 1, 1, "" ];
item [176] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [177] = [ "Bronze Spear", 1, 1, "" ];
item [178] = [ "Coins", 1, 22, "" ];  //  (836) 1806
item [179] = [ "Coins", 1, 22, "" ];  //  (858) 1828
item [180] = [ "Bronze Spear", 1, 1, "" ];
item [181] = [ "Bronze Spear", 1, 1, "" ];
item [182] = [ "Nature-rune", 1, 3, "Rune" ];  // 180  (30)

// item [180] = [ "Bones + Big Bones", 1, 1, "" ];

item [183] = [ "Bones", 2, 1, "1B1b" ];
item [184] = [ "Big Bones", 1, 1, "" ];

item [185] = [ "Nothing", 1, 0, "" ];
item [186] = [ "Iron Spear", 1, 1, "" ];
item [187] = [ "banana", 1, 1, "" ];
item [188] = [ "Coins", 1, 22, "" ];  //  (880) 1850
item [189] = [ "Bronze Spear", 1, 1, "" ];
item [190] = [ "Bronze Spear", 1, 1, "" ];
item [191] = [ "Bronze Spear", 1, 1, "" ];
item [192] = [ "Pineapples", 1, 2, "" ];
item [193] = [ "banana", 1, 2, "" ];  // 190
item [194] = [ "banana", 1, 2, "" ];
item [195] = [ "banana", 1, 2, "" ];
item [196] = [ "banana", 1, 2, "" ];
item [197] = [ "Guam Leaf", 1, 1, "Herb" ];
item [198] = [ "Bronze Spear", 1, 1, "" ];
item [199] = [ "Coins", 1, 22, "" ];  //  (902) 1872
item [200] = [ "Bronze Spear", 1, 1, "" ];
item [201] = [ "Knife", 1, 1, "" ];
item [202] = [ "Nothing", 1, 0, "" ];
item [203] = [ "Nature-rune", 1, 7, "Rune" ];  // 200  (37)
item [204] = [ "Coins", 1, 22, "" ];  //  (924) 1894
item [205] = [ "Harralander", 1, 1, "Herb" ];
item [206] = [ "Pineapples", 1, 2, "" ];
item [207] = [ "Pineapples", 1, 2, "" ];
item [208] = [ "Bronze Spear", 1, 1, "" ];
item [209] = [ "Pineapples", 1, 2, "" ];
item [210] = [ "Coins", 1, 22, "" ];  //  (946) 1916
item [211] = [ "Bronze Spear", 1, 1, "" ];
item [212] = [ "Bronze Spear", 1, 1, "" ];
item [213] = [ "Pineapples", 1, 2, "" ];  // 210
item [214] = [ "Harralander", 1, 1, "Herb" ];

// item [211] = [ "Bones + Big Bones", 1, 1, "" ];

item [215] = [ "Bones", 2, 1, "1B1b" ];
item [216] = [ "Big Bones", 1, 1, "" ];

item [217] = [ "Pineapples", 1, 2, "" ];
item [218] = [ "banana", 1, 1, "" ];
item [219] = [ "Guam Leaf", 1, 1, "Herb" ];
item [220] = [ "Bronze Spear", 1, 1, "" ];
item [221] = [ "Coins", 1, 22, "" ];  //  (968) 1938

runs [0] = [ 221, 217 ];  // kills 217, drops 222

// run 2

item [222] = [ "Bronze Spear", 1, 1, "" ];
item [223] = [ "Coins", 1, 22, "" ];  //  (22)
item [224] = [ "Coins", 1, 22, "" ];  // 220  (44)
item [225] = [ "Bronze Spear", 1, 1, "" ];
item [226] = [ "Nothing", 1, 0, "" ];
item [227] = [ "Pineapples", 1, 2, "" ];
item [228] = [ "Coins", 1, 22, "" ];  //  (66)

// item [224] = [ "Bones + Big Bones", 1, 2, "" ];

item [229] = [ "Bones", 2, 2, "2B2b" ];
item [230] = [ "Big Bones", 1, 2, "" ];

item [231] = [ "Bronze Spear", 1, 1, "" ];
item [232] = [ "banana", 1, 2, "" ];
item [233] = [ "Tarromin", 1, 1, "Herb" ];
item [234] = [ "Tarromin", 1, 1, "Herb" ];
item [235] = [ "Coins", 1, 22, "" ];  // 230  (88)
item [236] = [ "Nothing", 1, 0, "" ];
item [237] = [ "Bronze Spear", 1, 1, "" ];
item [238] = [ "Coins", 1, 22, "" ];  //  (110)
item [239] = [ "Coins", 1, 22, "" ];  //  (132)
item [240] = [ "banana", 1, 2, "" ];
item [241] = [ "Bronze Spear", 1, 1, "" ];
item [242] = [ "banana", 1, 2, "" ];
item [243] = [ "banana", 1, 2, "" ];
item [244] = [ "Pineapples", 1, 2, "" ];
item [245] = [ "banana", 1, 2, "" ];  // 240
item [246] = [ "Coins", 1, 22, "" ];  //  (154)
item [247] = [ "Bronze Spear", 1, 1, "" ];
item [248] = [ "Coins", 1, 22, "" ];  //  (176)
item [249] = [ "Coins", 1, 22, "" ];  //  (198)
item [250] = [ "Bronze Spear", 1, 1, "" ];
item [251] = [ "Knife", 1, 1, "" ];
item [252] = [ "Bronze Spear", 1, 1, "" ];
item [253] = [ "Coins", 1, 22, "" ];  //  (220)
item [254] = [ "banana", 1, 2, "" ];
item [255] = [ "Knife", 1, 1, "" ];  // 250
item [256] = [ "Pineapples", 1, 2, "" ];
item [257] = [ "Knife", 1, 1, "" ];
item [258] = [ "Coins", 1, 22, "" ];  //  (242)
item [259] = [ "Nothing", 1, 0, "" ];
item [260] = [ "banana", 1, 1, "" ];
item [261] = [ "Bronze Spear", 1, 1, "" ];
item [262] = [ "Bronze Spear", 1, 1, "" ];
item [263] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item [264] = [ "Coins", 1, 22, "" ];  //  (264)
item [265] = [ "Ranarr Weed", 1, 1, "Herb" ];  // 260
item [266] = [ "Coins", 1, 22, "" ];  //  (286)
item [267] = [ "Bronze Spear", 1, 1, "" ];
item [268] = [ "Coins", 1, 22, "" ];  //  (308)
item [269] = [ "Nothing", 1, 0, "" ];
item [270] = [ "Iron Spear", 1, 1, "" ];
item [271] = [ "Nature-rune", 1, 7, "Rune" ];  //  (10)
item [272] = [ "Bronze Spear", 1, 1, "" ];

// item [267] = [ "Bones + Big Bones", 1, 1, "" ];

item [273] = [ "Bones", 2, 1, "1B1b" ];
item [274] = [ "Big Bones", 1, 1, "" ];

item [275] = [ "Knife", 1, 1, "" ];
item [276] = [ "Knife", 1, 1, "" ];  // 270
item [277] = [ "Bronze Spear", 1, 1, "" ];
item [278] = [ "Nature-rune", 1, 7, "Rune" ];  //  (17)
item [279] = [ "Pineapples", 1, 2, "" ];
item [280] = [ "Bronze Spear", 1, 1, "" ];

// item [274] = [ "Bones + Big Bones", 1, 2, "" ];

item [281] = [ "Bones", 2, 2, "2B2b" ];
item [282] = [ "Big Bones", 1, 2, "" ];

item [283] = [ "Nothing", 1, 0, "" ];
item [284] = [ "Bronze Spear", 1, 1, "" ];
item [285] = [ "Bronze Spear", 1, 1, "" ];
item [286] = [ "Coins", 1, 22, "" ];  //  (330)
item [287] = [ "Kwuarm", 1, 1, "Herb" ];  // 280
item [288] = [ "Tarromin", 1, 1, "Herb" ];
item [289] = [ "Coins", 1, 22, "" ];  //  (352)
item [290] = [ "Coins", 1, 22, "" ];  //  (374)

// item [283] = [ "Bones + Big Bones", 1, 1, "" ];

item [291] = [ "Bones", 2, 1, "1B1b" ];
item [292] = [ "Big Bones", 1, 1, "" ];

// item [284] = [ "Bones + Big Bones", 1, 1, "" ];

item [293] = [ "Bones", 2, 1, "1B1b" ];
item [294] = [ "Big Bones", 1, 1, "" ];

item [295] = [ "banana", 1, 2, "" ];
item [296] = [ "Coins", 1, 22, "" ];  //  (396)
item [297] = [ "banana", 1, 2, "" ];

// item [288] = [ "Bones + Big Bones", 1, 1, "" ];

item [298] = [ "Bones", 2, 1, "1B1b" ];
item [299] = [ "Big Bones", 1, 1, "" ];

item [300] = [ "Coins", 1, 22, "" ];  // 290  (418)
item [301] = [ "Coins", 1, 22, "" ];  //  (440)
item [302] = [ "Coins", 1, 22, "" ];  //  (462)
item [303] = [ "Bronze Spear", 1, 1, "" ];
item [304] = [ "Knife", 1, 1, "" ];
item [305] = [ "banana", 1, 2, "" ];
item [306] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [307] = [ "Coins", 1, 22, "" ];  //  (484)
item [308] = [ "Bronze Spear", 1, 1, "" ];
item [309] = [ "Nothing", 1, 0, "" ];
item [310] = [ "Bronze Spear", 1, 1, "" ];  // 300
item [311] = [ "Nothing", 1, 0, "" ];
item [312] = [ "banana", 1, 2, "" ];
item [313] = [ "Tarromin", 1, 1, "Herb" ];
item [314] = [ "Bronze Spear", 1, 1, "" ];
item [315] = [ "Bronze Spear", 1, 1, "" ];
item [316] = [ "Bronze Spear", 1, 1, "" ];
item [317] = [ "Bronze Spear", 1, 1, "" ];
item [318] = [ "banana", 1, 2, "" ];
item [319] = [ "Bronze Spear", 1, 1, "" ];
item [320] = [ "uncut sapphire", 1, 1, "Gem" ];  // 310

// item [310] = [ "Bones + Big Bones", 1, 2, "" ];

item [321] = [ "Bones", 2, 2, "2B2b" ];
item [322] = [ "Big Bones", 1, 2, "" ];

item [323] = [ "banana", 1, 2, "" ];
item [324] = [ "Bronze Spear", 1, 1, "" ];
item [325] = [ "Nothing", 1, 0, "" ];
item [326] = [ "Nothing", 1, 0, "" ];
item [327] = [ "Coins", 1, 22, "" ];  //  (506)
item [328] = [ "Pineapples", 1, 2, "" ];
item [329] = [ "Tarromin", 1, 1, "Herb" ];
item [330] = [ "Coins", 1, 22, "" ];  //  (528)
item [331] = [ "Coins", 1, 22, "" ];  // 320  (550)

// item [320] = [ "Bones + Big Bones", 1, 1, "" ];

item [332] = [ "Bones", 2, 1, "1B1b" ];
item [333] = [ "Big Bones", 1, 1, "" ];

item [334] = [ "Bronze Spear", 1, 1, "" ];

// item [322] = [ "Bones + Big Bones", 1, 2, "" ];

item [335] = [ "Bones", 2, 2, "2B2b" ];
item [336] = [ "Big Bones", 1, 2, "" ];

item [337] = [ "Kwuarm", 1, 1, "Herb" ];
item [338] = [ "Coins", 1, 22, "" ];  //  (572)
item [339] = [ "banana", 1, 1, "" ];

// item [326] = [ "Bones + Big Bones", 1, 1, "" ];

item [340] = [ "Bones", 2, 1, "1B1b" ];
item [341] = [ "Big Bones", 1, 1, "" ];

item [342] = [ "Marrentill", 1, 1, "Herb" ];
item [343] = [ "Nothing", 1, 0, "" ];
item [344] = [ "Avantoe", 1, 1, "Herb" ];  //  330
item [345] = [ "Bronze Spear", 1, 1, "" ];
item [346] = [ "Bronze Spear", 1, 1, "" ];
item [347] = [ "Bronze Spear", 1, 1, "" ];
item [348] = [ "Guam Leaf", 1, 1, "Herb" ];
item [349] = [ "Bronze Spear", 1, 1, "" ];
item [350] = [ "Knife", 1, 1, "" ];
item [351] = [ "Pineapples", 1, 2, "" ];
item [352] = [ "Bronze Spear", 1, 1, "" ];
item [353] = [ "Pineapples", 1, 2, "" ];
item [354] = [ "Coins", 1, 22, "" ];  // 340  (594)
item [355] = [ "Marrentill", 1, 1, "Herb" ];
item [356] = [ "banana", 1, 1, "" ];
item [357] = [ "Bronze Spear", 1, 1, "" ];
item [358] = [ "Pineapples", 1, 2, "" ];
item [359] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [360] = [ "banana", 1, 1, "" ];
item [361] = [ "Pineapples", 1, 2, "" ];
item [362] = [ "Coins", 1, 22, "" ];  //  (616)
item [363] = [ "Knife", 1, 1, "" ];
item [364] = [ "Bronze Spear", 1, 1, "" ];  // 350

// item [350] = [ "Bones + Big Bones", 1, 1, "" ];

item [365] = [ "Bones", 2, 1, "1B1b" ];
item [366] = [ "Big Bones", 1, 1, "" ];

item [367] = [ "Bronze Spear", 1, 1, "" ];
item [368] = [ "Harralander", 1, 1, "Herb" ];

// item [353] = [ "Bones + Big Bones", 1, 1, "" ];

item [369] = [ "Bones", 2, 1, "1B1b" ];
item [370] = [ "Big Bones", 1, 1, "" ];

item [371] = [ "Bronze Spear", 1, 1, "" ];
item [372] = [ "Pineapples", 1, 2, "" ];
item [373] = [ "banana", 1, 2, "" ];
item [374] = [ "Bronze Spear", 1, 1, "" ];
item [375] = [ "Bronze Spear", 1, 1, "" ];
item [376] = [ "Pineapples", 1, 2, "" ];  // 360
item [377] = [ "Coins", 1, 22, "" ];  //  (638)
item [378] = [ "Knife", 1, 1, "" ];
item [379] = [ "Nothing", 1, 0, "" ];
item [380] = [ "Coins", 1, 22, "" ];  //  (660)
item [381] = [ "banana", 1, 2, "" ];
item [382] = [ "Bronze Spear", 1, 1, "" ];
item [383] = [ "Bronze Spear", 1, 1, "" ];
item [384] = [ "Cadantine", 1, 1, "Herb" ];
item [385] = [ "Coins", 1, 22, "" ];  //  (682)
item [386] = [ "Bronze Spear", 1, 1, "" ];  // 370

runs [1] = [ 386, 370 ];  // kills 153, drops 165

// runs [2] = [ x, y ];  // kills ? ( y - 370 ), drops ? ( x - 386 )

/*
item [000] = [ "Coins", 1, 22, "" ];  //  ()

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

item [000] = [ "Nature-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 7, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "banana", 1, 1, "" ];
item [000] = [ "banana", 1, 2, "" ];
item [000] = [ "Pineapples", 1, 2, "" ];
item [000] = [ "Knife", 1, 1, "" ];

item [000] = [ "Bones", 2, 1, "1B1b" ];
item [000] = [ "Big Bones", 1, 1, "" ];

item [000] = [ "Bones", 2, 2, "2B2b" ];
item [000] = [ "Big Bones", 1, 2, "" ];

item [000] = [ "Dragon Square Shield Left Half", 1, 1, "" ];

item [000] = [ "Bronze Spear", 1, 1, "" ];
item [000] = [ "Iron Spear", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Jogre";        // monster's name
var mcbl = 58;              // monster's combat level
var mindex = 133;           // index into monster data base
var mrpt = 1;               // number of non-breaking space to add after index name