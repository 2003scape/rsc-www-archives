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

item   [0] = [ "Law-rune", 1, 2, "Rune" ];  //  kill 1  (2)
item   [1] = [ "Coins", 1, 35, "" ];  //  (35)
item   [2] = [ "Coins", 1, 11, "" ];  //  (46)
item   [3] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item   [4] = [ "Coins", 1, 30, "" ];  //  (76)
item   [5] = [ "Coins", 1, 58, "" ];  //  (134)
item   [6] = [ "Coins", 1, 35, "" ];  //  (169)
item   [7] = [ "Coins", 1, 58, "" ];  //  (227)
item   [8] = [ "Coins", 1, 6, "" ];  //  (233)
item   [9] = [ "Coins", 1, 35, "" ];  //  10  (268)
item  [10] = [ "Coins", 1, 35, "" ];  //  (303)
item  [11] = [ "Coins", 1, 12, "" ];  //  (315)
item  [12] = [ "Tarromin", 1, 1, "Herb" ];
item  [13] = [ "Coins", 1, 35, "" ];  //  (350)
item  [14] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item  [15] = [ "Coins", 1, 35, "" ];  //  (385)
item  [16] = [ "Earth-rune", 1, 7, "Rune" ];  //  (7)
item  [17] = [ "Coins", 1, 1, "" ];  //  (386)
item  [18] = [ "Coins", 1, 6, "" ];  //  (392)
item  [19] = [ "Earth-rune", 1, 7, "Rune" ];  //  20  (14)
item  [20] = [ "Coins", 1, 35, "" ];  //  (427)
item  [21] = [ "Coins", 1, 35, "" ];  //  (462)
item  [22] = [ "Coins", 1, 1, "" ];  //  (463)
item  [23] = [ "Coins", 1, 35, "" ];  //  (498)
item  [24] = [ "Coins", 1, 1, "" ];  //  (499)
item  [25] = [ "Coins", 1, 35, "" ];  //  (534)
item  [26] = [ "Coins", 1, 1, "" ];  //  (535)
item  [27] = [ "Coins", 1, 35, "" ];  //  (570)
item  [28] = [ "Coins", 1, 35, "" ];  //  (605)
item  [29] = [ "Law-rune", 1, 2, "Rune" ];  //  30  (6)
item  [30] = [ "Cadantine", 1, 1, "Herb" ];
item  [31] = [ "Coins", 1, 1, "" ];  //  (606)
item  [32] = [ "Coins", 1, 35, "" ];  //  (641)
item  [33] = [ "Body-rune", 1, 6, "Rune" ];  //  (6)
item  [34] = [ "Tarromin", 1, 1, "Herb" ];
item  [35] = [ "Nothing", 1, 0, "" ];
item  [36] = [ "Coins", 1, 80, "" ];  //  (721)
item  [37] = [ "Coins", 1, 58, "" ];  //  (779)
item  [38] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [39] = [ "Iron Short Sword", 1, 1, "" ];  //  40
item  [40] = [ "Coins", 1, 1, "" ];  //  (780)
item  [41] = [ "Coins", 1, 35, "" ];  //  (815)
item  [42] = [ "Coins", 1, 12, "" ];  //  (827)
item  [43] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [44] = [ "Coins", 1, 12, "" ];  //  (839)
item  [45] = [ "Coins", 1, 35, "" ];  //  (874)
item  [46] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item  [47] = [ "Coins", 1, 1, "" ];  //  (875)
item  [48] = [ "Coins", 1, 6, "" ];  //  (881)
item  [49] = [ "Shortbow", 1, 1, "" ];  //  50
item  [50] = [ "tin ore", 1, 1, "" ];
item  [51] = [ "Coins", 1, 35, "" ];  //  (916)
item  [52] = [ "Coins", 1, 1, "" ];  //  (917)
item  [53] = [ "Coins", 1, 1, "" ];  //  (918)
item  [54] = [ "Coins", 1, 12, "" ];  //  (930)
item  [55] = [ "Coins", 1, 12, "" ];  //  (942)
item  [56] = [ "Coins", 1, 6, "" ];  //  (948)
item  [57] = [ "Coins", 1, 12, "" ];  //  (960)
item  [58] = [ "Coins", 1, 12, "" ];  //  (972)
item  [59] = [ "Coins", 1, 12, "" ];  //  60  (984)
item  [60] = [ "steel bar", 1, 1, "" ];
item  [61] = [ "Coins", 1, 12, "" ];  //  (996)
item  [62] = [ "Coins", 1, 1, "" ];  //  (997)
item  [63] = [ "Coins", 1, 12, "" ];  //  (1009)
item  [64] = [ "Earth-rune", 1, 7, "Rune" ];  //  (21)
item  [65] = [ "Coins", 1, 35, "" ];  //  (1044)
item  [66] = [ "Coins", 1, 58, "" ];  //  (1102)
item  [67] = [ "Coins", 1, 1, "" ];  //  (1103)
item  [68] = [ "Earth-rune", 1, 7, "Rune" ];  //  (28)
item  [69] = [ "Law-rune", 1, 2, "Rune" ];  //  70  (8)
item  [70] = [ "Coins", 1, 35, "" ];  //  (1138)
item  [71] = [ "Coins", 1, 35, "" ];  //  (1173)
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Coins", 1, 12, "" ];  //  (1185)
item  [74] = [ "Nothing", 1, 0, "" ];
item  [75] = [ "Coins", 1, 12, "" ];  //  (1197)
item  [76] = [ "Coins", 1, 58, "" ];  //  (1255)
item  [77] = [ "Coins", 1, 35, "" ];  //  (1290)
item  [78] = [ "Iron Short Sword", 1, 1, "" ];
item  [79] = [ "Law-rune", 1, 2, "Rune" ];  //  80  (10)
item  [80] = [ "Coins", 1, 35, "" ];  //  (1325)
item  [81] = [ "Coins", 1, 35, "" ];  //  (1360)
item  [82] = [ "Coins", 1, 6, "" ];  //  (1366)
item  [83] = [ "Coins", 1, 35, "" ];  //  (1401)
item  [84] = [ "Law-rune", 1, 2, "Rune" ];  //  (12)
item  [85] = [ "Coins", 1, 80, "" ];  //  (1481)
item  [86] = [ "Coins", 1, 12, "" ];  //  (1493)
item  [87] = [ "Law-rune", 1, 2, "Rune" ];  //  (14)
item  [88] = [ "Shortbow", 1, 1, "" ];
item  [89] = [ "Coins", 1, 58, "" ];  //  90  (1551)
item  [90] = [ "Coins", 1, 12, "" ];  //  (1563)
item  [91] = [ "Coins", 1, 35, "" ];  //  (1598)
item  [92] = [ "Coins", 1, 12, "" ];  //  (1610)
item  [93] = [ "Large Iron Helmet", 1, 1, "" ];
item  [94] = [ "Coins", 1, 35, "" ];  //  (1645)
item  [95] = [ "Flour", 1, 1, "" ];
item  [96] = [ "Coins", 1, 35, "" ];  //  (1680)
item  [97] = [ "Coins", 1, 12, "" ];  //  (1692)
item  [98] = [ "Earth-rune", 1, 7, "Rune" ];  //  (35)
item  [99] = [ "Coins", 1, 12, "" ];  //  100  (1704)
item [100] = [ "Coins", 1, 35, "" ];  //  (1739)
item [101] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item [102] = [ "Coins", 1, 6, "" ];  //  (1745)
item [103] = [ "Coins", 1, 12, "" ];  //  (1757)
item [104] = [ "Coins", 1, 35, "" ];  //  (1792)
item [105] = [ "Coins", 1, 35, "" ];  //  (1827)
item [106] = [ "Coins", 1, 35, "" ];  //  (1862)
item [107] = [ "Coins", 1, 35, "" ];  //  (1897)
item [108] = [ "Harralander", 1, 1, "Herb" ];
item [109] = [ "Mind-rune", 1, 1, "Rune" ];  //  110  (1)
item [110] = [ "Coins", 1, 35, "" ];  //  (1932)
item [111] = [ "Coins", 1, 6, "" ];  //  (1938)
item [112] = [ "bread", 1, 1, "" ];
item [113] = [ "Coins", 1, 35, "" ];  //  (1973)
item [114] = [ "Coins", 1, 35, "" ];  //  (2008)
item [115] = [ "Flour", 1, 1, "" ];
item [116] = [ "Earth-rune", 1, 7, "Rune" ];  //  (42)
item [117] = [ "Coins", 1, 12, "" ];  //  (2020)
item [118] = [ "uncut sapphire", 1, 1, "Gem" ];
item [119] = [ "Coins", 1, 35, "" ];  //  120  (2055)
item [120] = [ "Coins", 1, 35, "" ];  //  (2090)
item [121] = [ "Shortbow", 1, 1, "" ];
item [122] = [ "Coins", 1, 35, "" ];  //  (2125)
item [123] = [ "Iron Short Sword", 1, 1, "" ];
item [124] = [ "Coins", 1, 35, "" ];  //  (2160)
item [125] = [ "Coins", 1, 35, "" ];  //  (2195)
item [126] = [ "Coins", 1, 58, "" ];  //  (2253)
item [127] = [ "Body-rune", 1, 6, "Rune" ];  //  (12)
item [128] = [ "Coins", 1, 58, "" ];  //  (2311)
item [129] = [ "Coins", 1, 80, "" ];  //  130  (2391)
item [130] = [ "Coins", 1, 35, "" ];  //  (2426)
item [131] = [ "Coins", 1, 1, "" ];  //  (2427)
item [132] = [ "Steel Mace", 2, 1, "" ];  //  DOUBLE DROP
item [133] = [ "Large Iron Helmet", 1, 1, "" ];
item [134] = [ "steel bar", 1, 1, "" ];
item [135] = [ "Law-rune", 1, 2, "Rune" ];  //  (16)
item [136] = [ "Coins", 1, 12, "" ];  //  (2439)
item [137] = [ "Coins", 1, 12, "" ];  //  (2451)
item [138] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item [139] = [ "Coins", 1, 6, "" ];  //  (2457)
item [140] = [ "bread", 1, 1, "" ];  //  140
item [141] = [ "Guam Leaf", 1, 1, "Herb" ];
item [142] = [ "Guam Leaf", 1, 1, "Herb" ];
item [143] = [ "Coins", 1, 35, "" ];  //  (2492)
item [144] = [ "Coins", 1, 35, "" ];  //  (2527)
item [145] = [ "Coins", 1, 58, "" ];  //  (2585)
item [146] = [ "Coins", 1, 35, "" ];  //  (2620)
item [147] = [ "Coins", 1, 58, "" ];  //  (2678)
item [148] = [ "Coins", 1, 35, "" ];  //  (2713)
item [149] = [ "Coins", 1, 35, "" ];  //  (2748)
item [150] = [ "Coins", 1, 35, "" ];  //  150  (2783)
item [151] = [ "uncut emerald", 1, 1, "Gem" ];
item [152] = [ "Coins", 1, 58, "" ];  //  (2841)

// runs [*] = [ x, y ];  // kills = ( y - last drop of last run ), drops = ( x - last index of last run )

runs [0] = [ 152, 152 ];  // kills 152, drops 153

// runs [0] = [ x, y ];  // kills ? ( y - 0 ), drops ? ( x - ( -1 ) )

// run 2

item [153] = [ "Coins", 1, 12, "" ];  //  153  (12)
item [154] = [ "Body-rune", 1, 6, "Rune" ];  //  (6)
item [155] = [ "Flour", 1, 1, "" ];
item [156] = [ "Nothing", 1, 0, "" ];
item [157] = [ "Coins", 1, 12, "" ];  //  (24)
item [158] = [ "Coins", 1, 1, "" ];  //  (25)
item [159] = [ "Coins", 1, 35, "" ];  //  (60)
item [160] = [ "Coins", 1, 35, "" ];  //  160  (95)
item [161] = [ "Coins", 1, 1, "" ];  //  (96)
item [162] = [ "Coins", 1, 58, "" ];  //  (154)
item [163] = [ "Coins", 1, 35, "" ];  //  (189)
item [164] = [ "Coins", 1, 58, "" ];  //  (247)
item [165] = [ "Coins", 1, 1, "" ];  //  (248)
item [166] = [ "Coins", 1, 35, "" ];  //  (283)
item [167] = [ "Coins", 1, 12, "" ];  //  (295)
item [168] = [ "Coins", 1, 58, "" ];  //  (353)
item [169] = [ "Earth-rune", 1, 7, "Rune" ];  //  (7)
item [170] = [ "Coins", 1, 35, "" ];  //  170  (388)
item [171] = [ "Coins", 1, 35, "" ];  //  (423)
item [172] = [ "Coins", 1, 35, "" ];  //  (458)
item [173] = [ "Coins", 1, 12, "" ];  //  (470)
item [174] = [ "steel bar", 1, 1, "" ];
item [175] = [ "Coins", 1, 35, "" ];  //  (505)
item [176] = [ "Coins", 1, 80, "" ];  //  (585)
item [177] = [ "Coins", 1, 35, "" ];  //  (620)
item [178] = [ "Coins", 1, 35, "" ];  //  (655)
item [179] = [ "uncut sapphire", 1, 1, "Gem" ];
item [180] = [ "Coins", 1, 35, "" ];  //  180  (690)
item [181] = [ "Coins", 1, 35, "" ];  //  (725)
item [182] = [ "Coins", 1, 12, "" ];  //  (737)
item [183] = [ "Coins", 1, 58, "" ];  //  (795)
item [184] = [ "Coins", 1, 12, "" ];  //  (807)
item [185] = [ "steel bar", 1, 1, "" ];
item [186] = [ "Earth-rune", 1, 7, "Rune" ];  //  (14)
item [187] = [ "Coins", 1, 58, "" ];  //  (865)
item [188] = [ "Coins", 1, 12, "" ];  //  (877)
item [189] = [ "Coins", 1, 58, "" ];  //  (935)
item [190] = [ "Coins", 1, 35, "" ];  //  190 (970)
item [191] = [ "steel bar", 1, 1, "" ];
item [192] = [ "Coins", 1, 35, "" ];  //  (1005)
item [193] = [ "Body-rune", 1, 6, "Rune" ];  //  (12)
item [194] = [ "Coins", 1, 35, "" ];  //  (1040)
item [195] = [ "Coins", 1, 6, "" ];  //  (1046)
item [196] = [ "Coins", 1, 6, "" ];  //  (1052)
item [197] = [ "Coins", 1, 12, "" ];  //  (1064)
item [198] = [ "Coins", 1, 35, "" ];  //  (1099)
item [199] = [ "Coins", 1, 35, "" ];  //  (1134)
item [200] = [ "Coins", 1, 6, "" ];  //  200  (1140)
item [201] = [ "Coins", 1, 35, "" ];  //  (1175)
item [202] = [ "Earth-rune", 1, 7, "Rune" ];  //  (21)
item [203] = [ "Coins", 1, 35, "" ];  //  (1210)
item [204] = [ "Coins", 1, 35, "" ];  //  (1245)
item [205] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item [206] = [ "Coins", 1, 1, "" ];  //  (1246)
item [207] = [ "Nothing", 1, 0, "" ];
item [208] = [ "Coins", 1, 1, "" ];  //  (1247)
item [209] = [ "Coins", 1, 1, "" ];  //  (1248)
item [210] = [ "Coins", 1, 58, "" ];  //  210  (1306)
item [211] = [ "Earth-rune", 1, 7, "Rune" ];  //  (28)
item [212] = [ "Coins", 1, 58, "" ];  //  (1364)
item [213] = [ "steel bar", 1, 1, "" ];
item [214] = [ "Coins", 1, 6, "" ];  //  (1370)
item [215] = [ "Iron Short Sword", 1, 1, "" ];
item [216] = [ "Earth-rune", 1, 7, "Rune" ];  //  (35)
item [217] = [ "Coins", 1, 1, "" ];  //  (1371)
item [218] = [ "Earth-rune", 1, 7, "Rune" ];  //  (42)
item [219] = [ "Coins", 1, 58, "" ];  //  (1429)
item [220] = [ "Coins", 1, 6, "" ];  //  220  (1435)
item [221] = [ "Coins", 1, 58, "" ];  //  (1493)
item [222] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (8)
item [223] = [ "Coins", 1, 58, "" ];  //  (1551)
item [224] = [ "Coins", 1, 35, "" ];  //  (1586)
item [225] = [ "Coins", 1, 35, "" ];  //  (1621)
item [226] = [ "Coins", 1, 1, "" ];  //  (1622)
item [227] = [ "Coins", 1, 35, "" ];  //  (1657)
item [228] = [ "Coins", 1, 58, "" ];  //  (1715)
item [229] = [ "Nothing", 1, 0, "" ];
item [230] = [ "tin ore", 1, 1, "" ];  //  230
item [231] = [ "Large Iron Helmet", 1, 1, "" ];
item [232] = [ "steel bar", 1, 1, "" ];
item [233] = [ "Earth-rune", 1, 7, "Rune" ];  //  (49)
item [234] = [ "Coins", 1, 35, "" ];  //  (1750)
item [235] = [ "Coins", 1, 12, "" ];  //  (1762)
item [236] = [ "Coins", 1, 6, "" ];  //  (1768)
item [237] = [ "Coins", 1, 1, "" ];  //  (1769)
item [238] = [ "Coins", 1, 35, "" ];  //  (1804)
item [239] = [ "Coins", 1, 6, "" ];  //  (1810)
item [240] = [ "Earth-rune", 1, 7, "Rune" ];  //  240  (56)
item [241] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (12)
item [242] = [ "Coins", 1, 35, "" ];  //  (1845)
item [243] = [ "Coins", 1, 35, "" ];  //  (1880)
item [244] = [ "steel bar", 1, 1, "" ];
item [245] = [ "Coins", 1, 58, "" ];  //  (1938)
item [246] = [ "Coins", 1, 35, "" ];  //  (1973)
item [247] = [ "Coins", 1, 35, "" ];  //  (2008)
item [248] = [ "Coins", 1, 35, "" ];  //  (2043)
item [249] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [250] = [ "Coins", 1, 12, "" ];  //  250  (2055)
item [251] = [ "Coins", 1, 80, "" ];  //  (2135)
item [252] = [ "Coins", 1, 6, "" ];  //  (2141)
item [253] = [ "Coins", 1, 35, "" ];  //  (2176)
item [254] = [ "Coins", 1, 12, "" ];  //  (2188)
item [255] = [ "Coins", 1, 80, "" ];  //  (2268)
item [256] = [ "Coins", 1, 1, "" ];  //  (2269)
item [257] = [ "Coins", 1, 35, "" ];  //  (2304)
item [258] = [ "Steel Mace", 2, 1, "" ];  //  DOUBLE DROP
item [259] = [ "Large Iron Helmet", 1, 1, "" ];
item [260] = [ "Coins", 1, 35, "" ];  //  (2339)
item [261] = [ "Coins", 1, 1, "" ];  //  260  (2340)
item [262] = [ "Coins", 1, 1, "" ];  //  (2341)
item [263] = [ "Mind-rune", 1, 1, "Rune" ];  //  (1)
item [264] = [ "Coins", 1, 35, "" ];  //  (2376)
item [265] = [ "Coins", 1, 35, "" ];  //  (2411)
item [266] = [ "Coins", 1, 58, "" ];  //  (2469)
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Coins", 1, 12, "" ];  //  (2481)
item [269] = [ "Coins", 1, 35, "" ];  //  (2516)
item [270] = [ "Coins", 1, 35, "" ];  //  (2551)
item [271] = [ "Coins", 1, 12, "" ];  //  270  (2563)
item [272] = [ "Mind-rune", 1, 1, "Rune" ];  //  (2)
item [273] = [ "Coins", 1, 1, "" ];  //  (2564)
item [274] = [ "Flour", 1, 1, "" ];
item [275] = [ "Coins", 1, 58, "" ];  //  (2622)
item [276] = [ "Coins", 1, 1, "" ];  //  (2623)
item [277] = [ "steel bar", 1, 1, "" ];
item [278] = [ "Flour", 1, 1, "" ];
item [279] = [ "Coins", 1, 1, "" ];  //  (2624)
item [280] = [ "Coins", 1, 12, "" ];  //  (2636)
item [281] = [ "Coins", 1, 12, "" ];  //  280  (2648)
item [282] = [ "Coins", 1, 35, "" ];  //  (2683)
item [283] = [ "Coins", 1, 12, "" ];  //  (2695)
item [284] = [ "Coins", 1, 6, "" ];  //  (2701)
item [285] = [ "Nothing", 1, 0, "" ];
item [286] = [ "Coins", 1, 35, "" ];  //  (2736)
item [287] = [ "Iron Short Sword", 1, 1, "" ];
item [288] = [ "Coins", 1, 35, "" ];  //  (2771)
item [289] = [ "Coins", 1, 35, "" ];  //  (2806)
item [290] = [ "Coins", 1, 35, "" ];  //  (2841)
item [291] = [ "Nothing", 1, 0, "" ];  //  290
item [292] = [ "Coins", 1, 1, "" ];  //  (2842)
item [293] = [ "Coins", 1, 1, "" ];  //  (2843)
item [294] = [ "Coins", 1, 12, "" ];  //  (2855)
item [295] = [ "Iron Short Sword", 1, 1, "" ];
item [296] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [297] = [ "Coins", 1, 6, "" ];  //  (2861)
item [298] = [ "Flour", 1, 1, "" ];
item [299] = [ "Coins", 1, 80, "" ];  //  (2941)
item [300] = [ "Mind-rune", 1, 1, "Rune" ];  //  (3)
item [301] = [ "Iron Short Sword", 1, 1, "" ];  // 300

runs [1] = [ 301, 300 ];  // kills 148, drops 149

// runs [2] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 301 )

/*

item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 6, "" ];  //  ()
item [000] = [ "Coins", 1, 11, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 30, "" ];  //  ()
item [000] = [ "Coins", 1, 35, "" ];  //  ()
item [000] = [ "Coins", 1, 58, "" ];  //  ()
item [000] = [ "Coins", 1, 80, "" ];  //  ()

item [000] = [ "Earth-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  // ()
item [000] = [ "Death-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];

item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Steel Mace", 1, 1, "" ];

item [000] = [ "Large Iron Helmet", 1, 1, "" ];

item [000] = [ "Shortbow", 1, 1, "" ];
item [000] = [ "Flour", 1, 1, "" ];
item [000] = [ "bread", 1, 1, "" ];

item [000] = [ "tin ore", 1, 1, "" ];
item [000] = [ "steel bar", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Black Knight";        // monster's name
var mcbl = 46;                     // monster's combat level
var mindex = 112;                  // index into monster data base
var mrpt = 1;                      // number of non-breaking space to add after index name