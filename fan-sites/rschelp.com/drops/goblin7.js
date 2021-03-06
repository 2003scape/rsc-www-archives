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

item   [0] = [ "Bronze Spear", 1, 1, "" ];  // 1
item   [1] = [ "Body-rune", 1, 7, "Rune" ];
item   [2] = [ "Crossbow bolts", 1, 8, "" ];
item   [3] = [ "Coins", 1, 5, "" ];
item   [4] = [ "Bronze Spear", 1, 1, "" ];
item   [5] = [ "Water-rune", 1, 4, "Rune" ];
item   [6] = [ "Nothing", 1, 0, "" ];
item   [7] = [ "Coins", 1, 5, "" ];
item   [8] = [ "Coins", 1, 5, "" ];
item   [9] = [ "Nothing", 1, 0, "" ];  // 10
item  [10] = [ "Coins", 1, 5, "" ];
item  [11] = [ "Crossbow bolts", 1, 8, "" ];
item  [12] = [ "Coins", 1, 5, "" ];
item  [13] = [ "Coins", 1, 5, "" ];
item  [14] = [ "Coins", 1, 5, "" ];  // 15
item  [15] = [ "Coins", 1, 5, "" ];
item  [16] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item  [17] = [ "Goblin Armour", 1, 1, "" ];
item  [18] = [ "Nothing", 1, 0, "" ];
item  [19] = [ "Body-rune", 1, 7, "Rune" ];
item  [20] = [ "Bronze Spear", 1, 1, "" ];  // 20
item  [21] = [ "Coins", 1, 5, "" ];
item  [22] = [ "Nothing", 1, 0, "" ];
item  [23] = [ "Nothing", 1, 0, "" ];
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Nothing", 1, 0, "" ];  // 25
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Nothing", 1, 0, "" ];
item  [28] = [ "Water-rune", 1, 4, "Rune" ];
item  [29] = [ "Coins", 1, 5, "" ];
item  [30] = [ "Nothing", 1, 0, "" ];  // 30
item  [31] = [ "Nothing", 1, 0, "" ];
item  [32] = [ "Coins", 1, 5, "" ];
item  [33] = [ "Nothing", 1, 0, "" ];
item  [34] = [ "Bronze Spear", 1, 1, "" ];
item  [35] = [ "Nothing", 1, 0, "" ];  // 35
item  [36] = [ "Coins", 1, 5, "" ];
item  [37] = [ "Bronze Spear", 1, 1, "" ];
item  [38] = [ "Nothing", 1, 0, "" ];
item  [39] = [ "Coins", 1, 5, "" ];
item  [40] = [ "Water-rune", 1, 4, "Rune" ];  // 40
item  [41] = [ "Coins", 1, 5, "" ];
item  [42] = [ "Nothing", 1, 0, "" ];
item  [43] = [ "Nothing", 1, 0, "" ];
item  [44] = [ "Nothing", 1, 0, "" ];
item  [45] = [ "Coins", 1, 5, "" ];  // 45
item  [46] = [ "Body-rune", 1, 7, "Rune" ];
item  [47] = [ "Bronze Spear", 1, 1, "" ];
item  [48] = [ "Body-rune", 1, 7, "Rune" ];
item  [49] = [ "Nothing", 1, 0, "" ];
item  [50] = [ "Bronze Spear", 2, 1, "" ];  // 50  DOUBLE DROP
item  [51] = [ "Goblin Armour", 1, 1, "" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Nothing", 1, 0, "" ];  // 55
item  [57] = [ "Coins", 1, 5, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Beer", 1, 1, "" ];
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Coins", 1, 5, "" ];  // 60
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Water-rune", 1, 4, "Rune" ];
item  [64] = [ "Coins", 1, 20, "" ];
item  [65] = [ "Nothing", 1, 0, "" ];
item  [66] = [ "Nothing", 1, 0, "" ];  // 65
item  [67] = [ "Nothing", 1, 0, "" ];
item  [68] = [ "Body-rune", 1, 7, "Rune" ];
item  [69] = [ "Water-rune", 1, 4, "Rune" ];
item  [70] = [ "Earth-rune", 1, 3, "Rune" ];
item  [71] = [ "Coins", 1, 5, "" ];  // 70
item  [72] = [ "Coins", 1, 5, "" ];
item  [73] = [ "Brass necklace", 1, 1, "" ];
item  [74] = [ "Water-rune", 1, 4, "Rune" ];
item  [75] = [ "Body-rune", 1, 7, "Rune" ];
item  [76] = [ "Nothing", 1, 0, "" ];  // 75
item  [77] = [ "Nothing", 1, 0, "" ];
item  [78] = [ "Coins", 1, 15, "" ];
item  [79] = [ "Coins", 1, 9, "" ];
item  [80] = [ "Water-rune", 1, 4, "Rune" ];
item  [81] = [ "Nothing", 1, 0, "" ];  // 80
item  [82] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item  [83] = [ "Goblin Armour", 1, 1, "" ];
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Coins", 1, 5, "" ];
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Bronze Spear", 2, 1, "" ];  //85  DOUBLE DROP
item  [88] = [ "Goblin Armour", 1, 1, "" ];
item  [89] = [ "Brass necklace", 1, 1, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Earth-rune", 1, 3, "Rune" ];
item  [93] = [ "Bronze Spear", 2, 1, "" ];  // 90  DOUBLE DROP
item  [94] = [ "Goblin Armour", 1, 1, "" ];
item  [95] = [ "Bronze Square Shield", 1, 1, "" ];
item  [96] = [ "Coins", 1, 5, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Nothing", 1, 0, "" ];
item  [99] = [ "Coins", 1, 5, "" ];  // 95
item [100] = [ "Coins", 1, 20, "" ];
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Nothing", 1, 0, "" ];  // 100
item [105] = [ "Water-rune", 1, 4, "Rune" ];
item [106] = [ "Earth-rune", 1, 3, "Rune" ];
item [107] = [ "Bronze Spear", 1, 1, "" ];
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Nothing", 1, 0, "" ];  // 105
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Coins", 1, 9, "" ];
item [112] = [ "Nothing", 1, 0, "" ];
item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Bronze Spear", 1, 1, "" ];  // 110
item [115] = [ "Coins", 1, 5, "" ];
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Bronze Square Shield", 1, 1, "" ];
item [119] = [ "Nothing", 1, 0, "" ];  // 115

runs [0] = [ 119, 115 ];  // kills 115, drops 119

// run 2

item [120] = [ "Coins", 1, 9, "" ];  //  Kill 116  (9)
item [121] = [ "Coins", 1, 15, "" ];  //  (24)
item [122] = [ "Crossbow bolts", 1, 8, "" ];
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Nothing", 1, 0, "" ];  //  120
item [125] = [ "Water-rune", 1, 4, "Rune" ];  //  (4)
item [126] = [ "Goblin Armour", 2, 1, "" ];  //  DOUBLE DROP
item [127] = [ "Bronze Spear", 1, 1, "" ];
item [128] = [ "Chef's hat", 1, 1, "" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Coins", 1, 5, "" ];  //  (29)
item [131] = [ "Coins", 1, 5, "" ];  //  (34)
item [132] = [ "Nothing", 1, 0, "" ];
item [133] = [ "Water-rune", 1, 4, "Rune" ];  //  (8)
item [134] = [ "Nothing", 1, 0, "" ];
item [135] = [ "Coins", 1, 5, "" ];  //  130  (39)
item [136] = [ "Coins", 1, 5, "" ];  //  (44)
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Coins", 1, 5, "" ];  //  (49)
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Coins", 1, 5, "" ];  //  (54)
item [141] = [ "Coins", 1, 5, "" ];  //  (59)
item [142] = [ "Nothing", 1, 0, "" ];
item [143] = [ "Nothing", 1, 0, "" ];
item [144] = [ "Body-rune", 1, 7, "Rune" ];  //  (7)
item [145] = [ "Nothing", 1, 0, "" ];  //  140
item [146] = [ "Water-rune", 1, 4, "Rune" ];  //  (12)
item [147] = [ "Body-rune", 1, 7, "Rune" ];  //  (14)
item [148] = [ "Coins", 1, 5, "" ];  //  (64)
item [149] = [ "Nothing", 1, 0, "" ];
item [150] = [ "Coins", 1, 5, "" ];  //  (69)
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Water-rune", 1, 4, "Rune" ];  //  (16)
item [153] = [ "Coins", 1, 5, "" ];  //  (74)
item [154] = [ "Nothing", 1, 0, "" ];
item [155] = [ "Nothing", 1, 0, "" ];  //  150
item [156] = [ "Crossbow bolts", 1, 8, "" ];
item [157] = [ "Coins", 1, 5, "" ];  //  (79)
item [158] = [ "Nothing", 1, 0, "" ];
item [159] = [ "Coins", 1, 5, "" ];  //  (99)
item [160] = [ "Bronze Square Shield", 1, 1, "" ];
item [161] = [ "Crossbow bolts", 1, 8, "" ];
item [162] = [ "Coins", 1, 20, "" ];  //  (119)
item [163] = [ "Nothing", 1, 0, "" ];
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Bronze Spear", 1, 1, "" ];  //  160
item [166] = [ "Nothing", 1, 0, "" ];
item [167] = [ "Coins", 1, 9, "" ];  //  (128)
item [168] = [ "Earth-rune", 1, 3, "Rune" ];  //  (3)
item [169] = [ "Coins", 1, 15, "" ];  //  (143)
item [170] = [ "Nothing", 1, 0, "" ];
item [171] = [ "Coins", 1, 5, "" ];  //  (148)
item [172] = [ "Nothing", 1, 0, "" ];
item [173] = [ "Bronze Spear", 1, 1, "" ];
item [174] = [ "Coins", 1, 5, "" ];  //  (153)
item [175] = [ "Coins", 1, 5, "" ];  //  170  (158)
item [176] = [ "Beer", 1, 1, "" ];
item [177] = [ "Coins", 1, 5, "" ];  //  (163)
item [178] = [ "Coins", 1, 5, "" ];  //  (168)
item [179] = [ "Coins", 1, 5, "" ];  //  (173)
item [180] = [ "Bronze Square Shield", 1, 1, "" ];
item [181] = [ "Nothing", 1, 0, "" ];
item [182] = [ "Nothing", 1, 0, "" ];
item [183] = [ "Bronze Spear", 1, 1, "" ];
item [184] = [ "Beer", 1, 1, "" ];
item [185] = [ "Goblin Armour", 2, 1, "" ];  //  180  DOUBLE DROP
item [186] = [ "Bronze Spear", 1, 1, "" ];
item [187] = [ "Coins", 1, 5, "" ];  //  (178)
item [188] = [ "Nothing", 1, 0, "" ];
item [189] = [ "Coins", 1, 5, "" ];  //  (183)
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Coins", 1, 5, "" ];  //  (188)
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Coins", 1, 5, "" ];  //  (193)
item [194] = [ "Nothing", 1, 0, "" ];
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Body-rune", 1, 7, "Rune" ];  //  190  (21)
item [197] = [ "Coins", 1, 9, "" ];  //  (202)
item [198] = [ "Shortbow", 1, 1, "" ];
item [199] = [ "Coins", 1, 5, "" ];  //  (207)
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Coins", 1, 5, "" ];  //  (212)
item [202] = [ "Nothing", 1, 0, "" ];
item [203] = [ "Nothing", 1, 0, "" ];
item [204] = [ "Water-rune", 1, 4, "Rune" ];  //  (20)
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Water-rune", 1, 4, "Rune" ];  //  200  (24)
item [207] = [ "Coins", 1, 5, "" ];  //  (217)
item [208] = [ "Beer", 1, 1, "" ];
item [209] = [ "Nothing", 1, 0, "" ];
item [210] = [ "Coins", 1, 5, "" ];  //  (222)
item [211] = [ "Coins", 1, 5, "" ];  //  (227)
item [212] = [ "Goblin Armour", 2, 1, "" ];  //  DOUBLE DROP
item [213] = [ "Bronze Spear", 1, 1, "" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Coins", 1, 5, "" ];  //  (232)
item [216] = [ "Bronze Spear", 1, 1, "" ];
item [217] = [ "Nothing", 1, 0, "" ];  //  210
item [218] = [ "Nothing", 1, 0, "" ];
item [219] = [ "Coins", 1, 5, "" ];  //  (237)
item [220] = [ "Crossbow bolts", 1, 8, "" ];
item [221] = [ "Beer", 1, 1, "" ];
item [222] = [ "Bronze Square Shield", 1, 1, "" ];
item [223] = [ "Nothing", 1, 0, "" ];
item [224] = [ "Crossbow bolts", 1, 8, "" ];
item [225] = [ "Nothing", 1, 0, "" ];
item [226] = [ "Coins", 1, 5, "" ];  //  (242)
item [227] = [ "Nothing", 1, 0, "" ];  //  220
item [228] = [ "Coins", 1, 9, "" ];  //  (251)
item [229] = [ "Nothing", 1, 0, "" ];
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "Nothing", 1, 0, "" ];
item [232] = [ "Nothing", 1, 0, "" ];
item [233] = [ "Body-rune", 1, 7, "Rune" ];  //  (28)
item [234] = [ "Coins", 1, 15, "" ];  //  (266)
item [235] = [ "Nothing", 1, 0, "" ];
item [236] = [ "Earth-rune", 1, 3, "Rune" ];  //  (6)
item [237] = [ "Coins", 1, 15, "" ];  //  230  (281)
item [238] = [ "Nothing", 1, 0, "" ];
item [239] = [ "Bronze Spear", 1, 1, "" ];
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item [242] = [ "Goblin Armour", 1, 1, "" ];
item [243] = [ "Coins", 1, 5, "" ];  //  (286)
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Coins", 1, 20, "" ];  //  (306)
item [246] = [ "Coins", 1, 5, "" ];  //  (311)
item [247] = [ "Nothing", 1, 0, "" ];
item [248] = [ "Nothing", 1, 0, "" ];  //  240
item [249] = [ "Crossbow bolts", 1, 8, "" ];
item [250] = [ "Nothing", 1, 0, "" ];
item [251] = [ "Water-rune", 1, 4, "Rune" ];  //  (28)
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Coins", 1, 5, "" ];  //  (316)
item [254] = [ "Bronze Square Shield", 1, 1, "" ];
item [255] = [ "Coins", 1, 9, "" ];  //  (325)
item [256] = [ "Coins", 1, 5, "" ];  //  (330)
item [257] = [ "Nothing", 1, 0, "" ];
item [258] = [ "Coins", 1, 5, "" ];  //  250  (335)
item [259] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item [260] = [ "Goblin Armour", 1, 1, "" ];
item [261] = [ "Nothing", 1, 0, "" ];
item [262] = [ "Nothing", 1, 0, "" ];
item [263] = [ "Earth-rune", 1, 3, "Rune" ];  //  (6)
item [264] = [ "Nothing", 1, 0, "" ];
item [265] = [ "Coins", 1, 5, "" ];  //  (340)
item [266] = [ "Coins", 1, 5, "" ];  //  (345)
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Water-rune", 1, 4, "Rune" ];  //  (32)
item [269] = [ "Bronze Spear", 1, 1, "" ];  //  260
item [270] = [ "Nothing", 1, 0, "" ];
item [271] = [ "Nothing", 1, 0, "" ];
item [272] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item [273] = [ "Goblin Armour", 1, 1, "" ];
item [274] = [ "Water-rune", 1, 4, "Rune" ];  //  (36)
item [275] = [ "Nothing", 1, 0, "" ];
item [276] = [ "Coins", 1, 5, "" ];  //  (350)
item [277] = [ "Nothing", 1, 0, "" ];
item [278] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item [279] = [ "Goblin Armour", 1, 1, "" ];
item [280] = [ "Coins", 1, 9, "" ];  //  (359)
item [281] = [ "Coins", 1, 5, "" ];  //  270  (364)
item [282] = [ "Coins", 1, 20, "" ];  //  (384)
item [283] = [ "Nothing", 1, 0, "" ];
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 5, "" ];  //  (389)
item [286] = [ "Coins", 1, 15, "" ];  //  (404)
item [287] = [ "Nothing", 1, 0, "" ];
item [288] = [ "Coins", 1, 5, "" ];  //  (409)
item [289] = [ "Nothing", 1, 0, "" ];
item [290] = [ "Coins", 1, 5, "" ];  //  (414)
item [291] = [ "Nothing", 1, 0, "" ];  //  280
item [292] = [ "Coins", 1, 5, "" ];  //  (419)
item [293] = [ "Body-rune", 1, 7, "Rune" ];  //  (35)
item [294] = [ "Coins", 1, 5, "" ];  //  (424)
item [295] = [ "Body-rune", 1, 7, "Rune" ];  //  (42)
item [296] = [ "Nothing", 1, 0, "" ];
item [297] = [ "Coins", 1, 9, "" ];  //  (433)
item [298] = [ "Bronze Spear", 2, 1, "" ];  //  DOUBLE DROP
item [299] = [ "Goblin Armour", 1, 1, "" ];
item [300] = [ "Nothing", 1, 0, "" ];
item [301] = [ "Nothing", 1, 0, "" ];
item [302] = [ "Bronze Spear", 1, 1, "" ];  //  290
item [303] = [ "Nothing", 1, 0, "" ];
item [304] = [ "Nothing", 1, 0, "" ];
item [305] = [ "Earth-rune", 1, 3, "Rune" ];  //  (9)
item [306] = [ "Nothing", 1, 0, "" ];
item [307] = [ "Nothing", 1, 0, "" ];
item [308] = [ "Earth-rune", 1, 3, "Rune" ];  //  (12)
item [309] = [ "Nothing", 1, 0, "" ];
item [310] = [ "Coins", 1, 5, "" ];  //  (438)
item [311] = [ "Bronze Spear", 1, 1, "" ];
item [312] = [ "Nothing", 1, 0, "" ];  //  300

runs [1] = [ 312, 300 ];  // kills 185, drops 193

// runs [2] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 312 )

/*
item [000] = [ "Coins", 1, 5, "" ];  //  ()

item [000] = [ "Body-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 3, "Rune" ];  //  ()

item [000] = [ "Bronze Spear", 1, 1, "" ];

item [000] = [ "Bronze Square Shield", 1, 1, "" ];

item [000] = [ "Crossbow bolts", 1, 8, "" ];  //  ()
item [000] = [ "Goblin Armour", 1, 1, "" ];
item [000] = [ "Beer", 1, 1, "" ];
item [000] = [ "Brass necklace", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Goblin";           // monster's name
var mcbl = 7;                   // monster's combat level
var mindex = 10;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name