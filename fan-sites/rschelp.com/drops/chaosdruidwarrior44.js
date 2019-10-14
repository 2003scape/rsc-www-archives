/*

 item
 
 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, herb, rune, gem)
 
 run
 
 0 last drop of run (x, index of last drop of run)
 1 kills in run (y, kill number of x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "";

// run 1

item   [0] = [ "Ranarr Weed", 1, 1, "Herb" ];
item   [1] = [ "Marrentill", 1, 1, "Herb" ];
item   [2] = [ "Fire-rune", 1, 8, "Rune" ];  //  (8)
item   [3] = [ "Limpwurt root", 1, 3, "" ];
item   [4] = [ "Tarromin", 1, 1, "Herb" ];
item   [5] = [ "Marrentill", 1, 1, "Herb" ];
item   [6] = [ "Earth-rune", 1, 6, "Rune" ];  //  (6)
item   [7] = [ "Tarromin", 1, 1, "Herb" ];
item   [8] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [9] = [ "Law-rune", 1, 1, "Rune" ];  // 10  (1)
item  [10] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Dwarf Weed", 1, 1, "Herb" ];
item  [13] = [ "Harralander", 1, 1, "Herb" ];
item  [14] = [ "Marrentill", 1, 1, "Herb" ];
item  [15] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [16] = [ "White berries", 1, 1, "" ];
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "White berries", 1, 1, "" ];
item  [19] = [ "Guam Leaf", 1, 1, "Herb" ];  // 20
item  [20] = [ "Nothing", 1, 0, "" ];
item  [21] = [ "Marrentill", 2, 1, "Herb" ];
item  [22] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [23] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [24] = [ "Coins", 1, 29, "" ];  //  (29)
item  [25] = [ "Air-rune", 1, 24, "Rune" ];  //  (24)
item  [26] = [ "Harralander", 1, 1, "Herb" ];
item  [27] = [ "Nothing", 1, 0, "" ];
item  [28] = [ "Tarromin", 1, 1, "Herb" ];
item  [29] = [ "Nothing", 1, 0, "" ];
item  [30] = [ "Nothing", 1, 0, "" ];  // 30
item  [31] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [32] = [ "Nothing", 1, 0, "" ];
item  [33] = [ "Nothing", 1, 0, "" ];
item  [34] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [35] = [ "Nothing", 1, 0, "" ];
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [38] = [ "Fire-rune", 1, 8, "Rune" ];  //  (16)
item  [39] = [ "Tarromin", 1, 1, "Herb" ];
item  [40] = [ "Tarromin", 2, 1, "Herb" ];  // 40
item  [41] = [ "Black dagger", 1, 1, "" ];
item  [42] = [ "Guam Leaf", 2, 1, "Herb" ];
item  [43] = [ "Marrentill", 1, 1, "Herb" ];
item  [44] = [ "Nothing", 1, 0, "" ];
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Nothing", 1, 0, "" ];
item  [47] = [ "Nothing", 1, 0, "" ];
item  [48] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [49] = [ "Marrentill", 1, 1, "Herb" ];
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [52] = [ "Coins", 1, 29, "" ];  // 50  (58)
item  [53] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [54] = [ "Fire-rune", 1, 8, "Rune" ];  //  (24)
item  [55] = [ "Limpwurt root", 1, 1, "" ];
item  [56] = [ "Ground unicorn horn", 1, 1, "" ];
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [60] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [61] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [62] = [ "Nothing", 1, 0, "" ];  // 60
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Nothing", 1, 0, "" ];
item  [65] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)

runs [0] = [ 65, 63 ];  // kills 63, drops 66

// run 2

item  [66] = [ "Tarromin", 2, 1, "Herb" ];  // 64
item  [67] = [ "Coins", 1, 10, "" ];  //  (10)
item  [68] = [ "Nothing", 1, 0, "" ];
item  [69] = [ "Cadantine", 1, 1, "Herb" ];
item  [70] = [ "Nothing", 1, 0, "" ];
item  [71] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item  [72] = [ "Coins", 1, 29, "" ];  //  (39)
item  [73] = [ "Nothing", 1, 0, "" ];  // 70
item  [74] = [ "Fire-rune", 1, 8, "Rune" ];  //  (8)
item  [75] = [ "Coins", 1, 3, "" ];  //  (42)
item  [76] = [ "Fire-rune", 1, 8, "Rune" ];  //  (16)
item  [77] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [78] = [ "Nothing", 1, 0, "" ];
item  [79] = [ "White berries", 1, 1, "" ];
item  [80] = [ "Marrentill", 1, 1, "Herb" ];
item  [81] = [ "Tarromin", 1, 1, "Herb" ];
item  [82] = [ "Marrentill", 1, 1, "Herb" ];
item  [83] = [ "Avantoe", 1, 1, "Herb" ];  // 80
item  [84] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [85] = [ "Nothing", 1, 0, "" ];
item  [86] = [ "Avantoe", 1, 1, "Herb" ];
item  [87] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Limpwurt root", 1, 1, "" ];
item  [91] = [ "Dwarf Weed", 1, 1, "Herb" ];
item  [92] = [ "Limpwurt root", 1, 3, "" ];
item  [93] = [ "Nothing", 1, 0, "" ];  // 90
item  [94] = [ "Nothing", 1, 0, "" ];
item  [95] = [ "Marrentill", 1, 1, "Herb" ];
item  [96] = [ "Marrentill", 2, 1, "Herb" ];
item  [97] = [ "Marrentill", 1, 1, "Herb" ];
item  [98] = [ "Coins", 1, 3, "" ];  //  (45)
item  [99] = [ "Fire-rune", 1, 8, "Rune" ];  //  (24)
item [100] = [ "Coins", 1, 10, "" ];  //  (55)
item [101] = [ "Coins", 1, 10, "" ];  //  (65)
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Guam Leaf", 1, 1, "Herb" ];
item [104] = [ "Marrentill", 1, 1, "Herb" ];  // 100
item [105] = [ "Vial (Water Filled)", 1, 1, "" ];
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Tarromin", 1, 1, "Herb" ];
item [108] = [ "Tarromin", 1, 1, "Herb" ];
item [109] = [ "Nothing", 1, 0, "" ];
item [110] = [ "Harralander", 1, 1, "Herb" ];
item [111] = [ "Guam Leaf", 1, 1, "Herb" ];
item [112] = [ "Guam Leaf", 1, 1, "Herb" ];
item [113] = [ "Harralander", 1, 1, "Herb" ];
item [114] = [ "Coins", 1, 3, "" ];  // 110  (68)
item [115] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Harralander", 1, 1, "Herb" ];
item [118] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [119] = [ "Irit Leaf", 1, 1, "Herb" ];
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Nothing", 1, 0, "" ];
item [122] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Ranarr Weed", 1, 1, "Herb" ];  // 120
item [125] = [ "Fire-rune", 1, 8, "Rune" ];  //  (32)
item [126] = [ "Nothing", 1, 0, "" ];
item [127] = [ "White berries", 1, 1, "" ];
item [128] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [129] = [ "Snape grass", 1, 1, "" ];
item [130] = [ "Harralander", 1, 1, "Herb" ];

runs [1] = [ 130, 126 ];  // kills 63, drops 65

// run 3

item [131] = [ "Nothing", 1, 0, "" ];  // 127
item [132] = [ "Guam Leaf", 1, 1, "Herb" ];
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "White berries", 1, 1, "" ];  // 130
item [135] = [ "Snape grass", 1, 1, "" ];
item [136] = [ "Marrentill", 1, 1, "Herb" ];
item [137] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [138] = [ "Guam Leaf", 1, 1, "Herb" ];
item [139] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Guam Leaf", 2, 1, "Herb" ];
item [142] = [ "Marrentill", 1, 1, "Herb" ];
item [143] = [ "Nothing", 1, 0, "" ];
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "White berries", 1, 1, "" ];  // 140
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Irit Leaf", 1, 1, "Herb" ];
item [148] = [ "Avantoe", 1, 1, "Herb" ];
item [149] = [ "Nothing", 1, 0, "" ];
item [150] = [ "Avantoe", 1, 1, "Herb" ];
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [153] = [ "Coins", 1, 29, "" ];  //  (29)
item [154] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [155] = [ "Tarromin", 1, 1, "Herb" ];  // 150
item [156] = [ "Coins", 1, 29, "" ];  //  (58)
item [157] = [ "White berries", 1, 1, "" ];
item [158] = [ "Coins", 1, 29, "" ];  //  (87)
item [159] = [ "White berries", 1, 1, "" ];
item [160] = [ "Nothing", 1, 0, "" ];
item [161] = [ "Coins", 1, 3, "" ];  //  (90)
item [162] = [ "Irit Leaf", 1, 1, "Herb" ];
item [163] = [ "Air-rune", 1, 24, "Rune" ];  //  (24)
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 160
item [166] = [ "Nothing", 1, 0, "" ];
item [167] = [ "Guam Leaf", 1, 1, "Herb" ];
item [168] = [ "Nothing", 1, 0, "" ];
item [169] = [ "Nothing", 1, 0, "" ];
item [170] = [ "Fire-rune", 1, 8, "Rune" ];  //  (8)
item [171] = [ "Guam Leaf", 1, 1, "Herb" ];
item [172] = [ "Fire-rune", 1, 8, "Rune" ];  //  (16)
item [173] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [174] = [ "Nothing", 1, 0, "" ];
item [175] = [ "Nothing", 1, 0, "" ];  // 170
item [176] = [ "Nothing", 1, 0, "" ];
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Harralander", 1, 1, "Herb" ];
item [179] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [180] = [ "White berries", 1, 1, "" ];

runs [2] = [ 180, 175 ];  // kills 49, drops 50

// run 4

item [181] = [ "Fire-rune", 1, 8, "Rune" ];  // 176  (8)
item [182] = [ "Nothing", 1, 0, "" ];
item [183] = [ "Tarromin", 1, 1, "Herb" ];
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Cadantine", 1, 1, "Herb" ];  // 180
item [186] = [ "Nothing", 1, 0, "" ];
item [187] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [188] = [ "Nothing", 1, 0, "" ];
item [189] = [ "Nothing", 1, 0, "" ];
item [190] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [191] = [ "Tarromin", 1, 1, "Herb" ];
item [192] = [ "Guam Leaf", 1, 1, "Herb" ];
item [193] = [ "Guam Leaf", 1, 1, "Herb" ];
item [194] = [ "Irit Leaf", 1, 1, "Herb" ];
item [195] = [ "Marrentill", 2, 1, "Herb" ];  //  190
item [196] = [ "Marrentill", 1, 1, "Herb" ];
item [197] = [ "Air-rune", 1, 24, "Rune" ];  //  (24)
item [198] = [ "Cadantine", 1, 1, "Herb" ];
item [199] = [ "Fire-rune", 1, 8, "Rune" ];  //  (16)
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [202] = [ "Nothing", 1, 0, "" ];
item [203] = [ "White berries", 1, 1, "" ];
item [204] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [205] = [ "Ground unicorn horn", 2, 1, "" ];
item [206] = [ "Tarromin", 1, 1, "Herb" ];
item [207] = [ "Guam Leaf", 1, 1, "Herb" ];  // 200
item [208] = [ "Coins", 1, 3, "" ];  //  (3)
item [209] = [ "Guam Leaf", 1, 1, "Herb" ];
item [210] = [ "Nothing", 1, 0, "" ];
item [211] = [ "Limpwurt root", 1, 2, "" ];
item [212] = [ "Nothing", 1, 0, "" ];
item [213] = [ "Nothing", 1, 0, "" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Coins", 1, 3, "" ];  //  (6)
item [216] = [ "Marrentill", 1, 1, "Herb" ];
item [217] = [ "Earth-rune", 1, 6, "Rune" ];  // 210  (6)
item [218] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [219] = [ "Avantoe", 1, 1, "Herb" ];
item [220] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [221] = [ "Guam Leaf", 1, 1, "Herb" ];
item [222] = [ "Nothing", 1, 0, "" ];
item [223] = [ "Nothing", 1, 0, "" ];
item [224] = [ "Marrentill", 1, 1, "Herb" ];
item [225] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [226] = [ "Guam Leaf", 1, 1, "Herb" ];
item [227] = [ "Fire-rune", 1, 8, "Rune" ];  // 220  (24)
item [228] = [ "Nothing", 1, 0, "" ];
item [229] = [ "Nothing", 1, 0, "" ];
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "White berries", 1, 1, "" ];
item [232] = [ "Coins", 1, 3, "" ];  //  (9)
item [233] = [ "Marrentill", 1, 1, "Herb" ];
item [234] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [235] = [ "Nothing", 1, 0, "" ];
item [236] = [ "Nothing", 1, 0, "" ];
item [237] = [ "Tarromin", 1, 1, "Herb" ];  // 230
item [238] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [239] = [ "Fire-rune", 1, 8, "Rune" ];  //  (32)
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Nothing", 1, 0, "" ];
item [242] = [ "Marrentill", 2, 1, "Herb" ];
item [243] = [ "Guam Leaf", 1, 1, "Herb" ];
item [244] = [ "Coins", 1, 29, "" ];  //  (38)
item [245] = [ "Snape grass", 2, 1, "" ];
item [246] = [ "Tarromin", 1, 1, "Herb" ];
item [247] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [248] = [ "Nothing", 1, 0, "" ];
item [249] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 240

runs [3] = [ 249, 240 ];  // kills 65, drops 69

// run 5

item [250] = [ "Nothing", 1, 0, "" ];  // 241
item [251] = [ "Nothing", 1, 0, "" ];
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Cadantine", 1, 1, "Herb" ];
item [254] = [ "Harralander", 1, 1, "Herb" ];
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [257] = [ "Guam Leaf", 2, 1, "Herb" ];
item [258] = [ "Tarromin", 1, 1, "Herb" ];
item [259] = [ "Tarromin", 1, 1, "Herb" ];
item [260] = [ "Guam Leaf", 1, 1, "Herb" ];  // 250
item [261] = [ "Cadantine", 1, 1, "Herb" ];
item [262] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Ground unicorn horn", 1, 1, "" ];
item [265] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [266] = [ "Cadantine", 1, 1, "Herb" ];
item [267] = [ "Coins", 1, 10, "" ];  //  (10)
item [268] = [ "Limpwurt root", 1, 1, "" ];
item [269] = [ "Nothing", 1, 0, "" ];
item [270] = [ "Fire-rune", 1, 8, "Rune" ];  // 260  (8)
item [271] = [ "Ground unicorn horn", 1, 1, "" ];
item [272] = [ "Coins", 1, 3, "" ];  //  (13)
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [275] = [ "Irit Leaf", 1, 1, "Herb" ];
item [276] = [ "Marrentill", 1, 1, "Herb" ];
item [277] = [ "Guam Leaf", 2, 1, "Herb" ];
item [278] = [ "Guam Leaf", 1, 1, "Herb" ];
item [279] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [280] = [ "Tarromin", 1, 1, "Herb" ];
item [281] = [ "Fire-rune", 1, 8, "Rune" ];  // 270  (16)
item [282] = [ "Nothing", 1, 0, "" ];
item [283] = [ "Super defense Potion(1 dose)", 2, 1, "" ];
item [284] = [ "Harralander", 1, 1, "Herb" ];
item [285] = [ "Earth-rune", 1, 6, "Rune" ];  //  (6)
item [286] = [ "White berries", 1, 1, "" ];
item [287] = [ "Fire-rune", 1, 8, "Rune" ];  //  (24)
item [288] = [ "Tarromin", 1, 1, "Herb" ];
item [289] = [ "Irit Leaf", 1, 1, "Herb" ];
item [290] = [ "Nothing", 1, 0, "" ];
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 280
item [293] = [ "Nothing", 1, 0, "" ];
item [294] = [ "Nothing", 1, 0, "" ];
item [295] = [ "Guam Leaf", 1, 1, "Herb" ];
item [296] = [ "Nothing", 1, 0, "" ];
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Limpwurt root", 1, 1, "" ];
item [299] = [ "Fire-rune", 1, 8, "Rune" ];  //  (32)
item [300] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [301] = [ "Earth-rune", 1, 6, "Rune" ];  //  (12)
item [302] = [ "Irit Leaf", 1, 1, "Herb" ];  // 290

runs [4] = [ 302, 290 ];  // kills 50, drops 53

// run 6

item [303] = [ "Irit Leaf", 1, 1, "Herb" ];
item [304] = [ "White berries", 1, 1, "" ];
item [305] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [306] = [ "Nothing", 1, 0, "" ];
item [307] = [ "Nothing", 1, 0, "" ];
item [308] = [ "Nothing", 1, 0, "" ];
item [309] = [ "Nothing", 1, 0, "" ];
item [310] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [311] = [ "Guam Leaf", 1, 1, "Herb" ];
item [312] = [ "Fire-rune", 1, 8, "Rune" ];  // 300  (8)
item [313] = [ "Tarromin", 1, 1, "Herb" ];
item [314] = [ "Guam Leaf", 1, 1, "Herb" ];
item [315] = [ "Guam Leaf", 1, 1, "Herb" ];
item [316] = [ "Nothing", 1, 0, "" ];
item [317] = [ "Marrentill", 1, 1, "Herb" ];
item [318] = [ "Nothing", 1, 0, "" ];
item [319] = [ "Guam Leaf", 1, 1, "Herb" ];
item [320] = [ "Nothing", 1, 0, "" ];
item [321] = [ "Nothing", 1, 0, "" ];
item [322] = [ "Limpwurt root", 1, 3, "" ];  //  310
item [323] = [ "Guam Leaf", 2, 1, "Herb" ];
item [324] = [ "Marrentill", 1, 1, "Herb" ];
item [325] = [ "Nothing", 1, 0, "" ];
item [326] = [ "Snape grass", 1, 1, "" ];
item [327] = [ "Law-rune", 2, 1, "Rune" ];  //  (2)
item [328] = [ "Tarromin", 1, 1, "Herb" ];
item [329] = [ "Nothing", 1, 0, "" ];
item [330] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [331] = [ "Super defense Potion(1 dose)", 2, 1, "" ];
item [332] = [ "Harralander", 1, 1, "Herb" ];
item [333] = [ "Fire-rune", 1, 8, "Rune" ];  //  (16)
item [334] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [335] = [ "Guam Leaf", 1, 1, "Herb" ];  // 320
item [336] = [ "Tarromin", 2, 1, "Herb" ];
item [337] = [ "Guam Leaf", 1, 1, "Herb" ];
item [338] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [339] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [340] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [341] = [ "Tarromin", 2, 1, "Herb" ];
item [342] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [343] = [ "Tarromin", 1, 1, "Herb" ];
item [344] = [ "Earth-rune", 1, 6, "Rune" ];  //  (6)
item [345] = [ "Guam Leaf", 1, 1, "Herb" ];
item [346] = [ "Limpwurt root", 1, 2, "" ];
item [347] = [ "Nothing", 1, 0, "" ];  // 330
item [348] = [ "Nothing", 1, 0, "" ];
item [349] = [ "Cadantine", 1, 1, "Herb" ];
item [350] = [ "Marrentill", 1, 1, "Herb" ];
item [351] = [ "Harralander", 1, 1, "Herb" ];
item [352] = [ "Nothing", 1, 0, "" ];
item [353] = [ "Nothing", 1, 0, "" ];
item [354] = [ "Nothing", 1, 0, "" ];
item [355] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [356] = [ "Nothing", 1, 0, "" ];
item [357] = [ "Nothing", 1, 0, "" ];  // 340
item [358] = [ "Cadantine", 1, 1, "Herb" ];
item [359] = [ "Nothing", 1, 0, "" ];
item [360] = [ "Guam Leaf", 1, 1, "Herb" ];
item [361] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [362] = [ "Irit Leaf", 1, 1, "Herb" ];
item [363] = [ "Nothing", 1, 0, "" ];
item [364] = [ "Fire-rune", 1, 8, "Rune" ];  //  (24)
item [365] = [ "Limpwurt root", 1, 2, "" ];
item [366] = [ "Nothing", 1, 0, "" ];
item [367] = [ "Guam Leaf", 1, 1, "Herb" ];  // 350
item [368] = [ "Coins", 1, 3, "" ];  //  (3)
item [369] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [370] = [ "White berries", 1, 1, "" ];

runs [5] = [ 370, 353 ];  // kills 63, drops 68

// runs [5] = [ x, y ];  // kills ? ( y - 290 ), drops ? ( x - 302 )

/*

item [000] = [ "Coins", 1, 3, "" ];  //  ()
item [000] = [ "Coins", 1, 10, "" ];  //  ()
item [000] = [ "Coins", 1, 29, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 24, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Vial (Water Filled)", 1, 1, "" ];
item [000] = [ "Snape grass", 1, 1, "" ];
item [000] = [ "Ground unicorn horn", 1, 1, "" ];
item [000] = [ "White berries", 1, 1, "" ];
item [000] = [ "Limpwurt root", 1, 1, "" ];
item [000] = [ "Limpwurt root", 1, 2, "" ];
item [000] = [ "Limpwurt root", 1, 3, "" ];
item [000] = [ "Super defense Potion(1 dose)", 1, 1, "" ];

item [000] = [ "Black dagger", 1, 1, "" ];

item [000] = [ "Dragon Square Shield Left Half, 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;   // total drops
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Chaos Druid Warrior";        // monster's name
var mcbl = 44;                            // monster's combat level
var mindex = 107;                         // index into monster data base
var mrpt = 1;                             // number of non-breaking space to add after index name