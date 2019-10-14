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

item   [0] = [ "Guam Leaf", 1, 1, "Herb" ];  //  1
item   [1] = [ "Coins", 1, 12, "" ];  //  (12)
item   [2] = [ "Earth-rune", 1, 8, "Rune" ];  //  (8)
item   [3] = [ "Coins", 1, 12, "" ];  //  (24)
item   [4] = [ "Coins", 1, 12, "" ];  //  (36)
item   [5] = [ "Earth-rune", 1, 40, "Rune" ];  //  (48)
item   [6] = [ "Steel Spear", 1, 1, "" ];
item   [7] = [ "Nothing", 1, 0, "" ];
item   [8] = [ "Coins", 1, 12, "" ];  //  (48)
item   [9] = [ "Earth-rune", 1, 8, "Rune" ];  //  10  (56)
item  [10] = [ "Harralander", 1, 1, "Herb" ];
item  [11] = [ "Coins", 1, 12, "" ];  //  (60)
item  [12] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [13] = [ "Law-rune", 1, 1, "Rune" ];  // (1)
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Marrentill", 1, 1, "Herb" ];
item  [16] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item  [17] = [ "Coins", 1, 12, "" ];  //  (72)
item  [18] = [ "Coins", 1, 12, "" ];  //  (84)
item  [19] = [ "Coins", 1, 12, "" ];  //  20  (96)
item  [20] = [ "Earth-rune", 1, 8, "Rune" ];  //  (64)
item  [21] = [ "Coins", 1, 12, "" ];  //  (108)
item  [22] = [ "Coins", 1, 12, "" ];  //  (120)
item  [23] = [ "Earth-rune", 1, 8, "Rune" ];  //  (72)
item  [24] = [ "Earth-rune", 1, 40, "Rune" ];  //  (112)
item  [25] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item  [26] = [ "Coins", 1, 12, "" ];  //  (132)
item  [27] = [ "Coins", 1, 12, "" ];  //  (144)
item  [28] = [ "Kwuarm", 1, 1, "Herb" ];
item  [29] = [ "Coins", 1, 12, "" ];  //  30  (156)
item  [30] = [ "Kwuarm", 1, 1, "Herb" ];
item  [31] = [ "Staff of earth", 1, 1, "" ];
item  [32] = [ "Earth-rune", 1, 40, "Rune" ];  //  (152)
item  [33] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item  [34] = [ "Nothing", 1, 0, "" ];
item  [35] = [ "Coins", 1, 12, "" ];  //  (168)
item  [36] = [ "Law-rune", 1, 1, "Rune" ];  // (2)
item  [37] = [ "Nothing", 1, 0, "" ];
item  [38] = [ "Earth-rune", 1, 8, "Rune" ];  //  (160)
item  [39] = [ "Earth-rune", 1, 8, "Rune" ];  //  40  (168)
item  [40] = [ "Earth-rune", 1, 8, "Rune" ];  //  (176)
item  [41] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [42] = [ "Law-rune", 1, 1, "Rune" ];  // (3)
item  [43] = [ "Nothing", 1, 0, "" ];
item  [44] = [ "Nothing", 1, 0, "" ];
item  [45] = [ "Law-rune", 1, 1, "Rune" ];  // (4)
item  [46] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item  [47] = [ "Nothing", 1, 0, "" ];
item  [48] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item  [49] = [ "Coins", 1, 12, "" ];  //  50  (180)
item  [50] = [ "Law-rune", 1, 1, "Rune" ];  // (5)
item  [51] = [ "Coins", 1, 12, "" ];  //  (192)
item  [52] = [ "Coins", 1, 12, "" ];  //  (204)
item  [53] = [ "Earth-rune", 1, 8, "Rune" ];  //  (184)
item  [54] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item  [57] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item  [58] = [ "Marrentill", 1, 1, "Herb" ];
item  [59] = [ "Guam Leaf", 1, 1, "Herb" ];  //  60
item  [60] = [ "Coins", 1, 12, "" ];  //  (216)
item  [61] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item  [62] = [ "Coins", 1, 12, "" ];  //  (228)
item  [63] = [ "Earth-rune", 1, 8, "Rune" ];  //  (192)
item  [64] = [ "Coins", 1, 12, "" ];  //  (240)
item  [65] = [ "Law-rune", 1, 1, "Rune" ];  // (6)
item  [66] = [ "Harralander", 1, 1, "Herb" ];
item  [67] = [ "Nature-rune", 1, 2, "Rune" ];  //  (8)
item  [68] = [ "Earth-rune", 1, 8, "Rune" ];  //  (200)
item  [69] = [ "Guam Leaf", 1, 1, "Herb" ];  //  70
item  [70] = [ "Nature-rune", 1, 2, "Rune" ];  //  (10)
item  [71] = [ "Staff of earth", 1, 1, "" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Coins", 1, 12, "" ];  //  (252)
item  [74] = [ "Law-rune", 1, 1, "Rune" ];  // (7)
item  [75] = [ "Coins", 1, 12, "" ];  //  (264)
item  [76] = [ "Nature-rune", 1, 2, "Rune" ];  //  (12)
item  [77] = [ "Law-rune", 1, 1, "Rune" ];  // (8)
item  [78] = [ "Earth-rune", 1, 8, "Rune" ];  //  (208)
item  [79] = [ "Law-rune", 1, 1, "Rune" ];  // 80  (9)
item  [80] = [ "Harralander", 1, 1, "Herb" ];
item  [81] = [ "Tarromin", 1, 1, "Herb" ];
item  [82] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [83] = [ "Coins", 1, 12, "" ];  //  (276)
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Coins", 1, 12, "" ];  //  (288)
item  [86] = [ "Steel Spear", 1, 1, "" ];
item  [87] = [ "Law-rune", 1, 1, "Rune" ];  // (10)
item  [88] = [ "Coins", 1, 12, "" ];  //  (300)
item  [89] = [ "Nothing", 1, 0, "" ];  //  90
item  [90] = [ "Earth-rune", 1, 40, "Rune" ];  //  (248)
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Earth-rune", 1, 8, "Rune" ];  //  (256)
item  [93] = [ "Earth-rune", 1, 8, "Rune" ];  //  (264)
item  [94] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [95] = [ "Earth-rune", 1, 8, "Rune" ];  //  (272)
item  [96] = [ "Coins", 1, 12, "" ];  //  (312)
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Law-rune", 1, 1, "Rune" ];  // (11)
item  [99] = [ "Chaos-rune", 1, 2, "Rune" ];  //  100  (6)

runs [0] = [ 99, 100 ];  // kills 100, drops 100

//  run 2

item [100] = [ "Nature-rune", 1, 2, "Rune" ];  //  101  (2)
item [101] = [ "Coins", 1, 12, "" ];  //  (12)
item [102] = [ "Coins", 1, 12, "" ];  //  (24)
item [103] = [ "Coins", 1, 12, "" ];  //  (36)
item [104] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [105] = [ "Coins", 1, 12, "" ];  //  (48)
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Coins", 1, 12, "" ];  //  (60)
item [108] = [ "Earth-rune", 1, 8, "Rune" ];  //  (8)
item [109] = [ "Ranarr Weed", 1, 1, "Herb" ];  //  110
item [110] = [ "Coins", 1, 12, "" ];  //  (72)
item [111] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [112] = [ "Nothing", 1, 0, "" ];
item [113] = [ "Law-rune", 1, 1, "Rune" ];  // (1)
item [114] = [ "Nothing", 1, 0, "" ];
item [115] = [ "Marrentill", 1, 1, "Herb" ];
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Nothing", 1, 0, "" ];
item [119] = [ "Nothing", 1, 0, "" ];  //  120
item [120] = [ "Coins", 1, 12, "" ];  //  (84)
item [121] = [ "Law-rune", 1, 1, "Rune" ];  // (2)
item [122] = [ "Coins", 1, 12, "" ];  //  (96)
item [123] = [ "Coins", 1, 12, "" ];  //  (108)
item [124] = [ "Nothing", 1, 0, "" ];
item [125] = [ "Harralander", 1, 1, "Herb" ];
item [126] = [ "Coins", 1, 12, "" ];  //  (120)
item [127] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item [128] = [ "Coins", 1, 12, "" ];  //  (132)
item [129] = [ "Chaos-rune", 1, 2, "Rune" ];  //  130  (2)
item [130] = [ "Guam Leaf", 1, 1, "Herb" ];
item [131] = [ "Earth-rune", 1, 40, "Rune" ];  //  (48)
item [132] = [ "Coins", 1, 12, "" ];  //  (144)
item [133] = [ "Coins", 1, 12, "" ];  //  (156)
item [134] = [ "Coins", 1, 12, "" ];  //  (168)
item [135] = [ "Nothing", 1, 0, "" ];
item [136] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item [137] = [ "Coins", 1, 12, "" ];  //  (180)
item [138] = [ "Coins", 1, 12, "" ];  //  (192)
item [139] = [ "Coins", 1, 12, "" ];  //  140  (204)
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Coins", 1, 12, "" ];  //  (216)
item [142] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [143] = [ "Nothing", 1, 0, "" ];
item [144] = [ "Coins", 1, 12, "" ];  //  (228)
item [145] = [ "Nothing", 1, 0, "" ];
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Coins", 1, 12, "" ];  //  (240)
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Nothing", 1, 0, "" ];  //  150
item [150] = [ "Law-rune", 1, 1, "Rune" ];  // (3)
item [151] = [ "Coins", 1, 12, "" ];  //  (252)
item [152] = [ "Coins", 1, 12, "" ];  //  (264)
item [153] = [ "Coins", 1, 12, "" ];  //  (276)
item [154] = [ "Coins", 1, 12, "" ];  //  (288)
item [155] = [ "Nothing", 1, 0, "" ];
item [156] = [ "Law-rune", 1, 1, "Rune" ];  // (4)
item [157] = [ "Earth-rune", 1, 8, "Rune" ];  //  (56)
item [158] = [ "Earth-rune", 1, 8, "Rune" ];  //  (64)
item [159] = [ "uncut sapphire", 1, 1, "Gem" ];  //  160
item [160] = [ "Staff of earth", 1, 1, "" ];
item [161] = [ "Coins", 1, 12, "" ];  //  (300)
item [162] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item [163] = [ "Earth-rune", 1, 8, "Rune" ];  //  (72)
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Coins", 1, 12, "" ];  //  (312)
item [166] = [ "Coins", 1, 12, "" ];  //  (324)
item [167] = [ "Nothing", 1, 0, "" ];
item [168] = [ "Earth-rune", 1, 8, "Rune" ];  //  (80)
item [169] = [ "Earth-rune", 1, 8, "Rune" ];  //  170  (88)
item [170] = [ "Steel Spear", 1, 1, "" ];
item [171] = [ "Coins", 1, 12, "" ];  //  (336)
item [172] = [ "Earth-rune", 1, 8, "Rune" ];  //  (96)
item [173] = [ "Nature-rune", 1, 2, "Rune" ];  //  (8)
item [174] = [ "uncut ruby", 1, 1, "Gem" ];
item [175] = [ "Coins", 1, 12, "" ];  //  (348)
item [176] = [ "Marrentill", 1, 1, "Herb" ];
item [177] = [ "uncut sapphire", 1, 1, "Gem" ];
item [178] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [179] = [ "Steel Spear", 1, 1, "" ];  //  180
item [180] = [ "Earth-rune", 1, 40, "Rune" ];  //  (136)
item [181] = [ "Coins", 1, 12, "" ];  //  (360)
item [182] = [ "Nothing", 1, 0, "" ];
item [183] = [ "Earth-rune", 1, 8, "Rune" ];  //  (144)
item [184] = [ "Irit Leaf", 1, 1, "Herb" ];
item [185] = [ "Nothing", 1, 0, "" ];
item [186] = [ "Nature-rune", 1, 2, "Rune" ];  //  (10)
item [187] = [ "Nothing", 1, 0, "" ];
item [188] = [ "Nature-rune", 1, 2, "Rune" ];  //  (12)
item [189] = [ "Coins", 1, 12, "" ];  //  190  (372)
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Coins", 1, 12, "" ];  //  (384)
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Nothing", 1, 0, "" ];
item [194] = [ "Nothing", 1, 0, "" ];
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item [198] = [ "Earth-rune", 1, 8, "Rune" ];  //  (152)
item [199] = [ "Coins", 1, 12, "" ];  //  200  (396)
item [200] = [ "Nature-rune", 1, 2, "Rune" ];  //  (14)
item [201] = [ "Cadantine", 1, 1, "Herb" ];
item [202] = [ "Coins", 1, 12, "" ];  //  (408)
item [203] = [ "Coins", 1, 12, "" ];  //  (420)
item [204] = [ "Law-rune", 1, 1, "Rune" ];  // (5)
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Coins", 1, 12, "" ];  //  (432)
item [207] = [ "Irit Leaf", 1, 1, "Herb" ];
item [208] = [ "Earth-rune", 1, 8, "Rune" ];  //  (160)
item [209] = [ "Guam Leaf", 1, 1, "Herb" ];  //  210
item [210] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (8)
item [211] = [ "Staff of earth", 1, 1, "" ];
item [212] = [ "Marrentill", 1, 1, "Herb" ];
item [213] = [ "Nothing", 1, 0, "" ];
item [214] = [ "Coins", 1, 12, "" ];  //  (444)
item [215] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item [216] = [ "Nothing", 1, 0, "" ];
item [217] = [ "Earth-rune", 1, 8, "Rune" ];  //  (168)
item [218] = [ "Coins", 1, 12, "" ];  //  (456)
item [219] = [ "Blood-rune", 1, 1, "Rune" ];  //  220  (1)

runs [1] = [ 219, 220 ];  // kills 120, drops 120

//  run 3

item [220] = [ "Earth-rune", 1, 8, "Rune" ];  //  221  (8)
item [221] = [ "Law-rune", 1, 1, "Rune" ];  // (1)
item [222] = [ "Nothing", 1, 0, "" ];
item [223] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item [224] = [ "Steel Spear", 1, 1, "" ];
item [225] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [226] = [ "Nothing", 1, 0, "" ];
item [227] = [ "Earth-rune", 1, 8, "Rune" ];  //  (16)
item [228] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [229] = [ "Nothing", 1, 0, "" ];  //  230
item [230] = [ "Coins", 1, 12, "" ];  //  (12)
item [231] = [ "uncut emerald", 1, 1, "Gem" ];
item [232] = [ "Guam Leaf", 1, 1, "Herb" ];
item [233] = [ "Nothing", 1, 0, "" ];
item [234] = [ "Marrentill", 1, 1, "Herb" ];
item [235] = [ "Marrentill", 1, 1, "Herb" ];
item [236] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item [237] = [ "Marrentill", 1, 1, "Herb" ];
item [238] = [ "Tarromin", 1, 1, "Herb" ];
item [239] = [ "Coins", 1, 12, "" ];  //  240  (24)
item [240] = [ "Law-rune", 1, 1, "Rune" ];  // (2)
item [241] = [ "Tarromin", 1, 1, "Herb" ];
item [242] = [ "Nothing", 1, 0, "" ];
item [243] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Law-rune", 1, 1, "Rune" ];  // (3)
item [246] = [ "Guam Leaf", 1, 1, "Herb" ];
item [247] = [ "Nothing", 1, 0, "" ];
item [248] = [ "Nothing", 1, 0, "" ];
item [249] = [ "Earth-rune", 1, 40, "Rune" ];  //  250  (56)
item [250] = [ "Nothing", 1, 0, "" ];
item [251] = [ "Nothing", 1, 0, "" ];
item [252] = [ "Coins", 1, 12, "" ];  //  (36)
item [253] = [ "Nature-rune", 1, 2, "Rune" ];  //  (6)
item [254] = [ "Coins", 1, 12, "" ];  //  (48)
item [255] = [ "Coins", 1, 12, "" ];  //  (60)
item [256] = [ "Nothing", 1, 0, "" ];
item [257] = [ "Nothing", 1, 0, "" ];
item [258] = [ "Earth-rune", 1, 8, "Rune" ];  //  (64)
item [259] = [ "Death-rune", 1, 1, "Rune" ];  //  260  (2)
item [260] = [ "Earth-rune", 1, 8, "Rune" ];  //  (72)
item [261] = [ "Coins", 1, 12, "" ];  //  (72)
item [262] = [ "Coins", 1, 12, "" ];  //  (84)
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Guam Leaf", 1, 1, "Herb" ];
item [265] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item [266] = [ "Nothing", 1, 0, "" ];
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Coins", 1, 12, "" ];  //  (96)
item [269] = [ "Law-rune", 1, 1, "Rune" ];  // 270  (4)
item [270] = [ "Nothing", 1, 0, "" ];
item [271] = [ "Steel Spear", 1, 1, "" ];
item [272] = [ "Coins", 1, 12, "" ];  //  (108)
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Coins", 1, 12, "" ];  //  (120)
item [275] = [ "Coins", 1, 12, "" ];  //  (132)
item [276] = [ "Irit Leaf", 1, 1, "Herb" ];
item [277] = [ "Nature-rune", 1, 2, "Rune" ];  //  (8)
item [278] = [ "Earth-rune", 1, 8, "Rune" ];  //  (80)
item [279] = [ "Nothing", 1, 0, "" ];  //  280
item [280] = [ "Death-rune", 1, 1, "Rune" ];  //  (4)
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Coins", 1, 12, "" ];  //  (144)
item [283] = [ "Harralander", 1, 1, "Herb" ];
item [284] = [ "Earth-rune", 1, 8, "Rune" ];  //  (88)
item [285] = [ "Earth-rune", 1, 8, "Rune" ];  //  (96)
item [286] = [ "Earth-rune", 1, 8, "Rune" ];  //  (104)
item [287] = [ "Coins", 1, 12, "" ];  //  (156)
item [288] = [ "Earth-rune", 1, 8, "Rune" ];  //  (112)
item [289] = [ "Coins", 1, 12, "" ];  //  290  (168)
item [290] = [ "Coins", 1, 12, "" ];  //  (180)
item [291] = [ "Staff of earth", 1, 1, "" ];
item [292] = [ "Nothing", 1, 0, "" ];
item [293] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item [294] = [ "Law-rune", 1, 1, "Rune" ];  // (5)
item [295] = [ "Steel Spear", 1, 1, "" ];
item [296] = [ "Nothing", 1, 0, "" ];
item [297] = [ "Nature-rune", 1, 2, "Rune" ];  //  (10)
item [298] = [ "Earth-rune", 1, 8, "Rune" ];  //  (120)
item [299] = [ "Nothing", 1, 0, "" ];  //  300
item [300] = [ "Kwuarm", 1, 1, "Herb" ];
item [301] = [ "Coins", 1, 12, "" ];  //  (192)
item [302] = [ "Staff of earth", 1, 1, "" ];
item [303] = [ "Nature-rune", 1, 2, "Rune" ];  //  (12)
item [304] = [ "Coins", 1, 12, "" ];  //  (204)
item [305] = [ "Earth-rune", 1, 8, "Rune" ];  //  (128)
item [306] = [ "Nothing", 1, 0, "" ];
item [307] = [ "Coins", 1, 12, "" ];  //  (216)
item [308] = [ "Coins", 1, 12, "" ];  //  (228)
item [309] = [ "Earth-rune", 1, 8, "Rune" ];  //  310  (136)

runs [2] = [ 309, 310 ];  // kills 90, drops 90

// runs [3] = [ x, y ];  // kills ? ( y - 310 ), drops ? ( x - 309 )

/*

item [000] = [ "Coins", 1, 12, "" ];  //  ()

item [000] = [ "Earth-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 40, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  // ()
item [000] = [ "Death-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];

item [000] = [ "Steel Spear", 1, 1, "" ];

item [000] = [ "Staff of earth", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Earth warrior";        // monster's name
var mcbl = 52;                      // monster's combat level
var mindex = 122;                   // index into monster data base
var mrpt = 1;                       // number of non-breaking space to add after index name