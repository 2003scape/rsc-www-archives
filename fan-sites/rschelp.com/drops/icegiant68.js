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

item   [0] = [ "Coins", 1, 22, "" ];  //  (22)
item   [1] = [ "Coins", 1, 117, "" ];  //  (139)
item   [2] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item   [3] = [ "Iron 2-handed Sword", 1, 1, "" ];
item   [4] = [ "Iron 2-handed Sword", 1, 1, "" ];
item   [5] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item   [6] = [ "Coins", 1, 8, "" ];  //  (147)
item   [7] = [ "Coins", 1, 117, "" ];  //  (264)
item   [8] = [ "Coins", 1, 53, "" ];  //  (317)
item   [9] = [ "Steel Short Sword", 1, 1, "" ];
item  [10] = [ "Coins", 1, 117, "" ];  //  (434)
item  [11] = [ "Mind-rune", 1, 16, "Rune" ];  //  (16)
item  [12] = [ "Coins", 1, 400, "" ];  //  (834)
item  [13] = [ "Steel Axe", 1, 1, "" ];
item  [14] = [ "wine (Jug of)", 1, 1, "" ];
item  [15] = [ "Coins", 1, 117, "" ];  //  (951)
item  [16] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4) 7
item  [17] = [ "Coins", 1, 53, "" ];  //  (1004)
item  [18] = [ "Coins", 1, 117, "" ];  //  (1121)
item  [19] = [ "Iron Plated Skirt", 1, 1, "" ];
item  [20] = [ "Black Kite Shield", 1, 1, "" ];
item  [21] = [ "Coins", 1, 400, "" ];  //  (1521)
item  [22] = [ "Coins", 1, 117, "" ];  //  (1638)
item  [23] = [ "Coins", 1, 53, "" ];  //  (1691)
item  [24] = [ "Coins", 1, 117, "" ];  //  (1808)
item  [25] = [ "Mind-rune", 1, 16, "Rune" ];  //  (32)
item  [26] = [ "Coins", 1, 117, "" ];  //  (1925)
item  [27] = [ "Body-rune", 1, 25, "Rune" ];  //  (25)
item  [28] = [ "uncut diamond", 1, 1, "Gem" ];
item  [29] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item  [30] = [ "Mithril Mace", 1, 1, "" ];
item  [31] = [ "Coins", 1, 8, "" ];  //  (1933)
item  [32] = [ "Coins", 1, 117, "" ];  //  (2050)
item  [33] = [ "Coins", 1, 117, "" ];  //  (2167)
item  [34] = [ "wine (Jug of)", 1, 1, "" ];
item  [35] = [ "Coins", 1, 8, "" ];  //  (2175)
item  [36] = [ "Coins", 1, 117, "" ];  //  (2292)
item  [37] = [ "Coins", 1, 400, "" ];  //  (2692)
item  [38] = [ "Mithril Square Shield", 1, 1, "" ];
item  [39] = [ "Coins", 1, 117, "" ];  //  (2809)
item  [40] = [ "Coins", 1, 117, "" ];  //  (2926)
item  [41] = [ "Coins", 1, 117, "" ];  //  (3043)
item  [42] = [ "Coins", 1, 196, "" ];  //  (3239)
item  [43] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item  [44] = [ "Coins", 1, 117, "" ];  //  (3356)
item  [45] = [ "Mind-rune", 1, 16, "Rune" ];  //  (48)
item  [46] = [ "Blood-rune", 1, 1, "Rune" ];  //  (3)
item  [47] = [ "Coins", 1, 8, "" ];  //  (3364)
item  [48] = [ "Coins", 1, 117, "" ];  //  (3481)
item  [49] = [ "Death-rune", 1, 2, "Rune" ];  //  (4)
item  [50] = [ "Coins", 1, 8, "" ];  //  (3489)
item  [51] = [ "Nothing", 1, 0, "" ];
item  [52] = [ "Coins", 1, 117, "" ];  //  (3606)
item  [53] = [ "Coins", 1, 117, "" ];  //  (3723)
item  [54] = [ "Coins", 1, 22, "" ];  //  (3745)
item  [55] = [ "Coins", 1, 53, "" ];  //  (3798)
item  [56] = [ "Coins", 1, 8, "" ];  //  (3806)
item  [57] = [ "Steel Short Sword", 1, 1, "" ];
item  [58] = [ "Coins", 1, 117, "" ];  //  (3923)
item  [59] = [ "Coins", 1, 117, "" ];  //  (4040)
item  [60] = [ "Coins", 1, 53, "" ];  //  (4093)
item  [61] = [ "Coins", 1, 117, "" ];  //  (4210)
item  [62] = [ "Coins", 1, 117, "" ];  //  (4327)
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "wine (Jug of)", 1, 1, "" ];
item  [65] = [ "Coins", 1, 117, "" ];  //  (4444)
item  [66] = [ "wine (Jug of)", 1, 1, "" ];

runs [0] = [ 66, 67 ];  // kills 67, drops 67

// run 2

item  [67] = [ "Coins", 1, 196, "" ];  //  (196)
item  [68] = [ "Coins", 1, 196, "" ];  //  (392)
item  [69] = [ "Coins", 1, 117, "" ];  //  (509)
item  [70] = [ "Coins", 1, 117, "" ];  //  (626)
item  [71] = [ "Coins", 1, 22, "" ];  //  (648)
item  [72] = [ "Coins", 1, 196, "" ];  //  (844)
item  [73] = [ "Coins", 1, 8, "" ];  //  (852)
item  [74] = [ "Coins", 1, 400, "" ];  //  (1252)
item  [75] = [ "Coins", 1, 117, "" ];  //  (1369)
item  [76] = [ "Steel Axe", 1, 1, "" ];
item  [77] = [ "wine (Jug of)", 1, 1, "" ];
item  [78] = [ "Iron Plated Skirt", 1, 1, "" ];
item  [79] = [ "Black Kite Shield", 1, 1, "" ];
item  [80] = [ "Coins", 1, 117, "" ];  //  (1486)
item  [81] = [ "Coins", 1, 8, "" ];  //  (1494)
item  [82] = [ "Coins", 1, 117, "" ];  //  (1611)
item  [83] = [ "Steel Axe", 1, 1, "" ];
item  [84] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [85] = [ "Steel Short Sword", 1, 1, "" ];
item  [86] = [ "Coins", 1, 117, "" ];  //  (1728)
item  [87] = [ "Coins", 1, 53, "" ];  //  (1781)
item  [88] = [ "Coins", 1, 8, "" ];  //  (1789)
item  [89] = [ "Steel Axe", 1, 1, "" ];
item  [90] = [ "Coins", 1, 196, "" ];  //  (1985)
item  [91] = [ "banana", 1, 1, "" ];
item  [92] = [ "Coins", 1, 22, "" ];  //  (2007)
item  [93] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [94] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item  [95] = [ "Coins", 1, 117, "" ];  //  (2124)
item  [96] = [ "Coins", 1, 117, "" ];  //  (2241)
item  [97] = [ "Iron Plated Skirt", 1, 1, "" ];
item  [98] = [ "Coins", 1, 22, "" ];  //  (2263)
item  [99] = [ "Coins", 1, 8, "" ];  //  (2271)
item [100] = [ "Steel Axe", 1, 1, "" ];
item [101] = [ "Coins", 1, 117, "" ];  //  (2388)
item [102] = [ "Steel Short Sword", 1, 1, "" ];
item [103] = [ "Coins", 1, 22, "" ];  //  (2410)
item [104] = [ "Nothing", 1, 0, "" ];
item [105] = [ "Coins", 1, 196, "" ];  //  (2606)
item [106] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (3)
item [107] = [ "Coins", 1, 8, "" ];  //  (2614)
item [108] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [109] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [110] = [ "Steel Axe", 1, 1, "" ];
item [111] = [ "Coins", 1, 117, "" ];  //  (2731)
item [112] = [ "Coins", 1, 196, "" ];  //  (2927)
item [113] = [ "Coins", 1, 53, "" ];  //  (2980)
item [114] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item [115] = [ "Coins", 1, 196, "" ];  //  (3176)
item [116] = [ "Coins", 1, 53, "" ];  //  (3229)
item [117] = [ "Coins", 1, 196, "" ];  //  (3425)
item [118] = [ "Coins", 1, 117, "" ];  //  (3542)
item [119] = [ "Coins", 1, 53, "" ];  //  (3595)
item [120] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (6)
item [121] = [ "Coins", 1, 400, "" ];  //  (3995)
item [122] = [ "Coins", 1, 117, "" ];  //  (4112)
item [123] = [ "Coins", 1, 196, "" ];  //  (4308)
item [124] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [125] = [ "Coins", 1, 117, "" ];  //  (4425)
item [126] = [ "Coins", 1, 8, "" ];  //  (4433)
item [127] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [128] = [ "Coins", 1, 8, "" ];  //  (4441)
item [129] = [ "Coins", 1, 53, "" ];  //  (4494)
item [130] = [ "Coins", 1, 53, "" ];  //  (4547)
item [131] = [ "uncut sapphire", 1, 1, "Gem" ];
item [132] = [ "Mind-rune", 1, 16, "Rune" ];  //  (16)
item [133] = [ "Coins", 1, 53, "" ];  //  (4600)
item [134] = [ "Coins", 1, 117, "" ];  //  (4717)
item [135] = [ "wine (Jug of)", 1, 1, "" ];
item [136] = [ "Coins", 1, 117, "" ];  //  (4834)
item [137] = [ "Coins", 1, 117, "" ];  //  (4951)
item [138] = [ "Coins", 1, 53, "" ];  //  (5004)
item [139] = [ "wine (Jug of)", 1, 1, "" ];
item [140] = [ "wine (Jug of)", 1, 1, "" ];
item [141] = [ "Coins", 1, 196, "" ];  //  (5200)
item [142] = [ "Coins", 1, 117, "" ];  //  (5317)
item [143] = [ "Nature-rune", 1, 4, "Rune" ];  //  (8)
item [144] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [145] = [ "Black Kite Shield", 1, 1, "" ];
item [146] = [ "Coins", 1, 117, "" ];  //  (5434)
item [147] = [ "Coins", 1, 53, "" ];  //  (5487)
item [148] = [ "Coins", 1, 117, "" ];  //  (5604)
item [149] = [ "Coins", 1, 53, "" ];  //  (5657)
item [150] = [ "Coins", 1, 53, "" ];  //  (5710)
item [151] = [ "Coins", 1, 22, "" ];  //  (5732)
item [152] = [ "Coins", 1, 117, "" ];  //  (5849)
item [153] = [ "Coins", 1, 8, "" ];  //  (5857)
item [154] = [ "Black Kite Shield", 1, 1, "" ];
item [155] = [ "Coins", 1, 196, "" ];  //  (6053)
item [156] = [ "Coins", 1, 22, "" ];  //  (6075)
item [157] = [ "wine (Jug of)", 1, 1, "" ];
item [158] = [ "banana", 1, 1, "" ];
item [159] = [ "Nature-rune", 1, 4, "Rune" ];  //  (12)
item [160] = [ "uncut sapphire", 1, 1, "Gem" ];
item [161] = [ "Black Kite Shield", 1, 1, "" ];
item [162] = [ "Coins", 1, 22, "" ];  //  (6097)
item [163] = [ "Coins", 1, 53, "" ];  //  (6150)
item [164] = [ "Coins", 1, 196, "" ];  //  (6346)
item [165] = [ "Black Kite Shield", 1, 1, "" ];
item [166] = [ "Nature-rune", 1, 4, "Rune" ];  //  (16)
item [167] = [ "Coins", 1, 117, "" ];  //  (6463)

runs [1] = [ 167, 168 ];  // kills 101, drops 101

// run 3

item [168] = [ "Coins", 1, 117, "" ];  //  (117)
item [169] = [ "Coins", 1, 117, "" ];  //  (234)
item [170] = [ "Coins", 1, 117, "" ];  //  (351)
item [171] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [172] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [173] = [ "Coins", 1, 8, "" ];  //  (359)
item [174] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [175] = [ "Coins", 1, 117, "" ];  //  (476)
item [176] = [ "Coins", 1, 117, "" ];  //  (593)
item [177] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [178] = [ "Coins", 1, 117, "" ];  //  (710)
item [179] = [ "Coins", 1, 117, "" ];  //  (827)
item [180] = [ "Black Kite Shield", 1, 1, "" ];
item [181] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item [182] = [ "Steel Short Sword", 1, 1, "" ];
item [183] = [ "banana", 1, 1, "" ];
item [184] = [ "Black Kite Shield", 1, 1, "" ];
item [185] = [ "Coins", 1, 196, "" ];  //  (1023)
item [186] = [ "Coins", 1, 53, "" ];  //  (1076)
item [187] = [ "Coins", 1, 53, "" ];  //  (1129)
item [188] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [189] = [ "Coins", 1, 117, "" ];  //  (1246)
item [190] = [ "Steel Axe", 1, 1, "" ];
item [191] = [ "Body-rune", 1, 25, "Rune" ];  //  (25)
item [192] = [ "Coins", 1, 8, "" ];  //  (1254)
item [192] = [ "Coins", 1, 117, "" ];  //  (1371)
item [193] = [ "Coins", 1, 22, "" ];  //  (1393)
item [194] = [ "Coins", 1, 196, "" ];  //  (1589)
item [195] = [ "Coins", 1, 22, "" ];  //  (1611)
item [196] = [ "Coins", 1, 8, "" ];  //  (1619)
item [197] = [ "Coins", 1, 117, "" ];  //  (1736)
item [198] = [ "mithril ore", 1, 1, "" ];
item [199] = [ "Coins", 1, 117, "" ];  //  (1853)
item [200] = [ "Body-rune", 1, 25, "Rune" ];  //  (50)
item [201] = [ "Coins", 1, 196, "" ];  //  (2049)
item [202] = [ "Steel Axe", 1, 1, "" ];
item [203] = [ "uncut emerald", 1, 1, "Gem" ];
item [204] = [ "Coins", 1, 53, "" ];  //  (2102)
item [205] = [ "Coins", 1, 53, "" ];  //  (2155)
item [206] = [ "banana", 1, 1, "" ];
item [207] = [ "Coins", 1, 196, "" ];  //  (2351)
item [208] = [ "Coins", 1, 53, "" ];  //  (2404)
item [209] = [ "Coins", 1, 117, "" ];  //  (2521)
item [210] = [ "Coins", 1, 117, "" ];  //  (2638)
item [211] = [ "Coins", 1, 117, "" ];  //  (2755)
item [212] = [ "Coins", 1, 117, "" ];  //  (2872)
item [213] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [214] = [ "Coins", 1, 117, "" ];  //  (2989)
item [215] = [ "Coins", 1, 196, "" ];  //  (3185)
item [216] = [ "Black Kite Shield", 1, 1, "" ];
item [217] = [ "banana", 1, 1, "" ];
item [218] = [ "Coins", 1, 196, "" ];  //  (3381)
item [219] = [ "Steel Short Sword", 1, 1, "" ];
item [220] = [ "Coins", 1, 117, "" ];  //  (3498)
item [221] = [ "Coins", 1, 8, "" ];  //  (3506)
item [222] = [ "Coins", 1, 117, "" ];  //  (3623)
item [223] = [ "Coins", 1, 8, "" ];  //  (3631)
item [224] = [ "Coins", 1, 117, "" ];  //  (3748)
item [225] = [ "Nature-rune", 1, 4, "Rune" ];  //  (8)
item [226] = [ "Body-rune", 1, 25, "Rune" ];  //  (75)
item [227] = [ "Nature-rune", 1, 4, "Rune" ];  //  (12)
item [228] = [ "Coins", 1, 117, "" ];  //  (3865)
item [229] = [ "Body-rune", 1, 25, "Rune" ];  //  (100)
item [230] = [ "Coins", 1, 117, "" ];  //  (3982)
item [231] = [ "Coins", 1, 53, "" ];  //  (4035)
item [232] = [ "Coins", 1, 117, "" ];  //  (4152)
item [233] = [ "Coins", 1, 196, "" ];  //  (4348)
item [234] = [ "Coins", 1, 117, "" ];  //  (4465)
item [235] = [ "Mind-rune", 1, 16, "Rune" ];  //  (16)
item [236] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [237] = [ "Mithril Mace", 1, 1, "" ];
item [238] = [ "uncut sapphire", 1, 1, "Gem" ];
item [239] = [ "Coins", 1, 117, "" ];  //  (4582)
item [240] = [ "Steel Axe", 1, 1, "" ];
item [241] = [ "Coins", 1, 53, "" ];  //  (4635)
item [242] = [ "Coins", 1, 117, "" ];  //  (4752)
item [243] = [ "Iron Plated Skirt", 1, 1, "" ];
item [244] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (3)
item [245] = [ "Steel Axe", 1, 1, "" ];
item [246] = [ "Coins", 1, 22, "" ];  //  (4774)
item [247] = [ "Coins", 1, 117, "" ];  //  (4891)
item [248] = [ "Coins", 1, 117, "" ];  //  (5008)
item [249] = [ "Coins", 1, 117, "" ];  //  (5125)
item [250] = [ "Coins", 1, 117, "" ];  //  (5242)
item [251] = [ "Coins", 1, 117, "" ];  //  (5359)
item [252] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [253] = [ "Body-rune", 1, 25, "Rune" ];  //  (125)
item [254] = [ "Coins", 1, 53, "" ];  //  (5412)
item [255] = [ "Coins", 1, 117, "" ];  //  (5529)
item [256] = [ "Coins", 1, 196, "" ];  //  (5725)
item [257] = [ "Coins", 1, 117, "" ];  //  (5842)
item [258] = [ "Coins", 1, 117, "" ];  //  (5959)
item [259] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item [260] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [261] = [ "Coins", 1, 117, "" ];  //  (6076)
item [262] = [ "wine (Jug of)", 1, 1, "" ];
item [263] = [ "Coins", 1, 117, "" ];  //  (6193)
item [264] = [ "Coins", 1, 117, "" ];  //  (6310)
item [265] = [ "Coins", 1, 53, "" ];  //  (6363)
item [266] = [ "Coins", 1, 196, "" ];  //  (6559)
item [267] = [ "Coins", 1, 22, "" ];  //  (6581)
item [268] = [ "Body-rune", 1, 25, "Rune" ];  //  (150)
item [269] = [ "Coins", 1, 53, "" ];  //  (6634)
item [270] = [ "Coins", 1, 117, "" ];  //  (6751)
item [271] = [ "Coins", 1, 117, "" ];  //  (6868)
item [272] = [ "Black Kite Shield", 1, 1, "" ];
item [273] = [ "Coins", 1, 117, "" ];  //  (6985)
item [274] = [ "Coins", 1, 117, "" ];  //  (7102)
item [275] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (6)
item [276] = [ "Death-rune", 1, 2, "Rune" ];  //  (4)

runs [2] = [ 276, 277 ];  // kills 109, drops 109

// run 4

item [277] = [ "Mind-rune", 1, 16, "Rune" ];  //  (16)
item [278] = [ "Coins", 1, 117, "" ];  //  (117)
item [279] = [ "Coins", 1, 53, "" ];  //  (170)
item [280] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [281] = [ "Coins", 1, 117, "" ];  //  (287)
item [282] = [ "Coins", 1, 22, "" ];  //  (309)
item [283] = [ "Coins", 1, 117, "" ];  //  (426)
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 117, "" ];  //  (543)
item [286] = [ "Coins", 1, 117, "" ];  //  (660)
item [287] = [ "Steel Axe", 1, 1, "" ];
item [288] = [ "Coins", 1, 8, "" ];  //  (668)
item [289] = [ "Nothing", 1, 0, "" ];
item [290] = [ "Mithril Mace", 1, 1, "" ];
item [291] = [ "Coins", 1, 53, "" ];  //  (721)
item [292] = [ "Coins", 1, 117, "" ];  //  (838)
item [293] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (3)
item [294] = [ "Steel Axe", 1, 1, "" ];
item [295] = [ "Coins", 1, 53, "" ];  //  (891)
item [296] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (6)
item [297] = [ "Coins", 1, 53, "" ];  //  (944)
item [298] = [ "Coins", 1, 22, "" ];  //  (966)
item [299] = [ "Coins", 1, 8, "" ];  //  (974)
item [300] = [ "Body-rune", 1, 25, "Rune" ];  //  (25)
item [301] = [ "Coins", 1, 117, "" ];  //  (1091)
item [302] = [ "Coins", 1, 117, "" ];  //  (1208)
item [303] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item [304] = [ "Coins", 1, 22, "" ];  //  (1230)
item [305] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [306] = [ "Coins", 1, 117, "" ];  //  (1347)
item [307] = [ "Steel Short Sword", 1, 1, "" ];
item [308] = [ "Coins", 1, 53, "" ];  //  (1400)
item [309] = [ "Coins", 1, 117, "" ];  //  (1517)
item [310] = [ "Coins", 1, 117, "" ];  //  (1634)
item [311] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [312] = [ "Body-rune", 1, 25, "Rune" ];  //  (50)
item [313] = [ "Coins", 1, 53, "" ];  //  (1687)
item [314] = [ "Coins", 1, 8, "" ];  //  (1695)
item [315] = [ "Coins", 1, 196, "" ];  //  (1891)
item [316] = [ "wine (Jug of)", 1, 1, "" ];
item [317] = [ "Black Kite Shield", 1, 1, "" ];
item [318] = [ "Coins", 1, 117, "" ];  //  (2008)
item [319] = [ "banana", 1, 1, "" ];
item [320] = [ "Coins", 1, 117, "" ];  //  (2125)
item [321] = [ "Black Kite Shield", 1, 1, "" ];
item [322] = [ "Mithril Mace", 1, 1, "" ];
item [323] = [ "Coins", 1, 53, "" ];  //  (2178)
item [324] = [ "Coins", 1, 22, "" ];  //  (2200)
item [325] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  (9)
item [326] = [ "wine (Jug of)", 1, 1, "" ];
item [327] = [ "Coins", 1, 22, "" ];  //  (2222)
item [328] = [ "Coins", 1, 117, "" ];  //  (2339)
item [329] = [ "Coins", 1, 22, "" ];  //  (2361)
item [330] = [ "Coins", 1, 117, "" ];  //  (2478)
item [331] = [ "Iron Plated Skirt", 1, 1, "" ];
item [332] = [ "Coins", 1, 8, "" ];  //  (2486)
item [333] = [ "Coins", 1, 400, "" ];  //  (2886)
item [334] = [ "Nothing", 1, 0, "" ];
item [335] = [ "Coins", 1, 117, "" ];  //  (3003)
item [336] = [ "Coins", 1, 117, "" ];  //  (3120)
item [337] = [ "Nature-rune", 1, 4, "Rune" ];  //  (8)
item [338] = [ "Coins", 1, 117, "" ];  //  (3237)
item [339] = [ "Steel Short Sword", 1, 1, "" ];
item [340] = [ "Coins", 1, 117, "" ];  //  (3354)
item [341] = [ "Coins", 1, 53, "" ];  //  (3407)
item [342] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [343] = [ "Coins", 1, 117, "" ];  //  (3524)
item [344] = [ "Coins", 1, 117, "" ];  //  (3641)
item [345] = [ "Coins", 1, 196, "" ];  //  (3837)
item [346] = [ "Nothing", 1, 0, "" ];
item [347] = [ "Coins", 1, 53, "" ];  //  (3890)
item [348] = [ "Coins", 1, 117, "" ];  //  (4007)
item [349] = [ "Coins", 1, 117, "" ];  //  (4124)

runs [3] = [ 349, 350 ];  // kills 73, drops 73

// runs [4] = [ x, y ];  // kills ? ( y - 350 ), drops ? ( x - 349 )

/*
item [000] = [ "Coins", 1, 8, "" ];  //  ()
item [000] = [ "Coins", 1, 22, "" ];  //  ()
item [000] = [ "Coins", 1, 53, "" ];  //  ()
item [000] = [ "Coins", 1, 117, "" ];  //  ()
item [000] = [ "Coins", 1, 196, "" ];  //  ()
item [000] = [ "Coins", 1, 400, "" ];  //  ()

item [000] = [ "Water-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 25, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 16, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "mithril ore", 1, 1, "" ];

item [000] = [ "Iron 2-handed Sword", 1, 1, "" ];
item [000] = [ "Iron battle Axe", 1, 1, "" ];
item [000] = [ "Steel dagger", 1, 1, "" ];
item [000] = [ "Steel Axe", 1, 1, "" ];
item [000] = [ "Steel Short Sword", 1, 1, "" ];
item [000] = [ "Mithril Mace", 1, 1, "" ];
item [000] = [ "Mithril Short Sword", 1, 1, "" ];

item [000] = [ "Iron Plated Skirt", 1, 1, "" ];
item [000] = [ "Steel Square Shield", 1, 1, "" ];
item [000] = [ "Black Kite Shield", 1, 1, "" ];
item [000] = [ "Mithril Square Shield", 1, 1, "" ];
item [000] = [ "Mithril Chain Mail Body", 1, 1, "" ];

item [000] = [ "grain", 1, 1, "" ];
item [000] = [ "Limpwurt root", 1, 1, "" ];
item [000] = [ "banana", 1, 1, "" ];
item [000] = [ "wine (Jug of)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Ice Giant";         // monster's name
var mcbl = 68;                   // monster's combat level
var mindex = 142;                // index into monster data base
var mrpt = 1;                    // number of non-breaking space to add after index name