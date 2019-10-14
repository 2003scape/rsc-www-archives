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

item   [0] = [ "uncut emerald", 1, 1, "Gem" ];
item   [1] = [ "Coins", 1, 4, "" ];  //  (4)
item   [2] = [ "Eye patch", 1, 1, "" ];
item   [3] = [ "Coins", 1, 4, "" ];  //  (8)
item   [4] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item   [5] = [ "Nothing", 1, 0, "" ];
item   [6] = [ "Coins", 1, 4, "" ];  //  (12)
item   [7] = [ "Coins", 1, 4, "" ];  //  (16)
item   [8] = [ "Coins", 1, 4, "" ];  //  (20)
item   [9] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  10  (9)

item  [10] = [ "Coins", 1, 7, "" ];  //  (27)
item  [11] = [ "Coins", 1, 25, "" ];  //  (52)
item  [12] = [ "Coins", 1, 4, "" ];  //  (56)
item  [13] = [ "Nothing", 1, 0, "" ];
item  [14] = [ "Coins", 1, 4, "" ];  //  (60)
item  [15] = [ "Bronze Scimitar", 1, 1, "" ];
item  [16] = [ "Eye patch", 1, 1, "" ];
item  [17] = [ "Iron dagger", 2, 1, "" ];
item  [18] = [ "Bronze Scimitar", 1, 1, "" ];
item  [19] = [ "Nothing", 1, 0, "" ];
item  [20] = [ "Nothing", 1, 0, "" ];  //  20

item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Nature-rune", 1, 1, "Rune" ];  //  (1)
item  [23] = [ "Iron dagger", 2, 1, "" ];
item  [24] = [ "Bronze Scimitar", 1, 1, "" ];
item  [25] = [ "Coins", 1, 4, "" ];  //  (64)
item  [26] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (21)
item  [27] = [ "Coins", 1, 4, "" ];  //  (68)
item  [28] = [ "Fire-rune", 1, 3, "Rune" ];  //  (3)
item  [29] = [ "Coins", 1, 25, "" ];  //  (93)
item  [30] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (2)
item  [31] = [ "Coins", 1, 4, "" ];  //  30  (97)

item  [32] = [ "Coins", 1, 4, "" ];  //  (101)
item  [33] = [ "Coins", 1, 7, "" ];  //  (108)
item  [34] = [ "Coins", 1, 25, "" ];  //  (133)
item  [35] = [ "Coins", 1, 4, "" ];  //  (137)
item  [36] = [ "Coins", 1, 7, "" ];  //  (144)
item  [37] = [ "Coins", 1, 7, "" ];  //  (151)
item  [38] = [ "Nothing", 1, 0, "" ];
item  [39] = [ "Nothing", 1, 0, "" ];
item  [40] = [ "Coins", 1, 35, "" ];  //  (186)
item  [41] = [ "Coins", 1, 25, "" ];  //  40  (211)

item  [42] = [ "Coins", 1, 55, "" ];  //  (266)
item  [43] = [ "Eye patch", 1, 1, "" ];
item  [44] = [ "Nothing", 1, 0, "" ];
item  [45] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (3)
item  [46] = [ "Coins", 1, 4, "" ];  //  (270)
item  [47] = [ "Coins", 1, 25, "" ];  //  (295)
item  [48] = [ "Coins", 1, 12, "" ];  //  (307)
item  [49] = [ "Coins", 1, 4, "" ];  //  (311)
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Coins", 1, 4, "" ];  //  50  (315)

item  [52] = [ "Coins", 1, 7, "" ];  //  (322)
item  [53] = [ "Coins", 1, 4, "" ];  //  (326)
item  [54] = [ "Air-rune", 1, 7, "Rune" ];  //  (7)
item  [55] = [ "Coins", 1, 4, "" ];  //  (330)
item  [56] = [ "Nothing", 1, 0, "" ];
item  [57] = [ "Nature-rune", 1, 1, "Rune" ];  //  (2)
item  [58] = [ "Coins", 1, 4, "" ];  //  (334)
item  [59] = [ "Coins", 1, 35, "" ];  //  (369)
item  [60] = [ "Eye patch", 1, 1, "" ];
item  [61] = [ "Coins", 1, 12, "" ];  //  60  (381)

item  [62] = [ "Coins", 1, 4, "" ];  //  (385)
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Iron dagger", 2, 1, "" ];
item  [65] = [ "Bronze Scimitar", 1, 1, "" ];
item  [66] = [ "Coins", 1, 12, "" ];  //  (397)
item  [67] = [ "Coins", 1, 12, "" ];  //  (409)
item  [68] = [ "Bronze Scimitar", 1, 1, "" ];
item  [69] = [ "Eye patch", 1, 1, "" ];
item  [70] = [ "Nothing", 1, 0, "" ];
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Nature-rune", 1, 1, "Rune" ];  //  70  (3)

item  [73] = [ "Coins", 1, 12, "" ];  //  (421)
item  [74] = [ "Fire-rune", 1, 3, "Rune" ];  //  (6)
item  [75] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (33)
item  [76] = [ "Coins", 1, 25, "" ];  //  (446)
item  [77] = [ "Coins", 1, 4, "" ];  //  (450)
item  [78] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (42)
item  [79] = [ "Bronze Scimitar", 1, 1, "" ];
item  [80] = [ "Air-rune", 1, 7, "Rune" ];  //  (14)
item  [81] = [ "Iron Plate Mail Body", 1, 1, "" ];
item  [82] = [ "Coins", 1, 4, "" ];  //  80  (454)

item  [83] = [ "Coins", 1, 4, "" ];  //  (458)
item  [84] = [ "Coins", 1, 4, "" ];  //  (462)
item  [85] = [ "Coins", 1, 25, "" ];  //  (487)
item  [86] = [ "Coins", 1, 4, "" ];  //  (491)
item  [87] = [ "Nature-rune", 1, 1, "Rune" ];  //  (4)
item  [88] = [ "Coins", 1, 4, "" ];  //  (495)
item  [89] = [ "Iron dagger", 2, 1, "" ];
item  [90] = [ "Bronze Scimitar", 1, 1, "" ];
item  [91] = [ "Coins", 1, 4, "" ];  //  (499)
item  [92] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (4)
item  [93] = [ "Coins", 1, 4, "" ];  //  90  (503)

item  [94] = [ "Coins", 1, 25, "" ];  //  (528)
item  [95] = [ "Coins", 1, 25, "" ];  //  (553)
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Eye patch", 1, 1, "" ];
item  [98] = [ "Coins", 1, 7, "" ];  //  (560)
item  [99] = [ "Coins", 1, 4, "" ];  //  (564)
item [100] = [ "Coins", 1, 4, "" ];  //  (568)
item [101] = [ "Earth-rune", 1, 6, "Rune" ];  //  (6)
item [102] = [ "Coins", 1, 4, "" ];  //  (572)
item [103] = [ "Coins", 1, 4, "" ];  //  100  (576)

item [104] = [ "Nature-rune", 1, 1, "Rune" ];  //  (5)
item [105] = [ "Iron Plate Mail Body", 1, 1, "" ];
item [106] = [ "Coins", 1, 4, "" ];  //  (580)
item [107] = [ "Eye patch", 1, 1, "" ];
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Coins", 1, 4, "" ];  //  (584)
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Nothing", 1, 0, "" ];
item [112] = [ "Coins", 1, 7, "" ];  //  (591)
item [113] = [ "Coins", 1, 4, "" ];  //  110  (595)

item [114] = [ "Coins", 1, 4, "" ];  //  (599)
item [115] = [ "Coins", 1, 4, "" ];  //  (603)
item [116] = [ "Coins", 1, 25, "" ];  //  (628)
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (5)
item [119] = [ "Eye patch", 1, 1, "" ];
item [120] = [ "Coins", 1, 12, "" ];  //  (640)
item [121] = [ "Nothing", 1, 0, "" ];
item [122] = [ "Eye patch", 1, 1, "" ];
item [123] = [ "Nothing", 1, 0, "" ];  //  120

item [124] = [ "Coins", 1, 7, "" ];  //  (647)
item [125] = [ "Coins", 1, 35, "" ];  //  (682)
item [126] = [ "iron bar", 1, 1, "" ];
item [127] = [ "iron bar", 1, 1, "" ];
item [128] = [ "Eye patch", 1, 1, "" ];
item [129] = [ "Iron Plate Mail Body", 1, 1, "" ];
item [130] = [ "Coins", 1, 4, "" ];  //  (686)
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Iron dagger", 2, 1, "" ];
item [133] = [ "Bronze Scimitar", 1, 1, "" ];
item [134] = [ "Coins", 1, 25, "" ];  //  130  (711)

item [135] = [ "Nothing", 1, 0, "" ];
item [136] = [ "Coins", 1, 12, "" ];  //  (723)
item [137] = [ "Coins", 1, 25, "" ];  //  (748)
item [138] = [ "Coins", 1, 4, "" ];  //  (752)
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Eye patch", 1, 1, "" ];
item [141] = [ "Earth-rune", 1, 6, "Rune" ];  //  (12)
item [142] = [ "Coins", 1, 4, "" ];  //  (756)
item [143] = [ "Iron dagger", 2, 1, "" ];
item [144] = [ "Bronze Scimitar", 1, 1, "" ];
item [145] = [ "Nature-rune", 1, 1, "Rune" ];  //  140  (6)

item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Eye patch", 1, 1, "" ];
item [148] = [ "Coins", 1, 4, "" ];  //  (760)
item [149] = [ "Coins", 1, 4, "" ];  //  (764)
item [150] = [ "Coins", 1, 4, "" ];  //  (768)
item [151] = [ "Coins", 1, 12, "" ];  //  (780)
item [152] = [ "iron bar", 1, 1, "" ];
item [153] = [ "Coins", 1, 7, "" ];  //  (787)
item [154] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (6)
item [155] = [ "Coins", 1, 4, "" ];  //  150  (791)

item [156] = [ "Coins", 1, 4, "" ];  //  (795)
item [157] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [158] = [ "Iron dagger", 2, 1, "" ];
item [159] = [ "Bronze Scimitar", 1, 1, "" ];
item [160] = [ "Chef's hat", 1, 1, "" ];
item [161] = [ "Nothing", 1, 0, "" ];
item [162] = [ "Coins", 1, 4, "" ];  //  (799)
item [163] = [ "Coins", 1, 7, "" ];  //  (806)
item [164] = [ "Eye patch", 1, 1, "" ];
item [165] = [ "Eye patch", 1, 1, "" ];
item [166] = [ "Coins", 1, 4, "" ];  //  160  (810)

item [167] = [ "Fire-rune", 1, 3, "Rune" ];  //  (9)
item [168] = [ "Eye patch", 1, 1, "" ];
item [169] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (7)
item [170] = [ "Coins", 1, 7, "" ];  //  (817)
item [171] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (54)
item [172] = [ "Iron dagger", 2, 1, "" ];
item [173] = [ "Bronze Scimitar", 1, 1, "" ];
item [174] = [ "Coins", 1, 12, "" ];  //  (829)
item [175] = [ "Coins", 1, 4, "" ];  //  (833)
item [176] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (63)
item [177] = [ "Coins", 1, 4, "" ];  //  170  (837)

item [178] = [ "Nature-rune", 1, 1, "Rune" ];  //  (7)
item [179] = [ "Air-rune", 1, 7, "Rune" ];  //  (21)
item [180] = [ "Coins", 1, 4, "" ];  //  (841)
item [181] = [ "Coins", 1, 7, "" ];  //  (848)
item [182] = [ "Coins", 1, 12, "" ];  //  (860)
item [183] = [ "Coins", 1, 4, "" ];  //  (864)
item [184] = [ "Coins", 1, 25, "" ];  //  (889)
item [185] = [ "Eye patch", 1, 1, "" ];
item [186] = [ "Nothing", 1, 0, "" ];
item [187] = [ "Fire-rune", 1, 3, "Rune" ];  //  180  (12)

item [188] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (72)
item [189] = [ "Bronze Scimitar", 1, 1, "" ];
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Coins", 1, 4, "" ];  //  (893)
item [192] = [ "Iron dagger", 2, 1, "" ];
item [193] = [ "Bronze Scimitar", 1, 1, "" ];
item [194] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (8)
item [195] = [ "Bronze Scimitar", 1, 1, "" ];
item [196] = [ "Coins", 1, 4, "" ];  //  (897)
item [197] = [ "Coins", 1, 4, "" ];  //  (901)
item [198] = [ "Nothing", 1, 0, "" ];  //  190

item [199] = [ "Nature-rune", 1, 1, "Rune" ];  //  (8)
item [200] = [ "Iron dagger", 2, 1, "" ];
item [201] = [ "Bronze Scimitar", 1, 1, "" ];
item [202] = [ "Coins", 1, 4, "" ];  //  (905)
item [203] = [ "Iron dagger", 2, 1, "" ];
item [204] = [ "Bronze Scimitar", 1, 1, "" ];
item [205] = [ "Coins", 1, 7, "" ];  //  (912)
item [206] = [ "Coins", 1, 7, "" ];  //  (919)
item [207] = [ "Bronze Scimitar", 1, 1, "" ];
item [208] = [ "Coins", 1, 12, "" ];  //  (931)
item [209] = [ "Coins", 1, 4, "" ];  //  (935)
item [210] = [ "Nothing", 1, 0, "" ];  //  200

item [211] = [ "Coins", 1, 25, "" ];  //  (960)
item [212] = [ "Eye patch", 1, 1, "" ];
item [213] = [ "Nothing", 1, 0, "" ];
item [214] = [ "Eye patch", 1, 1, "" ];
item [215] = [ "Eye patch", 1, 1, "" ];
item [216] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (9)
item [217] = [ "Nothing", 1, 0, "" ];
item [218] = [ "Nature-rune", 1, 1, "Rune" ];  //  (9)
item [219] = [ "Coins", 1, 25, "" ];  //  (985)
item [220] = [ "Iron Plate Mail Body", 1, 1, "" ];  //  210

item [221] = [ "Coins", 1, 4, "" ];  //  (989)
item [222] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (81)
item [223] = [ "Eye patch", 1, 1, "" ];
item [224] = [ "Coins", 1, 4, "" ];  //  (993)
item [225] = [ "Bronze Scimitar", 1, 1, "" ];
item [226] = [ "Eye patch", 1, 1, "" ];
item [227] = [ "Nature-rune", 1, 1, "Rune" ];  //  (10)
item [228] = [ "Coins", 1, 4, "" ];  //  (997)
item [229] = [ "Coins", 1, 7, "" ];  //  (1004)
item [230] = [ "Nothing", 1, 0, "" ];  //  220

item [231] = [ "Coins", 1, 4, "" ];  //  (1008)
item [232] = [ "Nothing", 1, 0, "" ];
item [233] = [ "Earth-rune", 1, 6, "Rune" ];  //  (18)
item [234] = [ "Coins", 1, 4, "" ];  //  (1012)
item [235] = [ "Eye patch", 1, 1, "" ];
item [236] = [ "Coins", 1, 7, "" ];  //  (1019)
item [237] = [ "Coins", 1, 25, "" ];  //  (1044)
item [238] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (90)
item [239] = [ "Coins", 1, 4, "" ];  //  (1048)
item [240] = [ "Air-rune", 1, 7, "Rune" ];  //  230  (28)

item [241] = [ "Coins", 1, 12, "" ];  //  (1060)
item [242] = [ "Nature-rune", 1, 1, "Rune" ];  //  (11)
item [243] = [ "Coins", 1, 4, "" ];  //  (1064)
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (10)
item [246] = [ "Air-rune", 1, 7, "Rune" ];  //  (35)
item [247] = [ "uncut ruby", 1, 1, "Gem" ];
item [248] = [ "Iron Plate Mail Body", 1, 1, "" ];
item [249] = [ "Nothing", 1, 0, "" ];
item [250] = [ "Air-rune", 1, 7, "Rune" ];  //  240  (42)

item [251] = [ "Earth-rune", 1, 6, "Rune" ];  //  (24)
item [252] = [ "Coins", 1, 4, "" ];  //  (1068)
item [253] = [ "Nothing", 1, 0, "" ];
item [254] = [ "Coins", 1, 7, "" ];  //  (1075)
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Coins", 1, 35, "" ];  //  (1110)
item [257] = [ "Nothing", 1, 0, "" ];
item [258] = [ "Coins", 1, 25, "" ];  //  (1135)
item [259] = [ "Coins", 1, 4, "" ];  //  (1139)
item [260] = [ "Coins", 1, 4, "" ];  //  250  (1143)

item [261] = [ "Eye patch", 1, 1, "" ];
item [262] = [ "Coins", 1, 35, "" ];  //  (1178)
item [263] = [ "Coins", 1, 7, "" ];  //  (1185)
item [264] = [ "Nothing", 1, 0, "" ];
item [265] = [ "Coins", 1, 4, "" ];  //  (1189)
item [266] = [ "Earth-rune", 1, 6, "Rune" ];  //  (30)
item [267] = [ "Coins", 1, 4, "" ];  //  (1193)
item [268] = [ "Eye patch", 1, 1, "" ];
item [269] = [ "Nothing", 1, 0, "" ];
item [270] = [ "Bronze Scimitar", 1, 1, "" ];  //  260

item [271] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (11)
item [272] = [ "Coins", 1, 4, "" ];  //  (1197)
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Coins", 1, 55, "" ];  //  (1252)
item [275] = [ "Coins", 1, 4, "" ];  //  (1256)
item [276] = [ "Iron dagger", 2, 1, "" ];
item [277] = [ "Bronze Scimitar", 1, 1, "" ];
item [278] = [ "Coins", 1, 12, "" ];  //  (1268)
item [279] = [ "Coins", 1, 4, "" ];  //  (1272)
item [280] = [ "Eye patch", 1, 1, "" ];
item [281] = [ "Iron dagger", 2, 1, "" ];  //  270
item [282] = [ "Bronze Scimitar", 1, 1, "" ];

item [283] = [ "Coins", 1, 4, "" ];  //  (1276)
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 4, "" ];  //  (1280)
item [286] = [ "Coins", 1, 25, "" ];  //  (1305)
item [287] = [ "Nothing", 1, 0, "" ];
item [288] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (99)
item [289] = [ "Earth-rune", 1, 6, "Rune" ];  //  (36)
item [290] = [ "Coins", 1, 4, "" ];  //  (1309)
item [291] = [ "Coins", 1, 12, "" ];  //  (1321)
item [292] = [ "Bronze Scimitar", 1, 1, "" ];  //  280

item [293] = [ "Coins", 1, 4, "" ];  //  (1325)
item [294] = [ "Coins", 1, 4, "" ];  //  (1329)
item [295] = [ "Coins", 1, 25, "" ];  //  (1354)
item [296] = [ "Coins", 1, 12, "" ];  //  (1366)
item [297] = [ "Coins", 1, 35, "" ];  //  (1401)
item [298] = [ "Coins", 1, 4, "" ];  //  (1405)
item [299] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (108)
item [300] = [ "Nothing", 1, 0, "" ];
item [301] = [ "Coins", 1, 4, "" ];  //  (1409)
item [302] = [ "Coins", 1, 4, "" ];  //  290  (1413)

item [303] = [ "Coins", 1, 4, "" ];  //  (1417)
item [304] = [ "Coins", 1, 25, "" ];  //  (1442)
item [305] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (120)
item [306] = [ "Eye patch", 1, 1, "" ];
item [307] = [ "Coins", 1, 7, "" ];  //  (1449)
item [308] = [ "Eye patch", 1, 1, "" ];
item [309] = [ "Nothing", 1, 0, "" ];
item [310] = [ "Iron dagger", 2, 1, "" ];
item [311] = [ "Bronze Scimitar", 1, 1, "" ];
item [312] = [ "Nature-rune", 1, 1, "Rune" ];  //  (12)
item [313] = [ "Coins", 1, 25, "" ];  //  300  (1474)

item [314] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (129)
item [315] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (138)
item [316] = [ "Nothing", 1, 0, "" ];
item [317] = [ "Coins", 1, 25, "" ];  //  (1499)
item [318] = [ "Nothing", 1, 0, "" ];
item [319] = [ "Coins", 1, 4, "" ];  //  (1503)
item [320] = [ "Coins", 1, 35, "" ];  //  (1538)
item [321] = [ "Nothing", 1, 0, "" ];
item [322] = [ "Nothing", 1, 0, "" ];
item [323] = [ "Chaos-rune", 1, 1, "Rune" ];  //  310  (12)

item [324] = [ "Nature-rune", 1, 1, "Rune" ];  //  (13)
item [325] = [ "Nothing", 1, 0, "" ];
item [326] = [ "Coins", 1, 35, "" ];  //  (1573)
item [327] = [ "Bronze Scimitar", 1, 1, "" ];
item [328] = [ "Coins", 1, 7, "" ];  //  (1580)
item [329] = [ "Coins", 1, 4, "" ];  //  (1584)
item [330] = [ "Coins", 1, 7, "" ];  //  (1591)
item [331] = [ "Iron dagger", 2, 1, "" ];
item [332] = [ "Bronze Scimitar", 1, 1, "" ];
item [333] = [ "Iron dagger", 2, 1, "" ];
item [334] = [ "Bronze Scimitar", 1, 1, "" ];
item [335] = [ "Eye patch", 1, 1, "" ];  //  320

item [336] = [ "Coins", 1, 12, "" ];  //  (1603)
item [337] = [ "Coins", 1, 25, "" ];  //  (1628)
item [338] = [ "Eye patch", 1, 1, "" ];
item [339] = [ "Nothing", 1, 0, "" ];
item [340] = [ "Bronze Scimitar", 1, 1, "" ];
item [341] = [ "Eye patch", 1, 1, "" ];
item [342] = [ "Coins", 1, 4, "" ];  //  (1632)
item [343] = [ "Coins", 1, 12, "" ];  //  (1644)
item [344] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (13)
item [345] = [ "Coins", 1, 12, "" ];  //  330  (1656)

runs [0] = [ 345, 330 ];  // kills 330 drops 346

// runs [1] = [ x, y ];  // kills ? ( y - 330 ), drops ? ( x - 345 )

/*
item [000] = [ "Coins", 1, 4, "" ];  //  ()
item [000] = [ "Coins", 1, 7, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()
item [000] = [ "Coins", 1, 35, "" ];  //  ()
item [000] = [ "Coins", 1, 55, "" ];  //  ()

item [000] = [ "Air-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Chef's hat", 1, 1, "" ];
item [000] = [ "Eye patch", 1, 1, "" ];
item [000] = [ "iron bar", 1, 1, "" ];

item [000] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  ()
item [000] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  ()
item [000] = [ "Bronze Scimitar", 1, 1, "" ];
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Iron dagger", 2, 1, "" ];
item [000] = [ "Bronze Scimitar", 1, 1, "" ];

item [000] = [ "Iron Plate Mail Body", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Pirate";           // monster's name
var mcbl = 30;                  // monster's combat level
var mindex = 79;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name