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

item   [0] = [ "uncut sapphire", 1, 1, "Gem" ];
item   [1] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item   [2] = [ "Coins", 1, 5, "" ];  //  (5)
item   [3] = [ "Coins", 1, 15, "" ];  //  (20)
item   [4] = [ "Limpwurt root", 1, 1, "" ];
item   [5] = [ "Fire-rune", 1, 5, "Rune" ];  //  (5)
item   [6] = [ "Limpwurt root", 1, 1, "" ];
item   [7] = [ "Coins", 1, 5, "" ];  //  (25)
item   [8] = [ "Coins", 1, 15, "" ];  //  (40)
item   [9] = [ "Coins", 1, 15, "" ];  //  (55)
item  [10] = [ "Coins", 1, 15, "" ];  //  (70)
item  [11] = [ "Coins", 1, 15, "" ];  //  (85)
item  [12] = [ "Goblin Armour", 1, 1, "" ];
item  [13] = [ "Coins", 1, 15, "" ];  //  (100)
item  [14] = [ "Coins", 1, 15, "" ];  //  (115)
item  [15] = [ "Iron Spear", 1, 1, "" ];
item  [16] = [ "Coins", 1, 15, "" ];  //  (130)
item  [17] = [ "Coins", 1, 15, "" ];  //  (145)
item  [18] = [ "Cadantine", 1, 1, "Herb" ];
item  [19] = [ "Steel Long Sword", 1, 1, "" ];
item  [20] = [ "Body-rune", 1, 4, "Rune" ];  //  (4)
item  [21] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item  [22] = [ "Limpwurt root", 1, 1, "" ];
item  [23] = [ "Iron Short Sword", 1, 1, "" ];
item  [24] = [ "Coins", 1, 15, "" ];  //  (160)
item  [25] = [ "Coins", 1, 15, "" ];  //  (175)
item  [26] = [ "Crossbow", 1, 1, "" ];
item  [27] = [ "Steel Long Sword", 1, 1, "" ];
item  [28] = [ "Steel dagger", 1, 1, "" ];
item  [29] = [ "Limpwurt root", 1, 1, "" ];
item  [30] = [ "Coins", 1, 15, "" ];  //  (190)
item  [31] = [ "Steel dagger", 1, 1, "" ];
item  [32] = [ "Limpwurt root", 1, 1, "" ];
item  [33] = [ "Body-rune", 1, 4, "Rune" ];  //  (8)
item  [34] = [ "Steel Spear", 1, 1, "" ];
item  [35] = [ "Limpwurt root", 1, 1, "" ];
item  [36] = [ "Coins", 1, 28, "" ];  //  (218)
item  [37] = [ "Coins", 1, 5, "" ];  //  (223)
item  [38] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [39] = [ "Goblin Armour", 1, 1, "" ];
item  [40] = [ "Coins", 1, 15, "" ];  //  (238)
item  [41] = [ "Coins", 1, 15, "" ];  //  (253)
item  [42] = [ "Tarromin", 1, 1, "Herb" ];
item  [43] = [ "Coins", 1, 15, "" ];  //  (268)
item  [44] = [ "Water-rune", 1, 1, "Rune" ];  //  (1)
item  [45] = [ "Limpwurt root", 1, 1, "" ];
item  [46] = [ "Coins", 1, 28, "" ];  //  (296)
item  [47] = [ "Steel Spear", 1, 1, "" ];
item  [48] = [ "Limpwurt root", 1, 1, "" ];
item  [49] = [ "Coins", 1, 62, "" ];  //  (358)
item  [50] = [ "Limpwurt root", 1, 1, "" ];
item  [51] = [ "Limpwurt root", 1, 1, "" ];
item  [52] = [ "Limpwurt root", 1, 1, "" ];
item  [53] = [ "Tarromin", 1, 1, "Herb" ];
item  [54] = [ "Coins", 1, 5, "" ];  //  (363)
item  [55] = [ "Limpwurt root", 1, 1, "" ];
item  [56] = [ "Crossbow", 1, 1, "" ];
item  [57] = [ "Coins", 1, 15, "" ];  //  (378)
item  [58] = [ "Steel dagger", 1, 1, "" ];
item  [59] = [ "Limpwurt root", 1, 1, "" ];
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Bronze Spear", 1, 1, "" ];
item  [62] = [ "Coins", 1, 15, "" ];  //  (393)
item  [63] = [ "Bronze Spear", 1, 1, "" ];
item  [64] = [ "Steel dagger", 1, 1, "" ];
item  [65] = [ "Limpwurt root", 1, 1, "" ];
item  [66] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [67] = [ "Coins", 1, 42, "" ];  //  (435)
item  [68] = [ "Coins", 1, 15, "" ];  //  (450)
item  [69] = [ "Coins", 1, 15, "" ];  //  (465)
item  [70] = [ "Coins", 1, 15, "" ];  //  (480)
item  [71] = [ "Limpwurt root", 1, 1, "" ];
item  [72] = [ "Steel Spear", 1, 1, "" ];
item  [73] = [ "Coins", 1, 15, "" ];  //  (495)
item  [74] = [ "Iron Short Sword", 1, 1, "" ];
item  [75] = [ "Coins", 1, 28, "" ];  //  (523)
item  [76] = [ "Steel Spear", 1, 1, "" ];
item  [77] = [ "Steel Spear", 1, 1, "" ];
item  [78] = [ "Coins", 1, 15, "" ];  //  (538)
item  [79] = [ "Limpwurt root", 1, 1, "" ];
item  [80] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [81] = [ "Limpwurt root", 1, 1, "" ];
item  [82] = [ "Coins", 1, 15, "" ];  //  (553)
item  [83] = [ "Coins", 1, 15, "" ];  //  (568)
item  [84] = [ "Coins", 1, 15, "" ];  //  (583)
item  [85] = [ "Coins", 1, 15, "" ];  //  (598)
item  [86] = [ "Coins", 1, 62, "" ];  //  (660)
item  [87] = [ "Coins", 1, 15, "" ];  //  (675)
item  [88] = [ "Coins", 1, 5, "" ];  //  (680)
item  [89] = [ "Coins", 1, 15, "" ];  //  (695)
item  [90] = [ "Limpwurt root", 1, 1, "" ];
item  [91] = [ "Bronze Spear", 1, 1, "" ];
item  [92] = [ "Coins", 1, 15, "" ];  //  (710)
item  [93] = [ "Limpwurt root", 1, 1, "" ];
item  [94] = [ "Limpwurt root", 1, 1, "" ];
item  [95] = [ "Coins", 1, 15, "" ];  //  (725)
item  [96] = [ "Coins", 1, 15, "" ];  //  (740)
item  [97] = [ "Limpwurt root", 1, 1, "" ];
item  [98] = [ "Nothing", 1, 0, "" ];
item  [99] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [100] = [ "Coins", 1, 5, "" ];  //  (745)
item [101] = [ "Coins", 1, 5, "" ];  //  (750)
item [102] = [ "Coins", 1, 15, "" ];  //  (765)
item [103] = [ "Coins", 1, 42, "" ];  //  (807)
item [104] = [ "Coins", 1, 15, "" ];  //  (822)
item [105] = [ "Kwuarm", 1, 1, "Herb" ];
item [106] = [ "Coins", 1, 15, "" ];  //  (837)
item [107] = [ "Tarromin", 1, 1, "Herb" ];
item [108] = [ "Nature-rune", 1, 3, "Rune" ];  //  (6)
item [109] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [110] = [ "Limpwurt root", 1, 1, "" ];
item [111] = [ "Fire-rune", 1, 5, "Rune" ];  //  (10)
item [112] = [ "Bronze Spear", 1, 1, "" ];
item [113] = [ "Coins", 1, 15, "" ];  //  (852)
item [114] = [ "Coins", 1, 15, "" ];  //  (867)
item [115] = [ "Bronze Spear", 1, 1, "" ];
item [116] = [ "Coins", 1, 15, "" ];  //  (882)
item [117] = [ "Limpwurt root", 1, 1, "" ];
item [118] = [ "Bronze Spear", 1, 1, "" ];
item [119] = [ "Coins", 1, 15, "" ];  //  (897)
item [120] = [ "Bronze Spear", 1, 1, "" ];
item [121] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [122] = [ "Coins", 1, 5, "" ];  //  (902)
item [123] = [ "Coins", 1, 28, "" ];  //  (930)
item [124] = [ "Coins", 1, 5, "" ];  //  (935)
item [125] = [ "Goblin Armour", 1, 1, "" ];
item [126] = [ "Coins", 1, 28, "" ];  //  (963)
item [127] = [ "Kwuarm", 1, 1, "Herb" ];
item [128] = [ "Steel Spear", 1, 1, "" ];
item [129] = [ "Coins", 1, 5, "" ];  //  (968)
item [130] = [ "Coins", 1, 15, "" ];  //  (983)
item [131] = [ "Coins", 1, 15, "" ];  //  (998)
item [132] = [ "Coins", 1, 15, "" ];  //  (1013)
item [133] = [ "Limpwurt root", 1, 1, "" ];
item [134] = [ "Limpwurt root", 1, 1, "" ];
item [135] = [ "Iron Spear", 1, 1, "" ];
item [136] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [137] = [ "Coins", 1, 15, "" ];  //  (1028)
item [138] = [ "Coins", 1, 5, "" ];  //  (1033)
item [139] = [ "Goblin Armour", 1, 1, "" ];
item [140] = [ "Limpwurt root", 1, 1, "" ];
item [141] = [ "Coins", 1, 5, "" ];  //  (1038)
item [142] = [ "Nature-rune", 1, 3, "Rune" ];  //  (9)
item [143] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (3)
item [144] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [145] = [ "Bronze Spear", 1, 1, "" ];
item [146] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [147] = [ "Fire-rune", 1, 5, "Rune" ];  //  (15)
item [148] = [ "Limpwurt root", 1, 1, "" ];
item [149] = [ "Coins", 1, 15, "" ];  //  (1053)
item [150] = [ "Coins", 1, 62, "" ];  //  (1115)
item [151] = [ "Bronze Spear", 1, 1, "" ];
item [152] = [ "Fire-rune", 1, 5, "Rune" ];  //  (20)
item [153] = [ "Coins", 1, 42, "" ];  //  (1157)
item [154] = [ "Coins", 1, 15, "" ];  //  (1172)
item [155] = [ "Coins", 1, 42, "" ];  //  (1214)
item [156] = [ "Coins", 1, 5, "" ];  //  (1219)
item [157] = [ "Coins", 1, 5, "" ];  //  (1224)
item [158] = [ "Coins", 1, 15, "" ];  //  (1239)
item [159] = [ "Coins", 1, 5, "" ];  //  (1244)
item [160] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [161] = [ "Limpwurt root", 1, 1, "" ];
item [162] = [ "Coins", 1, 15, "" ];  //  (1259)
item [163] = [ "Fire-rune", 1, 5, "Rune" ];  //  (25)
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Limpwurt root", 1, 1, "" ];
item [166] = [ "Coins", 1, 15, "" ];  //  (1274)
item [167] = [ "Coins", 1, 5, "" ];  //  (1279)
item [168] = [ "Coins", 1, 42, "" ];  //  (1321)
item [169] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item [170] = [ "Coins", 1, 15, "" ];  //  (1336)
item [171] = [ "Coins", 1, 15, "" ];  //  (1351)
item [172] = [ "Fire-rune", 1, 5, "Rune" ];  //  (30)
item [173] = [ "Limpwurt root", 1, 1, "" ];
item [174] = [ "Limpwurt root", 1, 1, "" ];
item [175] = [ "Coins", 1, 15, "" ];  //  (1366)
item [176] = [ "Marrentill", 1, 1, "Herb" ];
item [177] = [ "Limpwurt root", 1, 1, "" ];
item [178] = [ "Coins", 1, 15, "" ];  //  (1381)
item [179] = [ "Coins", 1, 15, "" ];  //  (1396)
item [180] = [ "Coins", 1, 5, "" ];  //  (1401)
item [181] = [ "Crossbow", 1, 1, "" ];
item [182] = [ "Coins", 1, 5, "" ];  //  (1406)
item [183] = [ "Iron Short Sword", 1, 1, "" ];
item [184] = [ "Coins", 1, 15, "" ];  //  (1421)
item [185] = [ "Kwuarm", 1, 1, "Herb" ];
item [186] = [ "Coins", 1, 15, "" ];  //  (1436)
item [187] = [ "Coins", 1, 5, "" ];  //  (1441)
item [188] = [ "Coins", 1, 15, "" ];  //  (1456)
item [189] = [ "Coins", 1, 5, "" ];  //  (1461)
item [190] = [ "Iron Spear", 1, 1, "" ];
item [191] = [ "Limpwurt root", 1, 1, "" ];
item [192] = [ "Coins", 1, 15, "" ];  //  (1476)
item [193] = [ "Limpwurt root", 1, 1, "" ];
item [194] = [ "Limpwurt root", 1, 1, "" ];
item [195] = [ "Guam Leaf", 1, 1, "Herb" ];
item [196] = [ "Iron Short Sword", 1, 1, "" ];
item [197] = [ "Coins", 1, 28, "" ];  //  (1504)
item [198] = [ "Limpwurt root", 1, 1, "" ];
item [199] = [ "Law-rune", 1, 1, "Rune" ];  //  (5)
item [200] = [ "Limpwurt root", 1, 1, "" ];
item [201] = [ "Goblin Armour", 1, 1, "" ];
item [202] = [ "Coins", 1, 15, "" ];  //  (1519)
item [203] = [ "Coins", 1, 15, "" ];  //  (1534)
item [204] = [ "Coins", 1, 5, "" ];  //  (1539)
item [205] = [ "Coins", 1, 15, "" ];  //  (1554)
item [206] = [ "Coins", 1, 28, "" ];  //  (1582)
item [207] = [ "Limpwurt root", 1, 1, "" ];
item [208] = [ "Limpwurt root", 1, 1, "" ];
item [209] = [ "Coins", 1, 62, "" ];  //  (1644)
item [210] = [ "Coins", 1, 15, "" ];  //  (1659)
item [211] = [ "Coins", 1, 15, "" ];  //  (1674)
item [212] = [ "Steel dagger", 1, 1, "" ];
item [213] = [ "Limpwurt root", 1, 1, "" ];
item [214] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [215] = [ "Coins", 1, 5, "" ];  //  (1679)
item [216] = [ "Coins", 1, 5, "" ];  //  (1684)
item [217] = [ "Law-rune", 1, 1, "Rune" ];  //  (6)
item [218] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (8)
item [219] = [ "Tarromin", 1, 1, "Herb" ];
item [220] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [221] = [ "Coins", 1, 15, "" ];  //  (1699)
item [222] = [ "Coins", 1, 15, "" ];  //  (1714)
item [223] = [ "Coins", 1, 15, "" ];  //  (1729)
item [224] = [ "Limpwurt root", 1, 1, "" ];
item [225] = [ "Tarromin", 1, 1, "Herb" ];
item [226] = [ "Coins", 1, 62, "" ];  //  (1791)
item [227] = [ "Coins", 1, 15, "" ];  //  (1806)
item [228] = [ "Coins", 1, 15, "" ];  //  (1821)
item [229] = [ "Coins", 1, 62, "" ];  //  (1883)
item [230] = [ "Coins", 1, 15, "" ];  //  (1898)
item [231] = [ "Limpwurt root", 1, 1, "" ];
item [232] = [ "Coins", 1, 28, "" ];  //  (1926)
item [233] = [ "Coins", 1, 15, "" ];  //  (1941)
item [234] = [ "Bronze Spear", 1, 1, "" ];
item [235] = [ "Coins", 1, 15, "" ];  //  (1956)
item [236] = [ "Coins", 1, 62, "" ];  //  (2018)
item [237] = [ "Limpwurt root", 1, 1, "" ];
item [238] = [ "Limpwurt root", 1, 1, "" ];
item [239] = [ "Steel dagger", 1, 1, "" ];
item [240] = [ "Coins", 1, 15, "" ];  //  (2033)
item [241] = [ "Limpwurt root", 1, 1, "" ];
item [242] = [ "Body-rune", 1, 4, "Rune" ];  //  (12)
item [243] = [ "Coins", 1, 15, "" ];  //  (2048)
item [244] = [ "Steel Spear", 1, 1, "" ];
item [245] = [ "Coins", 1, 5, "" ];  //  (2053)
item [246] = [ "Fire-rune", 1, 5, "Rune" ];  //  (35)
item [247] = [ "Goblin Armour", 1, 1, "" ];
item [248] = [ "Bronze Spear", 1, 1, "" ];
item [249] = [ "Steel Long Sword", 1, 1, "" ];
item [250] = [ "Coins", 1, 5, "" ];  //  (2058)
item [251] = [ "Coins", 1, 5, "" ];  //  (2063)
item [252] = [ "Limpwurt root", 1, 1, "" ];
item [253] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (10)
item [254] = [ "Coins", 1, 15, "" ];  //  (2078)
item [255] = [ "Coins", 1, 15, "" ];  //  (2093)
item [256] = [ "Body-rune", 1, 4, "Rune" ];  //  (16)
item [257] = [ "Limpwurt root", 1, 1, "" ];
item [258] = [ "Coins", 1, 62, "" ];  //  (2155)
item [259] = [ "Coins", 1, 28, "" ];  //  (2183)
item [260] = [ "Coins", 1, 15, "" ];  //  (2198)
item [261] = [ "Nature-rune", 1, 3, "Rune" ];  //  (12)
item [262] = [ "Coins", 1, 28, "" ];  //  (2226)
item [263] = [ "Marrentill", 1, 1, "Herb" ];
item [264] = [ "Water-rune", 1, 1, "Rune" ];  //  (2)
item [265] = [ "Limpwurt root", 1, 1, "" ];
item [266] = [ "Limpwurt root", 1, 1, "" ];
item [267] = [ "Coins", 1, 15, "" ];  //  (2241)
item [268] = [ "Iron Short Sword", 1, 1, "" ];
item [269] = [ "Coins", 1, 15, "" ];  //  (2256)
item [270] = [ "Coins", 1, 28, "" ];  //  (2284)
item [271] = [ "Steel Spear", 1, 1, "" ];
item [272] = [ "Coins", 1, 15, "" ];  //  (2299)
item [273] = [ "Limpwurt root", 1, 1, "" ];
item [274] = [ "Coins", 1, 15, "" ];  //  (2314)
item [275] = [ "Coins", 1, 28, "" ];  //  (2342)
item [276] = [ "Coins", 1, 15, "" ];  //  (2357)
item [277] = [ "Coins", 1, 15, "" ];  //  (2372)
item [278] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [279] = [ "Coins", 1, 15, "" ];  //  (2387)
item [280] = [ "Iron Spear", 1, 1, "" ];
item [281] = [ "Law-rune", 1, 1, "Rune" ];  //  (7)
item [282] = [ "Coins", 1, 15, "" ];  //  (2402)
item [283] = [ "Coins", 1, 15, "" ];  //  (2417)
item [284] = [ "Coins", 1, 62, "" ];  //  (2479)
item [285] = [ "Marrentill", 1, 1, "Herb" ];
item [286] = [ "Water-rune", 1, 1, "Rune" ];  //  (3)
item [287] = [ "Coins", 1, 15, "" ];  //  (2494)
item [288] = [ "Coins", 1, 5, "" ];  //  (2499)
item [289] = [ "Limpwurt root", 1, 1, "" ];
item [290] = [ "Coins", 1, 5, "" ];  //  (2504)
item [291] = [ "Bronze Spear", 1, 1, "" ];
item [292] = [ "Coins", 1, 15, "" ];  //  (2519)
item [293] = [ "Coins", 1, 62, "" ];  //  (2581)
item [294] = [ "Fire-rune", 1, 5, "Rune" ];  //  (40)
item [295] = [ "Bronze Spear", 1, 1, "" ];
item [296] = [ "Coins", 1, 15, "" ];  //  (2596)
item [297] = [ "Coins", 1, 28, "" ];  //  (2624)
item [298] = [ "Coins", 1, 15, "" ];  //  (2639)
item [299] = [ "Marrentill", 1, 1, "Herb" ];
item [300] = [ "Coins", 1, 5, "" ];  //  (2644)
item [301] = [ "Limpwurt root", 1, 1, "" ];
item [302] = [ "Coins", 1, 15, "" ];  //  (2659)
item [303] = [ "Coins", 1, 15, "" ];  //  (2674)
item [304] = [ "Coins", 1, 5, "" ];  //  (2679)
item [305] = [ "Law-rune", 1, 1, "Rune" ];  //  (8)
item [306] = [ "Coins", 1, 15, "" ];  //  (2694)
item [307] = [ "Goblin Armour", 1, 1, "" ];
item [308] = [ "Law-rune", 1, 1, "Rune" ];  //  (9)
item [309] = [ "Limpwurt root", 1, 1, "" ];
item [310] = [ "Coins", 1, 28, "" ];  //  (2722)
item [311] = [ "Fire-rune", 1, 5, "Rune" ];  //  (45)
item [312] = [ "Coins", 1, 28, "" ];  //  (2750)
item [313] = [ "Coins", 1, 5, "" ];  //  (2755)
item [314] = [ "Goblin Armour", 1, 1, "" ];
item [315] = [ "Coins", 1, 28, "" ];  //  (2783)
item [316] = [ "Coins", 1, 28, "" ];  //  (2811)
item [317] = [ "Coins", 1, 42, "" ];  //  (2853)
item [318] = [ "Coins", 1, 28, "" ];  //  (2881)
item [319] = [ "Coins", 1, 28, "" ];  //  (2909)
item [320] = [ "Limpwurt root", 1, 1, "" ];
item [321] = [ "Coins", 1, 15, "" ];  //  (2924)
item [322] = [ "Coins", 1, 62, "" ];  //  (2986)
item [323] = [ "Coins", 1, 15, "" ];  //  (3001)
item [324] = [ "Coins", 1, 28, "" ];  //  (3029)
item [325] = [ "Avantoe", 1, 1, "Herb" ];
item [326] = [ "Limpwurt root", 1, 1, "" ];
item [327] = [ "Coins", 1, 62, "" ];  //  (3091)
item [328] = [ "Coins", 1, 15, "" ];  //  (3106)
item [329] = [ "Guam Leaf", 1, 1, "Herb" ];
item [330] = [ "Coins", 1, 28, "" ];  //  (3134)
item [331] = [ "Coins", 1, 62, "" ];  //  (3196)
item [332] = [ "Limpwurt root", 1, 1, "" ];
item [333] = [ "Limpwurt root", 1, 1, "" ];
item [334] = [ "Limpwurt root", 1, 1, "" ];
item [335] = [ "Coins", 1, 15, "" ];  //  (3211)
item [336] = [ "Limpwurt root", 1, 1, "" ];
item [337] = [ "Coins", 1, 5, "" ];  //  (3216)
item [338] = [ "Limpwurt root", 1, 1, "" ];
item [339] = [ "Limpwurt root", 1, 1, "" ];
item [340] = [ "Coins", 1, 42, "" ];  //  (3258)
item [341] = [ "Coins", 1, 15, "" ];  //  (3273)
item [342] = [ "Law-rune", 1, 1, "Rune" ];  //  (10)
item [343] = [ "Coins", 1, 5, "" ];  //  (3278)
item [344] = [ "Guam Leaf", 1, 1, "Herb" ];
item [345] = [ "Coins", 1, 15, "" ];  //  (3293)
item [346] = [ "Irit Leaf", 1, 1, "Herb" ];
item [347] = [ "Coins", 1, 15, "" ];  //  (3308)
item [348] = [ "Iron Spear", 1, 1, "" ];
item [349] = [ "Coins", 1, 15, "" ];  //  (3323)
item [350] = [ "Coins", 1, 15, "" ];  //  (3338)
item [351] = [ "Iron Short Sword", 1, 1, "" ];
item [352] = [ "Coins", 1, 28, "" ];  //  (3366)
item [353] = [ "Steel dagger", 1, 1, "" ];
item [354] = [ "Coins", 1, 28, "" ];  //  (3394)
item [355] = [ "Coins", 1, 62, "" ];  //  (3456)
item [356] = [ "Goblin Armour", 1, 1, "" ];
item [357] = [ "Harralander", 1, 1, "Herb" ];
item [358] = [ "Limpwurt root", 1, 1, "" ];
item [359] = [ "Tarromin", 1, 1, "Herb" ];
item [360] = [ "Nature-rune", 1, 3, "Rune" ];  //  (15)
item [361] = [ "Coins", 1, 15, "" ];  //  (3471)
item [362] = [ "Marrentill", 1, 1, "Herb" ];
item [363] = [ "Coins", 1, 15, "" ];  //  (3486)
item [364] = [ "Body-rune", 1, 4, "Rune" ];  //  (20)
item [365] = [ "Kwuarm", 1, 1, "Herb" ];

runs [0] = [ 365, 366 ];  // kills 366 drops 366

// runs [1] = [ x, y ];  // kills ? ( y - 0 ), drops ? ( x - -1 )

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
item [000] = [ "Iron dagger", 1, 1, "" ];
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
var mcbl = 32;                  // monster's combat level
var mindex = 87;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name