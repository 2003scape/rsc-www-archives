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

item   [0] = [ "Coins", 1, 132, "" ];  //  (132)
item   [1] = [ "Coins", 1, 132, "" ];  //  (264)
item   [2] = [ "Coins", 1, 132, "" ];  //  (396)
item   [3] = [ "Coins", 1, 220, "" ];  //  (616)
item   [4] = [ "Coins", 1, 44, "" ];  //  (660)
item   [5] = [ "Coins", 1, 44, "" ];  //  (704)
item   [6] = [ "Coins", 1, 44, "" ];  //  (748)
item   [7] = [ "Coins", 1, 132, "" ];  //  (880)
item   [8] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item   [9] = [ "Coins", 1, 220, "" ];  //  (1100)
item  [10] = [ "Coins", 1, 132, "" ];  //  (1232)
item  [11] = [ "Coins", 1, 44, "" ];  //  (1276)
item  [12] = [ "Coins", 1, 44, "" ];  //  (1320)
item  [13] = [ "Coins", 1, 44, "" ];  //  (1364)
item  [14] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item  [15] = [ "Coins", 1, 132, "" ];  //  (1496)
item  [16] = [ "Fire-rune", 1, 25, "Rune" ];  //  (75)
item  [17] = [ "Coins", 1, 132, "" ];  //  (1628)
item  [18] = [ "Coins", 1, 44, "" ];  //  (1672)
item  [19] = [ "Mithril Kite Shield", 1, 1, "" ];
item  [20] = [ "Coins", 1, 132, "" ];  //  (1804)
item  [21] = [ "Coins", 1, 132, "" ];  //  (1936)
item  [22] = [ "Coins", 1, 44, "" ];  //  (1980)
item  [23] = [ "Coins", 1, 220, "" ];  //  (2200)
item  [24] = [ "Coins", 1, 132, "" ];  //  (2332)
item  [25] = [ "Coins", 1, 220, "" ];  //  (2552)
item  [26] = [ "Coins", 1, 132, "" ];  //  (2684)
item  [27] = [ "Coins", 1, 132, "" ];  //  (2816)
item  [28] = [ "Coins", 1, 132, "" ];  //  (2948)
item  [29] = [ "Large Rune Helmet", 1, 1, "" ];
item  [30] = [ "Coins", 1, 220, "" ];  //  (3168)
item  [31] = [ "Fire-rune", 1, 25, "Rune" ];  //  (100)
item  [32] = [ "Coins", 1, 132, "" ];  //  (3300)
item  [33] = [ "Coins", 1, 132, "" ];  //  (3432)
item  [34] = [ "Coins", 1, 132, "" ];  //  (3564)
item  [35] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item  [36] = [ "Thread", 1, 10, "" ];
item  [37] = [ "Coins", 1, 132, "" ];  //  (3696)
item  [38] = [ "Steel Axe", 1, 1, "" ];
item  [39] = [ "Coins", 1, 132, "" ];  //  (3828)
item  [40] = [ "Coins", 1, 132, "" ];  //  (3960)
item  [41] = [ "Tuna", 1, 2, "" ];
item  [42] = [ "Steel Axe", 1, 1, "" ];
item  [43] = [ "Coins", 1, 44, "" ];  //  (4004)
item  [44] = [ "Coins", 1, 44, "" ];  //  (4048)
item  [45] = [ "uncut emerald", 1, 1, "Gem" ];
item  [46] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item  [47] = [ "Coins", 1, 132, "" ];  //  (4180)
item  [48] = [ "Steel 2-handed Sword", 1, 1, "" ];
item  [49] = [ "Coins", 1, 132, "" ];  //  (4312)
item  [50] = [ "uncut emerald", 1, 1, "Gem" ];

runs [0] = [ 50, 51 ];  // kills 51, drops 51

// run 2

item  [51] = [ "Coins", 1, 220, "" ];  //  (220)
item  [52] = [ "Coins", 1, 132, "" ];  //  (352)
item  [53] = [ "Coins", 1, 132, "" ];  //  (484)
item  [54] = [ "Coins", 1, 11, "" ];  //  (495)
item  [55] = [ "Coins", 1, 132, "" ];  //  (627)
item  [56] = [ "Coins", 1, 132, "" ];  //  (759)
item  [57] = [ "Coins", 1, 132, "" ];  //  (891)
item  [58] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item  [59] = [ "Coins", 1, 44, "" ];  //  (935)
item  [60] = [ "Coins", 1, 220, "" ];  //  (1155)
item  [61] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item  [62] = [ "Steel Axe", 1, 1, "" ];
item  [63] = [ "Coins", 1, 44, "" ];  //  (1199)
item  [64] = [ "Coins", 1, 11, "" ];  //  (1210)
item  [65] = [ "Coins", 1, 44, "" ];  //  (1254)
item  [66] = [ "Tuna", 1, 2, "" ];
item  [67] = [ "Coins", 1, 11, "" ];  //  (1265)
item  [68] = [ "Mithril Kite Shield", 1, 1, "" ];
item  [69] = [ "Coins", 1, 132, "" ];  //  (1397)
item  [70] = [ "Fire-rune", 1, 25, "Rune" ];  //  (75)
item  [71] = [ "Coins", 1, 220, "" ];  //  (1617)
item  [72] = [ "Adamantite Plate Mail Legs", 1, 1, "" ];
item  [73] = [ "Coins", 1, 11, "" ];  //  (1628)
item  [74] = [ "Tuna", 1, 2, "" ];
item  [75] = [ "Coins", 1, 44, "" ];  //  (1672)
item  [76] = [ "Coins", 1, 44, "" ];  //  (1716)
item  [77] = [ "Coins", 1, 132, "" ];  //  (1848)
item  [78] = [ "Coins", 1, 44, "" ];  //  (1892)
item  [79] = [ "Coins", 1, 220, "" ];  //  (2112)
item  [80] = [ "Coins", 1, 220, "" ];  //  (2332)
item  [81] = [ "Steel battle Axe", 1, 1, "" ];
item  [82] = [ "Coins", 1, 132, "" ];  //  (2464)
item  [83] = [ "Coins", 1, 132, "" ];  //  (2596)
item  [84] = [ "Coins", 1, 11, "" ];  //  (2607)
item  [85] = [ "Coins", 1, 132, "" ];  //  (2739)
item  [86] = [ "Coins", 1, 132, "" ];  //  (2871)
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Coins", 1, 132, "" ];  //  (3003)
item  [89] = [ "Coins", 1, 44, "" ];  //  (3047)
item  [90] = [ "Coins", 1, 44, "" ];  //  (3091)
item  [91] = [ "Coins", 1, 132, "" ];  //  (3223)
item  [92] = [ "Fire-rune", 1, 50, "Rune" ];  //  (125)
item  [93] = [ "Coins", 1, 132, "" ];  //  (3355)
item  [94] = [ "Coins", 1, 44, "" ];  //  (3399)
item  [95] = [ "Steel battle Axe", 1, 1, "" ];
item  [96] = [ "Steel Axe", 1, 1, "" ];
item  [97] = [ "Coins", 1, 220, "" ];  //  (3619)
item  [98] = [ "Coins", 1, 44, "" ];  //  (3663)
item  [99] = [ "Steel Axe", 1, 1, "" ];
item [100] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [101] = [ "Coins", 1, 132, "" ];  //  (3795)
item [102] = [ "Coins", 1, 11, "" ];  //  (3806)
item [103] = [ "Coins", 1, 220, "" ];  //  (4026)
item [104] = [ "Coins", 1, 220, "" ];  //  (4246)

runs [1] = [ 104, 105 ];  // kills 54, drops 54

// run 3

item [105] = [ "Coins", 1, 44, "" ];  //  (44)
item [106] = [ "gold bar", 1, 1, "" ];
item [107] = [ "Coins", 1, 132, "" ];  //  (176)
item [108] = [ "Coins", 1, 44, "" ];  //  (220)
item [109] = [ "Coins", 1, 132, "" ];  //  (352)
item [110] = [ "Coins", 1, 44, "" ];  //  (396)
item [111] = [ "Large Rune Helmet", 1, 1, "" ];
item [112] = [ "Coins", 1, 44, "" ];  //  (440)
item [113] = [ "Coins", 1, 44, "" ];  //  (484)
item [114] = [ "Coins", 1, 44, "" ];  //  (528)
item [115] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [116] = [ "Coins", 1, 132, "" ];  //  (660)
item [117] = [ "Coins", 1, 220, "" ];  //  (880)
item [118] = [ "Coins", 1, 44, "" ];  //  (924)
item [119] = [ "Coins", 1, 460, "" ];  //  (1384)
item [120] = [ "Coins", 1, 132, "" ];  //  (1516)
item [121] = [ "Coins", 1, 44, "" ];  //  (1560)
item [122] = [ "Coins", 1, 44, "" ];  //  (1604)
item [123] = [ "Coins", 1, 11, "" ];  //  (1615)
item [124] = [ "Coins", 1, 132, "" ];  //  (1747)
item [125] = [ "Coins", 1, 44, "" ];  //  (1791)
item [126] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [127] = [ "Coins", 1, 44, "" ];  //  (1835)
item [128] = [ "Coins", 1, 132, "" ];  //  (1967)
item [129] = [ "Coins", 1, 44, "" ];  //  (2011)
item [130] = [ "Adamantite Plate Mail Legs", 1, 1, "" ];
item [131] = [ "Mithril Kite Shield", 1, 1, "" ];
item [132] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item [133] = [ "Mithril Kite Shield", 1, 1, "" ];
item [134] = [ "Coins", 1, 132, "" ];  //  (2143)
item [135] = [ "Coins", 1, 44, "" ];  //  (2187)
item [136] = [ "Coins", 1, 460, "" ];  //  (2647)
item [137] = [ "Coins", 1, 132, "" ];  //  (2779)
item [138] = [ "Large Rune Helmet", 1, 1, "" ];
item [139] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [140] = [ "Steel battle Axe", 1, 1, "" ];
item [141] = [ "Coins", 1, 44, "" ];  //  (2823)
item [142] = [ "Steel battle Axe", 1, 1, "" ];
item [143] = [ "Coins", 1, 44, "" ];  //  (2867)
item [144] = [ "uncut emerald", 1, 1, "Gem" ];
item [145] = [ "Coins", 1, 11, "" ];  //  (2878)
item [146] = [ "Coins", 1, 132, "" ];  //  (3010)
item [147] = [ "Coins", 1, 132, "" ];  //  (3142)
item [148] = [ "Coins", 1, 44, "" ];  //  (3186)
item [149] = [ "Coins", 1, 44, "" ];  //  (3230)
item [150] = [ "Coins", 1, 132, "" ];  //  (3362)
item [151] = [ "Coins", 1, 132, "" ];  //  (3494)
item [152] = [ "Coins", 1, 44, "" ];  //  (3538)
item [153] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [154] = [ "Coins", 1, 44, "" ];  //  (3582)
item [155] = [ "Coins", 1, 11, "" ];  //  (3593)

runs [2] = [ 155, 156 ];  // kills 51, drops 51

// run 4

item [156] = [ "Adamantite Plate Mail Legs", 1, 1, "" ];
item [157] = [ "Nothing", 1, 0, "" ];
item [158] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [159] = [ "Coins", 1, 132, "" ];  //  (132)
item [160] = [ "Coins", 1, 132, "" ];  //  (264)
item [161] = [ "Coins", 1, 132, "" ];  //  (396)
item [162] = [ "Coins", 1, 44, "" ];  //  (440)
item [163] = [ "Coins", 1, 11, "" ];  //  (451)
item [164] = [ "Coins", 1, 220, "" ];  //  (671)
item [165] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [166] = [ "Coins", 1, 11, "" ];  //  (682)
item [167] = [ "Coins", 1, 132, "" ];  //  (814)
item [168] = [ "Death-rune", 1, 3, "Rune" ];  //  (3)
item [169] = [ "Coins", 1, 44, "" ];  //  (858)
item [170] = [ "Coins", 1, 132, "" ];  //  (990)
item [171] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [172] = [ "Coins", 1, 11, "" ];  //  (1001)
item [173] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [174] = [ "Coins", 1, 132, "" ];  //  (1133)
item [175] = [ "Coins", 1, 132, "" ];  //  (1265)
item [176] = [ "Coins", 1, 132, "" ];  //  (1397)
item [177] = [ "Coins", 1, 132, "" ];  //  (1529)
item [178] = [ "Coins", 1, 132, "" ];  //  (1661)
item [179] = [ "Coins", 1, 220, "" ];  //  (1881)
item [180] = [ "uncut emerald", 1, 1, "Gem" ];
item [181] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [182] = [ "Coins", 1, 132, "" ];  //  (2013)
item [183] = [ "Coins", 1, 44, "" ];  //  (2057)
item [184] = [ "Coins", 1, 44, "" ];  //  (2101)
item [185] = [ "Steel Axe", 1, 1, "" ];
item [186] = [ "Coins", 1, 132, "" ];  //  (2233)
item [187] = [ "Mithril Kite Shield", 1, 1, "" ];
item [188] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [189] = [ "Coins", 1, 132, "" ];  //  (2365)
item [190] = [ "Coins", 1, 220, "" ];  //  (2585)
item [191] = [ "Steel battle Axe", 1, 1, "" ];
item [192] = [ "Coins", 1, 132, "" ];  //  (2717)
item [193] = [ "Death-rune", 1, 3, "Rune" ];  //  (6)
item [194] = [ "Coins", 1, 220, "" ];  //  (2937)
item [195] = [ "Coins", 1, 132, "" ];  //  (3069)
item [196] = [ "Coins", 1, 132, "" ];  //  (3201)
item [197] = [ "Large Rune Helmet", 1, 1, "" ];
item [198] = [ "Death-rune", 1, 3, "Rune" ];  //  (9)
item [199] = [ "Coins", 1, 44, "" ];  //  (3245)
item [200] = [ "gold bar", 1, 1, "" ];
item [201] = [ "Coins", 1, 132, "" ];  //  (3377)

runs [3] = [ 201, 202 ];  // kills 46, drops 46

// run 5

item [202] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [203] = [ "Coins", 1, 11, "" ];  //  (11)
item [204] = [ "Coins", 1, 220, "" ];  //  (231)
item [205] = [ "gold bar", 1, 1, "" ];
item [206] = [ "uncut sapphire", 1, 1, "Gem" ];
item [207] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [208] = [ "Coins", 1, 132, "" ];  //  (363)
item [209] = [ "Coins", 1, 132, "" ];  //  (495)
item [210] = [ "Coins", 1, 44, "" ];  //  (539)
item [211] = [ "Coins", 1, 44, "" ];  //  (583)
item [212] = [ "Coins", 1, 220, "" ];  //  (803)
item [213] = [ "Coins", 1, 44, "" ];  //  (847)
item [214] = [ "Steel battle Axe", 1, 1, "" ];
item [215] = [ "Mithril Kite Shield", 1, 1, "" ];
item [216] = [ "Coins", 1, 132, "" ];  //  (979)
item [217] = [ "Coins", 1, 220, "" ];  //  (1199)
item [218] = [ "Coins", 1, 132, "" ];  //  (1331)
item [219] = [ "gold bar", 1, 1, "" ];
item [220] = [ "uncut ruby", 1, 1, "Gem" ];
item [221] = [ "Coins", 1, 44, "" ];  //  (1375)
item [222] = [ "Fire-rune", 1, 50, "Rune" ];  //  (150)
item [223] = [ "Coins", 1, 44, "" ];  //  (1419)
item [224] = [ "Coins", 1, 460, "" ];  //  (1879)
item [225] = [ "Coins", 1, 44, "" ];  //  (1923)
item [226] = [ "Coins", 1, 132, "" ];  //  (2055)
item [227] = [ "Coins", 1, 44, "" ];  //  (2099)
item [228] = [ "Coins", 1, 44, "" ];  //  (2143)
item [229] = [ "Coins", 1, 132, "" ];  //  (2275)
item [230] = [ "Coins", 1, 132, "" ];  //  (2407)
item [231] = [ "Coins", 1, 132, "" ];  //  (2539)
item [232] = [ "Coins", 1, 132, "" ];  //  (2671)
item [233] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [234] = [ "Coins", 1, 132, "" ];  //  (2803)
item [235] = [ "Large Rune Helmet", 1, 1, "" ];
item [236] = [ "Coins", 1, 132, "" ];  //  (2935)
item [237] = [ "Coins", 1, 220, "" ];  //  (3155)
item [238] = [ "Coins", 1, 132, "" ];  //  (3287)
item [239] = [ "Coins", 1, 11, "" ];  //  (3298)
item [240] = [ "Coins", 1, 132, "" ];  //  (3430)
item [241] = [ "Coins", 1, 132, "" ];  //  (3562)
item [242] = [ "Coins", 1, 132, "" ];  //  (3694)
item [243] = [ "Steel Axe", 1, 1, "" ];
item [244] = [ "Coins", 1, 132, "" ];  //  (3826)
item [245] = [ "Coins", 1, 11, "" ];  //  (3837)
item [246] = [ "Coins", 1, 44, "" ];  //  (3881)
item [247] = [ "Coins", 1, 132, "" ];  //  (4013)
item [248] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [249] = [ "Coins", 1, 132, "" ];  //  (4145)
item [250] = [ "Coins", 1, 220, "" ];  //  (4365)
item [251] = [ "Coins", 1, 44, "" ];  //  (4409)
item [252] = [ "Coins", 1, 132, "" ];  //  (4541)
item [253] = [ "Coins", 1, 460, "" ];  //  (5001)
item [254] = [ "Coins", 1, 44, "" ];  //  (5045)
item [255] = [ "Coins", 1, 44, "" ];  //  (5089)

runs [4] = [ 255, 256 ];  // kills 54, drops 54

// run 6

item [256] = [ "Coins", 1, 132, "" ];  //  (132)
item [257] = [ "Coins", 1, 132, "" ];  //  (264)
item [258] = [ "Coins", 1, 132, "" ];  //  (396)
item [259] = [ "Thread", 1, 10, "" ];
item [260] = [ "Coins", 1, 132, "" ];  //  (528)
item [261] = [ "Coins", 1, 132, "" ];  //  (660)
item [262] = [ "Coins", 1, 11, "" ];  //  (671)
item [263] = [ "Coins", 1, 44, "" ];  //  (715)
item [264] = [ "Coins", 1, 44, "" ];  //  (759)
item [265] = [ "Coins", 1, 132, "" ];  //  (891)
item [266] = [ "Coins", 1, 44, "" ];  //  (935)
item [267] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [268] = [ "Coins", 1, 132, "" ];  //  (1067)
item [269] = [ "Coins", 1, 132, "" ];  //  (1199)
item [270] = [ "Coins", 1, 132, "" ];  //  (1331)
item [271] = [ "Coins", 1, 11, "" ];  //  (1342)
item [272] = [ "Coins", 1, 132, "" ];  //  (1474)
item [273] = [ "Coins", 1, 132, "" ];  //  (1606)
item [274] = [ "Coins", 1, 11, "" ];  //  (1617)
item [275] = [ "Coins", 1, 132, "" ];  //  (1749)
item [276] = [ "Coins", 1, 11, "" ];  //  (1760)
item [277] = [ "Coins", 1, 220, "" ];  //  (1980)
item [278] = [ "Coins", 1, 44, "" ];  //  (2024)
item [279] = [ "Coins", 1, 44, "" ];  //  (2068)
item [280] = [ "Coins", 1, 11, "" ];  //  (2079)
item [281] = [ "Coins", 1, 11, "" ];  //  (2090)
item [282] = [ "Coins", 1, 11, "" ];  //  (2101)
item [283] = [ "Coins", 1, 132, "" ];  //  (2233)
item [284] = [ "Coins", 1, 132, "" ];  //  (2365)
item [285] = [ "Coins", 1, 132, "" ];  //  (2497)
item [286] = [ "Coins", 1, 132, "" ];  //  (2629)
item [287] = [ "Adamantite Plate Mail Legs", 1, 1, "" ];
item [288] = [ "Coins", 1, 132, "" ];  //  (2761)
item [289] = [ "Steel battle Axe", 1, 1, "" ];
item [290] = [ "Coins", 1, 44, "" ];  //  (2805)
item [291] = [ "Coins", 1, 44, "" ];  //  (2849)
item [292] = [ "Coins", 1, 44, "" ];  //  (2893)

runs [5] = [ 292, 293 ];  // kills 37, drops 37

// run 7

item [293] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (10)
item [294] = [ "Coins", 1, 132, "" ];  //  (132)
item [295] = [ "Coins", 1, 132, "" ];  //  (264)
item [296] = [ "Coins", 1, 132, "" ];  //  (396)
item [297] = [ "Coins", 1, 132, "" ];  //  (528)
item [298] = [ "Nothing", 1, 0, "" ];
item [299] = [ "Coins", 1, 44, "" ];  //  (572)
item [300] = [ "Nothing", 1, 0, "" ];
item [301] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [302] = [ "uncut sapphire", 1, 1, "Gem" ];
item [303] = [ "Coins", 1, 132, "" ];  //  (704)
item [304] = [ "Coins", 1, 132, "" ];  //  (836)
item [305] = [ "Coins", 1, 44, "" ];  //  (880)
item [306] = [ "Coins", 1, 132, "" ];  //  (1012)
item [307] = [ "Coins", 1, 44, "" ];  //  (1056)
item [308] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [309] = [ "Coins", 1, 44, "" ];  //  (1100)
item [310] = [ "Fire-rune", 1, 50, "Rune" ];  //  (50)
item [311] = [ "Coins", 1, 44, "" ];  //  (1144)
item [312] = [ "Tuna", 1, 2, "" ];
item [313] = [ "Coins", 1, 44, "" ];  //  (1188)
item [314] = [ "Coins", 1, 132, "" ];  //  (1320)
item [315] = [ "Chaos-rune", 1, 10, "Rune" ];  //  (20)
item [316] = [ "Coins", 1, 132, "" ];  //  (1452)
item [317] = [ "Coins", 1, 44, "" ];  //  (1496)
item [318] = [ "Fire-rune", 1, 50, "Rune" ];  //  (100)
item [319] = [ "Coins", 1, 44, "" ];  //  (1540)
item [320] = [ "Coins", 1, 132, "" ];  //  (1672)
item [321] = [ "Fire-rune", 1, 50, "Rune" ];  //  (150)
item [322] = [ "Coins", 1, 44, "" ];  //  (1716)
item [323] = [ "Coins", 1, 132, "" ];  //  (1848)
item [324] = [ "Coins", 1, 220, "" ];  //  (2068)
item [325] = [ "Coins", 1, 44, "" ];  //  (2112)
item [326] = [ "Coins", 1, 11, "" ];  //  (2123)
item [327] = [ "Coins", 1, 132, "" ];  //  (2255)
item [328] = [ "Fire-rune", 1, 50, "Rune" ];  //  (200)
item [329] = [ "Fire-rune", 1, 50, "Rune" ];  //  (250)
item [330] = [ "uncut emerald", 1, 1, "Gem" ];
item [331] = [ "Steel battle Axe", 1, 1, "" ];
item [332] = [ "Coins", 1, 44, "" ];  //  (2299)
item [333] = [ "Coins", 1, 132, "" ];  //  (2431)
item [334] = [ "Coins", 1, 11, "" ];  //  (2442)
item [335] = [ "Fire-rune", 1, 50, "Rune" ];  //  (300)
item [336] = [ "Coins", 1, 132, "" ];  //  (2574)
item [337] = [ "Coins", 1, 44, "" ];  //  (2618)
item [338] = [ "Steel Axe", 1, 1, "" ];
item [339] = [ "Coins", 1, 44, "" ];  //  (2662)

runs [6] = [ 339, 340 ];  // kills 47, drops 47

// run 8

// runs [7] = [ x, y ];  // kills ? ( y - 340 ), drops ? ( x - 339 )

/*
item [000] = [ "Coins", 1, 11, "" ];  //  ()
item [000] = [ "Coins", 1, 44, "" ];  //  ()
item [000] = [ "Coins", 1, 132, "" ];  //  ()
item [000] = [ "Coins", 1, 220, "" ];  //  ()
item [000] = [ "Coins", 1, 460, "" ];  //  ()

item [0000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [0000] = [ "Marrentill", 1, 1, "Herb" ];
item [0000] = [ "Tarromin", 1, 1, "Herb" ];
item [0000] = [ "Harralander", 1, 1, "Herb" ];
item [0000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [0000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [0000] = [ "Avantoe", 1, 1, "Herb" ];
item [0000] = [ "Kwuarm", 1, 1, "Herb" ];
item [0000] = [ "Cadantine", 1, 1, "Herb" ];
item [0000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Fire-rune", 1, 25, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 3, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Steel Axe", 1, 1, "" ];
item [000] = [ "Steel battle Axe", 1, 1, "" ];
item [000] = [ "Steel 2-handed Sword", 1, 1, "" ];
item [000] = [ "rune 2-handed Sword", 1, 1, "" ];

item [000] = [ "Large Steel Helmet", 1, 1, "" ];
item [000] = [ "Mithril Kite Shield", 1, 1, "" ];
item [000] = [ "Adamantite Plate Mail Legs", 1, 1, "" ];
item [000] = [ "Rune Square Shield", 1, 1, "" ];
item [000] = [ "Large Rune Helmet", 1, 1, "" ];

item [000] = [ "Tuna", 1, 1, "" ];
item [000] = [ "Tuna", 1, 2, "" ];
item [000] = [ "gold bar", 1, 1, "" ];
item [000] = [ "Thread", 1, 10, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Greater Demon";        // monster's name
var mcbl = 87;                      // monster's combat level
var mindex = 152;                   // index into monster data base
var mrpt = 1;                       // number of non-breaking space to add after index name