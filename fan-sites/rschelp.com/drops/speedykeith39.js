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
item   [1] = [ "Nature-rune", 1, 3, "Rune" ];
item   [2] = [ "Chaos-rune", 1, 2, "Rune" ];
item   [3] = [ "Coins", 1, 15, "" ];
item   [4] = [ "Silver", 1, 3, "" ];
item   [5] = [ "Mind-rune", 1, 3, "Rune" ];
item   [6] = [ "Coins", 1, 15, "" ];
item   [7] = [ "Coins", 1, 48, "" ];
item   [8] = [ "Coins", 1, 15, "" ];
item   [9] = [ "Water-rune", 1, 20, "Rune" ];
item  [10] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [11] = [ "Silver", 1, 3, "" ];

runs [0] = [ 11, 12 ];  // kills 12 drops 12

// run 2

item  [12] = [ "Coins", 1, 70, "" ];
item  [13] = [ "Tarromin", 1, 1, "Herb" ];
item  [14] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [15] = [ "Nothing", 1, 0, "" ];
item  [16] = [ "Coins", 1, 8, "" ];
item  [17] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [18] = [ "Coins", 1, 8, "" ];
item  [19] = [ "Coins", 1, 70, "" ];
item  [20] = [ "Coins", 1, 8, "" ];
item  [21] = [ "Coins", 1, 48, "" ];
item  [22] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [23] = [ "Coins", 1, 48, "" ];
item  [24] = [ "Coins", 1, 70, "" ];
item  [25] = [ "Tarromin", 1, 1, "Herb" ];
item  [26] = [ "Silver", 1, 3, "" ];
item  [27] = [ "Coins", 1, 70, "" ];
item  [28] = [ "Law-rune", 1, 1, "Rune" ];
item  [29] = [ "Coins", 1, 48, "" ];
item  [30] = [ "Nature-rune", 1, 3, "Rune" ];
item  [31] = [ "Coins", 1, 15, "" ];
item  [32] = [ "Guam Leaf", 1, 1, "Herb" ];

runs [1] = [ 32, 33 ];  // kills 21 drops 21

// run 3

item  [33] = [ "Coins", 1, 15, "" ];
item  [34] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [35] = [ "Tarromin", 1, 1, "Herb" ];
item  [36] = [ "Coins", 1, 5, "" ];
item  [37] = [ "Nothing", 1, 0, "" ];
item  [38] = [ "Marrentill", 1, 1, "Herb" ];
item  [39] = [ "Law-rune", 1, 1, "Rune" ];
item  [40] = [ "Coins", 1, 5, "" ];
item  [41] = [ "Coins", 1, 8, "" ];
item  [42] = [ "Coins", 1, 15, "" ];
item  [43] = [ "Coins", 1, 48, "" ];
item  [44] = [ "Coins", 1, 48, "" ];
item  [45] = [ "Coins", 1, 70, "" ];
item  [46] = [ "Coins", 1, 48, "" ];
item  [47] = [ "Silver", 1, 3, "" ];
item  [48] = [ "Coins", 1, 150, "" ];
item  [49] = [ "Coins", 1, 48, "" ];

runs [2] = [ 49, 50 ];  // kills 17 drops 17

// run 4

item  [50] = [ "Harralander", 1, 1, "Herb" ];
item  [51] = [ "Coins", 1, 48, "" ];
item  [52] = [ "Coins", 1, 15, "" ];
item  [53] = [ "Law-rune", 1, 1, "Rune" ];
item  [54] = [ "Silver", 1, 3, "" ];
item  [55] = [ "Silver", 1, 3, "" ];
item  [56] = [ "Coins", 1, 48, "" ];
item  [57] = [ "Kwuarm", 1, 1, "Herb" ];
item  [58] = [ "Coins", 1, 48, "" ];
item  [59] = [ "Coins", 1, 70, "" ];
item  [60] = [ "Coins", 1, 48, "" ];
item  [61] = [ "Coins", 1, 70, "" ];
item  [62] = [ "Coins", 1, 48, "" ];
item  [63] = [ "Coins", 1, 70, "" ];
item  [64] = [ "Coins", 1, 70, "" ];
item  [65] = [ "Coins", 1, 15, "" ];
item  [66] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [67] = [ "Coins", 1, 15, "" ];
item  [68] = [ "Coins", 1, 15, "" ];
item  [69] = [ "Coins", 1, 15, "" ];

runs [3] = [ 69, 70 ];  // kills 20 drops 20

// run 5

item  [70] = [ "Coins", 1, 48, "" ];
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Coins", 1, 150, "" ];
item  [73] = [ "Coins", 1, 70, "" ];
item  [74] = [ "Coins", 1, 15, "" ];
item  [75] = [ "Coins", 1, 48, "" ];
item  [76] = [ "Coins", 1, 48, "" ];
item  [77] = [ "Coins", 1, 70, "" ];
item  [78] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [79] = [ "Coins", 1, 48, "" ];
item  [80] = [ "Coins", 1, 70, "" ];
item  [81] = [ "Chaos-rune", 1, 2, "Rune" ];
item  [82] = [ "Coins", 1, 8, "" ];
item  [83] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [84] = [ "Steel Long Sword", 1, 1, "" ];
item  [85] = [ "Coins", 1, 8, "" ];
item  [86] = [ "Steel Long Sword", 1, 1, "" ];
item  [87] = [ "Nature-rune", 1, 3, "Rune" ];
item  [88] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [89] = [ "Coins", 1, 15, "" ];
item  [90] = [ "Avantoe", 1, 1, "Herb" ];
item  [91] = [ "Water-rune", 1, 20, "Rune" ];
item  [92] = [ "Silver", 1, 3, "" ];
item  [93] = [ "Silver", 1, 3, "" ];

runs [4] = [ 93, 94 ];  // kills 24 drops 24

// run 6

item  [94] = [ "Coins", 1, 15, "" ];
item  [95] = [ "Swordfish certificate", 1, 1, "" ];
item  [96] = [ "Coins", 1, 48, "" ];
item  [97] = [ "Coins", 1, 15, "" ];
item  [98] = [ "Coins", 1, 8, "" ];
item  [99] = [ "Coins", 1, 8, "" ];
item [100] = [ "Coins", 1, 15, "" ];
item [101] = [ "Coins", 1, 15, "" ];
item [102] = [ "Coins", 1, 70, "" ];
item [103] = [ "Coins", 1, 70, "" ];
item [104] = [ "Coins", 1, 150, "" ];
item [105] = [ "Coins", 1, 15, "" ];
item [106] = [ "Coins", 1, 15, "" ];
item [107] = [ "Nature-rune", 1, 3, "Rune" ];
item [108] = [ "Chaos-rune", 1, 2, "Rune" ];
item [109] = [ "Coins", 1, 48, "" ];
item [110] = [ "Nature-rune", 1, 3, "Rune" ];
item [111] = [ "Mind-rune", 1, 3, "Rune" ];
item [112] = [ "Coins", 1, 48, "" ];
item [113] = [ "Coins", 1, 48, "" ];
item [114] = [ "Coins", 1, 5, "" ];
item [115] = [ "Coins", 1, 48, "" ];
item [116] = [ "Nature-rune", 1, 3, "Rune" ];
item [117] = [ "Coins", 1, 70, "" ];
item [118] = [ "Marrentill", 1, 1, "Herb" ];
item [119] = [ "Coins", 1, 8, "" ];
item [120] = [ "Coins", 1, 15, "" ];
item [121] = [ "Nature-rune", 1, 3, "Rune" ];
item [122] = [ "Coins", 1, 8, "" ];

runs [5] = [ 122, 123 ];  // kills 29 drops 29

// run 7

item [123] = [ "Silver", 1, 3, "" ];
item [124] = [ "Coins", 1, 48, "" ];
item [125] = [ "Silver", 1, 1, "" ];
item [126] = [ "Coins", 1, 8, "" ];
item [127] = [ "Coins", 1, 48, "" ];
item [128] = [ "Coins", 1, 48, "" ];
item [129] = [ "Coins", 1, 8, "" ];
item [130] = [ "Coins", 1, 15, "" ];
item [131] = [ "Coins", 1, 48, "" ];
item [132] = [ "Law-rune", 1, 1, "Rune" ];
item [133] = [ "Coins", 1, 8, "" ];
item [134] = [ "Coins", 1, 48, "" ];
item [135] = [ "Guam Leaf", 1, 1, "Herb" ];
item [136] = [ "Coins", 1, 150, "" ];
item [137] = [ "Coins", 1, 5, "" ];
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "Coins", 1, 5, "" ];
item [140] = [ "Silver", 1, 3, "" ];
item [141] = [ "Mind-rune", 1, 3, "Rune" ];
item [142] = [ "Coins", 1, 8, "" ];

runs [6] = [ 142, 143 ];  // kills 20 drops 20

// run 8

item [143] = [ "Coins", 1, 48, "" ];
item [144] = [ "Marrentill", 1, 1, "Herb" ];
item [145] = [ "Coins", 1, 15, "" ];
item [146] = [ "Body-rune", 1, 8, "Rune" ];
item [147] = [ "Coins", 1, 15, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Coins", 1, 150, "" ];
item [150] = [ "Irit Leaf", 1, 1, "Herb" ];
item [151] = [ "Coins", 1, 48, "" ];
item [152] = [ "Body-rune", 1, 8, "Rune" ];
item [153] = [ "Coins", 1, 48, "" ];
item [154] = [ "Coins", 1, 48, "" ];
item [155] = [ "Coins", 1, 48, "" ];
item [156] = [ "Avantoe", 1, 1, "Herb" ];

runs [7] = [ 156, 157 ];  // kills 14 drops 14

// run 9

item [157] = [ "Coins", 1, 8, "" ];
item [158] = [ "Nature-rune", 1, 3, "Rune" ];
item [159] = [ "Coins", 1, 15, "" ];
item [160] = [ "Coins", 1, 70, "" ];
item [161] = [ "Coins", 1, 5, "" ];
item [162] = [ "Coins", 1, 70, "" ];
item [163] = [ "Tarromin", 1, 1, "Herb" ];
item [164] = [ "Coins", 1, 48, "" ];
item [165] = [ "Coins", 1, 5, "" ];
item [166] = [ "Coins", 1, 48, "" ];
item [167] = [ "Silver", 1, 3, "" ];
item [168] = [ "Harralander", 1, 1, "Herb" ];

runs [8] = [ 168, 169 ];  // kills 12 drops 12

// run 10

item [169] = [ "Coins", 1, 48, "" ];
item [170] = [ "Silver", 1, 3, "" ];
item [171] = [ "Silver", 1, 2, "" ];
item [172] = [ "Coins", 1, 15, "" ];
item [173] = [ "Coins", 1, 15, "" ];
item [174] = [ "Irit Leaf", 1, 1, "Herb" ];
item [175] = [ "Water-rune", 1, 20, "Rune" ];
item [176] = [ "Coins", 1, 70, "" ];
item [177] = [ "Marrentill", 1, 1, "Herb" ];
item [178] = [ "Coins", 1, 48, "" ];
item [179] = [ "Coins", 1, 48, "" ];
item [180] = [ "Marrentill", 1, 1, "Herb" ];
item [181] = [ "Coins", 1, 15, "" ];

runs [9] = [ 181, 182 ];  // kills 13 drops 13

// run 11

item [182] = [ "Water-rune", 1, 20, "Rune" ];
item [183] = [ "Nature-rune", 1, 3, "Rune" ];
item [184] = [ "Coins", 1, 15, "" ];
item [185] = [ "Coins", 1, 70, "" ];
item [186] = [ "Large Steel Helmet", 1, 1, "" ];
item [187] = [ "Coins", 1, 48, "" ];
item [188] = [ "Silver", 1, 3, "" ];
item [189] = [ "Law-rune", 1, 1, "Rune" ];
item [190] = [ "Coins", 1, 70, "" ];
item [191] = [ "Coins", 1, 8, "" ];
item [192] = [ "Water-rune", 1, 20, "Rune" ];
item [193] = [ "Coins", 1, 48, "" ];
item [194] = [ "Coins", 1, 48, "" ];
item [195] = [ "Coins", 1, 48, "" ];
item [196] = [ "Body-rune", 1, 8, "Rune" ];
item [197] = [ "Coins", 1, 70, "" ];
item [198] = [ "Marrentill", 1, 1, "Herb" ];
item [199] = [ "Coins", 1, 70, "" ];
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Silver", 1, 3, "" ];
item [202] = [ "Coins", 1, 15, "" ];

runs [10] = [ 202, 203 ];  // kills 20 drops 20

// run 12

item [203] = [ "Coins", 1, 150, "" ];
item [204] = [ "Silver", 1, 3, "" ];
item [205] = [ "Law-rune", 1, 1, "Rune" ];
item [206] = [ "Guam Leaf", 1, 1, "Herb" ];
item [207] = [ "Coins", 1, 48, "" ];
item [208] = [ "Coins", 1, 8, "" ];
item [209] = [ "Coins", 1, 48, "" ];
item [210] = [ "uncut ruby", 1, 1, "Gem" ];
item [211] = [ "Steel Long Sword", 1, 1, "" ];
item [212] = [ "Law-rune", 1, 1, "Rune" ];
item [213] = [ "Marrentill", 1, 1, "Herb" ];
item [214] = [ "Coins", 1, 48, "" ];
item [215] = [ "Coins", 1, 70, "" ];
item [216] = [ "Harralander", 1, 1, "Herb" ];
item [217] = [ "Coins", 1, 8, "" ];
item [218] = [ "Coins", 1, 48, "" ];
item [219] = [ "Body-rune", 1, 8, "Rune" ];
item [220] = [ "Harralander", 1, 1, "Herb" ];

runs [11] = [ 220, 221 ];  // kills 18 drops 18

// run 13

item [221] = [ "Nothing", 1, 0, "" ];
item [222] = [ "Steel Long Sword", 1, 1, "" ];
item [223] = [ "Silver", 1, 3, "" ];
item [224] = [ "Coins", 1, 48, "" ];
item [225] = [ "Guam Leaf", 1, 1, "Herb" ];
item [226] = [ "Large Steel Helmet", 1, 1, "" ];
item [227] = [ "Nature-rune", 1, 3, "Rune" ];
item [228] = [ "Coins", 1, 15, "" ];
item [229] = [ "Coins", 1, 70, "" ];
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "Coins", 1, 8, "" ];

runs [12] = [ 231, 232 ];  // kills 11 drops 11

// run 14

item [232] = [ "Guam Leaf", 1, 1, "Herb" ];
item [233] = [ "Coins", 1, 8, "" ];
item [234] = [ "Nature-rune", 1, 3, "Rune" ];
item [235] = [ "Guam Leaf", 1, 1, "Herb" ];
item [236] = [ "Coins", 1, 48, "" ];
item [237] = [ "Coins", 1, 70, "" ];
item [238] = [ "Coins", 1, 48, "" ];
item [239] = [ "Coins", 1, 70, "" ];
item [240] = [ "Body-rune", 1, 8, "Rune" ];
item [241] = [ "Coins", 1, 48, "" ];
item [242] = [ "Coins", 1, 15, "" ];
item [243] = [ "Coins", 1, 5, "" ];
item [244] = [ "Coins", 1, 15, "" ];
item [245] = [ "Marrentill", 1, 1, "Herb" ];
item [246] = [ "Coins", 1, 150, "" ];
item [247] = [ "Coins", 1, 150, "" ];
item [248] = [ "Coins", 1, 70, "" ];
item [249] = [ "Coins", 1, 48, "" ];
item [250] = [ "Nothing", 1, 0, "" ];
item [251] = [ "Coins", 1, 15, "" ];
item [252] = [ "Water-rune", 1, 20, "Rune" ];
item [253] = [ "Harralander", 1, 1, "Herb" ];
item [254] = [ "Coins", 1, 8, "" ];
item [255] = [ "Coins", 1, 48, "" ];
item [256] = [ "Coins", 1, 48, "" ];

runs [13] = [ 256, 257 ];  // kills 25 drops 25

// run 15

item [257] = [ "Coins", 1, 48, "" ];
item [258] = [ "Coins", 1, 15, "" ];
item [259] = [ "Coins", 1, 70, "" ];
item [260] = [ "Coins", 1, 48, "" ];
item [261] = [ "Coins", 1, 70, "" ];
item [262] = [ "Silver", 1, 3, "" ];
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Water-rune", 1, 20, "Rune" ];
item [265] = [ "Silver", 1, 3, "" ];
item [266] = [ "Coins", 1, 48, "" ];
item [267] = [ "Coins", 1, 8, "" ];
item [268] = [ "Coins", 1, 48, "" ];

runs [14] = [ 268, 269 ];  // kills 12 drops 12

// run 16

item [269] = [ "Coins", 1, 48, "" ];
item [270] = [ "Coins", 1, 70, "" ];
item [271] = [ "Coins", 1, 48, "" ];
item [272] = [ "Silver", 1, 3, "" ];
item [273] = [ "Silver", 1, 3, "" ];
item [274] = [ "Swordfish certificate", 1, 1, "" ];
item [275] = [ "Coins", 1, 8, "" ];
item [276] = [ "Coins", 1, 15, "" ];
item [277] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [278] = [ "Coins", 1, 48, "" ];
item [279] = [ "Coins", 1, 15, "" ];
item [280] = [ "Tarromin", 1, 1, "Herb" ];
item [281] = [ "Coins", 1, 8, "" ];
item [282] = [ "Coins", 1, 15, "" ];

runs [15] = [ 282, 283 ];  // kills 14 drops 14

// run 17

item [283] = [ "Body-rune", 1, 8, "Rune" ];
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Nothing", 1, 0, "" ];
item [286] = [ "Water-rune", 1, 20, "Rune" ];
item [287] = [ "Coins", 1, 70, "" ];
item [288] = [ "Nothing", 1, 0, "" ];
item [289] = [ "Body-rune", 1, 8, "Rune" ];
item [290] = [ "Coins", 1, 48, "" ];
item [291] = [ "Coins", 1, 15, "" ];
item [292] = [ "Coins", 1, 15, "" ];
item [293] = [ "Marrentill", 1, 1, "Herb" ];
item [294] = [ "Coins", 1, 15, "" ];
item [295] = [ "Coins", 1, 48, "" ];
item [296] = [ "Ranarr Weed", 1, 1, "Herb" ];

runs [16] = [ 296, 297 ];  // kills 14 drops 14

// run 18

item [297] = [ "Nature-rune", 1, 3, "Rune" ];
item [298] = [ "Coins", 1, 8, "" ];
item [299] = [ "Coins", 1, 48, "" ];
item [300] = [ "Coins", 1, 48, "" ];
item [301] = [ "Coins", 1, 48, "" ];
item [302] = [ "Coins", 1, 48, "" ];
item [303] = [ "Tarromin", 1, 1, "Herb" ];
item [304] = [ "Silver", 1, 3, "" ];
item [305] = [ "Water-rune", 1, 20, "Rune" ];
item [306] = [ "Coins", 1, 15, "" ];
item [307] = [ "Coins", 1, 15, "" ];
item [308] = [ "Guam Leaf", 1, 1, "Herb" ];
item [309] = [ "Coins", 1, 5, "" ];
item [310] = [ "Coins", 1, 48, "" ];
item [311] = [ "Coins", 1, 150, "" ];
item [312] = [ "Coins", 1, 48, "" ];
item [313] = [ "Nature-rune", 1, 3, "Rune" ];
item [314] = [ "Coins", 1, 48, "" ];

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

var mname = "Speedy Keith";        // monster's name
var mcbl = 39;                     // monster's combat level
var mindex = 103;                  // index into monster data base
var mrpt = 1;                      // number of non-breaking space to add after index name