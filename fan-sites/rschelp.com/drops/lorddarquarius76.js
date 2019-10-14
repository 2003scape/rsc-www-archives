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

var notes = "Re-spawn time is 1 min.";

// run 1

item   [0] = [ "Coins", 1, 1, "" ];  //  (1)
item   [1] = [ "Coins", 1, 35, "" ];  //  (36)
item   [2] = [ "Coins", 1, 35, "" ];  //  (71)
item   [3] = [ "Coins", 1, 12, "" ];  //  (83)
item   [4] = [ "Coins", 1, 35, "" ];  //  (118)
item   [5] = [ "Coins", 1, 58, "" ];  //  (176)
item   [6] = [ "Coins", 1, 58, "" ];  //  (234)
item   [7] = [ "Coins", 1, 35, "" ];  //  (269)
item   [8] = [ "Coins", 1, 1, "" ];  //  (270)
item   [9] = [ "Coins", 1, 35, "" ];  //  (305)
item  [10] = [ "Coins", 1, 80, "" ];  //  (385)
item  [11] = [ "Coins", 1, 6, "" ];  //  (391)
item  [12] = [ "steel bar", 1, 1, "" ];
item  [13] = [ "Nothing", 1, 0, "" ];
item  [14] = [ "Coins", 1, 6, "" ];  //  (397)
item  [15] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item  [16] = [ "Coins", 1, 35, "" ];  //  (432)
item  [17] = [ "Coins", 1, 35, "" ];  //  (467)
item  [18] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [19] = [ "Earth-rune", 1, 7, "Rune" ];  //  (7)
item  [20] = [ "Coins", 1, 1, "" ];  //  (468)
item  [21] = [ "Coins", 1, 12, "" ];  //  (480)
item  [22] = [ "Coins", 1, 6, "" ];  //  (486)
item  [23] = [ "Coins", 1, 1, "" ];  //  (487)
item  [24] = [ "Earth-rune", 1, 7, "Rune" ];  //  (14)
item  [25] = [ "Body-rune", 1, 6, "Rune" ];  //  (6)
item  [26] = [ "Coins", 1, 12, "" ];  //  (499)
item  [27] = [ "Coins", 1, 6, "" ];  //  (505)
item  [28] = [ "Iron Short Sword", 1, 1, "" ];
item  [29] = [ "Coins", 1, 35, "" ];  //  (540)
item  [30] = [ "Coins", 1, 35, "" ];  //  (575)
item  [31] = [ "Coins", 1, 1, "" ];  //  (576)
item  [32] = [ "Coins", 1, 35, "" ];  //  (611)
item  [33] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item  [34] = [ "Coins", 1, 12, "" ];  //  (623)
item  [35] = [ "Coins", 1, 35, "" ];  //  (658)
item  [36] = [ "Mind-rune", 1, 1, "Rune" ];  //  (1)
item  [37] = [ "Body-rune", 1, 6, "Rune" ];  //  (12)
item  [38] = [ "Coins", 1, 58, "" ];  //  (716)
item  [39] = [ "steel bar", 1, 1, "" ];
item  [40] = [ "Coins", 1, 35, "" ];  //  (751)
item  [41] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item  [42] = [ "Body-rune", 1, 6, "Rune" ];  //  (18)
item  [43] = [ "Coins", 1, 35, "" ];  //  (786)
item  [44] = [ "Coins", 1, 1, "" ];  //  (787)
item  [45] = [ "Coins", 1, 35, "" ];  //  (822)
item  [46] = [ "Coins", 1, 12, "" ];  //  (834)
item  [47] = [ "Coins", 1, 35, "" ];  //  (869)
item  [48] = [ "Coins", 1, 12, "" ];  //  (881)
item  [49] = [ "Coins", 1, 58, "" ];  //  (939)
item  [50] = [ "Coins", 1, 12, "" ];  //  (951)
item  [51] = [ "Coins", 1, 35, "" ];  //  (986)
item  [52] = [ "Large Iron Helmet", 1, 1, "" ];
item  [53] = [ "Coins", 1, 6, "" ];  //  (992)
item  [54] = [ "Coins", 1, 12, "" ];  //  (1004)
item  [55] = [ "Coins", 1, 1, "" ];  //  (1005)
item  [56] = [ "Coins", 1, 1, "" ];  //  (1006)
item  [57] = [ "Coins", 1, 58, "" ];  //  (1064)
item  [58] = [ "bread", 1, 1, "" ];
item  [59] = [ "Coins", 1, 12, "" ];  //  (1076)
item  [60] = [ "Body-rune", 1, 6, "Rune" ];  //  (24)
item  [61] = [ "Coins", 1, 58, "" ];  //  (1134)
item  [62] = [ "Coins", 1, 6, "" ];  //  (1140)
item  [63] = [ "steel bar", 1, 1, "" ];
item  [64] = [ "Body-rune", 1, 6, "Rune" ];  //  (30)
item  [65] = [ "Iron Short Sword", 1, 1, "" ];
item  [66] = [ "steel bar", 1, 1, "" ];
item  [67] = [ "Coins", 1, 1, "" ];  //  (1141)
item  [68] = [ "Body-rune", 1, 6, "Rune" ];  //  (36)
item  [69] = [ "Coins", 1, 6, "" ];  //  (1147)
item  [70] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item  [71] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [72] = [ "Coins", 1, 35, "" ];  //  (1182)
item  [73] = [ "Coins", 1, 6, "" ];  //  (1188)
item  [74] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (8)
item  [75] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (12)
item  [76] = [ "Large Iron Helmet", 1, 1, "" ];
item  [77] = [ "Coins", 1, 6, "" ];  //  (1194)
item  [78] = [ "Coins", 1, 35, "" ];  //  (1229)
item  [79] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [80] = [ "Coins", 1, 35, "" ];  //  (1264)
item  [81] = [ "Coins", 1, 35, "" ];  //  (1299)
item  [82] = [ "bread", 1, 1, "" ];
item  [83] = [ "Coins", 1, 6, "" ];  //  (1305)
item  [84] = [ "Coins", 1, 35, "" ];  //  (1340)
item  [85] = [ "Shortbow", 1, 1, "" ];
item  [86] = [ "Coins", 1, 6, "" ];  //  (1346)
item  [87] = [ "Cadantine", 1, 1, "Herb" ];
item  [88] = [ "Coins", 1, 6, "" ];  //  (1352)
item  [89] = [ "Marrentill", 1, 1, "Herb" ];
item  [90] = [ "Coins", 1, 35, "" ];  //  (1387)
item  [91] = [ "Coins", 1, 6, "" ];  //  (1393)
item  [92] = [ "Coins", 1, 58, "" ];  //  (1451)
item  [93] = [ "Coins", 1, 35, "" ];  //  (1486)
item  [94] = [ "Coins", 1, 1, "" ];  //  (1487)
item  [95] = [ "Coins", 1, 35, "" ];  //  (1522)

runs [0] = [ 95, 96 ];  // kills 96, drops 96

// run 2

item  [96] = [ "Coins", 1, 6, "" ];  //  (6)
item  [97] = [ "Iron Short Sword", 1, 1, "" ];
item  [98] = [ "Coins", 1, 35, "" ];  //  (41)
item  [99] = [ "Coins", 1, 80, "" ];  //  (121)
item [100] = [ "Coins", 1, 58, "" ];  //  (179)
item [101] = [ "Coins", 1, 12, "" ];  //  (191)
item [102] = [ "tin ore", 1, 1, "" ];
item [103] = [ "Iron Short Sword", 1, 1, "" ];
item [104] = [ "Coins", 1, 35, "" ];  //  (226)
item [105] = [ "Coins", 1, 35, "" ];  //  (261)
item [106] = [ "Coins", 1, 58, "" ];  //  (319)
item [107] = [ "Nothing", 1, 0, "" ];
item [108] = [ "Coins", 1, 35, "" ];  //  (354)
item [109] = [ "Coins", 1, 35, "" ];  //  (389)
item [110] = [ "Coins", 1, 12, "" ];  //  (401)
item [111] = [ "Coins", 1, 35, "" ];  //  (436)
item [112] = [ "Coins", 1, 35, "" ];  //  (471)
item [113] = [ "Coins", 1, 6, "" ];  //  (477)
item [114] = [ "Coins", 1, 35, "" ];  //  (512)
item [115] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item [116] = [ "Coins", 1, 6, "" ];  //  (518)
item [117] = [ "Coins", 1, 12, "" ];  //  (530)
item [118] = [ "Coins", 1, 12, "" ];  //  (542)
item [119] = [ "Coins", 1, 35, "" ];  //  (577)
item [120] = [ "Coins", 1, 58, "" ];  //  (635)
item [121] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item [122] = [ "Coins", 1, 1, "" ];  //  (636)
item [123] = [ "Iron Short Sword", 1, 1, "" ];
item [124] = [ "Marrentill", 1, 1, "Herb" ];
item [125] = [ "Coins", 1, 35, "" ];  //  (671)
item [126] = [ "Coins", 1, 12, "" ];  //  (683)
item [127] = [ "Coins", 1, 35, "" ];  //  (718)
item [128] = [ "Coins", 1, 80, "" ];  //  (798)
item [129] = [ "Coins", 1, 58, "" ];  //  (856)
item [130] = [ "Coins", 1, 12, "" ];  //  (868)
item [131] = [ "Coins", 1, 6, "" ];  //  (874)
item [132] = [ "Coins", 1, 35, "" ];  //  (909)
item [133] = [ "Coins", 1, 35, "" ];  //  (944)
item [134] = [ "Coins", 1, 35, "" ];  //  (979)
item [135] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [136] = [ "Coins", 1, 35, "" ];  //  (1014)
item [137] = [ "Coins", 1, 1, "" ];  //  (1015)
item [138] = [ "Large Iron Helmet", 1, 1, "" ];
item [139] = [ "Coins", 1, 35, "" ];  //  (1050)
item [140] = [ "Coins", 1, 6, "" ];  //  (1056)
item [141] = [ "steel bar", 1, 1, "" ];
item [142] = [ "Coins", 1, 1, "" ];  //  (1057)
item [143] = [ "Coins", 1, 6, "" ];  //  (1063)
item [144] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (8)
item [145] = [ "Coins", 1, 1, "" ];  //  (1064)
item [146] = [ "Coins", 1, 6, "" ];  //  (1070)
item [147] = [ "Coins", 1, 35, "" ];  //  (1105)
item [148] = [ "Coins", 1, 12, "" ];  //  (1117)
item [149] = [ "Coins", 1, 12, "" ];  //  (1129)
item [150] = [ "steel bar", 1, 1, "" ];
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Coins", 1, 58, "" ];  //  (1187)
item [153] = [ "Irit Leaf", 1, 1, "Herb" ];
item [154] = [ "Coins", 1, 35, "" ];  //  (1222)
item [155] = [ "Coins", 1, 35, "" ];  //  (1257)
item [156] = [ "Coins", 1, 35, "" ];  //  (1292)
item [157] = [ "Coins", 1, 35, "" ];  //  (1327)
item [158] = [ "Coins", 1, 35, "" ];  //  (1362)
item [159] = [ "Coins", 1, 12, "" ];  //  (1374)
item [160] = [ "Coins", 1, 35, "" ];  //  (1409)
item [161] = [ "Coins", 1, 1, "" ];  //  (1410)
item [162] = [ "Coins", 1, 1, "" ];  //  (1411)
item [163] = [ "Coins", 1, 35, "" ];  //  (1446)
item [164] = [ "steel bar", 1, 1, "" ];
item [165] = [ "Coins", 1, 12, "" ];  //  (1458)
item [166] = [ "steel bar", 1, 1, "" ];
item [167] = [ "Coins", 1, 35, "" ];  //  (1493)

runs [1] = [ 167, 168 ];  // kills 72, drops 72

// run 3

item [168] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item [169] = [ "Coins", 1, 35, "" ];  //  (35)
item [170] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (8)
item [171] = [ "Coins", 1, 35, "" ];  //  (70)
item [172] = [ "Coins", 1, 58, "" ];  //  (128)
item [173] = [ "Coins", 1, 35, "" ];  //  (163)
item [174] = [ "Coins", 1, 58, "" ];  //  (221)
item [175] = [ "Coins", 1, 6, "" ];  //  (227)
item [176] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (12)
item [177] = [ "tin ore", 1, 1, "" ];
item [178] = [ "Coins", 1, 35, "" ];  //  (262)
item [179] = [ "steel bar", 1, 1, "" ];
item [180] = [ "Coins", 1, 58, "" ];  //  (320)
item [181] = [ "Coins", 1, 35, "" ];  //  (355)
item [182] = [ "Coins", 1, 12, "" ];  //  (367)
item [183] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (16)
item [184] = [ "Coins", 1, 35, "" ];  //  (402)
item [185] = [ "Coins", 1, 35, "" ];  //  (437)
item [186] = [ "Coins", 1, 58, "" ];  //  (495)
item [187] = [ "Coins", 1, 58, "" ];  //  (553)
item [188] = [ "Coins", 1, 12, "" ];  //  (565)
item [189] = [ "Coins", 1, 35, "" ];  //  (600)
item [190] = [ "Coins", 1, 12, "" ];  //  (612)
item [191] = [ "Coins", 1, 12, "" ];  //  (624)
item [192] = [ "Coins", 1, 12, "" ];  //  (636)
item [193] = [ "Coins", 1, 35, "" ];  //  (671)
item [194] = [ "Coins", 1, 12, "" ];  //  (683)
item [195] = [ "Coins", 1, 35, "" ];  //  (718)
item [196] = [ "Earth-rune", 1, 7, "Rune" ];  //  (7)
item [197] = [ "Coins", 1, 12, "" ];  //  (730)
item [198] = [ "Coins", 1, 35, "" ];  //  (765)
item [199] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [200] = [ "Coins", 1, 35, "" ];  //  (800)
item [201] = [ "bread", 1, 1, "" ];
item [202] = [ "uncut emerald", 1, 1, "Gem" ];
item [203] = [ "Coins", 1, 6, "" ];  //  (806)
item [204] = [ "Coins", 1, 35, "" ];  //  (841)
item [205] = [ "Coins", 1, 12, "" ];  //  (853)
item [206] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [207] = [ "Large Iron Helmet", 1, 1, "" ];
item [208] = [ "steel bar", 1, 1, "" ];
item [209] = [ "Coins", 1, 35, "" ];  //  (888)
item [210] = [ "Coins", 1, 6, "" ];  //  (894)
item [211] = [ "Mind-rune", 1, 1, "Rune" ];  //  (1)
item [212] = [ "Coins", 1, 1, "" ];  //  (895)
item [213] = [ "Mind-rune", 1, 1, "Rune" ];  //  (2)
item [214] = [ "Coins", 1, 1, "" ];  //  (896)
item [215] = [ "Coins", 1, 35, "" ];  //  (931)
item [216] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [217] = [ "Coins", 1, 58, "" ];  //  (989)
item [218] = [ "Coins", 1, 12, "" ];  //  (1001)
item [219] = [ "Nothing", 1, 0, "" ];
item [220] = [ "Nothing", 1, 0, "" ];
item [221] = [ "Nothing", 1, 0, "" ];
item [222] = [ "Coins", 1, 6, "" ];  //  (1007)
item [223] = [ "Coins", 1, 35, "" ];  //  (1042)
item [224] = [ "Coins", 1, 35, "" ];  //  (1077)
item [225] = [ "Coins", 1, 35, "" ];  //  (1112)
item [226] = [ "Coins", 1, 12, "" ];  //  (1124)
item [227] = [ "Large Iron Helmet", 1, 1, "" ];
item [228] = [ "Coins", 1, 35, "" ];  //  (1159)
item [229] = [ "Coins", 1, 35, "" ];  //  (1194)
item [230] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (20)
item [231] = [ "Earth-rune", 1, 7, "Rune" ];  //  (14)
item [232] = [ "Coins", 1, 12, "" ];  //  (1206)
item [233] = [ "Coins", 1, 6, "" ];  //  (1212)
item [234] = [ "Coins", 1, 1, "" ];  //  (1213)
item [235] = [ "Iron Short Sword", 1, 1, "" ];

runs [2] = [ 235, 236 ];  // kills 68, drops 68

// run 4

item [236] = [ "Coins", 1, 6, "" ];  //  (6)
item [237] = [ "Coins", 1, 35, "" ];  //  (41)
item [238] = [ "Coins", 1, 58, "" ];  //  (99)
item [239] = [ "Coins", 1, 35, "" ];  //  (134)
item [240] = [ "Coins", 1, 35, "" ];  //  (169)
item [241] = [ "Coins", 1, 12, "" ];  //  (181)
item [242] = [ "Coins", 1, 35, "" ];  //  (216)
item [243] = [ "Coins", 1, 12, "" ];  //  (228)
item [244] = [ "Chaos-rune", 1, 4, "Rune" ];  //  (4)
item [245] = [ "Large Iron Helmet", 1, 1, "" ];
item [246] = [ "Coins", 1, 58, "" ];  //  (286)
item [247] = [ "Large Iron Helmet", 1, 1, "" ];
item [248] = [ "Coins", 1, 58, "" ];  //  (344)
item [249] = [ "Coins", 1, 12, "" ];  //  (356)
item [250] = [ "Nothing", 1, 0, "" ];
item [251] = [ "Coins", 1, 35, "" ];  //  (391)
item [252] = [ "Coins", 1, 6, "" ];  //  (397)
item [253] = [ "Coins", 1, 12, "" ];  //  (409)
item [254] = [ "Coins", 1, 35, "" ];  //  (444)
item [255] = [ "Coins", 1, 58, "" ];  //  (502)
item [256] = [ "Coins", 1, 12, "" ];  //  (514)
item [257] = [ "bread", 1, 1, "" ];
item [258] = [ "Coins", 1, 6, "" ];  //  (520)
item [259] = [ "Coins", 1, 1, "" ];  //  (521)
item [260] = [ "Coins", 1, 35, "" ];  //  (556)
item [261] = [ "uncut emerald", 1, 1, "Gem" ];
item [262] = [ "Body-rune", 1, 6, "Rune" ];  //  (6)
item [263] = [ "steel bar", 1, 1, "" ];
item [264] = [ "Coins", 1, 35, "" ];  //  (591)
item [265] = [ "Coins", 1, 12, "" ];  //  (603)
item [266] = [ "Large Iron Helmet", 1, 1, "" ];
item [267] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [268] = [ "Coins", 1, 58, "" ];  //  (661)
item [269] = [ "Iron Short Sword", 1, 1, "" ];
item [270] = [ "Coins", 1, 35, "" ];  //  (696)
item [271] = [ "Coins", 1, 35, "" ];  //  (731)
item [272] = [ "Coins", 1, 1, "" ];  //  (732)
item [273] = [ "Coins", 1, 1, "" ];  //  (733)
item [274] = [ "steel bar", 1, 1, "" ];
item [275] = [ "Coins", 1, 35, "" ];  //  (768)
item [276] = [ "Coins", 1, 12, "" ];  //  (780)
item [277] = [ "steel bar", 1, 1, "" ];
item [278] = [ "Coins", 1, 6, "" ];  //  (786)
item [279] = [ "Coins", 1, 35, "" ];  //  (821)
item [280] = [ "Coins", 1, 35, "" ];  //  (856)
item [281] = [ "Coins", 1, 1, "" ];  //  (857)
item [282] = [ "steel bar", 1, 1, "" ];
item [283] = [ "Coins", 1, 35, "" ];  //  (892)
item [284] = [ "Coins", 1, 12, "" ];  //  (904)
item [285] = [ "Coins", 1, 58, "" ];  //  (962)
item [286] = [ "steel bar", 1, 1, "" ];
item [287] = [ "Coins", 1, 12, "" ];  //  (974)
item [288] = [ "Iron Short Sword", 1, 1, "" ];
item [289] = [ "steel bar", 1, 1, "" ];
item [290] = [ "Tarromin", 1, 1, "Herb" ];
item [291] = [ "Tarromin", 1, 1, "Herb" ];
item [292] = [ "Coins", 1, 35, "" ];  //  (1009)
item [293] = [ "Coins", 1, 58, "" ];  //  (1067)
item [294] = [ "Coins", 1, 35, "" ];  //  (1102)
item [295] = [ "Coins", 1, 1, "" ];  //  (1103)
item [296] = [ "Coins", 1, 58, "" ];  //  (1161)
item [297] = [ "Coins", 1, 35, "" ];  //  (1196)
item [298] = [ "Coins", 1, 35, "" ];  //  (1231)
item [299] = [ "steel bar", 1, 1, "" ];
item [300] = [ "Coins", 1, 35, "" ];  //  (1266)

runs [3] = [ 300, 301 ];  // kills 65, drops 65

// run 5


// runs [4] = [ x, y ];  // kills ? ( y - 301 ), drops ? ( x - 300 )

/*

item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 6, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 35, "" ];  //  ()
item [000] = [ "Coins", 1, 58, "" ];  //  ()
item [000] = [ "Coins", 1, 80, "" ];  //  ()

item [000] = [ "Water-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

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

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Iron Long Sword", 1, 1, "" ];
item [000] = [ "Iron battle Axe", 1, 1, "" ];
item [000] = [ "Black 2-handed Sword", 1, 1, "" ];
item [000] = [ "Steel Axe", 1, 1, "" ];
item [000] = [ "Steel Mace", 1, 1, "" ];

item [000] = [ "Large Iron Helmet", 1, 1, "" ];
item [000] = [ "Iron Plate Mail Body", 1, 1, "" ];
item [000] = [ "Black Square Shield", 1, 1, "" ];
item [000] = [ "Medium Mithril Helmet", 1, 1, "" ];

item [000] = [ "Shortbow", 1, 1, "" ];
item [000] = [ "Flour (pot of)", 1, 1, "" ];
item [000] = [ "bread", 1, 1, "" ];

item [000] = [ "tin ore", 1, 1, "" ];
item [000] = [ "iron bar", 1, 1, "" ];
item [000] = [ "steel bar", 1, 1, "" ];
item [000] = [ "mithril bar", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Lord Darquarius";        // monster's name
var mcbl = 76;                        // monster's combat level
var mindex = 146;                     // index into monster data base
var mrpt = 1;                         // number of non-breaking space to add after index name