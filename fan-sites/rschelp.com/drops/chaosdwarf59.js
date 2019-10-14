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

var notes = "Re-spawn time is around 6 minutes at the wilderness level 32-34 location.";

// run 1

item   [0] = [ "Coins", 1, 92, "" ];  //  (92)
item   [1] = [ "Coins", 1, 350, "" ];  //  (442)
item   [2] = [ "Coins", 1, 92, "" ];  //  (534)
item   [3] = [ "Air-rune", 1, 16, "Rune" ];  //  (16)
item   [4] = [ "Coins", 1, 47, "" ];  //  (581)
item   [5] = [ "Coins", 1, 150, "" ];  //  (731)
item   [6] = [ "Coins", 1, 92, "" ];  //  (823)
item   [7] = [ "Muddy key", 1, 1, "" ];
item   [8] = [ "Coins", 1, 92, "" ];  //  (915)
item   [9] = [ "Coins", 1, 92, "" ];  //  (1007)
item  [10] = [ "Mind-rune", 1, 25, "Rune" ];  //  (25)
item  [11] = [ "Coins", 1, 350, "" ];  //  (1357)
item  [12] = [ "Coins", 1, 15, "" ];  //  (1372)
item  [13] = [ "Coins", 1, 47, "" ];  //  (1419)
item  [14] = [ "Coins", 1, 92, "" ];  //  (1511)
item  [15] = [ "Coins", 1, 150, "" ];  //  (1661)
item  [16] = [ "Coins", 1, 92, "" ];  //  (1753)
item  [17] = [ "Air-rune", 1, 16, "Rune" ];  //  (32)
item  [18] = [ "Coins", 1, 92, "" ];  //  (1845)
item  [19] = [ "mithril bar", 1, 1, "" ];
item  [20] = [ "Coins", 1, 25, "" ];  //  (1870)
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Coins", 1, 47, "" ];  //  (1917)
item  [23] = [ "Coins", 1, 47, "" ];  //  (1964)
item  [24] = [ "Coins", 1, 92, "" ];  //  (2056)
item  [25] = [ "Coins", 1, 25, "" ];  //  (2081)
item  [26] = [ "Water-rune", 1, 7, "Rune" ];  //  (7)
item  [27] = [ "Mind-rune", 1, 25, "Rune" ];  //  (50)
item  [28] = [ "mithril bar", 1, 1, "" ];
item  [29] = [ "Coins", 1, 47, "" ];  //  (2128)
item  [30] = [ "Coins", 1, 47, "" ];  //  (2175)
item  [31] = [ "mithril bar", 1, 1, "" ];
item  [32] = [ "Coins", 1, 25, "" ];  //  (2200)
item  [33] = [ "Muddy key", 1, 1, "" ];
item  [34] = [ "Coins", 1, 47, "" ];  //  (2247)
item  [35] = [ "Coins", 1, 92, "" ];  //  (2339)
item  [36] = [ "Coins", 1, 92, "" ];  //  (2431)
item  [37] = [ "Large Steel Helmet", 1, 1, "" ];
item  [38] = [ "Coins", 1, 92, "" ];  //  (2523)
item  [39] = [ "Coins", 1, 47, "" ];  //  (2570)
item  [40] = [ "Coins", 1, 92, "" ];  //  (2662)
item  [41] = [ "Coins", 1, 92, "" ];  //  (2754)
item  [42] = [ "Tomato", 1, 1, "" ];
item  [43] = [ "Air-rune", 1, 16, "Rune" ];  //  (48)
item  [44] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [45] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (2)
item  [46] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (7)
item  [47] = [ "Coins", 1, 25, "" ];  //  (2779)
item  [48] = [ "Coins", 1, 47, "" ];  //  (2826)
item  [49] = [ "Coins", 1, 92, "" ];  //  (2918)
item  [50] = [ "Coins", 1, 92, "" ];  //  (3010)
item  [51] = [ "Coins", 1, 92, "" ];  //  (3102)
item  [52] = [ "Coins", 1, 150, "" ];  //  (3252)
item  [53] = [ "Air-rune", 1, 16, "Rune" ];  //  (64)
item  [54] = [ "Coins", 1, 92, "" ];  //  (3344)
item  [55] = [ "Coins", 1, 92, "" ];  //  (3436)
item  [56] = [ "Coins", 1, 92, "" ];  //  (3528)
item  [57] = [ "Coins", 1, 92, "" ];  //  (3620)
item  [58] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (4)
item  [59] = [ "uncut emerald", 1, 1, "Gem" ];
item  [60] = [ "Air-rune", 1, 16, "Rune" ];  //  (80)
item  [61] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [62] = [ "Coins", 1, 47, "" ];  //  (3667)
item  [63] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item  [64] = [ "Coins", 1, 47, "" ];  //  (3714)
item  [65] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (14)
item  [66] = [ "Large Steel Helmet", 1, 1, "" ];
item  [67] = [ "Mind-rune", 1, 25, "Rune" ];  //  (75)
item  [68] = [ "Coins", 1, 25, "" ];  //  (3739)
item  [69] = [ "Coins", 1, 350, "" ];  //  (4089)
item  [70] = [ "Coins", 1, 92, "" ];  //  (4181)
item  [71] = [ "Coins", 1, 92, "" ];  //  (4273)
item  [72] = [ "uncut emerald", 1, 1, "Gem" ];
item  [73] = [ "Coins", 1, 92, "" ];  //  (4365)
item  [74] = [ "Muddy key", 1, 1, "" ];
item  [75] = [ "Mithril Long Sword", 1, 1, "" ];
item  [76] = [ "Coins", 1, 92, "" ];  //  (4457)
item  [77] = [ "Coins", 1, 92, "" ];  //  (4549)
item  [78] = [ "Coins", 1, 25, "" ];  //  (4574)
item  [79] = [ "Mind-rune", 1, 25, "Rune" ];  //  (100)
item  [80] = [ "Coins", 1, 25, "" ];  //  (4599)
item  [81] = [ "Coins", 1, 47, "" ];  //  (4646)
item  [82] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (21)
item  [83] = [ "Coins", 1, 25, "" ];  //  (4671)
item  [84] = [ "Coins", 1, 150, "" ];  //  (4821)
item  [85] = [ "Coins", 1, 47, "" ];  //  (4868)
item  [86] = [ "Coins", 1, 92, "" ];  //  (4960)
item  [87] = [ "Muddy key", 1, 1, "" ];
item  [88] = [ "Coins", 1, 47, "" ];  //  (5007)
item  [89] = [ "Coins", 1, 92, "" ];  //  (5099)
item  [90] = [ "Coins", 1, 47, "" ];  //  (5146)
item  [91] = [ "Coins", 1, 92, "" ];  //  (5238)
item  [92] = [ "Coins", 1, 350, "" ];  //  (5588)
item  [93] = [ "Coins", 1, 92, "" ];  //  (5680)
item  [94] = [ "Coins", 1, 25, "" ];  //  (5705)
item  [95] = [ "Coins", 1, 92, "" ];  //  (5797)
item  [96] = [ "Air-rune", 1, 16, "Rune" ];  //  (96)
item  [97] = [ "Coins", 1, 47, "" ];  //  (5844)
item  [98] = [ "Coins", 1, 92, "" ];  //  (5936)
item  [99] = [ "coal", 1, 1, "" ];
item [100] = [ "Large Steel Helmet", 1, 1, "" ];

runs [0] = [ 100, 101 ];  // kills 101 drops 101

// run 2

item [101] = [ "Muddy key", 1, 1, "" ];
item [102] = [ "uncut ruby", 1, 1, "Gem" ];
item [103] = [ "mithril bar", 1, 1, "" ];
item [104] = [ "Coins", 1, 150, "" ];  //  (150)
item [105] = [ "Coins", 1, 92, "" ];  //  (242)
item [106] = [ "Coins", 1, 92, "" ];  //  (334)
item [107] = [ "Coins", 1, 92, "" ];  //  (426)
item [108] = [ "Coins", 1, 150, "" ];  //  (576)
item [109] = [ "Coins", 1, 47, "" ];  //  (623)
item [110] = [ "Coins", 1, 25, "" ];  //  (648)
item [111] = [ "Coins", 1, 92, "" ];  //  (740)
item [112] = [ "uncut sapphire", 1, 1, "Gem" ];
item [113] = [ "Mind-rune", 1, 25, "Rune" ];  //  (25)
item [114] = [ "Coins", 1, 92, "" ];  //  (832)
item [115] = [ "Muddy key", 1, 1, "" ];
item [116] = [ "Coins", 1, 15, "" ];  //  (847)
item [117] = [ "Air-rune", 1, 16, "Rune" ];  //  (16)
item [118] = [ "Coins", 1, 47, "" ];  //  (894)
item [119] = [ "Muddy key", 1, 1, "" ];
item [120] = [ "mithril bar", 1, 1, "" ];
item [121] = [ "Water-rune", 1, 7, "Rune" ];  //  (7)
item [122] = [ "Nature-rune", 1, 6, "Rune" ];  //  (6)
item [123] = [ "Coins", 1, 92, "" ];  //  (986)
item [124] = [ "Coins", 1, 92, "" ];  //  (1078)
item [125] = [ "Coins", 1, 47, "" ];  //  (1125)
item [126] = [ "Coins", 1, 92, "" ];  //  (1217)
item [127] = [ "Coins", 1, 150, "" ];  //  (1367)
item [128] = [ "uncut sapphire", 1, 1, "Gem" ];
item [129] = [ "Mind-rune", 1, 25, "Rune" ];  //  (50)
item [130] = [ "Coins", 1, 92, "" ];  //  (1459)
item [131] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [132] = [ "Coins", 1, 92, "" ];  //  (1551)
item [133] = [ "Coins", 1, 92, "" ];  //  (1643)
item [134] = [ "Coins", 1, 15, "" ];  //  (1658)
item [135] = [ "Coins", 1, 25, "" ];  //  (1683)
item [136] = [ "Coins", 1, 47, "" ];  //  (1730)
item [137] = [ "Coins", 1, 47, "" ];  //  (1777)
item [138] = [ "Coins", 1, 92, "" ];  //  (1869)
item [139] = [ "Coins", 1, 47, "" ];  //  (1916)
item [140] = [ "Coins", 1, 150, "" ];  //  (2066)
item [141] = [ "Cheese", 1, 1, "" ];
item [142] = [ "Coins", 1, 92, "" ];  //  (2158)
item [143] = [ "Coins", 1, 92, "" ];  //  (2250)
item [144] = [ "mithril bar", 1, 1, "" ];
item [145] = [ "Coins", 1, 150, "" ];  //  (2400)
item [146] = [ "Coins", 1, 92, "" ];  //  (2492)
item [147] = [ "Coins", 1, 92, "" ];  //  (2584)
item [148] = [ "coal", 1, 1, "" ];
item [149] = [ "Coins", 1, 92, "" ];  //  (2676)
item [150] = [ "Coins", 1, 47, "" ];  //  (2723)
item [151] = [ "Cheese", 1, 1, "" ];
item [152] = [ "Coins", 1, 92, "" ];  //  (2815)
item [153] = [ "Cheese", 1, 1, "" ];
item [154] = [ "Coins", 1, 150, "" ];  //  (2965)
item [155] = [ "mithril bar", 1, 1, "" ];
item [156] = [ "Coins", 1, 92, "" ];  //  (3057)
item [157] = [ "Coins", 1, 47, "" ];  //  (3104)
item [158] = [ "Coins", 1, 47, "" ];  //  (3151)
item [159] = [ "Coins", 1, 92, "" ];  //  (3243)
item [160] = [ "Muddy key", 1, 1, "" ];
item [161] = [ "Coins", 1, 47, "" ];  //  (3290)
item [162] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [163] = [ "Coins", 1, 25, "" ];  //  (3315)
item [164] = [ "Coins", 1, 350, "" ];  //  (3665)
item [165] = [ "Coins", 1, 25, "" ];  //  (3690)
item [166] = [ "Coins", 1, 47, "" ];  //  (3737)
item [167] = [ "Coins", 1, 150, "" ];  //  (3887)
item [168] = [ "Coins", 1, 350, "" ];  //  (4237)
item [169] = [ "Coins", 1, 92, "" ];  //  (4329)
item [170] = [ "Coins", 1, 150, "" ];  //  (4479)
item [171] = [ "Coins", 1, 47, "" ];  //  (4526)
item [172] = [ "Nothing", 1, 0, "" ];
item [173] = [ "Large Steel Helmet", 1, 1, "" ];
item [174] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (7)
item [175] = [ "Coins", 1, 25, "" ];  //  (4551)
item [176] = [ "Coins", 1, 150, "" ];  //  (4701)
item [177] = [ "Coins", 1, 92, "" ];  //  (4793)
item [178] = [ "Coins", 1, 92, "" ];  //  (4885)
item [179] = [ "Coins", 1, 92, "" ];  //  (4977)
item [180] = [ "Coins", 1, 47, "" ];  //  (5024)
item [181] = [ "Mithril Square Shield", 1, 1, "" ];
item [182] = [ "Coins", 1, 25, "" ];  //  (5049)
item [183] = [ "Coins", 1, 92, "" ];  //  (5141)
item [184] = [ "Coins", 1, 47, "" ];  //  (5188)
item [185] = [ "Coins", 1, 25, "" ];  //  (5213)
item [186] = [ "Coins", 1, 92, "" ];  //  (5305)
item [187] = [ "uncut diamond", 1, 1, "Gem" ];

runs [1] = [ 187, 188 ];  // kills 87 drops 87

// run 3

item [188] = [ "mithril bar", 1, 1, "" ];
item [189] = [ "Coins", 1, 15, "" ];  //  (15)
item [190] = [ "Coins", 1, 92, "" ];  //  (107)
item [191] = [ "Coins", 1, 92, "" ];  //  (199)
item [192] = [ "Muddy key", 1, 1, "" ];
item [193] = [ "Coins", 1, 92, "" ];  //  (291)
item [194] = [ "Muddy key", 1, 1, "" ];
item [195] = [ "Coins", 1, 92, "" ];  //  (383)
item [196] = [ "uncut diamond", 1, 1, "Gem" ];
item [197] = [ "Coins", 1, 92, "" ];  //  (475)
item [198] = [ "Coins", 1, 92, "" ];  //  (567)
item [199] = [ "Coins", 1, 150, "" ];  //  (717)
item [200] = [ "Coins", 1, 92, "" ];  //  (809)
item [201] = [ "Nature-rune", 1, 6, "Rune" ];  //  (6)
item [202] = [ "Muddy key", 1, 1, "" ];
item [203] = [ "Coins", 1, 150, "" ];  //  (959)
item [204] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (2)
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Coins", 1, 92, "" ];  //  (1051)
item [207] = [ "Coins", 1, 92, "" ];  //  (1143)
item [208] = [ "Coins", 1, 92, "" ];  //  (1235)
item [209] = [ "Coins", 1, 92, "" ];  //  (1327)
item [210] = [ "Coins", 1, 25, "" ];  //  (1352)
item [211] = [ "Coins", 1, 92, "" ];  //  (1444)
item [212] = [ "Coins", 1, 92, "" ];  //  (1536)
item [213] = [ "Coins", 1, 92, "" ];  //  (1628)
item [214] = [ "Coins", 1, 47, "" ];  //  (1675)
item [215] = [ "Coins", 1, 150, "" ];  //  (1825)
item [216] = [ "Large Steel Helmet", 1, 1, "" ];
item [217] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [218] = [ "Coins", 1, 92, "" ];  //  (1917)
item [219] = [ "Coins", 1, 92, "" ];  //  (2009)
item [220] = [ "Coins", 1, 350, "" ];  //  (2359)
item [221] = [ "uncut emerald", 1, 1, "Gem" ];
item [222] = [ "Muddy key", 1, 1, "" ];
item [223] = [ "mithril bar", 1, 1, "" ];
item [224] = [ "Coins", 1, 92, "" ];  //  (2451)
item [225] = [ "Coins", 1, 150, "" ];  //  (2601)
item [226] = [ "Coins", 1, 25, "" ];  //  (2626)
item [227] = [ "Coins", 1, 47, "" ];  //  (2673)
item [228] = [ "Coins", 1, 47, "" ];  //  (2720)
item [229] = [ "Coins", 1, 92, "" ];  //  (2812)
item [230] = [ "Large Steel Helmet", 1, 1, "" ];
item [231] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [232] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (7)
item [233] = [ "Coins", 1, 92, "" ];  //  (2904)
item [234] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [235] = [ "Coins", 1, 25, "" ];  //  (2929)
item [236] = [ "Coins", 1, 150, "" ];  //  (3079)
item [237] = [ "Coins", 1, 150, "" ];  //  (3229)
item [238] = [ "Coins", 1, 25, "" ];  //  (3254)
item [239] = [ "Nature-rune", 1, 6, "Rune" ];  //  (12)
item [240] = [ "Coins", 1, 92, "" ];  //  (3346)
item [241] = [ "Coins", 1, 25, "" ];  //  (3371)
item [242] = [ "Muddy key", 1, 1, "" ];
item [243] = [ "Coins", 1, 47, "" ];  //  (3418)
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Coins", 1, 92, "" ];  //  (3510)
item [246] = [ "Muddy key", 1, 1, "" ];
item [247] = [ "Coins", 1, 25, "" ];  //  (3535)
item [248] = [ "Law-rune", 1, 2, "Rune" ];  //  (6)
item [249] = [ "Coins", 1, 92, "" ];  //  (3627)
item [250] = [ "mithril bar", 1, 1, "" ];
item [251] = [ "Coins", 1, 92, "" ];  //  (3719)
item [252] = [ "Coins", 1, 92, "" ];  //  (3811)
item [253] = [ "Coins", 1, 92, "" ];  //  (3903)
item [254] = [ "Coins", 1, 47, "" ];  //  (3950)
item [255] = [ "Coins", 1, 15, "" ];  //  (3965)
item [256] = [ "Coins", 1, 92, "" ];  //  (4057)
item [257] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (14)
item [258] = [ "Coins", 1, 47, "" ];  //  (4104)
item [259] = [ "Coins", 1, 92, "" ];  //  (4196)
item [260] = [ "Coins", 1, 92, "" ];  //  (4288)
item [261] = [ "Nothing", 1, 0, "" ];
item [262] = [ "Coins", 1, 150, "" ];  //  (4438)
item [263] = [ "Coins", 1, 25, "" ];  //  (4463)
item [264] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (4)
item [265] = [ "Coins", 1, 92, "" ];  //  (4555)
item [266] = [ "Coins", 1, 47, "" ];  //  (4602)
item [267] = [ "Coins", 1, 47, "" ];  //  (4649)
item [268] = [ "Mind-rune", 1, 25, "Rune" ];  //  (25)
item [269] = [ "Coins", 1, 25, "" ];  //  (4674)
item [270] = [ "mithril bar", 1, 1, "" ];
item [271] = [ "Large Steel Helmet", 1, 1, "" ];

runs [2] = [ 271, 272 ];  // kills 85 drops 85

// run 4

item [272] = [ "Coins", 1, 25, "" ];  //  (25)
item [273] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (2)
item [274] = [ "mithril bar", 1, 1, "" ];
item [275] = [ "Coins", 1, 25, "" ];  //  (50)
item [276] = [ "Muddy key", 1, 1, "" ];
item [277] = [ "Large Steel Helmet", 1, 1, "" ];
item [278] = [ "Coins", 1, 92, "" ];  //  (142)
item [279] = [ "Coins", 1, 47, "" ];  //  (189)
item [280] = [ "Muddy key", 1, 1, "" ];
item [281] = [ "Coins", 1, 92, "" ];  //  (281)
item [282] = [ "Coins", 1, 47, "" ];  //  (328)
item [283] = [ "Coins", 1, 92, "" ];  //  (420)
item [284] = [ "Coins", 1, 92, "" ];  //  (512)
item [285] = [ "Coins", 1, 92, "" ];  //  (604)
item [286] = [ "Coins", 1, 25, "" ];  //  (629)
item [287] = [ "Nature-rune", 1, 6, "Rune" ];  //  (6)
item [288] = [ "Coins", 1, 92, "" ];  //  (721)
item [289] = [ "Coins", 1, 92, "" ];  //  (813)
item [290] = [ "Mind-rune", 1, 25, "Rune" ];  //  (25)
item [291] = [ "Coins", 1, 92, "" ];  //  (905)
item [292] = [ "Coins", 1, 92, "" ];  //  (997)
item [293] = [ "Coins", 1, 92, "" ];  //  (1089)
item [294] = [ "coal", 1, 1, "" ];
item [295] = [ "Coins", 1, 47, "" ];  //  (1136)
item [296] = [ "Nature-rune", 1, 6, "Rune" ];  //  (12)
item [297] = [ "Coins", 1, 92, "" ];  //  (1228)
item [298] = [ "Coins", 1, 92, "" ];  //  (1320)
item [299] = [ "Coins", 1, 92, "" ];  //  (1412)
item [300] = [ "Coins", 1, 150, "" ];  //  (1562)
item [301] = [ "Coins", 1, 150, "" ];  //  (1712)
item [302] = [ "Coins", 1, 47, "" ];  //  (1759)
item [303] = [ "Coins", 1, 25, "" ];  //  (1784)
item [304] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (4)
item [305] = [ "Coins", 1, 47, "" ];  //  (1831)
item [306] = [ "Coins", 1, 25, "" ];  //  (1856)
item [307] = [ "Coins", 1, 92, "" ];  //  (1948)
item [308] = [ "Muddy key", 1, 1, "" ];
item [309] = [ "mithril bar", 1, 1, "" ];
item [310] = [ "Coins", 1, 47, "" ];  //  (1995)
item [311] = [ "Coins", 1, 15, "" ];  //  (2010)
item [312] = [ "Coins", 1, 92, "" ];  //  (2102)
item [313] = [ "Coins", 1, 47, "" ];  //  (2149)
item [314] = [ "Coins", 1, 25, "" ];  //  (2174)
item [315] = [ "Chaos-rune", 1, 7, "Rune" ];  //  (7)
item [316] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [317] = [ "Coins", 1, 15, "" ];  //  (2189)
item [318] = [ "Coins", 1, 150, "" ];  //  (2339)
item [319] = [ "Coins", 1, 92, "" ];  //  (2431)
item [320] = [ "Nothing", 1, 0, "" ];
item [321] = [ "Coins", 1, 25, "" ];  //  (2456)
item [322] = [ "mithril bar", 1, 1, "" ];
item [323] = [ "Muddy key", 1, 1, "" ];
item [324] = [ "Coins", 1, 92, "" ];  //  (2548)
item [325] = [ "Coins", 1, 92, "" ];  //  (2640)
item [326] = [ "Coins", 1, 92, "" ];  //  (2732)
item [327] = [ "Mithril Square Shield", 1, 1, "" ];
item [328] = [ "Coins", 1, 47, "" ];  //  (2779)
item [329] = [ "Coins", 1, 92, "" ];  //  (2871)
item [330] = [ "Coins", 1, 47, "" ];  //  (2918)
item [331] = [ "Coins", 1, 150, "" ];  //  (3068)
item [332] = [ "Air-rune", 1, 16, "Rune" ];  //  (16)
item [333] = [ "Coins", 1, 150, "" ];  //  (3218)
item [334] = [ "Coins", 1, 150, "" ];  //  (3368)
item [335] = [ "Coins", 1, 47, "" ];  //  (3415)
item [336] = [ "Nothing", 1, 0, "" ];
item [337] = [ "Half of a key (loop)", 1, 1, "" ];
item [338] = [ "Coins", 1, 150, "" ];  //  (3565)
item [339] = [ "Mind-rune", 1, 25, "Rune" ];  //  (50)
item [340] = [ "Coins", 1, 92, "" ];  //  (3657)
item [341] = [ "Coins", 1, 350, "" ];  //  (4007)
item [342] = [ "mithril bar", 1, 1, "" ];
item [343] = [ "Coins", 1, 92, "" ];  //  (4099)
item [344] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  (6)
item [345] = [ "Nature-rune", 1, 6, "Rune" ];  //  (18)
item [346] = [ "Muddy key", 1, 1, "" ];
item [347] = [ "Coins", 1, 92, "" ];  //  (4191)
item [348] = [ "Coins", 1, 92, "" ];  //  (4283)
item [349] = [ "Coins", 1, 92, "" ];  //  (4375)
item [350] = [ "Coins", 1, 47, "" ];  //  (4422)
item [351] = [ "Coins", 1, 25, "" ];  //  (4447)
item [352] = [ "Coins", 1, 92, "" ];  //  (4539)
item [353] = [ "Coins", 1, 92, "" ];  //  (4631)
item [354] = [ "Coins", 1, 92, "" ];  //  (4723)
item [355] = [ "Coins", 1, 92, "" ];  //  (4815)
item [356] = [ "Coins", 1, 92, "" ];  //  (4907)
item [357] = [ "Coins", 1, 92, "" ];  //  (4999)
item [358] = [ "Coins", 1, 47, "" ];  //  (5046)
item [359] = [ "Air-rune", 1, 16, "Rune" ];  //  (32)
item [360] = [ "Coins", 1, 92, "" ];  //  (5138)
item [361] = [ "Muddy key", 1, 1, "" ];
item [362] = [ "Coins", 1, 92, "" ];  //  (5230)
item [363] = [ "Air-rune", 1, 16, "Rune" ];  //  (48)
item [364] = [ "Coins", 1, 25, "" ];  //  (5255)
item [365] = [ "Muddy key", 1, 1, "" ];

runs [3] = [ 365, 366 ];  // kills 94 drops 94

// run 4

// runs [4] = [ x, y ];  // kills ? ( y - 366 ), drops ? ( x - 365 )

/*
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()
item [000] = [ "Coins", 1, 47, "" ];  //  ()
item [000] = [ "Coins", 1, 92, "" ];  //  ()
item [000] = [ "Coins", 1, 150, "" ];  //  ()
item [000] = [ "Coins", 1, 350, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 16, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 25, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 2, "Rune" ];  //  ()

item [000] = [ "Cheese", 1, 1, "" ];
item [000] = [ "Tomato", 1, 1, "" ];
item [000] = [ "coal", 1, 1, "" ];
item [000] = [ "Muddy key", 1, 1, "" ];

item [000] = [ "mithril ore", 1, 1, "" ];
item [000] = [ "mithril bar", 1, 1, "" ];

item [000] = [ "Mithril Long Sword", 1, 1, "" ];

item [000] = [ "Iron Kite Shield", 1, 1, "" ];
item [000] = [ "Large Steel Helmet", 1, 1, "" ];
item [000] = [ "Mithril Square Shield", 1, 1, "" ];

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

var mname = "chaos Dwarf";        // monster's name
var mcbl = 59;                    // monster's combat level
var mindex = 132;                 // index into monster data base
var mrpt = 1;                     // number of non-breaking space to add after index name