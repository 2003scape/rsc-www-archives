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

var notes = "By teleport the closest prayer altar is in Varrock. First run 5 prayer pots and 5 swordfish. Second run 7 prayer pots and 2 swordfish.";

// run 1

item   [0] = [ "Coins", 1, 44, "" ];
item   [1] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item   [2] = [ "Coins", 1, 44, "" ];
item   [3] = [ "Mithril Spear", 1, 1, "" ];
item   [4] = [ "Coins", 1, 44, "" ];
item   [5] = [ "Coins", 1, 44, "" ];
item   [6] = [ "Water-rune", 1, 50, "Rune" ];  //  (100)
item   [7] = [ "Harralander", 1, 1, "Herb" ];
item   [8] = [ "Coins", 1, 200, "" ];
item   [9] = [ "Coins", 1, 44, "" ];
item  [10] = [ "adamantite ore", 1, 1, "" ];
item  [11] = [ "Coins", 1, 200, "" ];
item  [12] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [13] = [ "Coins", 1, 44, "" ];
item  [14] = [ "Coins", 1, 132, "" ];
item  [15] = [ "Coins", 1, 132, "" ];
item  [16] = [ "Coins", 1, 200, "" ];
item  [17] = [ "adamantite ore", 1, 1, "" ];
item  [18] = [ "Bass", 1, 1, "" ];
item  [19] = [ "Kwuarm", 1, 1, "Herb" ];
item  [20] = [ "Large Adamantite Helmet", 1, 1, "" ];
item  [21] = [ "Harralander", 1, 1, "Herb" ];
item  [22] = [ "Coins", 1, 132, "" ];
item  [23] = [ "adamantite ore", 1, 1, "" ];
item  [24] = [ "Mithril Spear", 1, 1, "" ];
item  [25] = [ "Steel battle Axe", 1, 1, "" ];
item  [26] = [ "Coins", 1, 132, "" ];
item  [27] = [ "Mithril Kite Shield", 1, 1, "" ];
item  [28] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [29] = [ "Coins", 1, 44, "" ];
item  [30] = [ "Steel battle Axe", 1, 1, "" ];
item  [31] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item  [32] = [ "Coins", 1, 132, "" ];  //  1568

runs [0] = [ 32, 33 ];  // kills 33, drops 33

// run 2

item  [33] = [ "Coins", 1, 44, "" ];  //  44
item  [34] = [ "Mithril Spear", 1, 1, "" ];
item  [35] = [ "Coins", 1, 44, "" ];  //  88
item  [36] = [ "Coins", 1, 132, "" ];  //  220
item  [37] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [38] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item  [39] = [ "Harralander", 1, 1, "Herb" ];
item  [40] = [ "Steel battle Axe", 1, 1, "" ];
item  [41] = [ "Coins", 1, 132, "" ];  // 352
item  [42] = [ "Coins", 1, 44, "" ];  //  396
item  [43] = [ "Water-rune", 1, 50, "Rune" ];  //  (100)
item  [44] = [ "Coins", 1, 200, "" ];  // 596
item  [45] = [ "Coins", 1, 132, "" ];  // 728
item  [46] = [ "Bass", 1, 2, "" ];
item  [47] = [ "Water-rune", 1, 50, "Rune" ];  //  (150)
item  [48] = [ "Steel battle Axe", 1, 1, "" ];
item  [49] = [ "adamantite ore", 1, 1, "" ];
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Coins", 1, 11, "" ];  //  739
item  [52] = [ "Harralander", 1, 1, "Herb" ];
item  [53] = [ "Steel Plate Mail Legs", 1, 1, "" ];
item  [54] = [ "Coins", 1, 44, "" ];  // 783
item  [55] = [ "Coins", 1, 44, "" ];  // 827
item  [56] = [ "Coins", 1, 200, "" ];  // 1027
item  [57] = [ "Tarromin", 1, 1, "Herb" ];
item  [58] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [59] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item  [60] = [ "Nature-rune", 1, 10, "Rune" ];  //  (20)
item  [61] = [ "Water-rune", 1, 50, "Rune" ];  //  (200)
item  [62] = [ "Steel battle Axe", 1, 1, "" ];
item  [63] = [ "Marrentill", 1, 1, "Herb" ];
item  [64] = [ "Coins", 1, 11, "" ];  // 1038
item  [65] = [ "Bass", 1, 1, "" ];
item  [66] = [ "Harralander", 1, 1, "Herb" ];
item  [67] = [ "Coins", 1, 132, "" ];  // 1170
item  [68] = [ "Nature-rune", 1, 10, "Rune" ];  //  (30)
item  [69] = [ "Coins", 1, 44, "" ];  // 1214
item  [70] = [ "Coins", 1, 132, "" ];  // 1346
item  [71] = [ "uncut ruby", 1, 1, "Gem" ];
item  [72] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [73] = [ "Coins", 1, 44, "" ];  // 1390

runs [1] = [ 73, 74 ];  // kills 41, drops 41

// run 3

item  [74] = [ "Coins", 1, 44, "" ];  // 44
item  [75] = [ "Coins", 1, 11, "" ];  // 55
item  [76] = [ "Coins", 1, 200, "" ];  // 255
item  [77] = [ "Coins", 1, 44, "" ];  // 299
item  [78] = [ "Coins", 1, 440, "" ];  // 739
item  [79] = [ "Coins", 1, 132, "" ];  // 871
item  [80] = [ "Coins", 1, 44, "" ];  // 915
item  [81] = [ "Coins", 1, 44, "" ];  // 959
item  [82] = [ "Steel battle Axe", 1, 1, "" ];
item  [83] = [ "Marrentill", 1, 1, "Herb" ];
item  [84] = [ "Coins", 1, 200, "" ];  // 1159
item  [85] = [ "Coins", 1, 44, "" ];  // 1203
item  [86] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item  [87] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item  [88] = [ "Coins", 1, 132, "" ];  // 1335
item  [89] = [ "Coins", 1, 44, "" ];  // 1379
item  [90] = [ "Coins", 1, 132, "" ];  // 1511
item  [91] = [ "Coins", 1, 132, "" ];  // 1643
item  [92] = [ "Mithril Axe", 1, 1, "" ];
item  [93] = [ "Steel Plate Mail Legs", 1, 1, "" ];
item  [94] = [ "adamantite ore", 1, 1, "" ];
item  [95] = [ "Coins", 1, 132, "" ];  // 1775
item  [96] = [ "Large Adamantite Helmet", 1, 1, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [99] = [ "Water-rune", 1, 50, "Rune" ];  //  (100)
item [100] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [101] = [ "Coins", 1, 132, "" ];  // 1907
item [102] = [ "Steel battle Axe", 1, 1, "" ];
item [103] = [ "Coins", 1, 200, "" ];  // 2107
item [104] = [ "Water-rune", 1, 50, "Rune" ];  //  (150)
item [105] = [ "Mithril Kite Shield", 1, 1, "" ];
item [106] = [ "Guam Leaf", 1, 1, "Herb" ];
item [107] = [ "Water-rune", 1, 50, "Rune" ];  //  (200)
item [108] = [ "Coins", 1, 44, "" ];  // 2151
item [109] = [ "Coins", 1, 44, "" ];  // 2195
item [110] = [ "Coins", 1, 132, "" ];  // 2327
item [111] = [ "Coins", 1, 132, "" ];  // 2459

runs [2] = [ 111, 112 ];  // kills 38, drops 38

// run 4

item [112] = [ "Coins", 1, 44, "" ];  // 44
item [113] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [114] = [ "Coins", 1, 132, "" ];  // 176
item [115] = [ "Coins", 1, 132, "" ];  // 308
item [116] = [ "Coins", 1, 200, "" ];  // 508
item [117] = [ "Mithril Kite Shield", 1, 1, "" ];
item [118] = [ "Coins", 1, 44, "" ];  // 552
item [119] = [ "Coins", 1, 132, "" ];  // 684
item [120] = [ "Coins", 1, 200, "" ];  // 884
item [121] = [ "Coins", 1, 44, "" ];  // 928
item [122] = [ "Marrentill", 1, 1, "Herb" ];
item [123] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [124] = [ "Mithril Axe", 1, 1, "" ];
item [125] = [ "Coins", 1, 44, "" ];  // 972
item [126] = [ "Coins", 1, 44, "" ];  // 1016
item [127] = [ "Coins", 1, 132, "" ];  // 1148
item [128] = [ "Bass", 1, 2, "" ];
item [129] = [ "Coins", 1, 132, "" ];  // 1280
item [130] = [ "Coins", 1, 44, "" ];  // 1324
item [131] = [ "Coins", 1, 44, "" ];  // 1368
item [132] = [ "Coins", 1, 44, "" ];  // 1412
item [133] = [ "Coins", 1, 11, "" ];  // 1423
item [134] = [ "Coins", 1, 44, "" ];  // 1467
item [135] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item [136] = [ "Coins", 1, 132, "" ];  // 1599
item [137] = [ "Mithril battle Axe", 1, 1, "" ];
item [138] = [ "adamantite ore", 1, 1, "" ];
item [139] = [ "Guam Leaf", 1, 1, "Herb" ];
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Coins", 1, 132, "" ];  // 1731
item [142] = [ "Coins", 1, 132, "" ];  // 1863
item [143] = [ "Coins", 1, 44, "" ];  // 1907
item [144] = [ "adamantite ore", 1, 1, "" ];
item [145] = [ "Mithril Axe", 1, 1, "" ];
item [146] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item [147] = [ "Steel Plate Mail Legs", 1, 1, "" ];
item [148] = [ "Coins", 1, 200, "" ];  // 2107
item [149] = [ "Nature-rune", 1, 10, "Rune" ];  //  (20)
item [150] = [ "Steel battle Axe", 1, 1, "" ];
item [151] = [ "Coins", 1, 132, "" ];  // 2239

runs [3] = [ 151, 152 ];  // kills 40, drops 40

// run 5

item [152] = [ "Coins", 1, 11, "" ];  // 11
item [153] = [ "Coins", 1, 200, "" ];  // 211
item [154] = [ "Coins", 1, 44, "" ];  // 255
item [155] = [ "Avantoe", 1, 1, "Herb" ];
item [156] = [ "Bass", 1, 2, "" ];
item [157] = [ "Coins", 1, 44, "" ];  // 299
item [158] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item [159] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [160] = [ "Coins", 1, 132, "" ];  // 431
item [161] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [162] = [ "Coins", 1, 11, "" ];  // 442
item [163] = [ "Coins", 1, 44, "" ];  // 486
item [164] = [ "rune dagger", 1, 1, "" ];
item [165] = [ "Coins", 1, 44, "" ];  // 530
item [166] = [ "Coins", 1, 132, "" ];  // 662
item [167] = [ "Coins", 1, 11, "" ];  // 673
item [168] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item [169] = [ "Coins", 1, 132, "" ];  // 805
item [170] = [ "Coins", 1, 44, "" ];  // 849
item [171] = [ "Coins", 1, 132, "" ];  // 981
item [172] = [ "Coins", 1, 44, "" ];  // 1025
item [173] = [ "Coins", 1, 44, "" ];  // 1069
item [174] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [175] = [ "Coins", 1, 44, "" ];  // 1113
item [176] = [ "Bass", 1, 2, "" ];
item [177] = [ "Coins", 1, 44, "" ];  // 1157
item [178] = [ "Marrentill", 1, 1, "Herb" ];
item [179] = [ "Coins", 1, 44, "" ];  // 1201
item [180] = [ "Coins", 1, 44, "" ];  // 1245
item [181] = [ "Coins", 1, 132, "" ];  // 1377
item [182] = [ "Guam Leaf", 1, 1, "Herb" ];
item [183] = [ "Coins", 1, 44, "" ];  // 1421
item [184] = [ "Coins", 1, 200, "" ];  // 1621
item [185] = [ "Coins", 1, 132, "" ];  // 1753
item [186] = [ "Guam Leaf", 1, 1, "Herb" ];
item [187] = [ "Coins", 1, 44, "" ];  // 1797
item [188] = [ "Coins", 1, 44, "" ];  // 1841

runs [4] = [ 188, 189 ];  // kills 37, drops 37

// run 6

item [189] = [ "Coins", 1, 132, "" ];  // 132
item [190] = [ "Coins", 1, 44, "" ];  // 176
item [191] = [ "Guam Leaf", 1, 1, "Herb" ];
item [192] = [ "Coins", 1, 44, "" ];  // 220
item [193] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item [194] = [ "Marrentill", 1, 1, "Herb" ];
item [195] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item [196] = [ "Steel battle Axe", 1, 1, "" ];
item [197] = [ "Coins", 1, 44, "" ];  // 264
item [198] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [199] = [ "Coins", 1, 44, "" ];  // 308
item [200] = [ "Coins", 1, 132, "" ];  // 440
item [201] = [ "Coins", 1, 200, "" ];  // 640
item [202] = [ "Coins", 1, 440, "" ];  // 1080
item [203] = [ "Coins", 1, 132, "" ];  // 1212
item [204] = [ "Water-rune", 1, 50, "Rune" ];  //  (100)
item [205] = [ "Coins", 1, 132, "" ];  // 1344
item [206] = [ "Coins", 1, 200, "" ];  // 1544
item [207] = [ "Coins", 1, 132, "" ];  // 1676
item [208] = [ "Coins", 1, 132, "" ];  // 1808
item [209] = [ "rune dagger", 1, 1, "" ];
item [210] = [ "Coins", 1, 11, "" ];  // 1819
item [211] = [ "Coins", 1, 200, "" ];  // 2019
item [212] = [ "Coins", 1, 132, "" ];  // 2151
item [213] = [ "Coins", 1, 44, "" ];  // 2195
item [214] = [ "Coins", 1, 200, "" ];  // 2395
item [215] = [ "Coins", 1, 200, "" ];  // 2595
item [216] = [ "Coins", 1, 11, "" ];  // 2606
item [217] = [ "Coins", 1, 132, "" ];  // 2738
item [218] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [219] = [ "Coins", 1, 200, "" ];  // 2938
item [220] = [ "Guam Leaf", 1, 1, "Herb" ];
item [221] = [ "Water-rune", 1, 50, "Rune" ];  //  (150)
item [222] = [ "Coins", 1, 44, "" ];  // 2982
item [223] = [ "Coins", 1, 200, "" ];  // 3182
item [224] = [ "Nature-rune", 1, 10, "Rune" ];  //  (20)
item [225] = [ "Coins", 1, 44, "" ];  // 3226
item [226] = [ "Coins", 1, 44, "" ];  // 3270
item [227] = [ "Nature-rune", 1, 10, "Rune" ];  //  (30)
item [228] = [ "Coins", 1, 44, "" ];  // 3314
item [229] = [ "Coins", 1, 132, "" ];  // 3446

runs [5] = [ 229, 230 ];  // kills 41, drops 41

// run 7

item [230] = [ "Coins", 1, 44, "" ];  // 44
item [231] = [ "Coins", 1, 132, "" ];  // 176
item [232] = [ "Bass", 1, 2, "" ];
item [233] = [ "adamantite ore", 1, 1, "" ];
item [234] = [ "Nothing", 1, 0, "" ];
item [235] = [ "Coins", 1, 44, "" ];  // 220
item [236] = [ "Large Adamantite Helmet", 1, 1, "" ];
item [237] = [ "Coins", 1, 200, "" ];  // 420
item [238] = [ "Coins", 1, 200, "" ];  // 620
item [239] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item [240] = [ "Nature-rune", 1, 10, "Rune" ];  //  (20)
item [241] = [ "Coins", 1, 132, "" ];  // 752
item [242] = [ "Bass", 1, 2, "" ];
item [243] = [ "Bass", 1, 1, "" ];
item [244] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [245] = [ "Water-rune", 1, 50, "Rune" ];  //  (50)
item [246] = [ "Coins", 1, 200, "" ];  // 952
item [247] = [ "Harralander", 1, 1, "Herb" ];
item [248] = [ "Coins", 1, 11, "" ];  // 963
item [249] = [ "Mithril Axe", 1, 1, "" ];
item [250] = [ "Coins", 1, 44, "" ];  // 1007
item [251] = [ "Coins", 1, 44, "" ];  // 1051
item [252] = [ "Coins", 1, 44, "" ];  // 1095
item [253] = [ "Fire-rune", 1, 25, "Rune" ];  //  (25)
item [254] = [ "Coins", 1, 132, "" ];  // 1227
item [255] = [ "Coins", 1, 132, "" ];  // 1359
item [256] = [ "Coins", 1, 44, "" ];  // 1403
item [257] = [ "Tarromin", 1, 1, "Herb" ];
item [258] = [ "Large Adamantite Helmet", 1, 1, "" ];
item [259] = [ "Coins", 1, 200, "" ];  // 1603
item [260] = [ "Coins", 1, 44, "" ];  // 1647
item [261] = [ "Coins", 1, 44, "" ];  // 1691
item [262] = [ "Fire-rune", 1, 25, "Rune" ];  //  (50)
item [263] = [ "Coins", 1, 44, "" ];  // 1735
item [264] = [ "Coins", 1, 11, "" ];  // 1746
item [265] = [ "Coins", 1, 44, "" ];  // 1790
item [266] = [ "Coins", 1, 44, "" ];  // 1834
item [267] = [ "Water-rune", 1, 50, "Rune" ];  //  (100)
item [268] = [ "Coins", 1, 132, "" ];  // 1966
item [269] = [ "Water-rune", 1, 50, "Rune" ];  //  (150)
item [270] = [ "Bass", 1, 2, "" ];
item [271] = [ "Coins", 1, 132, "" ];  // 2098
item [272] = [ "Nothing", 1, 0, "" ];
item [273] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [274] = [ "Coins", 1, 200, "" ];  // 2298
item [275] = [ "Coins", 1, 132, "" ];  // 2430

runs [6] = [ 275, 276 ];  // kills 46, drops 46

// run 8

item [276] = [ "Coins", 1, 11, "" ];  // 11
item [277] = [ "Coins", 1, 132, "" ];  // 143
item [278] = [ "Mithril Spear", 1, 1, "" ];
item [279] = [ "Coins", 1, 11, "" ];  // 154
item [280] = [ "Coins", 1, 44, "" ];  // 198
item [281] = [ "Coins", 1, 132, "" ];  // 330
item [282] = [ "Water-rune", 1, 50, "Rune" ];  //  (30)
item [283] = [ "Coins", 1, 132, "" ];  // 462
item [284] = [ "Steel battle Axe", 1, 1, "" ];
item [285] = [ "Coins", 1, 200, "" ];  // 662
item [286] = [ "Coins", 1, 44, "" ];  // 706
item [287] = [ "Large Adamantite Helmet", 1, 1, "" ];
item [288] = [ "Nature-rune", 1, 10, "Rune" ];  //  (10)
item [289] = [ "Mithril Axe", 1, 1, "" ];
item [290] = [ "Avantoe", 1, 1, "Herb" ];
item [291] = [ "Coins", 1, 44, "" ];  // 750
item [292] = [ "Coins", 1, 132, "" ];  // 882
item [293] = [ "Coins", 1, 44, "" ];  // 926
item [294] = [ "Nothing", 1, 0, "" ];
item [295] = [ "Coins", 1, 132, "" ];  // 1058
item [296] = [ "Nothing", 1, 0, "" ];
item [297] = [ "Coins", 1, 200, "" ];  // 1258
item [298] = [ "Coins", 1, 44, "" ];  // 1302
item [299] = [ "Coins", 1, 200, "" ];  // 1502
item [300] = [ "Water-rune", 1, 50, "Rune" ];  //  (100)
item [301] = [ "Coins", 1, 44, "" ];  // 1546
item [302] = [ "Coins", 1, 44, "" ];  // 1590
item [303] = [ "Coins", 1, 44, "" ];  // 1634
item [304] = [ "Mithril Spear", 1, 1, "" ];
item [305] = [ "Coins", 1, 44, "" ];  // 1678
item [306] = [ "Coins", 1, 44, "" ];  // 1722
item [307] = [ "Harralander", 1, 1, "Herb" ];
item [308] = [ "Coins", 1, 132, "" ];  // 1854
item [309] = [ "Coins", 1, 132, "" ];  // 1986
item [310] = [ "Coins", 1, 11, "" ];  // 1997
item [311] = [ "Coins", 1, 132, "" ];  // 2129

runs [7] = [ 311, 312 ];  // kills 0, drops 0

// runs [8] = [ x, y ];  // kills ? ( y - 312 ), drops ? ( x - 311 )

/*
item [000] = [ "Coins", 1, 4, "" ];
item [000] = [ "Coins", 1, 11, "" ];
item [000] = [ "Coins", 1, 44, "" ];
item [000] = [ "Coins", 1, 132, "" ];
item [000] = [ "Coins", 1, 200, "" ];
item [000] = [ "Coins", 1, 440, "" ];

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

item [000] = [ "Water-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 25, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "adamantite ore", 1, 1, "" ];

item [000] = [ "Steel battle Axe", 1, 1, "" ];
item [000] = [ "Mithril Axe", 1, 1, "" ];
item [000] = [ "Mithril Spear", 1, 1, "" ];
item [000] = [ "Mithril battle Axe", 1, 1, "" ];
item [000] = [ "rune dagger", 1, 1, "" ];

item [000] = [ "Steel Plate Mail Legs", 1, 1, "" ];
item [000] = [ "Mithril Kite Shield", 1, 1, "" ];
item [000] = [ "Large Adamantite Helmet", 1, 1, "" ];
item [000] = [ "Dragon Square Shield Left Half", 1, 1, "" ];

item [000] = [ "Bass", 1, 1, "" ];
item [000] = [ "Bass", 1, 2, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Blue Dragon";        // monster's name
var mcbl = 105;                   // monster's combat level
var mindex = 158;                 // index into monster data base
var mrpt = 1;                     // number of non-breaking space to add after index name