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

var notes = "Re-spawn time is 1 minute. These Knights are just like the Ogre(58), they only drop bones.";

// runs [*] = [ x, y ];  // kills = ( y - last drop of last run ), drops = ( x - last index of last run )

// run 1

item   [0] = [ "Nothing", 1, 0, "" ];
item   [1] = [ "Nothing", 1, 0, "" ];
item   [2] = [ "Nothing", 1, 0, "" ];
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Nothing", 1, 0, "" ];
item   [5] = [ "Nothing", 1, 0, "" ];
item   [6] = [ "Nothing", 1, 0, "" ];
item   [7] = [ "Nothing", 1, 0, "" ];
item   [8] = [ "Nothing", 1, 0, "" ];
item   [9] = [ "Nothing", 1, 0, "" ];
item  [10] = [ "Nothing", 1, 0, "" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Nothing", 1, 0, "" ];
item  [13] = [ "Nothing", 1, 0, "" ];
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Nothing", 1, 0, "" ];
item  [16] = [ "Nothing", 1, 0, "" ];
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Nothing", 1, 0, "" ];
item  [19] = [ "Nothing", 1, 0, "" ];
item  [20] = [ "Nothing", 1, 0, "" ];
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Nothing", 1, 0, "" ];
item  [23] = [ "Nothing", 1, 0, "" ];
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Nothing", 1, 0, "" ];
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Nothing", 1, 0, "" ];
item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Nothing", 1, 0, "" ];
item  [30] = [ "Nothing", 1, 0, "" ];
item  [31] = [ "Nothing", 1, 0, "" ];
item  [32] = [ "Nothing", 1, 0, "" ];
item  [33] = [ "Nothing", 1, 0, "" ];
item  [34] = [ "Nothing", 1, 0, "" ];
item  [35] = [ "Nothing", 1, 0, "" ];
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "Nothing", 1, 0, "" ];
item  [38] = [ "Nothing", 1, 0, "" ];
item  [39] = [ "Nothing", 1, 0, "" ];
item  [40] = [ "Nothing", 1, 0, "" ];
item  [41] = [ "Nothing", 1, 0, "" ];
item  [42] = [ "Nothing", 1, 0, "" ];
item  [43] = [ "Nothing", 1, 0, "" ];
item  [44] = [ "Nothing", 1, 0, "" ];
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Nothing", 1, 0, "" ];
item  [47] = [ "Nothing", 1, 0, "" ];
item  [48] = [ "Nothing", 1, 0, "" ];
item  [49] = [ "Nothing", 1, 0, "" ];
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Nothing", 1, 0, "" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Nothing", 1, 0, "" ];
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Nothing", 1, 0, "" ];
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Nothing", 1, 0, "" ];
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Nothing", 1, 0, "" ];
item  [65] = [ "Nothing", 1, 0, "" ];
item  [66] = [ "Nothing", 1, 0, "" ];
item  [67] = [ "Nothing", 1, 0, "" ];
item  [68] = [ "Nothing", 1, 0, "" ];
item  [69] = [ "Nothing", 1, 0, "" ];
item  [70] = [ "Nothing", 1, 0, "" ];
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Nothing", 1, 0, "" ];
item  [75] = [ "Nothing", 1, 0, "" ];
item  [76] = [ "Nothing", 1, 0, "" ];
item  [77] = [ "Nothing", 1, 0, "" ];
item  [78] = [ "Nothing", 1, 0, "" ];
item  [79] = [ "Nothing", 1, 0, "" ];
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Nothing", 1, 0, "" ];
item  [82] = [ "Nothing", 1, 0, "" ];
item  [83] = [ "Nothing", 1, 0, "" ];
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Nothing", 1, 0, "" ];
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "Nothing", 1, 0, "" ];
item  [95] = [ "Nothing", 1, 0, "" ];
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Nothing", 1, 0, "" ];
item  [99] = [ "Nothing", 1, 0, "" ];
item [100] = [ "Nothing", 1, 0, "" ];
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Nothing", 1, 0, "" ];
item [105] = [ "Nothing", 1, 0, "" ];
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Nothing", 1, 0, "" ];
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Nothing", 1, 0, "" ];
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Nothing", 1, 0, "" ];
item [112] = [ "Nothing", 1, 0, "" ];
item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Nothing", 1, 0, "" ];
item [115] = [ "Nothing", 1, 0, "" ];
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Nothing", 1, 0, "" ];
item [119] = [ "Nothing", 1, 0, "" ];
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Nothing", 1, 0, "" ];
item [122] = [ "Nothing", 1, 0, "" ];
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Nothing", 1, 0, "" ];
item [125] = [ "Nothing", 1, 0, "" ];
item [126] = [ "Nothing", 1, 0, "" ];
item [127] = [ "Nothing", 1, 0, "" ];
item [128] = [ "Nothing", 1, 0, "" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Nothing", 1, 0, "" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Nothing", 1, 0, "" ];
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "Nothing", 1, 0, "" ];
item [135] = [ "Nothing", 1, 0, "" ];
item [136] = [ "Nothing", 1, 0, "" ];
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Nothing", 1, 0, "" ];
item [142] = [ "Nothing", 1, 0, "" ];
item [143] = [ "Nothing", 1, 0, "" ];
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Nothing", 1, 0, "" ];
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Nothing", 1, 0, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Nothing", 1, 0, "" ];
item [150] = [ "Nothing", 1, 0, "" ];
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Nothing", 1, 0, "" ];
item [153] = [ "Nothing", 1, 0, "" ];
item [154] = [ "Nothing", 1, 0, "" ];
item [155] = [ "Nothing", 1, 0, "" ];
item [156] = [ "Nothing", 1, 0, "" ];
item [157] = [ "Nothing", 1, 0, "" ];
item [158] = [ "Nothing", 1, 0, "" ];
item [159] = [ "Nothing", 1, 0, "" ];
item [160] = [ "Nothing", 1, 0, "" ];
item [161] = [ "Nothing", 1, 0, "" ];
item [162] = [ "Nothing", 1, 0, "" ];
item [163] = [ "Nothing", 1, 0, "" ];
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Nothing", 1, 0, "" ];
item [166] = [ "Nothing", 1, 0, "" ];
item [167] = [ "Nothing", 1, 0, "" ];
item [168] = [ "Nothing", 1, 0, "" ];
item [169] = [ "Nothing", 1, 0, "" ];
item [170] = [ "Nothing", 1, 0, "" ];
item [171] = [ "Nothing", 1, 0, "" ];
item [172] = [ "Nothing", 1, 0, "" ];
item [173] = [ "Nothing", 1, 0, "" ];
item [174] = [ "Nothing", 1, 0, "" ];
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Nothing", 1, 0, "" ];
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Nothing", 1, 0, "" ];
item [179] = [ "Nothing", 1, 0, "" ];
item [180] = [ "Nothing", 1, 0, "" ];
item [181] = [ "Nothing", 1, 0, "" ];
item [182] = [ "Nothing", 1, 0, "" ];
item [183] = [ "Nothing", 1, 0, "" ];
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Nothing", 1, 0, "" ];
item [186] = [ "Nothing", 1, 0, "" ];
item [187] = [ "Nothing", 1, 0, "" ];
item [188] = [ "Nothing", 1, 0, "" ];
item [189] = [ "Nothing", 1, 0, "" ];
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Nothing", 1, 0, "" ];
item [194] = [ "Nothing", 1, 0, "" ];
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Nothing", 1, 0, "" ];
item [199] = [ "Nothing", 1, 0, "" ];
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Nothing", 1, 0, "" ];
item [202] = [ "Nothing", 1, 0, "" ];
item [203] = [ "Nothing", 1, 0, "" ];
item [204] = [ "Nothing", 1, 0, "" ];
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Nothing", 1, 0, "" ];
item [207] = [ "Nothing", 1, 0, "" ];
item [208] = [ "Nothing", 1, 0, "" ];
item [209] = [ "Nothing", 1, 0, "" ];
item [210] = [ "Nothing", 1, 0, "" ];
item [211] = [ "Nothing", 1, 0, "" ];
item [212] = [ "Nothing", 1, 0, "" ];
item [213] = [ "Nothing", 1, 0, "" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Nothing", 1, 0, "" ];
item [216] = [ "Nothing", 1, 0, "" ];
item [217] = [ "Nothing", 1, 0, "" ];
item [218] = [ "Nothing", 1, 0, "" ];
item [219] = [ "Nothing", 1, 0, "" ];
item [220] = [ "Nothing", 1, 0, "" ];
item [221] = [ "Nothing", 1, 0, "" ];
item [222] = [ "Nothing", 1, 0, "" ];
item [223] = [ "Nothing", 1, 0, "" ];
item [224] = [ "Nothing", 1, 0, "" ];
item [225] = [ "Nothing", 1, 0, "" ];
item [226] = [ "Nothing", 1, 0, "" ];
item [227] = [ "Nothing", 1, 0, "" ];
item [228] = [ "Nothing", 1, 0, "" ];
item [229] = [ "Nothing", 1, 0, "" ];
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "Nothing", 1, 0, "" ];
item [232] = [ "Nothing", 1, 0, "" ];
item [233] = [ "Nothing", 1, 0, "" ];
item [234] = [ "Nothing", 1, 0, "" ];
item [235] = [ "Nothing", 1, 0, "" ];
item [236] = [ "Nothing", 1, 0, "" ];
item [237] = [ "Nothing", 1, 0, "" ];
item [238] = [ "Nothing", 1, 0, "" ];
item [239] = [ "Nothing", 1, 0, "" ];
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Nothing", 1, 0, "" ];
item [242] = [ "Nothing", 1, 0, "" ];
item [243] = [ "Nothing", 1, 0, "" ];
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Nothing", 1, 0, "" ];
item [246] = [ "Nothing", 1, 0, "" ];
item [247] = [ "Nothing", 1, 0, "" ];
item [248] = [ "Nothing", 1, 0, "" ];
item [249] = [ "Nothing", 1, 0, "" ];
item [250] = [ "Nothing", 1, 0, "" ];
item [251] = [ "Nothing", 1, 0, "" ];
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Nothing", 1, 0, "" ];
item [254] = [ "Nothing", 1, 0, "" ];
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Nothing", 1, 0, "" ];
item [257] = [ "Nothing", 1, 0, "" ];
item [258] = [ "Nothing", 1, 0, "" ];
item [259] = [ "Nothing", 1, 0, "" ];
item [260] = [ "Nothing", 1, 0, "" ];
item [261] = [ "Nothing", 1, 0, "" ];
item [262] = [ "Nothing", 1, 0, "" ];
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Nothing", 1, 0, "" ];
item [265] = [ "Nothing", 1, 0, "" ];
item [266] = [ "Nothing", 1, 0, "" ];
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Nothing", 1, 0, "" ];
item [269] = [ "Nothing", 1, 0, "" ];
item [270] = [ "Nothing", 1, 0, "" ];
item [271] = [ "Nothing", 1, 0, "" ];
item [272] = [ "Nothing", 1, 0, "" ];
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Nothing", 1, 0, "" ];
item [275] = [ "Nothing", 1, 0, "" ];
item [276] = [ "Nothing", 1, 0, "" ];
item [277] = [ "Nothing", 1, 0, "" ];
item [278] = [ "Nothing", 1, 0, "" ];
item [279] = [ "Nothing", 1, 0, "" ];
item [280] = [ "Nothing", 1, 0, "" ];
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Nothing", 1, 0, "" ];
item [283] = [ "Nothing", 1, 0, "" ];
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Nothing", 1, 0, "" ];
item [286] = [ "Nothing", 1, 0, "" ];
item [287] = [ "Nothing", 1, 0, "" ];
item [288] = [ "Nothing", 1, 0, "" ];
item [289] = [ "Nothing", 1, 0, "" ];
item [290] = [ "Nothing", 1, 0, "" ];
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Nothing", 1, 0, "" ];
item [293] = [ "Nothing", 1, 0, "" ];
item [294] = [ "Nothing", 1, 0, "" ];
item [295] = [ "Nothing", 1, 0, "" ];
item [296] = [ "Nothing", 1, 0, "" ];
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Nothing", 1, 0, "" ];
item [299] = [ "Nothing", 1, 0, "" ];

runs [0] = [ 299, 300 ];  // kills 300, drops 300

// run 1

// runs [1] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Knight";        // monster's name
var mcbl = 56;               // monster's combat level
var mindex = 125;            // index into monster data base
var mrpt = 1;                // number of non-breaking space to add after index name