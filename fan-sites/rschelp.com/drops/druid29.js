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

item   [0] = [ "Coins", 1, 2, "" ];  // 1  (2)
item   [1] = [ "Kwuarm", 1, 1, "Herb" ];
item   [2] = [ "Earth-rune", 1, 18, "Rune" ];  //  (18)
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Coins", 1, 2, "" ];  //  (4)
item   [5] = [ "Nothing", 1, 0, "" ];
item   [6] = [ "Nothing", 1, 0, "" ];
item   [7] = [ "Druids robe (Top)", 1, 1, "" ];
item   [8] = [ "Nothing", 1, 0, "" ];
item   [9] = [ "Guam Leaf", 1, 1, "Herb" ];  // 10
item  [10] = [ "Limpwurt root", 1, 1, "" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item  [13] = [ "Druids robe (Bottom)", 1, 1, "" ];
item  [14] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [15] = [ "Coins", 1, 2, "" ];  //  (6)
item  [16] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Coins", 1, 2, "" ];  //  (8)
item  [19] = [ "Cadantine", 1, 1, "Herb" ];  // 20
item  [20] = [ "Nothing", 1, 0, "" ];
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Druids robe (Bottom)", 1, 1, "" ];
item  [23] = [ "Nothing", 1, 0, "" ];
item  [24] = [ "Tarromin", 1, 1, "Herb" ];
item  [25] = [ "Nothing", 1, 0, "" ];
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item  [28] = [ "Coins", 1, 2, "" ];  //  (10)
item  [29] = [ "Tarromin", 1, 1, "Herb" ];  // 30
item  [30] = [ "Coins", 1, 4, "" ];  //  (14)
item  [31] = [ "Coins", 1, 2, "" ];  //  (16)
item  [32] = [ "Tarromin", 1, 1, "Herb" ];
item  [33] = [ "Vial (Empty)", 1, 1, "" ];
item  [34] = [ "Druids robe (Bottom)", 1, 1, "" ];
item  [35] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [36] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [37] = [ "Vial (Empty)", 1, 1, "" ];
item  [38] = [ "Tarromin", 1, 1, "Herb" ];
item  [39] = [ "Coins", 1, 2, "" ];  // 40  (18)
item  [40] = [ "Vial (Empty)", 1, 1, "" ];
item  [41] = [ "Coins", 1, 2, "" ];  //  (20)
item  [42] = [ "Nothing", 1, 0, "" ];
item  [43] = [ "Tarromin", 1, 1, "Herb" ];
item  [44] = [ "Coins", 1, 2, "" ];  //  (22)
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Nothing", 1, 0, "" ];
item  [47] = [ "Coins", 1, 15, "" ];  //  (37)
item  [48] = [ "Earth-rune", 1, 18, "Rune" ];  //  (36)
item  [49] = [ "Nothing", 1, 0, "" ];  // 50
item  [50] = [ "Druids robe (Bottom)", 1, 1, "" ];
item  [51] = [ "Coins", 1, 3, "" ];  //  (40)
item  [52] = [ "Druids robe (Top)", 1, 1, "" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Druids robe (Bottom)", 1, 1, "" ];
item  [55] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [56] = [ "Nothing", 1, 0, "" ];
item  [57] = [ "Longbow", 1, 1, "" ];
item  [58] = [ "Vial (Empty)", 1, 1, "" ];
item  [59] = [ "Nothing", 1, 0, "" ];  // 60
item  [60] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [61] = [ "Marrentill", 1, 1, "Herb" ];
item  [62] = [ "Earth-rune", 1, 18, "Rune" ];  //  (54)
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Iron dagger", 1, 1, "" ];
item  [65] = [ "Vial (Empty)", 1, 1, "" ];
item  [66] = [ "Coins", 1, 5, "" ];  //  (45)
item  [67] = [ "Coins", 1, 4, "" ];  //  (49)
item  [68] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [69] = [ "Limpwurt root", 1, 1, "" ];  // 70
item  [70] = [ "Earth-rune", 1, 18, "Rune" ];  //  (72)
item  [71] = [ "Coins", 1, 15, "" ];  //  (64)
item  [72] = [ "Marrentill", 1, 1, "Herb" ];
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [75] = [ "Coins", 1, 2, "" ];  //  (66)
item  [76] = [ "Marrentill", 1, 1, "Herb" ];
item  [77] = [ "Earth-rune", 1, 18, "Rune" ];  //  (90)
item  [78] = [ "Longbow", 1, 1, "" ];
item  [79] = [ "Nothing", 1, 0, "" ];  // 80
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Nothing", 1, 0, "" ];
item  [82] = [ "Marrentill", 1, 1, "Herb" ];
item  [83] = [ "Nothing", 1, 0, "" ];
item  [84] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [85] = [ "Iron dagger", 1, 1, "" ];
item  [86] = [ "Limpwurt root", 1, 1, "" ];
item  [87] = [ "Limpwurt root", 1, 1, "" ];
item  [88] = [ "Cadantine", 1, 1, "Herb" ];
item  [89] = [ "Irit Leaf", 1, 1, "Herb" ];  // 90
item  [90] = [ "Druids robe (Top)", 1, 1, "" ];
item  [91] = [ "Druids robe (Top)", 1, 1, "" ];
item  [92] = [ "Marrentill", 1, 1, "Herb" ];
item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "Iron dagger", 1, 1, "" ];
item  [95] = [ "Longbow", 1, 1, "" ];
item  [96] = [ "Vial (Empty)", 1, 1, "" ];
item  [97] = [ "Coins", 1, 2, "" ];  //  (68)
item  [98] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [99] = [ "Nothing", 1, 0, "" ];  // 100
item [100] = [ "Nothing", 1, 0, "" ];
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Vial (Empty)", 1, 1, "" ];
item [105] = [ "Coins", 1, 2, "" ];  //  (70)
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item [108] = [ "Nothing", 1, 0, "" ];
item [109] = [ "Coins", 1, 15, "" ];  // 110  (85)
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [112] = [ "Fire-rune", 1, 6, "Rune" ];  //  (6)
item [113] = [ "Marrentill", 1, 1, "Herb" ];
item [114] = [ "Nothing", 1, 0, "" ];
item [115] = [ "Nothing", 1, 0, "" ];
item [116] = [ "Guam Leaf", 1, 1, "Herb" ];
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Nothing", 1, 0, "" ];
item [119] = [ "Vial (Empty)", 1, 1, "" ];  // 120
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Earth-rune", 1, 18, "Rune" ];  //  (108)
item [122] = [ "Vial (Empty)", 1, 1, "" ];
item [123] = [ "Coins", 1, 2, "" ];  //  (87)
item [124] = [ "Nothing", 1, 0, "" ];
item [125] = [ "Iron dagger", 1, 1, "" ];
item [126] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [127] = [ "Coins", 1, 2, "" ];  //  (89)
item [128] = [ "Nothing", 1, 0, "" ];
item [129] = [ "Nothing", 1, 0, "" ];  // 130
item [130] = [ "Coins", 1, 15, "" ];  //  (104)
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Tarromin", 1, 1, "Herb" ];
item [133] = [ "Earth-rune", 1, 18, "Rune" ];  //  (126)
item [134] = [ "Harralander", 1, 1, "Herb" ];
item [135] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item [136] = [ "Coins", 1, 2, "" ];  //  (106)
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "Nothing", 1, 0, "" ];  // 140
item [140] = [ "Avantoe", 1, 1, "Herb" ];
item [141] = [ "Vial (Empty)", 1, 1, "" ];
item [142] = [ "Nothing", 1, 0, "" ];
item [143] = [ "Vial (Empty)", 1, 1, "" ];
item [144] = [ "Coins", 1, 4, "" ];  //  (110)
item [145] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Vial (Empty)", 1, 1, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Nothing", 1, 0, "" ];  // 150
item [150] = [ "Irit Leaf", 1, 1, "Herb" ];
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Nothing", 1, 0, "" ];
item [153] = [ "Irit Leaf", 1, 1, "Herb" ];
item [154] = [ "Coins", 1, 2, "" ];  //  (112)
item [155] = [ "Coins", 1, 4, "" ];  //  (116)
item [156] = [ "Nothing", 1, 0, "" ];
item [157] = [ "Harralander", 1, 1, "Herb" ];
item [158] = [ "Marrentill", 1, 1, "Herb" ];
item [159] = [ "Coins", 1, 2, "" ];  // 160  (118)
item [160] = [ "Coins", 1, 2, "" ];  //  (120)
item [161] = [ "Nothing", 1, 0, "" ];
item [162] = [ "Earth-rune", 1, 6, "Rune" ];  //  (132)
item [163] = [ "Cadantine", 1, 1, "Herb" ];
item [164] = [ "Limpwurt root", 1, 1, "" ];
item [165] = [ "Vial (Empty)", 1, 1, "" ];

runs [0] = [ 165, 166 ];  // kills 166, drops 166

// run 2

item [166] = [ "Nothing", 1, 0, "" ];  //  167
item [167] = [ "Limpwurt root", 1, 1, "" ];
item [168] = [ "Tarromin", 1, 1, "Herb" ];
item [169] = [ "Nothing", 1, 0, "" ];  //  170
item [170] = [ "Nothing", 1, 0, "" ];
item [171] = [ "Earth-rune", 1, 6, "Rune" ];  //  (6)
item [172] = [ "Coins", 1, 4, "" ];  //  (4)
item [173] = [ "Vial (Empty)", 1, 1, "" ];
item [174] = [ "Druids robe (Top)", 1, 1, "" ];
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Nothing", 1, 0, "" ];
item [177] = [ "Guam Leaf", 1, 1, "Herb" ];
item [178] = [ "Coins", 1, 15, "" ];  //  (19)
item [179] = [ "Limpwurt root", 1, 1, "" ];  //  180
item [180] = [ "Nothing", 1, 0, "" ];
item [181] = [ "Earth-rune", 1, 18, "Rune" ];  //  (24)
item [182] = [ "Tarromin", 1, 1, "Herb" ];
item [183] = [ "Limpwurt root", 1, 1, "" ];
item [184] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [185] = [ "Harralander", 1, 1, "Herb" ];
item [186] = [ "Limpwurt root", 1, 1, "" ];
item [187] = [ "Coins", 1, 2, "" ];  //  (21)
item [188] = [ "Limpwurt root", 1, 1, "" ];
item [189] = [ "Coins", 1, 4, "" ];  //  190  (25)
item [190] = [ "Guam Leaf", 1, 1, "Herb" ];
item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Coins", 1, 2, "" ];  //  (27)
item [194] = [ "Guam Leaf", 1, 1, "Herb" ];
item [195] = [ "Earth-rune", 1, 6, "Rune" ];  //  (30)
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Marrentill", 1, 1, "Herb" ];
item [198] = [ "Guam Leaf", 1, 1, "Herb" ];
item [199] = [ "Ranarr Weed", 1, 1, "Herb" ];  //  200
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Earth-rune", 1, 6, "Rune" ];  //  (36)
item [202] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item [203] = [ "Coins", 1, 2, "" ];  //  (29)
item [204] = [ "Nothing", 1, 0, "" ];
item [205] = [ "Guam Leaf", 1, 1, "Herb" ];
item [206] = [ "Druids robe (Top)", 1, 1, "" ];
item [207] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [208] = [ "Cure poison Potion (3 dose)", 1, 1, "" ];
item [209] = [ "Druids robe (Bottom)", 1, 1, "" ];  //  210
item [210] = [ "Marrentill", 1, 1, "Herb" ];
item [211] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [212] = [ "Nothing", 1, 0, "" ];
item [213] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [214] = [ "Iron dagger", 1, 1, "" ];
item [215] = [ "Nothing", 1, 0, "" ];
item [216] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item [217] = [ "Coins", 1, 2, "" ];  //  (31)
item [218] = [ "Coins", 1, 15, "" ];  //  (46)
item [219] = [ "Nothing", 1, 0, "" ];  //  220
item [220] = [ "Nothing", 1, 0, "" ];
item [221] = [ "Coins", 1, 4, "" ];  //  (50)
item [222] = [ "Earth-rune", 1, 18, "Rune" ];  //  (54)
item [223] = [ "Earth-rune", 1, 18, "Rune" ];  //  (72)
item [224] = [ "Vial (Empty)", 1, 1, "" ];
item [225] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [226] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [227] = [ "Nothing", 1, 0, "" ];
item [228] = [ "Nothing", 1, 0, "" ];
item [229] = [ "Coins", 1, 4, "" ];  //  230  (54)
item [230] = [ "Tarromin", 1, 1, "Herb" ];
item [231] = [ "Tarromin", 1, 1, "Herb" ];
item [232] = [ "Harralander", 1, 1, "Herb" ];
item [233] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [234] = [ "Coins", 1, 2, "" ];  //  (56)
item [235] = [ "Longbow", 1, 1, "" ];
item [236] = [ "Marrentill", 1, 1, "Herb" ];
item [237] = [ "Coins", 1, 4, "" ];  //  (60)
item [238] = [ "Guam Leaf", 1, 1, "Herb" ];
item [239] = [ "Nothing", 1, 0, "" ];  //  240
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [242] = [ "Longbow", 1, 1, "" ];
item [243] = [ "Coins", 1, 2, "" ];  //  (62)
item [244] = [ "Coins", 1, 15, "" ];  //  (77)
item [245] = [ "Vial (Empty)", 1, 1, "" ];
item [246] = [ "Nothing", 1, 0, "" ];
item [247] = [ "Iron dagger", 1, 1, "" ];
item [248] = [ "Coins", 1, 15, "" ];  //  (92)
item [249] = [ "Nothing", 1, 0, "" ];  //  250
item [250] = [ "Harralander", 1, 1, "Herb" ];
item [251] = [ "Harralander", 1, 1, "Herb" ];
item [252] = [ "Vial (Empty)", 1, 1, "" ];
item [253] = [ "Limpwurt root", 1, 1, "" ];
item [254] = [ "Marrentill", 1, 1, "Herb" ];
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Earth-rune", 1, 18, "Rune" ];  //  (90)
item [257] = [ "Nothing", 1, 0, "" ];
item [258] = [ "Kwuarm", 1, 1, "Herb" ];
item [259] = [ "Tarromin", 1, 1, "Herb" ];  //  260
item [260] = [ "Nothing", 1, 0, "" ];
item [261] = [ "Limpwurt root", 1, 1, "" ];
item [262] = [ "Irit Leaf", 1, 1, "Herb" ];
item [263] = [ "Guam Leaf", 1, 1, "Herb" ];
item [264] = [ "Water-rune", 1, 6, "Rune" ];  //  (18)
item [265] = [ "Guam Leaf", 1, 1, "Herb" ];
item [266] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [267] = [ "Cadantine", 1, 1, "Herb" ];
item [268] = [ "Coins", 1, 15, "" ];  //  (107)
item [269] = [ "Ranarr Weed", 1, 1, "Herb" ];  //  270
item [270] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item [271] = [ "Harralander", 1, 1, "Herb" ];
item [272] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [273] = [ "Earth-rune", 1, 18, "Rune" ];  //  (108)
item [274] = [ "Druids robe (Top)", 1, 1, "" ];
item [275] = [ "Iron dagger", 1, 1, "" ];
item [276] = [ "Nothing", 1, 0, "" ];
item [277] = [ "Marrentill", 1, 1, "Herb" ];
item [278] = [ "Nothing", 1, 0, "" ];
item [279] = [ "Earth-rune", 1, 18, "Rune" ];  //  280  (126)
item [280] = [ "Nothing", 1, 0, "" ];
item [281] = [ "Guam Leaf", 1, 1, "Herb" ];
item [282] = [ "Limpwurt root", 1, 1, "" ];
item [283] = [ "Coins", 1, 15, "" ];  //  (122)
item [284] = [ "Coins", 1, 4, "" ];  //  (126)
item [285] = [ "Coins", 1, 15, "" ];  //  (141)
item [286] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [287] = [ "Druids robe (Top)", 1, 1, "" ];
item [288] = [ "Guam Leaf", 1, 1, "Herb" ];
item [289] = [ "Guam Leaf", 1, 1, "Herb" ];  //  290
item [290] = [ "Water-rune", 1, 6, "Rune" ];  //  (24)
item [291] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [292] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [293] = [ "Guam Leaf", 1, 1, "Herb" ];
item [294] = [ "Longbow", 1, 1, "" ];
item [295] = [ "Nothing", 1, 0, "" ];
item [296] = [ "Limpwurt root", 1, 1, "" ];
item [297] = [ "Harralander", 1, 1, "Herb" ];
item [298] = [ "Coins", 1, 2, "" ];  //  (143)
item [299] = [ "Druids robe (Bottom)", 1, 1, "" ];  //  300

runs [1] = [ 299, 300 ];  // kills 134, drops 134

// runs [2] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*

item [000] = [ "Coins", 1, 2, "" ];  //  ()
item [000] = [ "Coins", 1, 3, "" ];  //  ()
item [000] = [ "Coins", 1, 4, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()

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

item [000] = [ "Water-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 18, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Druids robe (Top)", 1, 1, "" ];
item [000] = [ "Druids robe (Bottom)", 1, 1, "" ];
item [000] = [ "Limpwurt root", 1, 1, "" ];
item [000] = [ "Vial (Empty)", 1, 1, "" ];
item [000] = [ "Cure poison Potion (3 dose)", 1, 1, "" ];

item [000] = [ "Longbow", 1, 1, "" ];
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Druid";        // monster's name
var mcbl = 29;              // monster's combat level
var mindex = 75;            // index into monster data base
var mrpt = 2;               // number of non-breaking space to add after index name