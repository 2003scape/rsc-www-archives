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

var notes = "Re-spawn time is 1 min.";

// runs [*] = [ x, y ];  // kills = ( y - last drop of last run ), drops = ( x - last index of last run )

// run 1

item   [0] = [ "Coins", 1, 48, "" ];  //  (48)
item   [1] = [ "Coins", 1, 70, "" ];  //  (118)
item   [2] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item   [3] = [ "Coins", 1, 48, "" ];  //  (166)
item   [4] = [ "Coins", 1, 48, "" ];  //  (214)
item   [5] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item   [6] = [ "Coins", 1, 70, "" ];  //  (284)
item   [7] = [ "Coins", 1, 120, "" ];  //  (404)
item   [8] = [ "Coins", 1, 48, "" ];  //  (452)
item   [9] = [ "Coins", 1, 70, "" ];  //  (522)
item  [10] = [ "Coins", 1, 48, "" ];  //  (570)
item  [11] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item  [12] = [ "iron bar", 1, 3, "" ];
item  [13] = [ "Coins", 1, 70, "" ];  //  (640)
item  [14] = [ "iron bar", 1, 2, "" ];
item  [15] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [16] = [ "iron bar", 1, 3, "" ];
item  [17] = [ "Nature-rune", 1, 3, "Rune" ];  //  (6)
item  [18] = [ "Coins", 1, 48, "" ];  //  (688)
item  [19] = [ "Coins", 1, 2, "" ];  //  (690)
item  [20] = [ "Nature-rune", 1, 3, "Rune" ];  //  (9)
item  [21] = [ "Coins", 1, 15, "" ];  //  (705)
item  [22] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item  [23] = [ "Tarromin", 1, 1, "Herb" ];
item  [24] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item  [25] = [ "iron bar", 1, 2, "" ];
item  [26] = [ "iron bar", 1, 2, "" ];
item  [27] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [28] = [ "Coins", 1, 70, "" ];  //  (775)
item  [29] = [ "Coins", 1, 15, "" ];  //  (790)
item  [30] = [ "Coins", 1, 15, "" ];  //  (805)
item  [31] = [ "Longbow", 1, 1, "" ];
item  [32] = [ "Coins", 1, 48, "" ];  //  (853)
item  [33] = [ "Coins", 1, 48, "" ];  //  (901)
item  [34] = [ "Coins", 1, 48, "" ];  //  (949)
item  [35] = [ "Coins", 1, 70, "" ];  //  (1019)
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "Longbow", 1, 1, "" ];
item  [38] = [ "iron bar", 1, 3, "" ];
item  [39] = [ "Coins", 1, 48, "" ];  //  (1067)
item  [40] = [ "Coins", 1, 8, "" ];  //  (1075)
item  [41] = [ "Nothing", 1, 0, "" ];
item  [42] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [43] = [ "Coins", 1, 2, "" ];  //  (1077)
item  [44] = [ "Coins", 1, 48, "" ];  //  (1125)
item  [45] = [ "Coins", 1, 48, "" ];  //  (1173)
item  [46] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item  [47] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (8)
item  [48] = [ "Mind-rune", 1, 3, "Rune" ];  //  (3)
item  [49] = [ "Nature-rune", 1, 3, "Rune" ];  //  (12)
item  [50] = [ "Coins", 1, 48, "" ];  //  (1221)
item  [51] = [ "Nothing", 1, 0, "" ];
item  [52] = [ "Longbow", 1, 1, "" ];
item  [53] = [ "Coins", 1, 120, "" ];  //  (1341)
item  [54] = [ "Coins", 1, 70, "" ];  //  (1411)
item  [55] = [ "Nature-rune", 1, 3, "Rune" ];  //  (15)
item  [56] = [ "Coins", 1, 48, "" ];  //  (1459)
item  [57] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item  [58] = [ "Coins", 1, 15, "" ];  //  (1474)
item  [59] = [ "Body-rune", 1, 8, "Rune" ];  //  (8)
item  [60] = [ "Coins", 1, 48, "" ];  //  (1522)
item  [61] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (10)
item  [62] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [63] = [ "Coins", 1, 48, "" ];  //  (1570)
item  [64] = [ "Coins", 1, 48, "" ];  //  (1618)
item  [65] = [ "Coins", 1, 48, "" ];  //  (1666)
item  [66] = [ "iron bar", 1, 3, "" ];
item  [67] = [ "Coins", 1, 48, "" ];  //  (1714)
item  [68] = [ "Coins", 1, 15, "" ];  //  (1729)
item  [69] = [ "Iron Long Sword", 1, 1, "" ];
item  [70] = [ "Steel Short Sword", 1, 1, "" ];
item  [71] = [ "Coins", 1, 48, "" ];  //  (1777)
item  [72] = [ "Coins", 1, 48, "" ];  //  (1825)
item  [73] = [ "Coins", 1, 48, "" ];  //  (1873)
item  [74] = [ "Coins", 1, 48, "" ];  //  (1921)
item  [75] = [ "Water-rune", 1, 20, "Rune" ];  //  (80)
item  [76] = [ "Coins", 1, 48, "" ];  //  (1969)
item  [77] = [ "Flour (pot of)", 1, 1, "" ];
item  [78] = [ "Coins", 1, 70, "" ];  //  (2039)
item  [79] = [ "Coins", 1, 48, "" ];  //  (2087)
item  [80] = [ "Coins", 1, 15, "" ];  //  (2102)
item  [81] = [ "iron bar", 1, 3, "" ];
item  [82] = [ "Coins", 1, 48, "" ];  //  (2150)
item  [83] = [ "Water-rune", 1, 20, "Rune" ];  //  (100)
item  [84] = [ "Iron Long Sword", 1, 1, "" ];
item  [85] = [ "Coins", 1, 48, "" ];  //  (2198)
item  [86] = [ "Coins", 1, 48, "" ];  //  (2246)
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Coins", 1, 48, "" ];  //  (2294)
item  [89] = [ "iron ore", 1, 1, "" ];
item  [90] = [ "Coins", 1, 48, "" ];  //  (2342)
item  [91] = [ "Coins", 1, 15, "" ];  //  (2357)
item  [92] = [ "Water-rune", 1, 20, "Rune" ];  //  (120)
item  [93] = [ "Coins", 1, 15, "" ];  //  (2372)
item  [94] = [ "Nature-rune", 1, 3, "Rune" ];  //  (18)
item  [95] = [ "Coins", 1, 48, "" ];  //  (2420)
item  [96] = [ "Coins", 1, 8, "" ];  //  (2428)
item  [97] = [ "Coins", 1, 48, "" ];  //  (2476)
item  [98] = [ "Coins", 1, 15, "" ];  //  (2491)
item  [99] = [ "Coins", 1, 48, "" ];  //  (2539)
item [100] = [ "Coins", 1, 48, "" ];  //  (2587)
item [101] = [ "iron bar", 1, 3, "" ];
item [102] = [ "Coins", 1, 48, "" ];  //  (2635)
item [103] = [ "Coins", 1, 48, "" ];  //  (2683)
item [104] = [ "Coins", 1, 48, "" ];  //  (2731)
item [105] = [ "Coins", 1, 48, "" ];  //  (2779)
item [106] = [ "Longbow", 1, 1, "" ];
item [107] = [ "Coins", 1, 48, "" ];  //  (2827)
item [108] = [ "Body-rune", 1, 8, "Rune" ];  //  (16)
item [109] = [ "Tarromin", 1, 1, "Herb" ];
item [110] = [ "Coins", 1, 48, "" ];  //  (2875)
item [111] = [ "iron bar", 1, 3, "" ];
item [112] = [ "Coins", 1, 120, "" ];  //  (2995)
item [113] = [ "Coins", 1, 15, "" ];  //  (3010)
item [114] = [ "Coins", 1, 48, "" ];  //  (3058)
item [115] = [ "Coins", 1, 15, "" ];  //  (3073)
item [116] = [ "Coins", 1, 15, "" ];  //  (3088)
item [117] = [ "Body-rune", 1, 8, "Rune" ];  //  (24)
item [118] = [ "Guam Leaf", 1, 1, "Herb" ];
item [119] = [ "Coins", 1, 70, "" ];  //  (3158)
item [120] = [ "Coins", 1, 15, "" ];  //  (3173)
item [121] = [ "Nature-rune", 1, 3, "Rune" ];  //  (21)
item [122] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [123] = [ "Water-rune", 1, 20, "Rune" ];  //  (140)
item [124] = [ "Nature-rune", 1, 3, "Rune" ];  //  (24)
item [125] = [ "Coins", 1, 48, "" ];  //  (3221)
item [126] = [ "Steel Short Sword", 1, 1, "" ];
item [127] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (12)
item [128] = [ "Coins", 1, 70, "" ];  //  (3291)
item [129] = [ "Coins", 1, 48, "" ];  //  (3339)
item [130] = [ "Mind-rune", 1, 3, "Rune" ];  //  (6)
item [131] = [ "Coins", 1, 120, "" ];  //  (3459)
item [132] = [ "Body-rune", 1, 8, "Rune" ];  //  (32)
item [133] = [ "Coins", 1, 48, "" ];  //  (3507)
item [134] = [ "Coins", 1, 48, "" ];  //  (3555)
item [135] = [ "Body-rune", 1, 8, "Rune" ];  //  (40)
item [136] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (14)
item [137] = [ "Body-rune", 1, 8, "Rune" ];  //  (48)
item [138] = [ "Coins", 1, 15, "" ];  //  (3570)
item [139] = [ "Longbow", 1, 1, "" ];
item [140] = [ "Longbow", 1, 1, "" ];
item [141] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (16)
item [142] = [ "Coins", 1, 48, "" ];  //  (3618)
item [143] = [ "Coins", 1, 48, "" ];  //  (3666)
item [144] = [ "Coins", 1, 48, "" ];  //  (3714)
item [145] = [ "Coins", 1, 48, "" ];  //  (3762)
item [146] = [ "Tarromin", 1, 1, "Herb" ];
item [147] = [ "Coins", 1, 48, "" ];  //  (3810)
item [148] = [ "Coins", 1, 15, "" ];  //  (3825)
item [149] = [ "Coins", 1, 15, "" ];  //  (3840)
item [150] = [ "iron bar", 1, 3, "" ];
item [151] = [ "Coins", 1, 48, "" ];  //  (3888)
item [152] = [ "uncut sapphire", 1, 1, "Gem" ];
item [153] = [ "Coins", 1, 48, "" ];  //  (3936)
item [154] = [ "iron ore", 1, 1, "" ];
item [155] = [ "Coins", 1, 2, "" ];  //  (3938)
item [156] = [ "Coins", 1, 70, "" ];  //  (4008)
item [157] = [ "Coins", 1, 15, "" ];  //  (4023)
item [158] = [ "Coins", 1, 48, "" ];  //  (4071)
item [159] = [ "iron bar", 1, 2, "" ];
item [160] = [ "Coins", 1, 15, "" ];  //  (4086)
item [161] = [ "Coins", 1, 15, "" ];  //  (4101)
item [162] = [ "Coins", 1, 15, "" ];  //  (4116)
item [163] = [ "Coins", 1, 70, "" ];  //  (4186)
item [164] = [ "Coins", 1, 48, "" ];  //  (4234)
item [165] = [ "iron bar", 1, 3, "" ];
item [166] = [ "Coins", 1, 48, "" ];  //  (4282)
item [167] = [ "Nature-rune", 1, 3, "Rune" ];  //  (27)
item [168] = [ "Coins", 1, 48, "" ];  //  (4330)
item [169] = [ "Coins", 1, 15, "" ];  //  (4345)
item [170] = [ "Marrentill", 1, 1, "Herb" ];
item [171] = [ "Body-rune", 1, 8, "Rune" ];  //  (56)
item [172] = [ "Tarromin", 1, 1, "Herb" ];
item [173] = [ "Body-rune", 1, 8, "Rune" ];  //  (64)
item [174] = [ "Iron Long Sword", 1, 1, "" ];
item [175] = [ "Coins", 1, 15, "" ];  //  (4360)
item [176] = [ "Nothing", 1, 0, "" ];
item [177] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (18)
item [178] = [ "Coins", 1, 8, "" ];  //  (4368)
item [179] = [ "Coins", 1, 48, "" ];  //  (4416)
item [180] = [ "Coins", 1, 70, "" ];  //  (4486)
item [181] = [ "Mind-rune", 1, 3, "Rune" ];  //  (9)
item [182] = [ "Coins", 1, 48, "" ];  //  (4534)
item [183] = [ "Coins", 1, 15, "" ];  //  (4549)
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Longbow", 1, 1, "" ];
item [186] = [ "iron bar", 1, 3, "" ];
item [187] = [ "Coins", 1, 48, "" ];  //  (4597)
item [188] = [ "Coins", 1, 8, "" ];  //  (4605)
item [189] = [ "Coins", 1, 70, "" ];  //  (4675)
item [190] = [ "Coins", 1, 48, "" ];  //  (4723)
item [191] = [ "Coins", 1, 8, "" ];  //  (4731)
item [192] = [ "Coins", 1, 48, "" ];  //  (4779)
item [193] = [ "Steel Short Sword", 1, 1, "" ];
item [194] = [ "Body-rune", 1, 8, "Rune" ];  //  (72)
item [195] = [ "iron bar", 1, 3, "" ];
item [196] = [ "Coins", 1, 120, "" ];  //  (4899)
item [197] = [ "Coins", 1, 70, "" ];  //  (4969)
item [198] = [ "iron bar", 1, 3, "" ];
item [199] = [ "Coins", 1, 48, "" ];  //  (5017)
item [200] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [201] = [ "Coins", 1, 15, "" ];  //  (5032)
item [202] = [ "Coins", 1, 48, "" ];  //  (5080)
item [203] = [ "Coins", 1, 8, "" ];  //  (5088)
item [204] = [ "Coins", 1, 48, "" ];  //  (5136)
item [205] = [ "Flour (pot of)", 1, 1, "" ];
item [206] = [ "Medium Steel Helmet", 1, 1, "" ];
item [207] = [ "Coins", 1, 70, "" ];  //  (5206)
item [208] = [ "Coins", 1, 15, "" ];  //  (5221)
item [209] = [ "Coins", 1, 8, "" ];  //  (5229)
item [210] = [ "Coins", 1, 15, "" ];  //  (5244)
item [211] = [ "Water-rune", 1, 20, "Rune" ];  //  (160)
item [212] = [ "Coins", 1, 15, "" ];  //  (5259)
item [213] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (20)
item [214] = [ "Coins", 1, 8, "" ];  //  (5267)
item [215] = [ "Nothing", 1, 0, "" ];
item [216] = [ "iron bar", 1, 3, "" ];
item [217] = [ "iron bar", 1, 3, "" ];
item [218] = [ "Coins", 1, 120, "" ];  //  (5387)
item [219] = [ "Coins", 1, 48, "" ];  //  (5435)
item [220] = [ "Marrentill", 1, 1, "Herb" ];
item [221] = [ "Coins", 1, 48, "" ];  //  (5483)
item [222] = [ "Iron Long Sword", 1, 1, "" ];
item [223] = [ "Coins", 1, 15, "" ];  //  (5498)
item [224] = [ "Coins", 1, 70, "" ];  //  (5568)
item [225] = [ "Coins", 1, 70, "" ];  //  (5638)
item [226] = [ "Coins", 1, 70, "" ];  //  (5708)
item [227] = [ "Coins", 1, 15, "" ];  //  (5723)
item [228] = [ "Coins", 1, 48, "" ];  //  (5771)
item [229] = [ "Nature-rune", 1, 3, "Rune" ];  //  (30)
item [230] = [ "iron bar", 1, 3, "" ];
item [231] = [ "Coins", 1, 15, "" ];  //  (5786)
item [232] = [ "Coins", 1, 48, "" ];  //  (5834)
item [233] = [ "Coins", 1, 2, "" ];  //  (5836)
item [234] = [ "Medium Steel Helmet", 1, 1, "" ];
item [235] = [ "Coins", 1, 8, "" ];  //  (5844)
item [236] = [ "iron bar", 1, 2, "" ];
item [237] = [ "Coins", 1, 2, "" ];  //  (5846)
item [238] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (22)
item [239] = [ "Steel Short Sword", 1, 1, "" ];
item [240] = [ "Coins", 1, 48, "" ];  //  (5894)
item [241] = [ "Guam Leaf", 1, 1, "Herb" ];
item [242] = [ "Coins", 1, 15, "" ];  //  (5909)
item [243] = [ "Coins", 1, 8, "" ];  //  (5917)
item [244] = [ "Coins", 1, 48, "" ];  //  (5965)
item [245] = [ "Coins", 1, 8, "" ];  //  (5973)
item [246] = [ "Coins", 1, 48, "" ];  //  (6021)
item [247] = [ "Coins", 1, 8, "" ];  //  (6029)
item [248] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (24)
item [249] = [ "iron bar", 1, 3, "" ];
item [250] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [251] = [ "Coins", 1, 15, "" ];  //  (6044)
item [252] = [ "Coins", 1, 15, "" ];  //  (6059)
item [253] = [ "Coins", 1, 15, "" ];  //  (6074)
item [254] = [ "Coins", 1, 48, "" ];  //  (6122)
item [255] = [ "Nature-rune", 1, 3, "Rune" ];  //  (33)
item [256] = [ "Coins", 1, 2, "" ];  //  (6124)
item [257] = [ "Coins", 1, 15, "" ];  //  (6139)
item [258] = [ "Flour (pot of)", 1, 1, "" ];
item [259] = [ "Nature-rune", 1, 3, "Rune" ];  //  (36)
item [260] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (26)
item [261] = [ "Marrentill", 1, 1, "Herb" ];
item [262] = [ "Coins", 1, 15, "" ];  //  (6154)
item [263] = [ "Coins", 1, 15, "" ];  //  (6169)
item [264] = [ "Iron Long Sword", 1, 1, "" ];
item [265] = [ "Coins", 1, 8, "" ];  //  (6177)
item [266] = [ "Iron Long Sword", 1, 1, "" ];
item [267] = [ "Coins", 1, 48, "" ];  //  (6225)
item [268] = [ "Coins", 1, 48, "" ];  //  (6273)
item [269] = [ "Coins", 1, 8, "" ];  //  (6281)
item [270] = [ "Coins", 1, 48, "" ];  //  (6329)
item [271] = [ "Coins", 1, 48, "" ];  //  (6377)
item [272] = [ "Coins", 1, 120, "" ];  //  (6497)
item [273] = [ "Coins", 1, 70, "" ];  //  (6567)
item [274] = [ "Coins", 1, 8, "" ];  //  (6575)
item [275] = [ "Medium Steel Helmet", 1, 1, "" ];
item [276] = [ "Coins", 1, 48, "" ];  //  (6623)
item [277] = [ "Medium Steel Helmet", 1, 1, "" ];
item [278] = [ "Mind-rune", 1, 3, "Rune" ];  //  (12)
item [279] = [ "Coins", 1, 15, "" ];  //  (6638)
item [280] = [ "Iron Long Sword", 1, 1, "" ];
item [281] = [ "Medium Steel Helmet", 1, 1, "" ];
item [282] = [ "Coins", 1, 48, "" ];  //  (6686)
item [283] = [ "Coins", 1, 48, "" ];  //  (6734)
item [284] = [ "Marrentill", 1, 1, "Herb" ];
item [285] = [ "Coins", 1, 15, "" ];  //  (6749)
item [286] = [ "Coins", 1, 48, "" ];  //  (6797)
item [287] = [ "Coins", 1, 70, "" ];  //  (6867)
item [288] = [ "Coins", 1, 15, "" ];  //  (6882)
item [289] = [ "Coins", 1, 48, "" ];  //  (6930)
item [290] = [ "Coins", 1, 48, "" ];  //  (6978)
item [291] = [ "Coins", 1, 48, "" ];  //  (7026)
item [292] = [ "iron bar", 1, 3, "" ];
item [293] = [ "Coins", 1, 48, "" ];  //  (7074)
item [294] = [ "Coins", 1, 48, "" ];  //  (7122)
item [295] = [ "Coins", 1, 48, "" ];  //  (7170)
item [296] = [ "Coins", 1, 2, "" ];  //  (7172)
item [297] = [ "iron bar", 1, 3, "" ];
item [298] = [ "Coins", 1, 2, "" ];  //  (7174)
item [299] = [ "Half an apple pie", 1, 1, "" ];
item [300] = [ "Coins", 1, 15, "" ];  //  (7189)
item [301] = [ "Coins", 1, 8, "" ];  //  (7197)
item [302] = [ "Coins", 1, 120, "" ];  //  (7317)
item [303] = [ "Body-rune", 1, 8, "Rune" ];  //  (80)
item [304] = [ "Coins", 1, 15, "" ];  //  (7332)
item [305] = [ "Iron Long Sword", 1, 1, "" ];
item [305] = [ "Coins", 1, 48, "" ];  //  (7380)
item [306] = [ "Coins", 1, 48, "" ];  //  (7428)
item [307] = [ "Coins", 1, 15, "" ];  //  (7443)

runs [0] = [ 307, 308 ];  // kills 308, drops 308

// run 1

// runs [1] = [ x, y ];  // kills ? ( y - 308 ), drops ? ( x - 307 )

/*

item [000] = [ "Coins", 1, 2, "" ];  //  ()
item [000] = [ "Coins", 1, 8, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 48, "" ];  //  ()
item [000] = [ "Coins", 1, 70, "" ];  //  ()
item [000] = [ "Coins", 1, 120, "" ];  //  ()

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

item [000] = [ "Water-rune", 1, 20, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Iron Long Sword", 1, 1, "" ];
item [000] = [ "Steel Short Sword", 1, 1, "" ];

item [000] = [ "Medium Iron Helmet", 1, 1, "" ];
item [000] = [ "Large Iron Helmet", 1, 1, "" ];
item [000] = [ "Medium Steel Helmet", 1, 1, "" ];

item [000] = [ "Longbow", 1, 1, "" ];
item [000] = [ "Flour (pot of)", 1, 1, "" ];
item [000] = [ "Half an apple pie", 1, 1, "" ];

item [000] = [ "iron ore", 1, 1, "" ];

item [000] = [ "iron bar", 1, 1, "" ];
item [000] = [ "iron bar", 1, 2, "" ];
item [000] = [ "iron bar", 1, 3, "" ];
item [000] = [ "steel bar", 1, 1, "" ];
item [000] = [ "steel bar", 1, 2, "" ];
item [000] = [ "steel bar", 1, 3, "" ];
item [000] = [ "gold bar", 1, 1, "" ];

item  [000] = [ "Half of a key (Loop)", 1, 1, "" ];
item  [000] = [ "Half of a key (Teeth)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "White Knight";        // monster's name
var mcbl = 56;                     // monster's combat level
var mindex = 126;                  // index into monster data base
var mrpt = 1;                      // number of non-breaking space to add after index name