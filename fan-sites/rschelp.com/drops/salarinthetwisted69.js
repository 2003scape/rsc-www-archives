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

var notes = "Re-spawn time is 1 minute.";

// run 1

item   [0] = [ "Nothing", 1, 0, "" ];
item   [1] = [ "Ranarr Weed", 1, 1, "Herb" ];
item   [2] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Nothing", 1, 0, "" ];
item   [5] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [6] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item   [7] = [ "Sinister key", 1, 1, "" ];
item   [8] = [ "Coins", 1, 10, "" ];  //  (10)
item   [9] = [ "White berries", 1, 1, "" ];
item  [10] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Nothing", 1, 0, "" ];
item  [13] = [ "Nothing", 1, 0, "" ];
item  [14] = [ "Coins", 1, 3, "" ];  //  (13)
item  [15] = [ "Coins", 1, 24, "" ];  //  (37)
item  [16] = [ "Marrentill", 1, 1, "Herb" ];
item  [17] = [ "Coins", 1, 24, "" ];  //  (61)
item  [18] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item  [19] = [ "Nothing", 1, 0, "" ];
item  [20] = [ "Marrentill", 1, 1, "Herb" ];
item  [21] = [ "Avantoe", 1, 1, "Herb" ];
item  [22] = [ "Marrentill", 1, 1, "Herb" ];
item  [23] = [ "Dwarf Weed", 1, 1, "Herb" ];
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Nothing", 1, 0, "" ];
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Cadantine", 1, 1, "Herb" ];

runs [0] = [ 27, 28 ];  // kills 28, drops 28

// run 2

item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item  [30] = [ "Nothing", 1, 0, "" ];
item  [31] = [ "Nothing", 1, 0, "" ];
item  [32] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [33] = [ "Kwuarm", 1, 1, "Herb" ];
item  [34] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [35] = [ "Sinister key", 1, 1, "" ];
item  [36] = [ "Avantoe", 1, 1, "Herb" ];
item  [37] = [ "Harralander", 2, 1, "Herb" ];
item  [38] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [39] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [40] = [ "Guam Leaf", 1, 1, "Herb" ];  // 40
item  [41] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [42] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [43] = [ "Cadantine", 1, 1, "Herb" ];
item  [44] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [45] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [46] = [ "Tarromin", 1, 1, "Herb" ];
item  [47] = [ "Coins", 1, 3, "" ];  //  (3)
item  [48] = [ "White berries", 1, 1, "" ];
item  [49] = [ "Nothing", 1, 0, "" ];  // herb dropped after this but not reachable
item  [50] = [ "Irit Leaf", 1, 1, "Herb" ];  // 50

runs [1] = [ 50, 50 ];  // kills 22, drops 23

// run 3

item  [51] = [ "Kwuarm", 1, 1, "Herb" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [56] = [ "Nothing", 1, 0, "" ];
item  [57] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Coins", 1, 3, "" ];  //  (3)
item  [60] = [ "Coins", 1, 3, "" ];  // 60  (6)
item  [61] = [ "Nothing", 1, 0, "" ];
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Kwuarm", 1, 1, "Herb" ];
item  [64] = [ "Tarromin", 1, 1, "Herb" ];
item  [65] = [ "Nothing", 1, 0, "" ];
item  [66] = [ "Coins", 1, 24, "" ];  // (30)
item  [67] = [ "White berries", 1, 1, "" ];
item  [68] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [69] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [70] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 70
item  [71] = [ "Coins", 1, 10, "" ];  // (40)
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [74] = [ "Coins", 1, 10, "" ];  // (50)
item  [75] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [76] = [ "Coins", 1, 24, "" ];  // (74)
item  [77] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [78] = [ "Nothing", 1, 0, "" ];
item  [79] = [ "Vial (Water Filled)", 1, 1, "" ];
item  [80] = [ "Nothing", 1, 0, "" ];  // 80
item  [81] = [ "Snape grass", 1, 1, "" ];
item  [82] = [ "Nothing", 1, 0, "" ];
item  [83] = [ "Nothing", 1, 0, "" ];
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Tarromin", 1, 1, "Herb" ];
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Coins", 1, 24, "" ];  // (98)
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Harralander", 1, 1, "Herb" ];
item  [90] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 90
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item  [94] = [ "Tarromin", 2, 1, "Herb" ];
item  [95] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [96] = [ "Cadantine", 1, 1, "Herb" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Harralander", 1, 1, "Herb" ];
item  [99] = [ "Nothing", 1, 0, "" ];
item [100] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [101] = [ "Law-rune", 1, 1, "Rune" ];  // 100  (4)
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Coins", 1, 3, "" ];  // (101)
item [104] = [ "Nothing", 1, 0, "" ];
item [105] = [ "Nothing", 1, 0, "" ];
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Nothing", 1, 0, "" ];
item [108] = [ "Law-rune", 1, 1, "Rune" ];  //  (5)
item [109] = [ "Nothing", 1, 0, "" ];
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Marrentill", 1, 1, "Herb" ];  // 110
item [112] = [ "Coins", 2, 3, "" ];  //  (104)
item [113] = [ "Harralander", 1, 1, "Herb" ];

runs [2] = [ 113, 111 ];  // kills 61, drops 63

// run 4

item [114] = [ "Nothing", 1, 0, "" ];
item [115] = [ "Tarromin", 1, 1, "Herb" ];
item [116] = [ "White berries", 1, 1, "" ];
item [117] = [ "Guam Leaf", 1, 1, "Herb" ];
item [118] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [119] = [ "Nothing", 1, 0, "" ];
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "White berries", 1, 1, "" ];
item [122] = [ "Water-rune", 1, 8, "Rune" ];  // 120  (8)
item [123] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [124] = [ "Coins", 1, 24, "" ];  //  (24)
item [125] = [ "Marrentill", 2, 1, "Herb" ];
item [126] = [ "Guam Leaf", 1, 1, "Herb" ];
item [127] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [128] = [ "Tarromin", 1, 1, "Herb" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Tarromin", 1, 1, "Herb" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Water-rune", 1, 8, "Rune" ];  //  (16)
item [133] = [ "Tarromin", 1, 1, "Herb" ];  //  130
item [134] = [ "Water-rune", 1, 8, "Rune" ];  //  (24)
item [135] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [136] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [137] = [ "Coins", 1, 10, "" ];  //  (34)
item [138] = [ "Marrentill", 1, 1, "Herb" ];
item [139] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [140] = [ "Water-rune", 1, 8, "Rune" ];  //  (32)
item [141] = [ "Water-rune", 1, 8, "Rune" ];  //  (40)
item [142] = [ "Nothing", 1, 0, "" ];
item [143] = [ "Guam Leaf", 1, 1, "Herb" ];  // 140
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Coins", 1, 24, "" ];  //  (58)
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Nothing", 1, 0, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Avantoe", 1, 1, "Herb" ];
item [150] = [ "Nothing", 1, 0, "" ];
item [151] = [ "Black dagger", 1, 1, "" ];
item [152] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [153] = [ "Harralander", 1, 1, "Herb" ];  // 150
item [154] = [ "Nothing", 1, 0, "" ];
item [155] = [ "Coins", 1, 24, "" ];  //  (82)
item [156] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [157] = [ "Irit Leaf", 1, 1, "Herb" ];
item [158] = [ "Sinister key", 1, 1, "" ];
item [159] = [ "Tarromin", 1, 1, "Herb" ];
item [160] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item [161] = [ "Water-rune", 1, 8, "Rune" ];  //  (48)
item [162] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [163] = [ "White berries", 1, 1, "" ];  // 160

runs [3] = [ 163, 160 ];  // kills 49, drops 50

// run 5

item [164] = [ "White berries", 1, 1, "" ];
item [165] = [ "Nothing", 1, 0, "" ];
item [166] = [ "Coins", 1, 24, "" ];  //  (24)
item [167] = [ "uncut ruby", 1, 1, "Gem" ];
item [168] = [ "Coins", 1, 3, "" ];  //  (27)
item [169] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [170] = [ "Harralander", 1, 1, "Herb" ];
item [171] = [ "Nothing", 1, 0, "" ];
item [172] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item [173] = [ "Sinister key", 1, 1, "" ];  // 170
item [174] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Tarromin", 1, 1, "Herb" ];
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Sinister key", 1, 1, "" ];
item [179] = [ "Nothing", 1, 0, "" ];
item [180] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [181] = [ "Marrentill", 1, 1, "Herb" ];
item [182] = [ "Nothing", 1, 0, "" ];
item [183] = [ "Harralander", 1, 1, "Herb" ];  // 180
item [184] = [ "Guam Leaf", 1, 1, "Herb" ];
item [185] = [ "Guam Leaf", 1, 1, "Herb" ];
item [186] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [187] = [ "Water-rune", 1, 8, "Rune" ];  //  (16)
item [188] = [ "Nothing", 1, 0, "" ];
item [189] = [ "Nothing", 1, 0, "" ];
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [192] = [ "White berries", 1, 1, "" ];
item [193] = [ "Coins", 1, 24, "" ];  // 190  (51)
item [194] = [ "Sinister key", 1, 1, "" ];
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Marrentill", 2, 1, "Herb" ];
item [198] = [ "Harralander", 1, 1, "Herb" ];
item [199] = [ "Guam Leaf", 1, 1, "Herb" ];
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Nothing", 1, 0, "" ];
item [202] = [ "Tarromin", 1, 1, "Herb" ];
item [203] = [ "Nothing", 1, 0, "" ];
item [204] = [ "Nothing", 1, 0, "" ];  // 200
item [205] = [ "Harralander", 2, 1, "Herb" ];
item [206] = [ "Coins", 1, 3, "" ];  // (54)
item [207] = [ "Nothing", 1, 0, "" ];
item [208] = [ "Nothing", 1, 0, "" ];
item [209] = [ "Nothing", 1, 0, "" ];
item [210] = [ "Coins", 1, 3, "" ];  // (57)
item [211] = [ "Marrentill", 1, 1, "Herb" ];
item [212] = [ "Coins", 1, 3, "" ];  // (60)
item [213] = [ "Sinister key", 1, 1, "" ];

runs [4] = [ 213, 208 ];  // kills 48, drops 50

// run 6

item [214] = [ "Marrentill", 1, 1, "Herb" ];
item [215] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 210
item [216] = [ "Marrentill", 1, 1, "Herb" ];
item [217] = [ "Nothing", 1, 0, "" ];
item [218] = [ "Avantoe", 1, 1, "Herb" ];
item [219] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [220] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [221] = [ "Sinister key", 1, 1, "" ];
item [222] = [ "Kwuarm", 1, 1, "Herb" ];
item [223] = [ "Nothing", 1, 0, "" ];
item [224] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item [225] = [ "Water-rune", 1, 8, "Rune" ];  // 220  (16)
item [226] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [227] = [ "Nothing", 1, 0, "" ];
item [228] = [ "Nothing", 1, 0, "" ];
item [229] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [230] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [231] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [232] = [ "Coins", 1, 10, "" ];  //  (10)
item [233] = [ "Nothing", 1, 0, "" ];
item [234] = [ "White berries", 1, 1, "" ];
item [235] = [ "Ranarr Weed", 1, 1, "Herb" ];  // 230
item [236] = [ "Nothing", 1, 0, "" ];
item [237] = [ "Sinister key", 1, 1, "" ];
item [238] = [ "Coins", 1, 10, "" ];  //  (20)
item [239] = [ "Nothing", 1, 0, "" ];
item [240] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [241] = [ "Nothing", 1, 0, "" ];
item [242] = [ "Nothing", 1, 0, "" ];
item [243] = [ "Coins", 1, 24, "" ];  //  (44)
item [244] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [245] = [ "Nothing", 1, 0, "" ];  // 240
item [246] = [ "Avantoe", 1, 1, "Herb" ];

runs [5] = [ 246, 241 ];  // kills 33, drops 33

// run 7

item [247] = [ "Tarromin", 1, 1, "Herb" ];
item [248] = [ "Nothing", 1, 0, "" ];
item [249] = [ "Marrentill", 1, 1, "Herb" ];
item [250] = [ "Sinister key", 1, 1, "" ];
item [251] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [252] = [ "Coins", 1, 10, "" ];  //  (10)
item [253] = [ "Coins", 1, 24, "" ];  //  (34)
item [254] = [ "Nothing", 1, 0, "" ];
item [255] = [ "Black dagger", 1, 1, "" ];  // 250
item [256] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [257] = [ "Nothing", 1, 0, "" ];
item [258] = [ "Avantoe", 1, 1, "Herb" ];
item [259] = [ "Nothing", 1, 0, "" ];
item [260] = [ "Nothing", 1, 0, "" ];
item [261] = [ "Sinister key", 1, 1, "" ];
item [262] = [ "Cadantine", 1, 1, "Herb" ];
item [263] = [ "Marrentill", 1, 1, "Herb" ];
item [264] = [ "Coins", 1, 24, "" ];  //  (58)
item [265] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 260
item [266] = [ "Nothing", 1, 0, "" ];
item [267] = [ "Coins", 1, 3, "" ];  //  (61)
item [268] = [ "Coins", 1, 10, "" ];  //  (71)
item [269] = [ "Nothing", 1, 0, "" ];
item [270] = [ "Guam Leaf", 2, 1, "Herb" ];
item [271] = [ "Guam Leaf", 1, 1, "Herb" ];
item [272] = [ "Nothing", 1, 0, "" ];
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Nothing", 1, 0, "" ];
item [275] = [ "Guam Leaf", 1, 1, "Herb" ];
item [276] = [ "Tarromin", 1, 1, "Herb" ];  // 270
item [277] = [ "Harralander", 1, 1, "Herb" ];
item [278] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [279] = [ "Coins", 1, 10, "" ];  //  (81)
item [280] = [ "Guam Leaf", 1, 1, "Herb" ];
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [283] = [ "Nothing", 1, 0, "" ];
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "White berries", 1, 1, "" ];
item [286] = [ "Nothing", 1, 0, "" ];  // 280
item [287] = [ "Snape grass", 1, 1, "" ];
item [288] = [ "Tarromin", 1, 1, "Herb" ];
item [289] = [ "Harralander", 1, 1, "Herb" ];

runs [6] = [ 289, 283 ];  // kills 42, drops 43

// run 8

item [290] = [ "Nothing", 1, 0, "" ];
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Sinister key", 1, 1, "" ];
item [293] = [ "Coins", 1, 10, "" ];  //  (10)
item [294] = [ "Marrentill", 1, 1, "Herb" ];
item [295] = [ "Guam Leaf", 1, 1, "Herb" ];
item [296] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 290
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [299] = [ "Nothing", 1, 0, "" ];
item [300] = [ "Nothing", 1, 0, "" ];
item [301] = [ "Sinister key", 1, 1, "" ];
item [302] = [ "Harralander", 1, 1, "Herb" ];
item [303] = [ "Nothing", 1, 0, "" ];
item [304] = [ "Kwuarm", 1, 1, "Herb" ];
item [305] = [ "Water-rune", 1, 8, "Rune" ];  //  (8)
item [306] = [ "Guam Leaf", 1, 1, "Herb" ];  // 300
item [307] = [ "Nothing", 1, 0, "" ];
item [308] = [ "White berries", 1, 1, "" ];
item [309] = [ "Nothing", 1, 0, "" ];
item [310] = [ "Water-rune", 1, 8, "Rune" ];  //  (16)
item [311] = [ "Nothing", 1, 0, "" ];
item [312] = [ "Nothing", 1, 0, "" ];
item [313] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [314] = [ "Guam Leaf", 1, 1, "Herb" ];
item [315] = [ "White berries", 1, 1, "" ];
item [316] = [ "Nothing", 1, 0, "" ];  // 310
item [317] = [ "Nothing", 1, 0, "" ];
item [318] = [ "Tarromin", 2, 1, "Herb" ];
item [319] = [ "Guam Leaf", 1, 1, "Herb" ];
item [320] = [ "Kwuarm", 1, 1, "Herb" ];
item [321] = [ "Harralander", 1, 1, "Herb" ];
item [322] = [ "Nothing", 1, 0, "" ];
item [323] = [ "Water-rune", 1, 8, "Rune" ];  //  (24)
item [324] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [325] = [ "Nothing", 1, 0, "" ];
item [326] = [ "Coins", 1, 3, "" ];  //  (13)
item [327] = [ "Super defense Potion(1 dose)", 1, 1, "" ];  // 320
item [328] = [ "Coins", 1, 10, "" ];  //  (23)
item [329] = [ "Irit Leaf", 2, 1, "Herb" ];
item [330] = [ "Tarromin", 1, 1, "Herb" ];
item [331] = [ "Sinister key", 1, 1, "" ];
item [332] = [ "Marrentill", 1, 1, "Herb" ];
item [333] = [ "Marrentill", 1, 1, "Herb" ];
item [334] = [ "White berries", 1, 1, "" ];
item [335] = [ "Nothing", 1, 0, "" ];

runs [7] = [ 335, 327 ];  // kills 44, drops 46

// runs [7] = [ x, y ];  // kills ? ( y - 283 ), drops ? ( x - 289 )

/*
item [000] = [ "Coins", 1, 3, "" ];  //  ()
item [000] = [ "Coins", 1, 10, "" ];  //  ()
item [000] = [ "Coins", 1, 24, "" ];  //  ()

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

item [000] = [ "Water-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Black dagger", 1, 1, "" ];

item [000] = [ "Super defense Potion(1 dose)", 1, 1, "" ];
item [000] = [ "White berries", 1, 1, "" ];
item [000] = [ "Sinister key", 1, 1, "" ];
item [000] = [ "Vial (Water Filled)", 1, 1, "" ];
item [000] = [ "Snape grass", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Salarin the Twisted";      // monster's name
var mcbl = 69;                          // monster's combat level
var mindex = 184;                       // index into monster data base
var mrpt = 1;                           // number of non-breaking space to add after index name