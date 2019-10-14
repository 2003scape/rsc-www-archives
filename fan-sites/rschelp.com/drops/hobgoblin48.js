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

var notes = "On the 3rd run I took 9 trout with me.<br /><br />This drop table was delayed 4 weeks because the divination skill in RS3 came out.";

// run 1

item   [0] = [ "Limpwurt root", 1, 1, "" ];
item   [1] = [ "Limpwurt root", 1, 1, "" ];
item   [2] = [ "Coins", 1, 15, "" ];  //  (15)
item   [3] = [ "Limpwurt root", 1, 1, "" ];
item   [4] = [ "Coins", 1, 5, "" ];  //  (20)
item   [5] = [ "Water-rune", 1, 1, "Rune" ];  //  (1)
item   [6] = [ "Coins", 1, 28, "" ];  //  (48)
item   [7] = [ "Coins", 1, 5, "" ];  //  (53)
item   [8] = [ "Coins", 1, 15, "" ];  //  (68)
item   [9] = [ "Coins", 1, 28, "" ];  //  (96)
item  [10] = [ "Coins", 1, 15, "" ];  //  (111)
item  [11] = [ "Coins", 1, 28, "" ];  //  (139)
item  [12] = [ "Coins", 1, 15, "" ];  //  (154)
item  [13] = [ "Coins", 1, 28, "" ];  //  (182)
item  [14] = [ "Limpwurt root", 1, 1, "" ];
item  [15] = [ "Coins", 1, 5, "" ];  //  (187)
item  [16] = [ "Coins", 1, 5, "" ];  //  (192)
item  [17] = [ "Coins", 1, 15, "" ];  //  (207)
item  [18] = [ "Steel dagger", 1, 1, "" ];
item  [19] = [ "Coins", 1, 5, "" ];  //  (212)
item  [20] = [ "Coins", 1, 15, "" ];  //  (227)
item  [21] = [ "Harralander", 1, 1, "Herb" ];
item  [22] = [ "Steel dagger", 1, 1, "" ];
item  [23] = [ "Coins", 1, 28, "" ];  //  (255)
item  [24] = [ "Coins", 1, 5, "" ];  //  (260)
item  [25] = [ "Limpwurt root", 1, 1, "" ];
item  [26] = [ "Coins", 1, 15, "" ];  //  (275)
item  [27] = [ "Coins", 1, 62, "" ];  //  (337)
item  [28] = [ "Limpwurt root", 1, 1, "" ];
item  [29] = [ "Coins", 1, 15, "" ];  //  (352)
item  [30] = [ "Marrentill", 1, 1, "Herb" ];
item  [31] = [ "Iron Spear", 1, 1, "" ];
item  [32] = [ "Coins", 1, 15, "" ];  //  (367)
item  [33] = [ "Limpwurt root", 1, 1, "" ];
item  [34] = [ "Limpwurt root", 1, 1, "" ];
item  [35] = [ "Coins", 1, 5, "" ];  //  (372)
item  [36] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item  [37] = [ "Limpwurt root", 1, 1, "" ];
item  [38] = [ "Coins", 1, 15, "" ];  //  (387)
item  [39] = [ "Coins", 1, 15, "" ];  //  (402)
item  [40] = [ "Steel dagger", 1, 1, "" ];
item  [41] = [ "Coins", 1, 15, "" ];  //  (417)
item  [42] = [ "Limpwurt root", 1, 1, "" ];
item  [43] = [ "Goblin Armour", 1, 1, "" ];
item  [44] = [ "Coins", 1, 15, "" ];  //  (432)
item  [45] = [ "Body-rune", 1, 4, "Rune" ];  //  (4)
item  [46] = [ "Coins", 1, 15, "" ];  //  (447)
item  [47] = [ "Coins", 1, 15, "" ];  //  (462)
item  [48] = [ "Iron Spear", 1, 1, "" ];
item  [49] = [ "Coins", 1, 28, "" ];  //  (490)
item  [50] = [ "Limpwurt root", 1, 1, "" ];
item  [51] = [ "Limpwurt root", 1, 1, "" ];
item  [52] = [ "Coins", 1, 62, "" ];  //  (552)
item  [53] = [ "Limpwurt root", 1, 1, "" ];
item  [54] = [ "Cadantine", 1, 1, "Herb" ];
item  [55] = [ "Limpwurt root", 1, 1, "" ];
item  [56] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [57] = [ "Steel Spear", 1, 1, "" ];
item  [58] = [ "Coins", 1, 5, "" ];  //  (557)
item  [59] = [ "Coins", 1, 42, "" ];  //  (599)
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Limpwurt root", 1, 1, "" ];
item  [62] = [ "Coins", 1, 15, "" ];  //  (614)
item  [63] = [ "Limpwurt root", 1, 1, "" ];
item  [64] = [ "Coins", 1, 15, "" ];  //  (629)
item  [65] = [ "Limpwurt root", 1, 1, "" ];
item  [66] = [ "Coins", 1, 5, "" ];  //  (634)
item  [67] = [ "Tarromin", 1, 1, "Herb" ];
item  [68] = [ "Coins", 1, 5, "" ];  //  (639)
item  [69] = [ "Coins", 1, 15, "" ];  //  (654)
item  [70] = [ "Limpwurt root", 1, 1, "" ];
item  [71] = [ "Limpwurt root", 1, 1, "" ];
item  [72] = [ "Coins", 1, 15, "" ];  //  (669)
item  [73] = [ "Coins", 1, 15, "" ];  //  (684)
item  [74] = [ "Iron Short Sword", 1, 1, "" ];
item  [75] = [ "Coins", 1, 5, "" ];  //  (689)

runs [0] = [ 75, 76 ];  // kills 76 drops 76

// run 1

item  [76] = [ "Coins", 1, 28, "" ];  //  (28)
item  [77] = [ "Iron Short Sword", 1, 1, "" ];
item  [78] = [ "Limpwurt root", 1, 1, "" ];
item  [79] = [ "Coins", 1, 15, "" ];  //  (43)
item  [80] = [ "Coins", 1, 5, "" ];  //  (48)
item  [81] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [82] = [ "Steel dagger", 1, 1, "" ];
item  [83] = [ "Coins", 1, 15, "" ];  //  (63)
item  [84] = [ "Coins", 1, 15, "" ];  //  (78)
item  [85] = [ "Coins", 1, 28, "" ];  //  (106)
item  [86] = [ "Bronze Spear", 1, 1, "" ];
item  [87] = [ "Coins", 1, 15, "" ];  //  (121)
item  [88] = [ "Coins", 1, 15, "" ];  //  (136)
item  [89] = [ "Limpwurt root", 1, 1, "" ];
item  [90] = [ "Marrentill", 1, 1, "Herb" ];
item  [91] = [ "Coins", 1, 15, "" ];  //  (151)
item  [92] = [ "Coins", 1, 5, "" ];  //  (156)
item  [93] = [ "Limpwurt root", 1, 1, "" ];
item  [94] = [ "Water-rune", 1, 1, "Rune" ];  //  (1)
item  [95] = [ "Fire-rune", 1, 5, "Rune" ];  //  (5)
item  [96] = [ "Coins", 1, 62, "" ];  //  (218)
item  [97] = [ "Coins", 1, 28, "" ];  //  (246)
item  [98] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [99] = [ "Steel Long Sword", 1, 1, "" ];
item [100] = [ "Fire-rune", 1, 5, "Rune" ];  //  (10)
item [101] = [ "Coins", 1, 15, "" ];  //  (261)
item [102] = [ "Coins", 1, 5, "" ];  //  (266)
item [103] = [ "Coins", 1, 15, "" ];  //  (281)
item [104] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [105] = [ "Coins", 1, 5, "" ];  //  (286)
item [106] = [ "Coins", 1, 15, "" ];  //  (301)
item [107] = [ "Coins", 1, 15, "" ];  //  (316)
item [108] = [ "Coins", 1, 5, "" ];  //  (321)
item [109] = [ "Coins", 1, 15, "" ];  //  (336)
item [110] = [ "Goblin Armour", 1, 1, "" ];
item [111] = [ "Coins", 1, 42, "" ];  //  (378)
item [112] = [ "Crossbow", 1, 1, "" ];
item [113] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item [114] = [ "Steel Long Sword", 1, 1, "" ];
item [115] = [ "Crossbow", 1, 1, "" ];
item [116] = [ "Coins", 1, 62, "" ];  //  (440)
item [117] = [ "Steel dagger", 1, 1, "" ];
item [118] = [ "Coins", 1, 15, "" ];  //  (455)
item [119] = [ "Coins", 1, 28, "" ];  //  (483)
item [120] = [ "Coins", 1, 15, "" ];  //  (498)
item [121] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [122] = [ "Steel dagger", 1, 1, "" ];
item [123] = [ "Coins", 1, 15, "" ];  //  (513)
item [124] = [ "Coins", 1, 15, "" ];  //  (528)
item [125] = [ "Coins", 1, 15, "" ];  //  (543)
item [126] = [ "Coins", 1, 28, "" ];  //  (571)
item [127] = [ "Coins", 1, 15, "" ];  //  (586)
item [128] = [ "Coins", 1, 62, "" ];  //  (648)
item [129] = [ "Goblin Armour", 1, 1, "" ];
item [130] = [ "Coins", 1, 15, "" ];  //  (663)
item [131] = [ "Coins", 1, 28, "" ];  //  (691)
item [132] = [ "Coins", 1, 5, "" ];  //  (696)
item [133] = [ "Coins", 1, 15, "" ];  //  (711)
item [134] = [ "Coins", 1, 15, "" ];  //  (726)
item [135] = [ "Coins", 1, 28, "" ];  //  (754)
item [136] = [ "Coins", 1, 5, "" ];  //  (759)
item [137] = [ "Coins", 1, 15, "" ];  //  (774)
item [138] = [ "Coins", 1, 15, "" ];  //  (789)
item [139] = [ "Iron Spear", 1, 1, "" ];
item [140] = [ "Coins", 1, 28, "" ];  //  (817)
item [141] = [ "Limpwurt root", 1, 1, "" ];
item [142] = [ "Iron Short Sword", 1, 1, "" ];
item [143] = [ "Coins", 1, 15, "" ];  //  (832)

runs [1] = [ 143, 144 ];  // kills 68 drops 68

// run 2

item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Coins", 1, 15, "" ];  //  (15)
item [146] = [ "Coins", 1, 15, "" ];  //  (30)
item [147] = [ "Coins", 1, 28, "" ];  //  (58)
item [148] = [ "Limpwurt root", 1, 1, "" ];
item [149] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [150] = [ "Coins", 1, 15, "" ];  //  (73)
item [151] = [ "Limpwurt root", 1, 1, "" ];
item [152] = [ "Iron Short Sword", 1, 1, "" ];
item [153] = [ "Limpwurt root", 1, 1, "" ];
item [154] = [ "Coins", 1, 5, "" ];  //  (78)
item [155] = [ "Steel dagger", 1, 1, "" ];
item [156] = [ "Limpwurt root", 1, 1, "" ];
item [157] = [ "Limpwurt root", 1, 1, "" ];
item [158] = [ "Coins", 1, 62, "" ];  //  (140)
item [159] = [ "Limpwurt root", 1, 1, "" ];
item [160] = [ "Coins", 1, 15, "" ];  //  (155)
item [161] = [ "Coins", 1, 15, "" ];  //  (170)
item [162] = [ "Coins", 1, 15, "" ];  //  (185)
item [163] = [ "Coins", 1, 15, "" ];  //  (200)
item [164] = [ "Goblin Armour", 1, 1, "" ];
item [165] = [ "Limpwurt root", 1, 1, "" ];
item [166] = [ "Coins", 1, 28, "" ];  //  (228)
item [167] = [ "Coins", 1, 5, "" ];  //  (233)
item [168] = [ "Coins", 1, 28, "" ];  //  (261)
item [169] = [ "Coins", 1, 15, "" ];  //  (276)
item [170] = [ "Nothing", 1, 0, "" ];
item [171] = [ "Limpwurt root", 1, 1, "" ];
item [172] = [ "Limpwurt root", 1, 1, "" ];
item [173] = [ "Body-rune", 1, 4, "Rune" ];  //  (4)
item [174] = [ "Coins", 1, 15, "" ];  //  (291)
item [175] = [ "Coins", 1, 62, "" ];  //  (353)
item [176] = [ "Coins", 1, 15, "" ];  //  (368)
item [177] = [ "Water-rune", 1, 1, "Rune" ];  //  (1)
item [178] = [ "Body-rune", 1, 4, "Rune" ];  //  (8)
item [179] = [ "Coins", 1, 5, "" ];  //  (373)
item [180] = [ "Coins", 1, 42, "" ];  //  (415)
item [181] = [ "Coins", 1, 28, "" ];  //  (443)
item [182] = [ "Coins", 1, 62, "" ];  //  (505)
item [183] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item [184] = [ "Limpwurt root", 1, 1, "" ];
item [185] = [ "Limpwurt root", 1, 1, "" ];
item [186] = [ "Coins", 1, 15, "" ];  //  (520)
item [187] = [ "Coins", 1, 28, "" ];  //  (548)
item [188] = [ "Coins", 1, 28, "" ];  //  (576)
item [189] = [ "Coins", 1, 5, "" ];  //  (581)
item [190] = [ "Goblin Armour", 1, 1, "" ];
item [191] = [ "Limpwurt root", 1, 1, "" ];
item [192] = [ "Coins", 1, 28, "" ];  //  (609)
item [193] = [ "Steel Long Sword", 1, 1, "" ];
item [194] = [ "Coins", 1, 15, "" ];  //  (624)
item [195] = [ "Coins", 1, 28, "" ];  //  (652)
item [196] = [ "Coins", 1, 15, "" ];  //  (667)
item [197] = [ "Coins", 1, 15, "" ];  //  (682)
item [198] = [ "Coins", 1, 15, "" ];  //  (697)
item [199] = [ "Coins", 1, 15, "" ];  //  (712)
item [200] = [ "Guam Leaf", 1, 1, "Herb" ];
item [201] = [ "Coins", 1, 28, "" ];  //  (740)
item [202] = [ "Coins", 1, 15, "" ];  //  (755)
item [203] = [ "Limpwurt root", 1, 1, "" ];
item [204] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [205] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [206] = [ "Coins", 1, 15, "" ];  //  (770)
item [207] = [ "Coins", 1, 28, "" ];  //  (798)
item [208] = [ "Limpwurt root", 1, 1, "" ];
item [209] = [ "Iron Short Sword", 1, 1, "" ];
item [210] = [ "Limpwurt root", 1, 1, "" ];
item [211] = [ "Coins", 1, 62, "" ];  //  (860)
item [212] = [ "Coins", 1, 15, "" ];  //  (875)
item [213] = [ "Limpwurt root", 1, 1, "" ];
item [214] = [ "Coins", 1, 15, "" ];  //  (890)
item [215] = [ "Coins", 1, 15, "" ];  //  (905)
item [216] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item [217] = [ "Coins", 1, 15, "" ];  //  (920)
item [218] = [ "Water-rune", 1, 1, "Rune" ];  //  (2)
item [219] = [ "Coins", 1, 28, "" ];  //  (948)
item [220] = [ "Coins", 1, 15, "" ];  //  (963)
item [221] = [ "Coins", 1, 5, "" ];  //  (968)
item [222] = [ "Coins", 1, 15, "" ];  //  (983)
item [223] = [ "Goblin Armour", 1, 1, "" ];
item [224] = [ "Nature-rune", 1, 3, "Rune" ];  //  (6)
item [225] = [ "Coins", 1, 15, "" ];  //  (998)
item [226] = [ "Guam Leaf", 1, 1, "Herb" ];
item [227] = [ "Limpwurt root", 1, 1, "" ];
item [228] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [229] = [ "Coins", 1, 15, "" ];  //  (1013)
item [230] = [ "Limpwurt root", 1, 1, "" ];
item [231] = [ "Coins", 1, 5, "" ];  //  (1018)
item [232] = [ "uncut emerald", 1, 1, "Gem" ];
item [233] = [ "Coins", 1, 5, "" ];  //  (1023)
item [234] = [ "Coins", 1, 15, "" ];  //  (1038)
item [235] = [ "Iron Spear", 1, 1, "" ];
item [236] = [ "Limpwurt root", 1, 1, "" ];
item [237] = [ "Iron Short Sword", 1, 1, "" ];
item [238] = [ "Coins", 1, 15, "" ];  //  (1053)
item [239] = [ "Coins", 1, 5, "" ];  //  (1058)
item [240] = [ "Coins", 1, 5, "" ];  //  (1063)
item [241] = [ "Coins", 1, 15, "" ];  //  (1078)
item [242] = [ "Coins", 1, 5, "" ];  //  (1083)
item [243] = [ "Limpwurt root", 1, 1, "" ];
item [244] = [ "Limpwurt root", 1, 1, "" ];
item [245] = [ "Iron Spear", 1, 1, "" ];
item [246] = [ "Coins", 1, 15, "" ];  //  (1098)
item [247] = [ "Limpwurt root", 1, 1, "" ];
item [248] = [ "Coins", 1, 15, "" ];  //  (1113)
item [249] = [ "Limpwurt root", 1, 1, "" ];
item [250] = [ "Coins", 1, 28, "" ];  //  (1141)
item [251] = [ "Guam Leaf", 1, 1, "Herb" ];
item [252] = [ "Coins", 1, 15, "" ];  //  (1156)
item [253] = [ "Limpwurt root", 1, 1, "" ];
item [254] = [ "Coins", 1, 15, "" ];  //  (1171)
item [255] = [ "Coins", 1, 15, "" ];  //  (1186)
item [256] = [ "Body-rune", 1, 4, "Rune" ];  //  (12)
item [257] = [ "Coins", 1, 15, "" ];  //  (1201)
item [258] = [ "Limpwurt root", 1, 1, "" ];
item [259] = [ "Guam Leaf", 1, 1, "Herb" ];
item [260] = [ "Coins", 1, 42, "" ];  //  (1243)
item [261] = [ "Coins", 1, 15, "" ];  //  (1258)
item [262] = [ "Limpwurt root", 1, 1, "" ];
item [263] = [ "Coins", 1, 15, "" ];  //  (1273)
item [264] = [ "Coins", 1, 15, "" ];  //  (1288)
item [265] = [ "Coins", 1, 15, "" ];  //  (1303)
item [266] = [ "Coins", 1, 42, "" ];  //  (1345)
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Coins", 1, 15, "" ];  //  (1360)
item [269] = [ "uncut sapphire", 1, 1, "Gem" ];
item [270] = [ "Limpwurt root", 1, 1, "" ];
item [271] = [ "Coins", 1, 15, "" ];  //  (1375)
item [272] = [ "Coins", 1, 15, "" ];  //  (1390)
item [273] = [ "Coins", 1, 15, "" ];  //  (1405)
item [274] = [ "Water-rune", 1, 1, "Rune" ];  //  (3)
item [275] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [276] = [ "Limpwurt root", 1, 1, "" ];
item [277] = [ "Coins", 1, 15, "" ];  //  (1420)
item [278] = [ "Guam Leaf", 1, 1, "Herb" ];
item [279] = [ "Limpwurt root", 1, 1, "" ];
item [280] = [ "Limpwurt root", 1, 1, "" ];
item [281] = [ "Limpwurt root", 1, 1, "" ];
item [282] = [ "Coins", 1, 5, "" ];  //  (1425)
item [283] = [ "Coins", 1, 15, "" ];  //  (1440)
item [284] = [ "Coins", 1, 5, "" ];  //  (1445)
item [285] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [286] = [ "Limpwurt root", 1, 1, "" ];
item [287] = [ "Water-rune", 1, 1, "Rune" ];  //  (4)
item [288] = [ "Coins", 1, 28, "" ];  //  (1473)
item [289] = [ "Limpwurt root", 1, 1, "" ];
item [290] = [ "Iron Spear", 1, 1, "" ];
item [291] = [ "Limpwurt root", 1, 1, "" ];
item [292] = [ "Coins", 1, 5, "" ];  //  (1478)
item [293] = [ "Coins", 1, 15, "" ];  //  (1493)
item [294] = [ "Limpwurt root", 1, 1, "" ];
item [295] = [ "Bronze Spear", 1, 1, "" ];
item [296] = [ "Coins", 1, 5, "" ];  //  (1498)
item [297] = [ "Coins", 1, 15, "" ];  //  (1513)
item [298] = [ "Harralander", 1, 1, "Herb" ];
item [299] = [ "Goblin Armour", 1, 1, "" ];
item [300] = [ "Coins", 1, 15, "" ];  //  (1528)
item [301] = [ "Limpwurt root", 1, 1, "" ];
item [302] = [ "Limpwurt root", 1, 1, "" ];
item [303] = [ "Coins", 1, 28, "" ];  //  (1556)
item [304] = [ "Steel Long Sword", 1, 1, "" ];
item [305] = [ "Coins", 1, 5, "" ];  //  (1561)
item [306] = [ "Coins", 1, 15, "" ];  //  (1576)
item [307] = [ "Coins", 1, 42, "" ];  //  (1618)

runs [2] = [ 307, 308 ];  // kills 164 drops 164

// runs [3] = [ x, y ];  // kills ? ( y - 308 ), drops ? ( x - 307 )

/*
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 28, "" ];  //  ()
item [000] = [ "Coins", 1, 42, "" ];  //  ()
item [000] = [ "Coins", 1, 62, "" ];  //  ()

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

item [000] = [ "Water-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 5, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Crossbow", 1, 1, "" ];
item [000] = [ "Limpwurt root", 1, 1, "" ];
item [000] = [ "Goblin Armour", 1, 1, "" ];

item [000] = [ "Bronze Spear", 1, 1, "" ];
item [000] = [ "Iron Spear", 1, 1, "" ];
item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Steel dagger", 1, 1, "" ];
item [000] = [ "Steel Spear", 1, 1, "" ];
item [000] = [ "Steel Long Sword", 1, 1, "" ];

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

var mname = "Hobgoblin";        // monster's name
var mcbl = 48;                  // monster's combat level
var mindex = 117;               // index into monster data base
var mrpt = 1;                   // number of non-breaking space to add after index name