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

item   [0] = [ "Coins", 1, 82, "" ];  //  (82)
item   [1] = [ "Coins", 1, 37, "" ];  //  (119)
item   [2] = [ "Coins", 1, 82, "" ];  //  (201)
item   [3] = [ "Coins", 1, 82, "" ];  //  (283)
item   [4] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item   [5] = [ "Steel Kite Shield", 1, 1, "" ];
item   [6] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (5)
item   [7] = [ "Ranarr Weed", 1, 1, "Herb" ];
item   [8] = [ "Coins", 1, 82, "" ];  //  (365)
item   [9] = [ "Coins", 1, 37, "" ];  //  (402)
item  [10] = [ "steel bar", 1, 1, "" ];
item  [11] = [ "coal", 1, 1, "" ];
item  [12] = [ "Medium Steel Helmet", 1, 1, "" ];
item  [13] = [ "Coins", 1, 82, "" ];  //  (484)
item  [14] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (10)
item  [15] = [ "Earth-rune", 1, 18, "Rune" ];  //  (18)
item  [16] = [ "Coins", 1, 37, "" ];  //  (521)
item  [17] = [ "Coins", 1, 119, "" ];  //  (640)
item  [18] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (2)
item  [19] = [ "Medium Steel Helmet", 1, 1, "" ];
item  [20] = [ "Magic Staff", 1, 1, "" ];
item  [21] = [ "Coins", 1, 119, "" ];  //  (759)
item  [22] = [ "Coins", 1, 82, "" ];  //  (841)
item  [23] = [ "Coins", 1, 119, "" ];  //  (960)
item  [24] = [ "Magic Staff", 1, 1, "" ];
item  [25] = [ "Coins", 1, 37, "" ];  //  (997)
item  [26] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item  [27] = [ "Coins", 1, 82, "" ];  //  (1079)
item  [28] = [ "Brass necklace", 1, 1, "" ];
item  [29] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item  [30] = [ "Coins", 1, 82, "" ];  //  (1161)
item  [31] = [ "Coins", 1, 82, "" ];  //  (1243)
item  [32] = [ "Coins", 1, 119, "" ];  //  (1362)
item  [33] = [ "Law-rune", 1, 2, "Rune" ];  //  (6)
item  [34] = [ "Black Square Shield", 1, 1, "" ];
item  [35] = [ "steel bar", 1, 1, "" ];
item  [36] = [ "Coins", 1, 82, "" ];  //  (1444)
item  [37] = [ "Coins", 1, 82, "" ];  //  (1526)
item  [38] = [ "Avantoe", 1, 1, "Herb" ];
item  [39] = [ "Coins", 1, 37, "" ];  //  (1563)
item  [40] = [ "Coins", 1, 119, "" ];  //  (1682)
item  [41] = [ "steel bar", 1, 1, "" ];
item  [42] = [ "steel bar", 1, 1, "" ];
item  [43] = [ "Air-rune", 1, 12, "Rune" ];  //  (12)
item  [44] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (4)
item  [45] = [ "steel bar", 1, 1, "" ];
item  [46] = [ "Coins", 1, 37, "" ];  //  (1719)
item  [47] = [ "Coins", 1, 37, "" ];  //  (1756)
item  [48] = [ "Earth-rune", 1, 18, "Rune" ];  //  (36)
item  [49] = [ "Coins", 1, 82, "" ];  //  (1838)
item  [50] = [ "Earth-rune", 1, 18, "Rune" ];  //  (54)
item  [51] = [ "Coins", 1, 15, "" ];  //  (1853)
item  [52] = [ "Magic Staff", 1, 1, "" ];
item  [53] = [ "Coins", 1, 82, "" ];  //  (1935)
item  [54] = [ "Coins", 1, 37, "" ];  //  (1972)
item  [55] = [ "Coins", 1, 82, "" ];  //  (2054)
item  [56] = [ "Coins", 1, 82, "" ];  //  (2136)
item  [57] = [ "Coins", 1, 15, "" ];  //  (2151)
item  [58] = [ "Black Square Shield", 1, 1, "" ];
item  [59] = [ "Coins", 1, 82, "" ];  //  (2233)
item  [60] = [ "Earth-rune", 1, 18, "Rune" ];  //  (72)
item  [61] = [ "Nothing", 1, 0, "" ];
item  [62] = [ "Coins", 1, 15, "" ];  //  (2248)
item  [63] = [ "Medium Steel Helmet", 1, 1, "" ];
item  [64] = [ "Coins", 1, 37, "" ];  //  (2285)
item  [65] = [ "Black Square Shield", 1, 1, "" ];
item  [66] = [ "Coins", 1, 82, "" ];  //  (2367)
item  [67] = [ "Coins", 1, 37, "" ];  //  (2404)
item  [68] = [ "Coins", 1, 82, "" ];  //  (2486)
item  [69] = [ "Coins", 1, 82, "" ];  //  (2568)
item  [70] = [ "Law-rune", 1, 2, "Rune" ];  //  (8)
item  [71] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (6)
item  [72] = [ "Law-rune", 1, 2, "Rune" ];  //  (10)
item  [73] = [ "Coins", 1, 37, "" ];  //  (2605)
item  [74] = [ "Coins", 1, 82, "" ];  //  (2687)
item  [75] = [ "Coins", 1, 82, "" ];  //  (2769)
item  [76] = [ "Coins", 1, 82, "" ];  //  (2851)
item  [77] = [ "Coins", 1, 82, "" ];  //  (2933)
item  [78] = [ "Air-rune", 1, 12, "Rune" ];  //  (24)
item  [79] = [ "Black Square Shield", 1, 1, "" ];
item  [80] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (15)
item  [81] = [ "Coins", 1, 82, "" ];  //  (3015)
item  [82] = [ "Black Square Shield", 1, 1, "" ];
item  [83] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item  [84] = [ "Coins", 1, 37, "" ];  //  (3052)
item  [85] = [ "Coins", 1, 119, "" ];  //  (3171)
item  [86] = [ "Coins", 1, 82, "" ];  //  (3253)
item  [87] = [ "Steel Kite Shield", 1, 1, "" ];
item  [88] = [ "Coins", 1, 82, "" ];  //  (3335)
item  [89] = [ "Coins", 1, 37, "" ];  //  (3372)
item  [90] = [ "Law-rune", 1, 2, "Rune" ];  //  (12)
item  [91] = [ "steel bar", 1, 1, "" ];

runs [0] = [ 91, 92 ];  // kills 92, drops 92

// run 2

item  [92] = [ "Coins", 1, 37, "" ];  //  (37)
item  [93] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (5)
item  [94] = [ "Coins", 1, 82, "" ];  //  (119)
item  [95] = [ "Mithril Short Sword", 1, 1, "" ];
item  [96] = [ "Coins", 1, 82, "" ];  //  (201)
item  [97] = [ "Medium Steel Helmet", 1, 1, "" ];
item  [98] = [ "Coins", 1, 82, "" ];  //  (283)
item  [99] = [ "steel bar", 1, 1, "" ];
item [100] = [ "Coins", 1, 37, "" ];  //  (320)
item [101] = [ "Coins", 1, 15, "" ];  //  (335)
item [102] = [ "Coins", 1, 37, "" ];  //  (372)
item [103] = [ "Steel Kite Shield", 1, 1, "" ];
item [104] = [ "Coins", 1, 82, "" ];  //  (454)
item [105] = [ "uncut sapphire", 1, 1, "Gem" ];
item [106] = [ "Mithril Short Sword", 1, 1, "" ];
item [107] = [ "Coins", 1, 119, "" ];  //  (573)
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item [110] = [ "Coins", 1, 119, "" ];  //  (692)
item [111] = [ "Coins", 1, 37, "" ];  //  (729)
item [112] = [ "Coins", 1, 119, "" ];  //  (848)
item [113] = [ "Coins", 1, 300, "" ];  //  (1148)
item [114] = [ "Coins", 1, 5, "" ];  //  (1153)
item [115] = [ "Coins", 1, 37, "" ];  //  (1190)
item [116] = [ "Coins", 1, 37, "" ];  //  (1227)
item [117] = [ "Coins", 1, 82, "" ];  //  (1309)
item [118] = [ "Coins", 1, 15, "" ];  //  (1324)
item [119] = [ "Coins", 1, 82, "" ];  //  (1406)
item [120] = [ "Dwarf Weed", 1, 1, "Herb" ];  //
item [121] = [ "Brass necklace", 1, 1, "" ];
item [122] = [ "Coins", 1, 37, "" ];  //  (1443)
item [123] = [ "Coins", 1, 15, "" ];  //  (1458)
item [124] = [ "Coins", 1, 82, "" ];  //  (1540)
item [125] = [ "Coins", 1, 82, "" ];  //  (1622)
item [126] = [ "Coins", 1, 15, "" ];  //  (1637)
item [127] = [ "Mithril Short Sword", 1, 1, "" ];
item [128] = [ "Coins", 1, 37, "" ];  //  (1674)
item [129] = [ "Coins", 1, 82, "" ];  //  (1756)
item [130] = [ "spinach roll", 1, 1, "" ];
item [131] = [ "Coins", 1, 119, "" ];  //  (1875)
item [132] = [ "Coins", 1, 119, "" ];  //  (1994)
item [133] = [ "Coins", 1, 37, "" ];  //  (2031)
item [134] = [ "Coins", 1, 119, "" ];  //  (2150)
item [135] = [ "Coins", 1, 119, "" ];  //  (2269)
item [136] = [ "Magic Staff", 1, 1, "" ];
item [137] = [ "Coins", 1, 37, "" ];  //  (2306)
item [138] = [ "steel bar", 1, 1, "" ];
item [139] = [ "Air-rune", 1, 12, "Rune" ];  //  (12)
item [140] = [ "Magic Staff", 1, 1, "" ];
item [141] = [ "Coins", 1, 119, "" ];  //  (2425)
item [142] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (10)
item [143] = [ "Coins", 1, 37, "" ];  //  (2462)
item [144] = [ "Coins", 1, 82, "" ];  //  (2544)
item [145] = [ "Coins", 1, 82, "" ];  //  (2626)
item [146] = [ "Irit Leaf", 1, 1, "Herb" ];
item [147] = [ "steel bar", 1, 1, "" ];
item [148] = [ "Coins", 1, 5, "" ];  //  (2631)
item [149] = [ "Mithril Short Sword", 1, 1, "" ];
item [150] = [ "Coins", 1, 82, "" ];  //  (2713)
item [151] = [ "Coins", 1, 119, "" ];  //  (2832)
item [152] = [ "Coins", 1, 82, "" ];  //  (2914)
item [153] = [ "Earth-rune", 1, 18, "Rune" ];  //  (18)
item [154] = [ "Coins", 1, 15, "" ];  //  (2929)
item [155] = [ "steel bar", 1, 1, "" ];
item [156] = [ "Coins", 1, 82, "" ];  //  (3011)
item [157] = [ "Black Square Shield", 1, 1, "" ];
item [158] = [ "Coins", 1, 82, "" ];  //  (3093)
item [159] = [ "Marrentill", 1, 1, "Herb" ];
item [160] = [ "steel bar", 1, 1, "" ];
item [161] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)

runs [1] = [ 161, 162 ];  // kills 70, drops 70

// run 3

item [162] = [ "steel bar", 1, 1, "" ];
item [163] = [ "Coins", 1, 119, "" ];  //  (119)
item [164] = [ "Mithril Short Sword", 1, 1, "" ];
item [165] = [ "Brass necklace", 1, 1, "" ];
item [166] = [ "Coins", 1, 15, "" ];  //  (134)
item [167] = [ "Coins", 1, 15, "" ];  //  (149)
item [168] = [ "Magic Staff", 1, 1, "" ];
item [169] = [ "Coins", 1, 82, "" ];  //  (231)
item [170] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item [171] = [ "Black Square Shield", 1, 1, "" ];
item [172] = [ "Black Square Shield", 1, 1, "" ];
item [173] = [ "Coins", 1, 119, "" ];  //  (350)
item [174] = [ "Medium Steel Helmet", 1, 1, "" ];
item [175] = [ "Coins", 1, 82, "" ];  //  (432)
item [176] = [ "Coins", 1, 15, "" ];  //  (447)
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Coins", 1, 82, "" ];  //  (529)
item [179] = [ "Guam Leaf", 1, 1, "Herb" ];
item [180] = [ "Coins", 1, 37, "" ];  //  (566)
item [181] = [ "Coins", 1, 15, "" ];  //  (581)
item [182] = [ "Nothing", 1, 0, "" ];
item [183] = [ "Coins", 1, 82, "" ];  //  (663)
item [184] = [ "steel bar", 1, 1, "" ];
item [185] = [ "Coins", 1, 119, "" ];  //  (782)
item [186] = [ "Coins", 1, 119, "" ];  //  (901)
item [187] = [ "Coins", 1, 300, "" ];  //  (1201)
item [188] = [ "Magic Staff", 1, 1, "" ];
item [189] = [ "Coins", 1, 82, "" ];  //  (1283)
item [190] = [ "Cadantine", 1, 1, "Herb" ];
item [191] = [ "Coins", 1, 15, "" ];  //  (1298)
item [192] = [ "Coins", 1, 300, "" ];  //  (1598)
item [193] = [ "Coins", 1, 82, "" ];  //  (1680)
item [194] = [ "Tarromin", 1, 1, "Herb" ];
item [195] = [ "Coins", 1, 82, "" ];  //  (1762)
item [196] = [ "Coins", 1, 82, "" ];  //  (1844)
item [197] = [ "Coins", 1, 82, "" ];  //  (1926)
item [198] = [ "Coins", 1, 82, "" ];  //  (2008)
item [199] = [ "Coins", 1, 300, "" ];  //  (2308)
item [200] = [ "Coins", 1, 82, "" ];  //  (2390)
item [201] = [ "Coins", 1, 37, "" ];  //  (2427)
item [202] = [ "Coins", 1, 37, "" ];  //  (2464)
item [203] = [ "Coins", 1, 82, "" ];  //  (2546)
item [204] = [ "Coins", 1, 37, "" ];  //  (2583)
item [205] = [ "Coins", 1, 37, "" ];  //  (2620)
item [206] = [ "Coins", 1, 82, "" ];  //  (2702)
item [207] = [ "Coins", 1, 82, "" ];  //  (2784)
item [208] = [ "Mithril Short Sword", 1, 1, "" ];
item [209] = [ "Nothing", 1, 0, "" ];
item [210] = [ "Black Square Shield", 1, 1, "" ];
item [211] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [212] = [ "Coins", 1, 82, "" ];  //  (2866)
item [213] = [ "Coins", 1, 15, "" ];  //  (2881)
item [214] = [ "Coins", 1, 82, "" ];  //  (2963)
item [215] = [ "Coins", 1, 119, "" ];  //  (3082)
item [216] = [ "Earth-rune", 1, 18, "Rune" ];  //  (18)
item [217] = [ "Irit Leaf", 1, 1, "Herb" ];
item [218] = [ "Coins", 1, 82, "" ];  //  (3164)
item [219] = [ "Coins", 1, 15, "" ];  //  (3179)
item [220] = [ "Coins", 1, 300, "" ];  //  (3479)
item [221] = [ "Coins", 1, 37, "" ];  //  (3516)
item [222] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [223] = [ "Earth-rune", 1, 18, "Rune" ];  //  (36)
item [224] = [ "Coins", 1, 82, "" ];  //  (3598)
item [225] = [ "Coins", 1, 82, "" ];  //  (3680)
item [226] = [ "Coins", 1, 119, "" ];  //  (3799)
item [227] = [ "Coins", 1, 82, "" ];  //  (3881)
item [228] = [ "Black Square Shield", 1, 1, "" ];
item [229] = [ "Nature-rune", 1, 4, "Rune" ];  //  (8)
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "Coins", 1, 82, "" ];  //  (3963)
item [232] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [233] = [ "Nature-rune", 1, 4, "Rune" ];  //  (12)
item [234] = [ "Coins", 1, 37, "" ];  //  (4000)
item [235] = [ "Marrentill", 1, 1, "Herb" ];
item [236] = [ "Irit Leaf", 1, 1, "Herb" ];
item [237] = [ "Coins", 1, 37, "" ];  //  (4037)
item [238] = [ "Coins", 1, 119, "" ];  //  (4156)
item [239] = [ "Coins", 1, 37, "" ];  //  (4193)
item [240] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (2)
item [241] = [ "Coins", 1, 82, "" ];  //  (4275)
item [242] = [ "Steel Kite Shield", 1, 1, "" ];
item [243] = [ "Coins", 1, 37, "" ];  //  (4312)
item [244] = [ "Black Square Shield", 1, 1, "" ];
item [245] = [ "Coins", 1, 119, "" ];  //  (4431)
item [246] = [ "Coins", 1, 82, "" ];  //  (4513)
item [247] = [ "Black Square Shield", 1, 1, "" ];

runs [2] = [ 247, 248 ];  // kills 86, drops 86

// run 4

item [248] = [ "steel bar", 1, 1, "" ];
item [249] = [ "Coins", 1, 15, "" ];  //  (15)
item [250] = [ "Coins", 1, 37, "" ];  //  (52)
item [251] = [ "Black Square Shield", 1, 1, "" ];
item [252] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (2)
item [253] = [ "Coins", 1, 82, "" ];  //  (134)
item [254] = [ "spinach roll", 1, 1, "" ];
item [255] = [ "Coins", 1, 37, "" ];  //  (171)
item [256] = [ "Coins", 1, 82, "" ];  //  (253)
item [257] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (4)
item [258] = [ "Coins", 1, 82, "" ];  //  (335)
item [259] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (6)
item [260] = [ "Coins", 1, 15, "" ];  //  (350)
item [261] = [ "Coins", 1, 82, "" ];  //  (432)
item [262] = [ "Tarromin", 1, 1, "Herb" ];
item [263] = [ "Air-rune", 1, 12, "Rune" ];  //  (12)
item [264] = [ "Coins", 1, 82, "" ];  //  (514)
item [265] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (5)
item [266] = [ "Coins", 1, 82, "" ];  //  (596)
item [267] = [ "steel bar", 1, 1, "" ];
item [268] = [ "Coins", 1, 15, "" ];  //  (611)
item [269] = [ "Coins", 1, 82, "" ];  //  (693)
item [270] = [ "Coins", 1, 37, "" ];  //  (730)
item [271] = [ "Coins", 1, 15, "" ];  //  (745)
item [272] = [ "Black Square Shield", 1, 1, "" ];
item [273] = [ "Medium Steel Helmet", 1, 1, "" ];
item [274] = [ "Coins", 1, 5, "" ];  //  (750)
item [275] = [ "Coins", 1, 15, "" ];  //  (765)
item [276] = [ "steel bar", 1, 1, "" ];
item [277] = [ "Coins", 1, 15, "" ];  //  (780)
item [278] = [ "Coins", 1, 15, "" ];  //  (795)
item [279] = [ "Coins", 1, 37, "" ];  //  (832)
item [280] = [ "uncut ruby", 1, 1, "Gem" ];
item [281] = [ "Coins", 1, 82, "" ];  //  (914)
item [282] = [ "steel bar", 1, 1, "" ];
item [283] = [ "Mithril Short Sword", 1, 1, "" ];
item [284] = [ "Coins", 1, 82, "" ];  //  (996)
item [285] = [ "coal", 1, 1, "" ];
item [286] = [ "Coins", 1, 37, "" ];  //  (1033)
item [287] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [288] = [ "Coins", 1, 82, "" ];  //  (1115)
item [289] = [ "Coins", 1, 82, "" ];  //  (1197)
item [290] = [ "Coins", 1, 37, "" ];  //  (1234)
item [291] = [ "Coins", 1, 82, "" ];  //  (1316)
item [292] = [ "Coins", 1, 15, "" ];  //  (1331)
item [293] = [ "Coins", 1, 82, "" ];  //  (1413)
item [294] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (8)
item [295] = [ "Earth-rune", 1, 18, "Rune" ];  //  (18)
item [296] = [ "Coins", 1, 119, "" ];  //  (1532)
item [297] = [ "Coins", 1, 15, "" ];  //  (1547)
item [298] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (10)
item [299] = [ "Coins", 1, 119, "" ];  //  (1666)
item [300] = [ "Coins", 1, 15, "" ];  //  (1681)
item [301] = [ "Coins", 1, 37, "" ];  //  (1718)
item [302] = [ "Coins", 1, 82, "" ];  //  (1800)
item [303] = [ "Coins", 1, 37, "" ];  //  (1837)
item [304] = [ "Coins", 1, 37, "" ];  //  (1874)
item [305] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [306] = [ "Black Square Shield", 1, 1, "" ];
item [307] = [ "Black Square Shield", 1, 1, "" ];
item [308] = [ "Coins", 1, 82, "" ];  //  (1956)
item [309] = [ "Earth-rune", 1, 18, "Rune" ];  //  (36)
item [310] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item [311] = [ "Air-rune", 1, 12, "Rune" ];  //  (24)
item [312] = [ "Coins", 1, 37, "" ];  //  (1993)
item [313] = [ "Coins", 1, 82, "" ];  //  (2075)
item [314] = [ "Air-rune", 1, 12, "Rune" ];  //  (36)
item [315] = [ "Coins", 1, 37, "" ];  //  (2112)
item [316] = [ "Nature-rune", 1, 4, "Rune" ];  //  (8)
item [317] = [ "Coins", 1, 82, "" ];  //  (2194)
item [318] = [ "Coins", 1, 82, "" ];  //  (2276)
item [319] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [320] = [ "Coins", 1, 37, "" ];  //  (2313)
item [321] = [ "Coins", 1, 37, "" ];  //  (2350)
item [322] = [ "Coins", 1, 37, "" ];  //  (2387)
item [323] = [ "Chaos-rune", 1, 5, "Rune" ];  //  (15)
item [324] = [ "Coins", 1, 82, "" ];  //  (2469)
item [325] = [ "Coins", 1, 15, "" ];  //  (2484)
item [326] = [ "Coins", 1, 300, "" ];  //  (2784)
item [327] = [ "Coins", 1, 15, "" ];  //  (2799)
item [328] = [ "Coins", 1, 82, "" ];  //  (2881)
item [329] = [ "Coins", 1, 82, "" ];  //  (2963)
item [330] = [ "Earth-rune", 1, 18, "Rune" ];  //  (54)
item [331] = [ "Air-rune", 1, 12, "Rune" ];  //  (48)
item [332] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [333] = [ "spinach roll", 1, 1, "" ];
item [334] = [ "Coins", 1, 119, "" ];  //  (3082)
item [335] = [ "Black Square Shield", 1, 1, "" ];
item [336] = [ "Death-rune", 1, 2, "Rune" ];  //  (4)
item [337] = [ "Coins", 1, 37, "" ];  //  (3119)
item [338] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (10)
item [339] = [ "Coins", 1, 15, "" ];  //  (3134)
item [340] = [ "Coins", 1, 15, "" ];  //  (3149)
item [341] = [ "Black Square Shield", 1, 1, "" ];

runs [3] = [ 341, 342 ];  // kills 94, drops 94

// runs [4] = [ x, y ];  // kills ? ( y - 342 ), drops ? ( x - 341 )

/*
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 19, "" ];  //  ()
item [000] = [ "Coins", 1, 37, "" ];  //  ()
item [000] = [ "Coins", 1, 82, "" ];  //  ()
item [000] = [ "Coins", 1, 119, "" ];  //  ()
item [000] = [ "Coins", 1, 300, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 18, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 5, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Brass necklace", 1, 1, "" ];
item [000] = [ "spinach roll", 1, 1, "" ];
item [000] = [ "Pineapple", 1, 1, "" ];

item [000] = [ "Magic Staff", 1, 1, "" ];
item [000] = [ "Staff of fire", 1, 1, "" ];

item [000] = [ "coal", 1, 1, "" ];
item [000] = [ "steel bar", 1, 1, "" ];

item [000] = [ "Bronze 2-handed Sword", 1, 1, "" ];
item [000] = [ "Iron Long Sword", 1, 1, "" ];
item [000] = [ "Steel Short Sword", 1, 1, "" ];
item [000] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [000] = [ "Mithril Short Sword", 1, 1, "" ];

item [000] = [ "Large Iron Helmet", 1, 1, "" ];
item [000] = [ "Medium Steel Helmet", 1, 1, "" ];
item [000] = [ "Steel Square Shield", 1, 1, "" ];
item [000] = [ "Steel Kite Shield", 1, 1, "" ];
item [000] = [ "Black Square Shield", 1, 1, "" ];
item [000] = [ "Mithril Square Shield", 1, 1, "" ];
item [000] = [ "Dragon Square Shield Left Half", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Moss Giant";        // monster's name
var mcbl = 62;                   // monster's combat level
var mindex = 134;                // index into monster data base
var mrpt = 1;                    // number of non-breaking space to add after index name