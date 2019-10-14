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

item   [0] = [ "Coins", 1, 4, "" ];  //  (4)
item   [1] = [ "Coins", 1, 25, "" ];  //  (29)
item   [2] = [ "Coins", 1, 25, "" ];  //  (54)
item   [3] = [ "Eye patch", 1, 1, "" ];
item   [4] = [ "Coins", 1, 4, "" ];  //  (58)
item   [5] = [ "Nature-rune", 1, 1, "Rune" ];  //  (1)
item   [6] = [ "Coins", 1, 25, "" ];  //  (83)
item   [7] = [ "Coins", 1, 25, "" ];  //  (108)
item   [8] = [ "Coins", 1, 4, "" ];  //  (112)
item   [9] = [ "Iron Plate Mail Body", 1, 1, "" ];  //  10

item  [10] = [ "Coins", 1, 4, "" ];  //  (116)
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Coins", 1, 25, "" ];  //  (141)
item  [13] = [ "Coins", 1, 4, "" ];  //  (145)
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Eye patch", 1, 1, "" ];
item  [16] = [ "Nothing", 1, 0, "" ];
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Coins", 1, 25, "" ];  //  (170)
item  [19] = [ "Coins", 1, 4, "" ];  //  20  (174)

item  [20] = [ "Eye patch", 1, 1, "" ];
item  [21] = [ "Coins", 1, 4, "" ];  //  (178)
item  [22] = [ "Coins", 1, 4, "" ];  //  (182)
item  [23] = [ "Earth-rune", 1, 6, "Rune" ];  //  (6)
item  [24] = [ "Nature-rune", 1, 1, "Rune" ];  //  (2)
item  [25] = [ "Bronze Scimitar", 1, 1, "" ];
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Coins", 1, 4, "" ];  //  (186)
item  [28] = [ "Coins", 1, 4, "" ];  //  (190)
item  [29] = [ "Nothing", 1, 0, "" ];  //  30

item  [30] = [ "Coins", 1, 4, "" ];  //  (194)
item  [31] = [ "Coins", 1, 4, "" ];  //  (198)
item  [32] = [ "Eye patch", 1, 1, "" ];
item  [33] = [ "Coins", 1, 25, "" ];  //  (223)
item  [34] = [ "Nothing", 1, 0, "" ];
item  [35] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (12)
item  [36] = [ "Coins", 1, 12, "" ];  //  (235)
item  [37] = [ "Coins", 1, 4, "" ];  //  (239)
item  [38] = [ "Coins", 1, 35, "" ];  //  (274)
item  [39] = [ "Coins", 1, 4, "" ];  //  40  (278)

item  [40] = [ "Coins", 1, 7, "" ];  //  (285)
item  [41] = [ "Coins", 1, 25, "" ];  //  (310)
item  [42] = [ "Coins", 1, 4, "" ];  //  (314)
item  [43] = [ "Coins", 1, 4, "" ];  //  (318)
item  [44] = [ "Bronze Scimitar", 1, 1, "" ];
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Bronze Scimitar", 1, 1, "" ];
item  [47] = [ "Coins", 1, 4, "" ];  //  (322)
item  [48] = [ "Eye patch", 1, 1, "" ];
item  [49] = [ "Nothing", 1, 0, "" ];  //  50

item  [50] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (21)
item  [51] = [ "Air-rune", 1, 7, "Rune" ];  //  (7)
item  [52] = [ "Coins", 1, 12, "" ];  //  (334)
item  [53] = [ "Coins", 1, 4, "" ];  //  (338)
item  [54] = [ "Eye patch", 1, 1, "" ];
item  [55] = [ "Coins", 1, 12, "" ];  //  (350)
item  [56] = [ "Iron dagger", 2, 1, "" ];
item  [57] = [ "Bronze Scimitar", 1, 1, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Eye patch", 1, 1, "" ];
item  [60] = [ "Coins", 1, 4, "" ];  //  60  (354)

item  [61] = [ "Coins", 1, 35, "" ];  //  (389)
item  [62] = [ "Coins", 1, 12, "" ];  //  (401)
item  [63] = [ "Coins", 1, 35, "" ];  //  (436)
item  [64] = [ "Fire-rune", 1, 3, "Rune" ];  //  (3)
item  [65] = [ "Bronze Scimitar", 1, 1, "" ];
item  [66] = [ "Eye patch", 1, 1, "" ];
item  [67] = [ "Coins", 1, 25, "" ];  //  (461)
item  [68] = [ "Air-rune", 1, 7, "Rune" ];  //  (14)
item  [69] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [70] = [ "Law-rune", 1, 1, "Rune" ];  //  70  (2)

item  [71] = [ "Coins", 1, 4, "" ];  //  (465)
item  [72] = [ "Iron dagger", 2, 1, "" ];
item  [73] = [ "Bronze Scimitar", 1, 1, "" ];
item  [74] = [ "Iron dagger", 2, 1, "" ];
item  [75] = [ "Bronze Scimitar", 1, 1, "" ];
item  [76] = [ "Earth-rune", 1, 6, "Rune" ];  //  (12)
item  [77] = [ "Coins", 1, 12, "" ];  //  (477)
item  [78] = [ "Fire-rune", 1, 3, "Rune" ];  //  (6)
item  [79] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Coins", 1, 25, "" ];  //  (502)
item  [82] = [ "Coins", 1, 12, "" ];  //  80  (514) 529

item  [83] = [ "Coins", 1, 12, "" ];  //  (526) 541
item  [84] = [ "Coins", 1, 25, "" ];  //  (551) 566
item  [85] = [ "Nothing", 1, 0, "" ];
item  [86] = [ "Coins", 1, 4, "" ];  //  (555) 570
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Bronze Scimitar", 1, 1, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (33)
item  [92] = [ "Coins", 1, 25, "" ];  //  90  (580) 595

item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "Bronze Scimitar", 1, 1, "" ];
item  [95] = [ "Coins", 1, 35, "" ];  //  (615) 630
item  [96] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (42)
item  [97] = [ "Coins", 1, 4, "" ];  //  (619) 634
item  [98] = [ "Coins", 1, 25, "" ];  //  (644) 659
item  [99] = [ "Bronze Scimitar", 1, 1, "" ];
item [100] = [ "Nature-rune", 1, 1, "Rune" ];  //  (3)
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Coins", 1, 25, "" ];  //  100  (669) 684

item [103] = [ "Coins", 1, 4, "" ];  //  (673) 688
item [104] = [ "Coins", 1, 4, "" ];  //  (677) 692
item [105] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [106] = [ "Coins", 1, 12, "" ];  //  (689) 704
item [107] = [ "Coins", 1, 4, "" ];  //  (693) 708
item [108] = [ "Earth-rune", 1, 6, "Rune" ];  //  (18)
item [109] = [ "Coins", 1, 7, "" ];  //  (700) 715
item [110] = [ "Coins", 1, 4, "" ];  //  (704) 719
item [111] = [ "Nothing", 1, 0, "" ];
item [112] = [ "Eye patch", 1, 1, "" ];  //  110

item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Coins", 1, 4, "" ];  //  (708) 723
item [115] = [ "Coins", 1, 7, "" ];  //  (715) 730
item [116] = [ "Coins", 1, 12, "" ];  //  (727) 742
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Fire-rune", 1, 3, "Rune" ];  //  (9)
item [119] = [ "Coins", 1, 4, "" ];  //  (731) 746
item [120] = [ "Coins", 1, 12, "" ];  //  (743) 758
item [121] = [ "Coins", 1, 4, "" ];  //  (747) 762
item [122] = [ "Coins", 1, 4, "" ];  //  120  (751) 766

item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Coins", 1, 4, "" ];  //  (755) 770
item [125] = [ "Nothing", 1, 0, "" ];
item [126] = [ "Eye patch", 1, 1, "" ];
item [127] = [ "Nothing", 1, 0, "" ];
item [128] = [ "Nothing", 1, 0, "" ];
item [129] = [ "Eye patch", 1, 1, "" ];
item [130] = [ "Eye patch", 1, 1, "" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Coins", 1, 12, "" ];  //  130  (767) 782

item [133] = [ "Nature-rune", 1, 1, "Rune" ];  //  (4)
item [134] = [ "Coins", 1, 4, "" ];  //  (771) 786
item [135] = [ "Coins", 1, 35, "" ];  //  (806) 821
item [136] = [ "Nothing", 1, 0, "" ];
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Eye patch", 1, 1, "" ];
item [139] = [ "Coins", 1, 4, "" ];  //  (810) 825
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Coins", 1, 4, "" ];  //  (814) 829
item [142] = [ "Nothing", 1, 0, "" ];  //  140

item [143] = [ "Coins", 1, 25, "" ];  //  (839) 854
item [144] = [ "Coins", 1, 4, "" ];  //  (843) 858
item [145] = [ "Earth-rune", 1, 6, "Rune" ];  //  (24)
item [146] = [ "Bronze Scimitar", 1, 1, "" ];
item [147] = [ "Coins", 1, 4, "" ];  //  (847) 862
item [148] = [ "Coins", 1, 12, "" ];  //  (859) 874
item [149] = [ "Coins", 1, 12, "" ];  //  (871) 886
item [150] = [ "Bronze Scimitar", 1, 1, "" ];
item [151] = [ "Coins", 1, 12, "" ];  //  (883) 898
item [152] = [ "Coins", 1, 25, "" ];  //  150  (908) 923

item [153] = [ "Coins", 1, 12, "" ];  //  (920) 935
item [154] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (2)
item [155] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (51)
item [156] = [ "Coins", 1, 4, "" ];  //  (924) 939
item [157] = [ "Coins", 1, 4, "" ];  //  (928) 943
item [158] = [ "iron bar", 1, 1, "" ];
item [159] = [ "Iron dagger", 2, 1, "" ];
item [160] = [ "Bronze Scimitar", 1, 1, "" ];
item [161] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (60)
item [162] = [ "Nothing", 1, 0, "" ];
item [163] = [ "Nothing", 1, 0, "" ];  //  160

item [164] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (72)
item [165] = [ "Chef's hat", 1, 1, "" ];
item [166] = [ "Coins", 1, 4, "" ];  //  (932) 947
item [167] = [ "Eye patch", 1, 1, "" ];
item [168] = [ "Eye patch", 1, 1, "" ];
item [169] = [ "Coins", 1, 25, "" ];  //  (957) 972
item [170] = [ "Eye patch", 1, 1, "" ];
item [171] = [ "Coins", 1, 25, "" ];  //  (982) 997
item [172] = [ "Fire-rune", 1, 3, "Rune" ];  //  (12)
item [173] = [ "Coins", 1, 4, "" ];  //  170  (986) 1001

item [174] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (3)
item [175] = [ "Iron dagger", 2, 1, "" ];
item [176] = [ "Bronze Scimitar", 1, 1, "" ];
item [177] = [ "Fire-rune", 1, 3, "Rune" ];  //  (15)
item [178] = [ "Eye patch", 1, 1, "" ];
item [179] = [ "Nature-rune", 1, 1, "Rune" ];  //  (5)
item [180] = [ "Coins", 1, 4, "" ];  //  (990) 1005
item [181] = [ "Eye patch", 1, 1, "" ];
item [182] = [ "Iron dagger", 2, 1, "" ];
item [183] = [ "Bronze Scimitar", 1, 1, "" ];
item [184] = [ "Chef's hat", 1, 1, "" ];
item [185] = [ "Coins", 1, 35, "" ];  //  180  (1025) 1040

item [186] = [ "Nothing", 1, 0, "" ];
item [187] = [ "Coins", 1, 12, "" ];  //  (1037) 1052
item [188] = [ "Coins", 1, 7, "" ];  //  (1044) 1059
item [189] = [ "Coins", 1, 25, "" ];  //  (1069) 1084
item [190] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (4)
item [191] = [ "Eye patch", 1, 1, "" ];
item [192] = [ "Iron dagger", 2, 1, "" ];
item [193] = [ "Bronze Scimitar", 1, 1, "" ];
item [194] = [ "Coins", 1, 7, "" ];  //  (1076) 1091
item [195] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (84)
item [196] = [ "Coins", 1, 7, "" ];  //  190  (1083) 1098

item [197] = [ "Air-rune", 1, 7, "Rune" ];  //  (21)
item [198] = [ "Eye patch", 1, 1, "" ];
item [199] = [ "Iron dagger", 2, 1, "" ];
item [200] = [ "Bronze Scimitar", 1, 1, "" ];
item [201] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (5)
item [202] = [ "Coins", 1, 4, "" ];  //  (1087) 1102
item [203] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (96)
item [204] = [ "Nothing", 1, 0, "" ];
item [205] = [ "Coins", 1, 4, "" ];  //  (1091) 1106
item [206] = [ "Coins", 1, 12, "" ];  //  (1103) 1118
item [207] = [ "Iron dagger", 2, 1, "" ];  //  200

item [208] = [ "Bronze Scimitar", 1, 1, "" ];
item [209] = [ "Earth-rune", 1, 6, "Rune" ];  //  (30)
item [210] = [ "Coins", 1, 4, "" ];  //  (1107) 1122
item [211] = [ "Coins", 1, 35, "" ];  //  (1142) 1157
item [212] = [ "Coins", 1, 25, "" ];  //  (1167) 1182
item [213] = [ "Iron dagger", 2, 1, "" ];
item [214] = [ "Bronze Scimitar", 1, 1, "" ];
item [215] = [ "Fire-rune", 1, 3, "Rune" ];  //  (18)
item [216] = [ "Coins", 1, 35, "" ];  //  (1202) 1217
item [217] = [ "Eye patch", 1, 1, "" ];
item [218] = [ "Bronze Arrows", 1, 9, "Arrows" ];  //  (105)
item [219] = [ "Chaos-rune", 1, 1, "Rune" ];  //  210  (6)

item [220] = [ "Fire-rune", 1, 3, "Rune" ];  //  (21)
item [221] = [ "Coins", 1, 25, "" ];  //  (1227) 1242
item [222] = [ "Nothing", 1, 0, "" ];
item [223] = [ "Coins", 1, 35, "" ];  //  (1262) 1277
item [224] = [ "Coins", 1, 4, "" ];  //  (1266) 1281
item [225] = [ "Iron dagger", 2, 1, "" ];
item [226] = [ "Bronze Scimitar", 1, 1, "" ];
item [227] = [ "Nothing", 1, 0, "" ];
item [228] = [ "Coins", 1, 12, "" ];  //  (1278) 1293
item [229] = [ "Coins", 1, 4, "" ];  //  (1282) 1297
item [230] = [ "Nothing", 1, 0, "" ];  //  220

item [231] = [ "Eye patch", 1, 1, "" ];
item [232] = [ "Nature-rune", 1, 1, "Rune" ];  //  (6)
item [233] = [ "Coins", 1, 35, "" ];  //  (1317) 1332
item [234] = [ "Iron dagger", 2, 1, "" ];
item [235] = [ "Bronze Scimitar", 1, 1, "" ];
item [236] = [ "Nothing", 1, 0, "" ];
item [237] = [ "Nothing", 1, 0, "" ];
item [238] = [ "Coins", 1, 4, "" ];  //  (1321) 1336
item [239] = [ "Nature-rune", 1, 1, "Rune" ];  //  (7)
item [240] = [ "Bronze Scimitar", 1, 1, "" ];
item [241] = [ "Coins", 1, 4, "" ];  //  230  (1325) 1340

item [242] = [ "Coins", 1, 25, "" ];  //  (1350) 1365
item [243] = [ "Coins", 1, 4, "" ];  //  (1354) 1369
item [244] = [ "Coins", 1, 25, "" ];  //  (1379) 1394
item [245] = [ "Coins", 1, 7, "" ];  //  (1386) 1401
item [246] = [ "Nature-rune", 1, 1, "Rune" ];  //  (8)
item [247] = [ "Nature-rune", 1, 1, "Rune" ];  //  (9)
item [248] = [ "Iron Plate Mail Body", 1, 1, "" ];
item [249] = [ "Fire-rune", 1, 3, "Rune" ];  //  (24)
item [250] = [ "Coins", 1, 4, "" ];  //  (1390) 1405
item [251] = [ "Eye patch", 1, 1, "" ];  //  240

item [252] = [ "uncut sapphire", 1, 1, "Gem" ];
item [253] = [ "Coins", 1, 7, "" ];  //  (1397) 1412
item [254] = [ "Coins", 1, 25, "" ];  //  (1422) 1437
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Coins", 1, 4, "" ];  //  (1426) 1441
item [257] = [ "Coins", 1, 4, "" ];  //  (1430) 1445
item [258] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (7)
item [259] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [260] = [ "Coins", 1, 4, "" ];  //  (1434) 1449
item [261] = [ "Nothing", 1, 0, "" ];  //  250

item [262] = [ "Nothing", 1, 0, "" ];
item [263] = [ "Iron dagger", 2, 1, "" ];
item [264] = [ "Bronze Scimitar", 1, 1, "" ];
item [265] = [ "Fire-rune", 1, 3, "Rune" ];  //  (27)
item [266] = [ "Coins", 1, 4, "" ];  //  (1438) 1453
item [267] = [ "Coins", 1, 4, "" ];  //  (1442) 1457
item [268] = [ "Air-rune", 1, 7, "Rune" ];  //  (28)
item [269] = [ "Bronze Scimitar", 1, 1, "" ];
item [270] = [ "Nothing", 1, 0, "" ];
item [271] = [ "Coins", 1, 25, "" ];  //  (1467) 1482
item [272] = [ "Bronze Scimitar", 1, 1, "" ];  //  260

item [273] = [ "Coins", 1, 25, "" ];  //  (1492) 1507
item [274] = [ "Nothing", 1, 0, "" ];
item [275] = [ "Coins", 1, 4, "" ];  //  (1496) 1511
item [276] = [ "Coins", 1, 25, "" ];  //  (1521) 1536
item [277] = [ "Coins", 1, 4, "" ];  //  (1525) 1540
item [278] = [ "Nothing", 1, 0, "" ];
item [279] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (8)
item [280] = [ "Coins", 1, 4, "" ];  //  (1529) 1544
item [281] = [ "Coins", 1, 12, "" ];  //  (1541) 1556
item [282] = [ "Coins", 1, 4, "" ];  //  270  (1545) 1560

item [283] = [ "Earth-rune", 1, 6, "Rune" ];  //  (36)
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 4, "" ];  //  (1549) 1564
item [286] = [ "Earth-rune", 1, 6, "Rune" ];  //  (42)
item [287] = [ "Iron dagger", 2, 1, "" ];
item [288] = [ "Bronze Scimitar", 1, 1, "" ];
item [289] = [ "Nothing", 1, 0, "" ];
item [290] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (9)
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Eye patch", 1, 1, "" ];
item [293] = [ "Air-rune", 1, 7, "Rune" ];  //  280  (35)

item [294] = [ "Coins", 1, 12, "" ];  //  (1561) 1576
item [295] = [ "Iron dagger", 2, 1, "" ];
item [296] = [ "Bronze Scimitar", 1, 1, "" ];
item [297] = [ "Earth-rune", 1, 6, "Rune" ];  //  (48)
item [298] = [ "Nothing", 1, 0, "" ];
item [299] = [ "Nature-rune", 1, 1, "Rune" ];  //  (10)
item [300] = [ "Bronze Arrows", 1, 12, "Arrows" ];  //  (117)
item [301] = [ "Earth-rune", 1, 6, "Rune" ];  //  (54)
item [302] = [ "Coins", 1, 4, "" ];  //  (1565) 1580
item [303] = [ "uncut emerald", 1, 1, "Gem" ];
item [304] = [ "Nature-rune", 1, 1, "Rune" ];  //  290  (11)

item [305] = [ "Coins", 1, 55, "" ];  //  (1620) 1635
item [306] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (10)
item [307] = [ "Iron dagger", 2, 1, "" ];
item [308] = [ "Bronze Scimitar", 1, 1, "" ];
item [309] = [ "Coins", 1, 25, "" ];  //  (1645) 1660
item [310] = [ "Law-rune", 1, 1, "Rune" ];  //  (5)
item [311] = [ "Nothing", 1, 0, "" ];
item [312] = [ "Coins", 1, 4, "" ];  //  (1649) 1664
item [313] = [ "Coins", 1, 25, "" ];  //  (1674) 1689
item [314] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (11)
item [315] = [ "Bronze Scimitar", 1, 1, "" ];  //  300

item [316] = [ "Nothing", 1, 0, "" ];
item [317] = [ "Coins", 1, 25, "" ];  //  (1699) 1714
item [318] = [ "Coins", 1, 4, "" ];  //  (1703) 1718
item [319] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (12)
item [320] = [ "Coins", 1, 4, "" ];  //  (1707) 1722
item [321] = [ "Earth-rune", 1, 6, "Rune" ];  //  (60)
item [322] = [ "Coins", 1, 4, "" ];  //  (1711) 1726
item [323] = [ "Nothing", 1, 0, "" ];
item [324] = [ "Nature-rune", 1, 1, "Rune" ];  //  (12)
item [325] = [ "Coins", 1, 35, "" ];  //  310  (1746) 1761

runs [0] = [ 325, 310 ];  // kills 326 drops 310

// runs [1] = [ x, y ];  // kills ? ( y - 310 ), drops ? ( x - 325 )

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
var mcbl = 27;                  // monster's combat level
var mindex = 66;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name