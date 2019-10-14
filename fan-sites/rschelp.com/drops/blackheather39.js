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

item   [0] = [ "Coins", 1, 48, "" ];
item   [1] = [ "Coins", 1, 48, "" ];
item   [2] = [ "Large Steel Helmet", 1, 1, "" ];
item   [3] = [ "Coins", 1, 48, "" ];
item   [4] = [ "Coins", 1, 15, "" ];
item   [5] = [ "Coins", 1, 8, "" ];
item   [6] = [ "Coins", 1, 150, "" ];
item   [7] = [ "Coins", 1, 48, "" ];
item   [8] = [ "Coins", 1, 70, "" ];
item   [9] = [ "Coins", 1, 48, "" ];
item  [10] = [ "Silver", 1, 3, "" ];
item  [11] = [ "Guam Leaf", 1, 1, "Herb" ];

runs [0] = [ 11, 12 ];  // kills 12 drops 12

// run 2

item  [12] = [ "Nothing", 1, 0, "" ];
item  [13] = [ "Nature-rune", 1, 3, "Rune" ];
item  [14] = [ "Swordfish certificate", 1, 1, "" ];
item  [15] = [ "Coins", 1, 8, "" ];
item  [16] = [ "Law-rune", 1, 1, "Rune" ];
item  [17] = [ "Coins", 1, 8, "" ];
item  [18] = [ "Coins", 1, 8, "" ];
item  [19] = [ "Coins", 1, 70, "" ];
item  [20] = [ "Coins", 1, 70, "" ];
item  [21] = [ "Coins", 1, 15, "" ];
item  [22] = [ "Nature-rune", 1, 3, "Rune" ];
item  [23] = [ "Coins", 1, 8, "" ];
item  [24] = [ "Silver", 1, 1, "" ];
item  [25] = [ "Coins", 1, 48, "" ];
item  [26] = [ "Silver", 1, 3, "" ];
item  [27] = [ "Coins", 1, 8, "" ];
item  [28] = [ "Coins", 1, 70, "" ];
item  [29] = [ "Coins", 1, 48, "" ];
item  [30] = [ "Coins", 1, 70, "" ];
item  [31] = [ "Coins", 1, 48, "" ];
item  [32] = [ "Coins", 1, 48, "" ];

runs [1] = [ 32, 33 ];  // kills 21 drops 21

// run 3

item  [33] = [ "Tarromin", 1, 1, "Herb" ];
item  [34] = [ "Coins", 1, 5, "" ];
item  [35] = [ "Marrentill", 1, 1, "Herb" ];
item  [36] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [37] = [ "Coins", 1, 48, "" ];
item  [38] = [ "Silver", 1, 3, "" ];
item  [39] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [40] = [ "Coins", 1, 70, "" ];
item  [41] = [ "Marrentill", 1, 1, "Herb" ];
item  [42] = [ "Coins", 1, 48, "" ];
item  [43] = [ "Nature-rune", 1, 3, "Rune" ];
item  [44] = [ "Coins", 1, 8, "" ];
item  [45] = [ "Coins", 1, 5, "" ];
item  [46] = [ "Coins", 1, 8, "" ];
item  [47] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [48] = [ "Coins", 1, 48, "" ];  // was 118 but i think it was mixed with donny's 70 coin drop
item  [49] = [ "Nothing", 1, 0, "" ];

runs [2] = [ 49, 50 ];  // kills 17 drops 17

// run 4

item  [50] = [ "Steel Long Sword", 1, 1, "" ];
item  [51] = [ "Coins", 1, 70, "" ];
item  [52] = [ "Swordfish certificate", 1, 1, "" ];
item  [53] = [ "Coins", 1, 8, "" ];
item  [54] = [ "Water-rune", 1, 20, "Rune" ];
item  [55] = [ "Coins", 1, 8, "" ];
item  [56] = [ "Coins", 1, 5, "" ];
item  [57] = [ "Water-rune", 1, 20, "Rune" ];
item  [58] = [ "Coins", 1, 150, "" ];
item  [59] = [ "Coins", 1, 15, "" ];
item  [60] = [ "Coins", 1, 48, "" ];
item  [61] = [ "Coins", 1, 8, "" ];
item  [62] = [ "Coins", 1, 15, "" ];
item  [63] = [ "Water-rune", 1, 20, "Rune" ];
item  [64] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [65] = [ "Coins", 1, 70, "" ];
item  [66] = [ "Coins", 1, 48, "" ];
item  [67] = [ "Coins", 1, 150, "" ];
item  [68] = [ "Coins", 1, 15, "" ];
item  [69] = [ "Silver", 1, 2, "" ];

runs [3] = [ 69, 70 ];  // kills 20 drops 20

// run 5

item  [70] = [ "Coins", 1, 15, "" ];
item  [71] = [ "Tarromin", 1, 1, "Herb" ];
item  [72] = [ "Nature-rune", 1, 3, "Rune" ];
item  [73] = [ "Marrentill", 1, 1, "Herb" ];
item  [74] = [ "Marrentill", 1, 1, "Herb" ];
item  [75] = [ "Marrentill", 1, 1, "Herb" ];
item  [76] = [ "Coins", 1, 70, "" ];
item  [77] = [ "Coins", 1, 48, "" ];
item  [78] = [ "Silver", 1, 3, "" ];
item  [79] = [ "Silver", 1, 3, "" ];
item  [80] = [ "Swordfish certificate", 1, 1, "" ];
item  [81] = [ "Law-rune", 1, 1, "Rune" ]; 
item  [82] = [ "Marrentill", 1, 1, "Herb" ];
item  [83] = [ "Coins", 1, 48, "" ];
item  [84] = [ "Coins", 1, 48, "" ];
item  [85] = [ "Coins", 1, 8, "" ];
item  [86] = [ "Coins", 1, 15, "" ];
item  [87] = [ "Coins", 1, 48, "" ];
item  [88] = [ "Coins", 1, 48, "" ];
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Coins", 1, 48, "" ];
item  [92] = [ "Steel Long Sword", 1, 1, "" ];
item  [93] = [ "Coins", 1, 48, "" ];

runs [4] = [ 93, 94 ];  // kills 24 drops 24

// run 6

item  [94] = [ "Coins", 1, 48, "" ];
item  [95] = [ "Body-rune", 1, 8, "Rune" ];
item  [96] = [ "Coins", 1, 15, "" ];
item  [97] = [ "Marrentill", 1, 1, "Herb" ];
item  [98] = [ "Coins", 1, 15, "" ];
item  [99] = [ "Irit Leaf", 1, 1, "Herb" ];
item [100] = [ "Tarromin", 1, 1, "Herb" ];
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Coins", 1, 70, "" ];
item [103] = [ "Coins", 1, 70, "" ];
item [104] = [ "Nature-rune", 1, 3, "Rune" ];
item [105] = [ "Large Steel Helmet", 1, 1, "" ];
item [106] = [ "Coins", 1, 48, "" ];
item [107] = [ "Marrentill", 1, 1, "Herb" ];
item [108] = [ "Coins", 1, 48, "" ];
item [109] = [ "Coins", 1, 15, "" ];
item [110] = [ "Coins", 1, 8, "" ];
item [111] = [ "Silver", 1, 3, "" ];
item [112] = [ "Coins", 1, 15, "" ];
item [113] = [ "Coins", 1, 48, "" ];
item [114] = [ "Coins", 1, 15, "" ];
item [115] = [ "Kwuarm", 1, 1, "Herb" ];
item [116] = [ "Guam Leaf", 1, 1, "Herb" ];
item [117] = [ "Coins", 1, 5, "" ];
item [118] = [ "Nothing", 1, 0, "" ];
item [119] = [ "Law-rune", 1, 1, "Rune" ];
item [120] = [ "Body-rune", 1, 8, "Rune" ];
item [121] = [ "Chaos-rune", 1, 2, "Rune" ];
item [122] = [ "Marrentill", 1, 1, "Herb" ];

runs [5] = [ 122, 123 ];  // kills 29 drops 29

// run 7

item [123] = [ "Coins", 1, 70, "" ];
item [124] = [ "Law-rune", 1, 1, "Rune" ];
item [125] = [ "Coins", 1, 15, "" ];
item [126] = [ "Coins", 1, 48, "" ];
item [127] = [ "Avantoe", 1, 1, "Herb" ];
item [128] = [ "Law-rune", 1, 1, "Rune" ];
item [129] = [ "Water-rune", 1, 20, "Rune" ];
item [130] = [ "Coins", 1, 48, "" ];
item [131] = [ "Coins", 1, 8, "" ];
item [132] = [ "Marrentill", 1, 1, "Herb" ];
item [133] = [ "Coins", 1, 48, "" ];
item [134] = [ "Chaos-rune", 1, 2, "Rune" ];
item [135] = [ "Coins", 1, 70, "" ];
item [136] = [ "Coins", 1, 48, "" ];
item [137] = [ "Coins", 1, 48, "" ];
item [138] = [ "Coins", 1, 15, "" ];
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Kwuarm", 1, 1, "Herb" ];
item [141] = [ "Water-rune", 1, 20, "Rune" ];
item [142] = [ "Silver", 1, 3, "" ];

runs [6] = [ 142, 143 ];  // kills 20 drops 20

// run 8

item [143] = [ "Coins", 1, 70, "" ];
item [144] = [ "Coins", 1, 70, "" ];
item [145] = [ "Coins", 1, 48, "" ];
item [146] = [ "Coins", 1, 5, "" ];
item [147] = [ "Marrentill", 1, 1, "Herb" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Silver", 1, 1, "" ];
item [150] = [ "Coins", 1, 15, "" ];
item [151] = [ "Silver", 1, 3, "" ];
item [152] = [ "Body-rune", 1, 8, "Rune" ];
item [153] = [ "Avantoe", 1, 1, "Herb" ];
item [154] = [ "Silver", 1, 3, "" ];
item [155] = [ "Nature-rune", 1, 3, "Rune" ];
item [156] = [ "Coins", 1, 48, "" ];

runs [7] = [ 156, 157 ];  // kills 14 drops 14

// run 9

item [157] = [ "Guam Leaf", 1, 1, "Herb" ];
item [158] = [ "Coins", 1, 5, "" ];
item [159] = [ "Guam Leaf", 1, 1, "Herb" ];
item [160] = [ "Silver", 1, 3, "" ];
item [161] = [ "Body-rune", 1, 8, "Rune" ];
item [162] = [ "Coins", 1, 48, "" ];
item [163] = [ "Coins", 1, 8, "" ];
item [164] = [ "Coins", 1, 8, "" ];
item [165] = [ "Coins", 1, 70, "" ];
item [166] = [ "Chaos-rune", 1, 2, "Rune" ];
item [167] = [ "Coins", 1, 8, "" ];
item [168] = [ "Coins", 1, 48, "" ];

runs [8] = [ 168, 169 ];  // kills 12 drops 12

// run 10

item [169] = [ "Coins", 1, 48, "" ];
item [170] = [ "Coins", 1, 8, "" ];
item [171] = [ "Coins", 1, 48, "" ];
item [172] = [ "Tarromin", 1, 1, "Herb" ];
item [173] = [ "Coins", 1, 15, "" ];
item [174] = [ "Law-rune", 1, 1, "Rune" ];
item [175] = [ "Silver", 1, 3, "" ];
item [176] = [ "Law-rune", 1, 1, "Rune" ];
item [177] = [ "Coins", 1, 48, "" ];
item [178] = [ "Coins", 1, 15, "" ];
item [179] = [ "Coins", 1, 15, "" ];
item [180] = [ "Guam Leaf", 1, 1, "Herb" ];
item [181] = [ "Silver", 1, 3, "" ];

runs [9] = [ 181, 182 ];  // kills 13 drops 13

// run 11

item [182] = [ "Guam Leaf", 1, 1, "Herb" ];
item [183] = [ "Chaos-rune", 1, 2, "Rune" ];
item [184] = [ "Avantoe", 1, 1, "Herb" ];
item [185] = [ "Coins", 1, 5, "" ];
item [186] = [ "Coins", 1, 15, "" ];
item [187] = [ "Coins", 1, 48, "" ];
item [188] = [ "Silver", 1, 3, "" ];
item [189] = [ "Coins", 1, 70, "" ];
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Coins", 1, 48, "" ];
item [192] = [ "Coins", 1, 5, "" ];
item [193] = [ "Marrentill", 1, 1, "Herb" ];
item [194] = [ "Nature-rune", 1, 3, "Rune" ];
item [195] = [ "Mind-rune", 1, 3, "Rune" ];
item [196] = [ "Law-rune", 1, 1, "Rune" ];
item [197] = [ "Swordfish certificate", 1, 1, "" ];
item [198] = [ "Marrentill", 1, 1, "Herb" ];
item [199] = [ "Coins", 1, 70, "" ];
item [200] = [ "Coins", 1, 48, "" ];
item [201] = [ "Irit Leaf", 1, 1, "Herb" ];
item [202] = [ "Silver", 1, 3, "" ];

runs [10] = [ 202, 203 ];  // kills 20 drops 20

// run 12

item [203] = [ "Coins", 1, 48, "" ];
item [204] = [ "Marrentill", 1, 1, "Herb" ];
item [205] = [ "Coins", 1, 48, "" ];
item [206] = [ "Harralander", 1, 1, "Herb" ];
item [207] = [ "Law-rune", 1, 1, "Rune" ];
item [208] = [ "Harralander", 1, 1, "Herb" ];
item [209] = [ "Guam Leaf", 1, 1, "Herb" ];
item [210] = [ "Silver", 1, 2, "" ];
item [211] = [ "Body-rune", 1, 8, "Rune" ];
item [212] = [ "Coins", 1, 8, "" ];
item [213] = [ "Chaos-rune", 1, 2, "Rune" ];
item [214] = [ "Coins", 1, 15, "" ];
item [215] = [ "Silver", 1, 1, "" ];
item [216] = [ "Coins", 1, 8, "" ];
item [217] = [ "Body-rune", 1, 8, "Rune" ];
item [218] = [ "Silver", 1, 3, "" ];
item [219] = [ "Coins", 1, 48, "" ];
item [220] = [ "Nature-rune", 1, 3, "Rune" ];

runs [11] = [ 220, 221 ];  // kills 18 drops 18

// run 13

item [221] = [ "Water-rune", 1, 20, "Rune" ];
item [222] = [ "Coins", 1, 8, "" ];
item [223] = [ "Irit Leaf", 1, 1, "Herb" ];
item [224] = [ "Silver", 1, 3, "" ];
item [225] = [ "Silver", 1, 3, "" ];
item [226] = [ "Coins", 1, 70, "" ];
item [227] = [ "Chaos-rune", 1, 2, "Rune" ];
item [228] = [ "uncut sapphire", 1, 1, "Gem" ];
item [229] = [ "Coins", 1, 15, "" ];
item [230] = [ "Coins", 1, 15, "" ];
item [231] = [ "Silver", 1, 3, "" ];

runs [12] = [ 231, 232 ];  // kills 11 drops 11

// run 14

item [232] = [ "Coins", 1, 48, "" ];
item [233] = [ "Silver", 1, 3, "" ];
item [234] = [ "Coins", 1, 70, "" ];
item [235] = [ "Coins", 1, 15, "" ];
item [236] = [ "Coins", 1, 48, "" ];
item [237] = [ "Coins", 1, 48, "" ];
item [238] = [ "Chaos-rune", 1, 2, "Rune" ];
item [239] = [ "Coins", 1, 48, "" ];
item [240] = [ "Chaos-rune", 1, 2, "Rune" ];
item [241] = [ "Nothing", 1, 0, "" ];
item [242] = [ "Coins", 1, 70, "" ];
item [243] = [ "Coins", 1, 8, "" ];
item [244] = [ "Body-rune", 1, 8, "Rune" ];
item [245] = [ "Coins", 1, 8, "" ];
item [246] = [ "Coins", 1, 70, "" ];
item [247] = [ "Coins", 1, 8, "" ];
item [248] = [ "Water-rune", 1, 20, "Rune" ];
item [249] = [ "Coins", 1, 70, "" ];
item [250] = [ "Silver", 1, 3, "" ];
item [251] = [ "Coins", 1, 150, "" ];
item [252] = [ "Coins", 1, 15, "" ];
item [253] = [ "Coins", 1, 5, "" ];
item [254] = [ "Coins", 1, 15, "" ];
item [255] = [ "Water-rune", 1, 20, "Rune" ];
item [256] = [ "Dwarf Weed", 1, 1, "Herb" ];

runs [13] = [ 256, 257 ];  // kills 25 drops 25

// run 15

item [257] = [ "Coins", 1, 48, "" ];
item [258] = [ "Nature-rune", 1, 3, "Rune" ];
item [259] = [ "Law-rune", 1, 1, "Rune" ];
item [260] = [ "Coins", 1, 48, "" ];
item [261] = [ "Avantoe", 1, 1, "Herb" ];
item [262] = [ "Guam Leaf", 1, 1, "Herb" ];
item [263] = [ "Water-rune", 1, 20, "Rune" ];
item [264] = [ "Coins", 1, 48, "" ];
item [265] = [ "Coins", 1, 8, "" ];
item [266] = [ "Coins", 1, 48, "" ];
item [267] = [ "Chaos-rune", 1, 2, "Rune" ];
item [268] = [ "Silver", 1, 3, "" ];

runs [14] = [ 268, 269 ];  // kills 12 drops 12

// run 16

item [269] = [ "Coins", 1, 48, "" ];
item [270] = [ "Coins", 1, 48, "" ];
item [271] = [ "Coins", 1, 70, "" ];
item [272] = [ "Coins", 1, 150, "" ];
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Coins", 1, 5, "" ];
item [275] = [ "Chaos-rune", 1, 2, "Rune" ];
item [276] = [ "Silver", 1, 1, "" ];
item [277] = [ "Guam Leaf", 1, 1, "Herb" ];
item [278] = [ "Nothing", 1, 0, "" ];
item [279] = [ "Coins", 1, 48, "" ];
item [280] = [ "Avantoe", 1, 1, "Herb" ];
item [281] = [ "Coins", 1, 48, "" ];
item [282] = [ "Silver", 1, 3, "" ];

runs [15] = [ 282, 283 ];  // kills 14 drops 14

// run 17

item [283] = [ "Coins", 1, 70, "" ];
item [284] = [ "Coins", 1, 48, "" ];
item [285] = [ "Coins", 1, 70, "" ];
item [286] = [ "Coins", 1, 48, "" ];
item [287] = [ "Coins", 1, 48, "" ];
item [288] = [ "Silver", 1, 1, "" ];
item [289] = [ "Coins", 1, 15, "" ];
item [290] = [ "Coins", 1, 15, "" ];
item [291] = [ "Silver", 1, 3, "" ];
item [292] = [ "Coins", 1, 48, "" ];
item [293] = [ "Coins", 1, 5, "" ];
item [294] = [ "Tarromin", 1, 1, "Herb" ];
item [295] = [ "Nothing", 1, 0, "" ];
item [296] = [ "Coins", 1, 48, "" ];

runs [16] = [ 296, 297 ];  // kills 14 drops 14

// run 18

item [297] = [ "Coins", 1, 15, "" ];
item [298] = [ "Coins", 1, 48, "" ];
item [299] = [ "Coins", 1, 70, "" ];
item [300] = [ "Nature-rune", 1, 3, "Rune" ];
item [301] = [ "Nature-rune", 1, 3, "Rune" ];
item [302] = [ "Nothing", 1, 0, "" ];
item [303] = [ "Coins", 1, 70, "" ];
item [304] = [ "Coins", 1, 48, "" ];
item [305] = [ "Coins", 1, 48, "" ];
item [306] = [ "Law-rune", 1, 1, "Rune" ];
item [307] = [ "Coins", 1, 15, "" ];
item [308] = [ "Coins", 1, 8, "" ];
item [309] = [ "Law-rune", 1, 1, "Rune" ];
item [310] = [ "Coins", 1, 48, "" ];
item [311] = [ "Coins", 1, 70, "" ];
item [312] = [ "Coins", 1, 48, "" ];
item [313] = [ "Coins", 1, 8, "" ];
item [314] = [ "Swordfish certificate", 1, 1, "" ];

runs [17] = [ 314, 315 ];  // kills 18 drops 18

// runs [18] = [ x, y ];  // kills ? ( y - 315 ), drops ? ( x - 314 )

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

var mname = "Black Heather";        // monster's name
var mcbl = 39;                      // monster's combat level
var mindex = 100;                   // index into monster data base
var mrpt = 1;                       // number of non-breaking space to add after index name