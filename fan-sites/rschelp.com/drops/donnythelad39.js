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

var notes = "The re-spawn rate is 4 mins. Because of the long re-spawn time it would have taken 20 hrs to get 300 kills. So I decided to make 3 drop tables, one for each bandit leader; Donny the lad, Black Heather and Speedy Keith. Because they drop so much silver the kill counts on a single leader is small. The average kill count for a run is around 57.";

// run 1

item   [0] = [ "Coins", 1, 8, "" ];
item   [1] = [ "Coins", 1, 5, "" ];
item   [2] = [ "Coins", 1, 150, "" ];
item   [3] = [ "Coins", 1, 48, "" ];
item   [4] = [ "uncut emerald", 1, 1, "Gem" ];
item   [5] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [6] = [ "Irit Leaf", 1, 1, "Herb" ];
item   [7] = [ "Coins", 1, 48, "" ];
item   [8] = [ "Coins", 1, 48, "" ];
item   [9] = [ "Coins", 1, 48, "" ];
item  [10] = [ "Coins", 1, 15, "" ];
item  [11] = [ "Coins", 1, 8, "" ];
item  [12] = [ "Tarromin", 1, 1, "Herb" ];
item  [13] = [ "Coins", 1, 15, "" ];
item  [14] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [15] = [ "Coins", 1, 15, "" ];
item  [16] = [ "Coins", 1, 70, "" ];
item  [17] = [ "Water-rune", 1, 20, "Rune" ];
item  [18] = [ "Coins", 1, 48, "" ];
item  [19] = [ "Marrentill", 1, 1, "Herb" ];
item  [20] = [ "Tarromin", 1, 1, "Herb" ];
item  [21] = [ "Coins", 1, 8, "" ];
item  [22] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [23] = [ "Swordfish certificate", 1, 1, "" ];
item  [24] = [ "Kwuarm", 1, 1, "Herb" ];

runs [0] = [ 24, 25 ];  // kills 25 drops 25

// run 2

item  [25] = [ "Water-rune", 1, 20, "Rune" ];
item  [26] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [27] = [ "Coins", 1, 15, "" ];
item  [28] = [ "Coins", 1, 8, "" ];
item  [29] = [ "Coins", 1, 48, "" ];
item  [30] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [31] = [ "Coins", 1, 48, "" ];
item  [32] = [ "Coins", 1, 15, "" ];
item  [33] = [ "Body-rune", 1, 8, "Rune" ];
item  [34] = [ "Coins", 1, 48, "" ];
item  [35] = [ "Coins", 1, 8, "" ];
item  [36] = [ "Coins", 1, 8, "" ];
item  [37] = [ "Coins", 1, 48, "" ];
item  [38] = [ "Coins", 1, 15, "" ];
item  [39] = [ "Coins", 1, 48, "" ];
item  [40] = [ "Silver", 1, 3, "" ];
item  [41] = [ "Water-rune", 1, 20, "Rune" ];
item  [42] = [ "Coins", 1, 48, "" ];
item  [43] = [ "Coins", 1, 5, "" ];
item  [44] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [45] = [ "Nature-rune", 1, 3, "Rune" ];

runs [1] = [ 45, 46 ];  // kills 21 drops 21

// run 3

item  [46] = [ "Nature-rune", 1, 3, "Rune" ];
item  [47] = [ "Large Steel Helmet", 1, 1, "" ];
item  [48] = [ "Water-rune", 1, 20, "Rune" ];
item  [49] = [ "Marrentill", 1, 1, "Herb" ];
item  [50] = [ "Coins", 1, 8, "" ];
item  [51] = [ "Law-rune", 1, 1, "Rune" ];
item  [52] = [ "Coins", 1, 48, "" ];
item  [53] = [ "Law-rune", 1, 1, "Rune" ];
item  [54] = [ "Coins", 1, 70, "" ];
item  [55] = [ "Coins", 1, 15, "" ];
item  [56] = [ "Silver", 1, 1, "" ];
item  [57] = [ "Swordfish certificate", 1, 1, "" ];
item  [58] = [ "Coins", 1, 70, "" ];
item  [59] = [ "Coins", 1, 48, "" ];
item  [60] = [ "Body-rune", 1, 8, "Rune" ];
item  [61] = [ "Water-rune", 1, 20, "Rune" ];
item  [62] = [ "Coins", 1, 70, "" ];
item  [63] = [ "Silver", 1, 3, "" ];

runs [2] = [ 63, 64 ];  // kills 18 drops 18

// run 4

item  [64] = [ "Coins", 1, 48, "" ];
item  [65] = [ "Coins", 1, 48, "" ];
item  [66] = [ "Coins", 1, 48, "" ];
item  [67] = [ "Coins", 1, 48, "" ];
item  [68] = [ "Body-rune", 1, 8, "Rune" ];
item  [69] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [70] = [ "Coins", 1, 48, "" ];
item  [71] = [ "Coins", 1, 70, "" ];
item  [72] = [ "Coins", 1, 48, "" ];
item  [73] = [ "Coins", 1, 8, "" ];
item  [74] = [ "Coins", 1, 70, "" ];
item  [75] = [ "Large Steel Helmet", 1, 1, "" ];
item  [76] = [ "Coins", 1, 8, "" ];
item  [77] = [ "Water-rune", 1, 20, "Rune" ];
item  [78] = [ "Silver", 1, 3, "" ];
item  [79] = [ "Silver", 1, 3, "" ];
item  [80] = [ "Coins", 1, 15, "" ];
item  [81] = [ "Marrentill", 1, 1, "Herb" ];
item  [82] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [83] = [ "Coins", 1, 48, "" ];

runs [3] = [ 83, 84 ];  // kills 20 drops 20

// run 5

item  [84] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [85] = [ "Coins", 1, 15, "" ];
item  [86] = [ "Coins", 1, 8, "" ];
item  [87] = [ "Coins", 1, 150, "" ];
item  [88] = [ "Coins", 1, 48, "" ];
item  [89] = [ "Coins", 1, 8, "" ];
item  [90] = [ "Coins", 1, 48, "" ];
item  [91] = [ "Coins", 1, 70, "" ];
item  [92] = [ "Coins", 1, 48, "" ];
item  [93] = [ "Coins", 1, 8, "" ];
item  [94] = [ "Silver", 1, 3, "" ];
item  [95] = [ "Coins", 1, 15, "" ];
item  [96] = [ "Coins", 1, 150, "" ];
item  [97] = [ "Coins", 1, 48, "" ];
item  [98] = [ "Coins", 1, 5, "" ];
item  [99] = [ "Swordfish certificate", 1, 1, "" ];
item [100] = [ "Coins", 1, 15, "" ];
item [101] = [ "Coins", 1, 15, "" ];
item [102] = [ "Tarromin", 1, 1, "Herb" ];
item [103] = [ "Coins", 1, 70, "" ];
item [104] = [ "Nature-rune", 1, 3, "Rune" ];
item [105] = [ "Nature-rune", 1, 3, "Rune" ];
item [106] = [ "Avantoe", 1, 1, "Herb" ];
item [107] = [ "Harralander", 1, 1, "Herb" ];

runs [4] = [ 107, 108 ];  // kills 24 drops 24

// run 6

item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Coins", 1, 8, "" ];
item [110] = [ "Coins", 1, 48, "" ];
item [111] = [ "Coins", 1, 48, "" ];
item [112] = [ "Coins", 1, 48, "" ];
item [113] = [ "Coins", 1, 15, "" ];
item [114] = [ "Coins", 1, 15, "" ];
item [115] = [ "Law-rune", 1, 1, "Rune" ];
item [116] = [ "Coins", 1, 70, "" ];
item [117] = [ "Coins", 1, 48, "" ];
item [118] = [ "Coins", 1, 8, "" ];
item [119] = [ "Coins", 1, 15, "" ];
item [120] = [ "Marrentill", 1, 1, "Herb" ];
item [121] = [ "Steel Long Sword", 1, 1, "" ];
item [122] = [ "Silver", 1, 3, "" ];
item [123] = [ "Silver", 1, 2, "" ];
item [124] = [ "Coins", 1, 48, "" ];
item [125] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [126] = [ "Body-rune", 1, 8, "Rune" ];
item [127] = [ "Coins", 1, 70, "" ];
item [128] = [ "Coins", 1, 48, "" ];
item [129] = [ "Coins", 1, 15, "" ];
item [130] = [ "Coins", 1, 48, "" ];
item [131] = [ "Chaos-rune", 1, 2, "Rune" ];
item [132] = [ "Silver", 1, 1, "" ];
item [133] = [ "Chaos-rune", 1, 2, "Rune" ];
item [134] = [ "Coins", 1, 15, "" ];
item [135] = [ "Coins", 1, 5, "" ];
item [136] = [ "Body-rune", 1, 8, "Rune" ];

runs [5] = [ 136, 137 ];  // kills 29 drops 29

// run 7

item [137] = [ "Coins", 1, 15, "" ];
item [138] = [ "Coins", 1, 48, "" ];
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [141] = [ "Guam Leaf", 1, 1, "Herb" ];
item [142] = [ "Coins", 1, 48, "" ];
item [143] = [ "Coins", 1, 8, "" ];
item [144] = [ "Coins", 1, 48, "" ];
item [145] = [ "Coins", 1, 48, "" ];
item [146] = [ "Coins", 1, 8, "" ];
item [147] = [ "Coins", 1, 70, "" ];
item [148] = [ "Coins", 1, 70, "" ];
item [149] = [ "Coins", 1, 70, "" ];
item [150] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [151] = [ "Coins", 1, 48, "" ];
item [152] = [ "Coins", 1, 48, "" ];
item [153] = [ "Coins", 1, 48, "" ];
item [154] = [ "Silver", 1, 3, "" ];
item [155] = [ "Coins", 1, 8, "" ];
item [156] = [ "Coins", 1, 48, "" ];

runs [6] = [ 156, 157 ];  // kills 20 drops 20

// run 8

item [157] = [ "Silver", 1, 1, "" ];
item [158] = [ "Coins", 1, 70, "" ];
item [159] = [ "Marrentill", 1, 1, "Herb" ];
item [160] = [ "Guam Leaf", 1, 1, "Herb" ];
item [161] = [ "Coins", 1, 48, "" ];
item [162] = [ "Coins", 1, 70, "" ];
item [163] = [ "Water-rune", 1, 20, "Rune" ];
item [164] = [ "Swordfish certificate", 1, 1, "" ];
item [165] = [ "Water-rune", 1, 20, "Rune" ];
item [166] = [ "Coins", 1, 48, "" ];
item [167] = [ "Coins", 1, 5, "" ];
item [168] = [ "Nature-rune", 1, 3, "Rune" ];
item [169] = [ "Marrentill", 1, 1, "Herb" ];
item [170] = [ "Coins", 1, 70, "" ];

runs [7] = [ 170, 171 ];  // kills 14 drops 14

// run 9

item [171] = [ "Silver", 1, 3, "" ];
item [172] = [ "Coins", 1, 15, "" ];
item [173] = [ "Law-rune", 1, 1, "Rune" ];
item [174] = [ "Silver", 1, 3, "" ];
item [175] = [ "Coins", 1, 48, "" ];
item [176] = [ "Coins", 1, 48, "" ];
item [177] = [ "Coins", 1, 5, "" ];
item [178] = [ "Coins", 1, 70, "" ];
item [179] = [ "Coins", 1, 48, "" ];
item [180] = [ "Coins", 1, 150, "" ];
item [181] = [ "Silver", 1, 2, "" ];
item [182] = [ "Silver", 1, 3, "" ];

runs [8] = [ 182, 183 ];  // kills 12 drops 12

// run 10

item [183] = [ "Coins", 1, 70, "" ];
item [184] = [ "Silver", 1, 2, "" ];
item [185] = [ "Coins", 1, 15, "" ];
item [186] = [ "Water-rune", 1, 20, "Rune" ];
item [187] = [ "Silver", 1, 3, "" ];
item [188] = [ "Law-rune", 1, 1, "Rune" ];
item [189] = [ "Coins", 1, 70, "" ];
item [190] = [ "Coins", 1, 48, "" ];
item [191] = [ "Water-rune", 1, 20, "Rune" ];
item [192] = [ "Coins", 1, 15, "" ];
item [193] = [ "Tarromin", 1, 1, "Herb" ];
item [194] = [ "Coins", 1, 48, "" ];
item [195] = [ "Coins", 1, 8, "" ];

runs [9] = [ 195, 196 ];  // kills 13 drops 13

// run 11

item [196] = [ "Coins", 1, 15, "" ];
item [197] = [ "Coins", 1, 5, "" ];
item [198] = [ "Coins", 1, 15, "" ];
item [199] = [ "Tarromin", 1, 1, "Herb" ];
item [200] = [ "Coins", 1, 48, "" ];
item [201] = [ "Large Steel Helmet", 1, 1, "" ];
item [202] = [ "Coins", 1, 8, "" ];
item [203] = [ "Coins", 1, 48, "" ];
item [204] = [ "Coins", 1, 70, "" ];
item [205] = [ "Coins", 1, 150, "" ];
item [206] = [ "Coins", 1, 48, "" ];
item [207] = [ "Nature-rune", 1, 3, "Rune" ];
item [208] = [ "Coins", 1, 15, "" ];
item [209] = [ "Coins", 1, 70, "" ];
item [210] = [ "Coins", 1, 48, "" ];
item [211] = [ "Coins", 1, 48, "" ];
item [212] = [ "Coins", 1, 70, "" ];
item [213] = [ "Coins", 1, 48, "" ];
item [214] = [ "Coins", 1, 15, "" ];
item [215] = [ "Guam Leaf", 1, 1, "Herb" ];

runs [10] = [ 215, 216 ];  // kills 20 drops 20

// run 12

item [216] = [ "Coins", 1, 48, "" ];
item [217] = [ "Water-rune", 1, 20, "Rune" ];
item [218] = [ "Coins", 1, 48, "" ];
item [219] = [ "Coins", 1, 15, "" ];
item [220] = [ "Cadantine", 1, 1, "Herb" ];
item [221] = [ "Coins", 1, 70, "" ];
item [222] = [ "Large Steel Helmet", 1, 1, "" ];
item [223] = [ "Tarromin", 1, 1, "Herb" ];
item [224] = [ "Coins", 1, 15, "" ];
item [225] = [ "Coins", 1, 70, "" ];
item [226] = [ "Coins", 1, 48, "" ];
item [227] = [ "Coins", 1, 150, "" ];
item [228] = [ "Guam Leaf", 1, 1, "Herb" ];
item [229] = [ "Coins", 1, 15, "" ];
item [230] = [ "Coins", 1, 150, "" ];
item [231] = [ "Large Steel Helmet", 1, 1, "" ];
item [232] = [ "Coins", 1, 70, "" ];
item [233] = [ "Coins", 1, 70, "" ];

runs [11] = [ 233, 234 ];  // kills 18 drops 18

// run 13

item [234] = [ "Nature-rune", 1, 3, "Rune" ];
item [235] = [ "Coins", 1, 48, "" ];
item [236] = [ "Coins", 1, 70, "" ];
item [237] = [ "Coins", 1, 15, "" ];
item [238] = [ "Law-rune", 1, 1, "Rune" ];
item [239] = [ "Coins", 1, 48, "" ];
item [240] = [ "Coins", 1, 48, "" ];
item [241] = [ "Coins", 1, 15, "" ];
item [242] = [ "Coins", 1, 15, "" ];
item [243] = [ "Coins", 1, 48, "" ];
item [244] = [ "uncut sapphire", 1, 1, "Gem" ];

runs [12] = [ 244, 245 ];  // kills 11 drops 11

// run 14

item [245] = [ "Avantoe", 1, 1, "Herb" ];
item [246] = [ "Coins", 1, 48, "" ];
item [247] = [ "Coins", 1, 8, "" ];
item [248] = [ "Nature-rune", 1, 3, "Rune" ];
item [249] = [ "Water-rune", 1, 20, "Rune" ];
item [250] = [ "Coins", 1, 70, "" ];
item [251] = [ "Guam Leaf", 1, 1, "Herb" ];
item [252] = [ "Body-rune", 1, 8, "Rune" ];
item [253] = [ "Coins", 1, 15, "" ];
item [254] = [ "Silver", 1, 3, "" ];
item [255] = [ "Coins", 1, 15, "" ];
item [256] = [ "Coins", 1, 48, "" ];
item [257] = [ "Coins", 1, 15, "" ];
item [258] = [ "Water-rune", 1, 20, "Rune" ];
item [259] = [ "Coins", 1, 70, "" ];
item [260] = [ "Coins", 1, 70, "" ];
item [261] = [ "Coins", 1, 48, "" ];
item [262] = [ "Coins", 1, 70, "" ];
item [263] = [ "Coins", 1, 15, "" ];
item [264] = [ "Coins", 1, 15, "" ];
item [265] = [ "Coins", 1, 70, "" ];
item [266] = [ "Coins", 1, 48, "" ];
item [267] = [ "Coins", 1, 70, "" ];
item [268] = [ "Coins", 1, 48, "" ];
item [269] = [ "Silver", 1, 3, "" ];

runs [13] = [ 269, 270 ];  // kills 25 drops 25

// run 15

item [270] = [ "Coins", 1, 5, "" ];
item [271] = [ "Nature-rune", 1, 3, "Rune" ];
item [272] = [ "Coins", 1, 15, "" ];
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Silver", 1, 3, "" ];
item [275] = [ "Coins", 1, 5, "" ];
item [276] = [ "Tarromin", 1, 1, "Herb" ];
item [277] = [ "Coins", 1, 48, "" ];
item [278] = [ "Body-rune", 1, 8, "Rune" ];
item [279] = [ "Coins", 1, 48, "" ];
item [280] = [ "Silver", 1, 3, "" ];
item [281] = [ "Coins", 1, 48, "" ];

runs [14] = [ 281, 282 ];  // kills 12 drops 12

// run 16

item [282] = [ "Coins", 1, 48, "" ];
item [283] = [ "Coins", 1, 48, "" ];
item [284] = [ "Coins", 1, 5, "" ];
item [285] = [ "Harralander", 1, 1, "Herb" ];
item [286] = [ "Coins", 1, 15, "" ];
item [287] = [ "Coins", 1, 8, "" ];
item [288] = [ "Coins", 1, 48, "" ];
item [289] = [ "Coins", 1, 8, "" ];
item [290] = [ "Coins", 1, 8, "" ];
item [291] = [ "Irit Leaf", 1, 1, "Herb" ];
item [292] = [ "Law-rune", 1, 1, "Rune" ];
item [293] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [294] = [ "Coins", 1, 48, "" ];
item [295] = [ "Avantoe", 1, 1, "Herb" ];

runs [15] = [ 295, 296 ];  // kills 14 drops 14

// run 17

item [296] = [ "Coins", 1, 150, "" ];
item [297] = [ "Silver", 1, 3, "" ];
item [298] = [ "Coins", 1, 15, "" ];
item [299] = [ "Kwuarm", 1, 1, "Herb" ];
item [300] = [ "Harralander", 1, 1, "Herb" ];
item [301] = [ "Irit Leaf", 1, 1, "Herb" ];
item [302] = [ "Water-rune", 1, 20, "Rune" ];
item [303] = [ "Harralander", 1, 1, "Herb" ];
item [304] = [ "Coins", 1, 48, "" ];
item [305] = [ "Silver", 1, 3, "" ];
item [306] = [ "Coins", 1, 48, "" ];
item [307] = [ "Coins", 1, 48, "" ];
item [308] = [ "Silver", 1, 3, "" ];
item [309] = [ "Law-rune", 1, 1, "Rune" ];

runs [16] = [ 309, 310 ];  // kills 14 drops 14

// run 18

item [310] = [ "Coins", 1, 48, "" ];
item [311] = [ "Coins", 1, 15, "" ];
item [312] = [ "Silver", 1, 3, "" ];
item [313] = [ "Harralander", 1, 1, "Herb" ];
item [314] = [ "Chaos-rune", 1, 2, "Rune" ];
item [315] = [ "Silver", 1, 3, "" ];
item [316] = [ "Coins", 1, 15, "" ];
item [317] = [ "Coins", 1, 5, "" ];
item [318] = [ "Coins", 1, 8, "" ];
item [319] = [ "Water-rune", 1, 20, "Rune" ];
item [320] = [ "Coins", 1, 5, "" ];
item [321] = [ "Nothing", 1, 0, "" ];
item [322] = [ "Body-rune", 1, 8, "Rune" ];
item [323] = [ "Coins", 1, 48, "" ];
item [324] = [ "Coins", 1, 15, "" ];
item [325] = [ "Guam Leaf", 1, 1, "Herb" ];
item [326] = [ "Coins", 1, 48, "" ];
item [327] = [ "Silver", 1, 3, "" ];

runs [17] = [ 327, 328 ];  // kills 18 drops 18

// runs [18] = [ x, y ];  // kills ? ( y - 328 ), drops ? ( x - 327 )

/*
item [000] = [ "Coins", 1, 5, "" ];
item [000] = [ "Coins", 1, 8, "" ];
item [000] = [ "Coins", 1, 15, "" ];
item [000] = [ "Coins", 1, 48, "" ];
item [000] = [ "Coins", 1, 70, "" ];
item [000] = [ "Coins", 1, 150, "" ];

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];  // Dwarf Weed
item [000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Water-rune", 1, 20, "Rune" ];
item [000] = [ "Body-rune", 1, 8, "Rune" ];
item [000] = [ "Mind-rune", 1, 3, "Rune" ];
item [000] = [ "Chaos-rune", 1, 2, "Rune" ];
item [000] = [ "Nature-rune", 1, 3, "Rune" ];
item [000] = [ "Law-rune", 1, 1, "Rune" ];

item [000] = [ "Silver", 1, 1, "" ];
item [000] = [ "Silver", 1, 2, "" ];
item [000] = [ "Silver", 1, 3, "" ];
item [000] = [ "Swordfish certificate", 1, 1, "" ];

item [000] = [ "Bronze Spear", 1, 1, "" ];
item [000] = [ "Steel Long Sword", 1, 1, "" ];

item [000] = [ "Large Steel Helmet", 1, 1, "" ];

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

var mname = "Donny the lad";        // monster's name
var mcbl = 39;                      // monster's combat level
var mindex = 101;                   // index into monster data base
var mrpt = 1;                       // number of non-breaking space to add after index name