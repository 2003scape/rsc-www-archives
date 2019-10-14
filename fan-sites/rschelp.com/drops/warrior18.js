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

item   [0] = [ "Irit Leaf", 1, 1, "Herb" ];  //  1
item   [1] = [ "Nothing", 1, 0, "" ];
item   [2] = [ "Coins", 1, 9, "" ];  //  (9)
item   [3] = [ "Coins", 1, 3, "" ];  //  (12)
item   [4] = [ "Fishing Bait", 1, 1, "" ];
item   [5] = [ "Coins", 1, 6, "" ];  //  (18)
item   [6] = [ "Coins", 1, 3, "" ];  //  (21)
item   [7] = [ "Coins", 1, 25, "" ];  //  (46)
item   [8] = [ "Avantoe", 1, 1, "Herb" ];
item   [9] = [ "Nothing", 1, 0, "" ];  //  10
item  [10] = [ "Coins", 1, 3, "" ];  //  (49)
item  [11] = [ "Fishing Bait", 1, 1, "" ];
item  [12] = [ "Coins", 1, 3, "" ];  //  (52)
item  [13] = [ "Coins", 1, 5, "" ];  //  (57)
item  [14] = [ "Tarromin", 1, 1, "Herb" ];
item  [15] = [ "Coins", 1, 3, "" ];  //  (60)
item  [16] = [ "Mind-rune", 1, 6, "Rune" ];  //  (6)
item  [17] = [ "Coins", 1, 5, "" ];  //  (65)
item  [18] = [ "Coins", 1, 3, "" ];  //  (68)
item  [19] = [ "Guam Leaf", 1, 1, "Herb" ];  //  20
item  [20] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (7)
item  [21] = [ "Fishing Bait", 1, 1, "" ];
item  [22] = [ "Iron dagger", 1, 1, "" ];
item  [23] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [24] = [ "Harralander", 1, 1, "Herb" ];
item  [25] = [ "Fire-rune", 1, 4, "Rune" ];  //  (4)
item  [26] = [ "Coins", 1, 3, "" ];  //  (71)
item  [27] = [ "Coins", 1, 3, "" ];  //  (74)
item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Coins", 1, 3, "" ];  //  30  (77)
item  [30] = [ "Harralander", 1, 1, "Herb" ];
item  [31] = [ "Fishing Bait", 1, 1, "" ];
item  [32] = [ "Coins", 1, 3, "" ];  //  (80)
item  [33] = [ "Coins", 1, 3, "" ];  //  (83)
item  [34] = [ "Coins", 1, 5, "" ];  //  (88)
item  [35] = [ "Nothing", 1, 0, "" ];
item  [36] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [37] = [ "Coins", 1, 3, "" ];  //  (91)
item  [38] = [ "Fire-rune", 1, 4, "Rune" ];  //  (8)
item  [39] = [ "Nothing", 1, 0, "" ];  //  40
item  [40] = [ "Nothing", 1, 0, "" ];
item  [41] = [ "Nothing", 1, 0, "" ];
item  [42] = [ "Coins", 1, 3, "" ];  //  (94)
item  [43] = [ "Coins", 1, 3, "" ];  //  (97)
item  [44] = [ "Iron dagger", 1, 1, "" ];
item  [45] = [ "Coins", 1, 3, "" ];  //  (100)
item  [46] = [ "Nothing", 1, 0, "" ];
item  [47] = [ "Earth-rune", 1, 3, "Rune" ];  //  (3)
item  [48] = [ "Fishing Bait", 1, 1, "" ];
item  [49] = [ "Tarromin", 1, 1, "Herb" ];  //  50
item  [50] = [ "Coins", 1, 3, "" ];  //  (103)
item  [51] = [ "Coins", 1, 3, "" ];  //  (106)
item  [52] = [ "Coins", 1, 3, "" ];  //  (109)
item  [53] = [ "Coins", 1, 3, "" ];  //  (112)
item  [54] = [ "Coins", 1, 15, "" ];  //  (127)
item  [55] = [ "Coins", 1, 3, "" ];  //  (130)
item  [56] = [ "Coins", 1, 3, "" ];  //  (133)
item  [57] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item  [58] = [ "Coins", 1, 3, "" ];  //  (136)
item  [59] = [ "Nothing", 1, 0, "" ];  //  60
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Nothing", 1, 0, "" ];
item  [62] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [63] = [ "Coins", 1, 5, "" ];  //  (141)
item  [64] = [ "Coins", 1, 3, "" ];  //  (144)
item  [65] = [ "Coins", 1, 5, "" ];  //  (149)
item  [66] = [ "Coins", 1, 5, "" ];  //  (154)
item  [67] = [ "Nothing", 1, 0, "" ];
item  [68] = [ "Earth-rune", 1, 3, "Rune" ];  //  (6)
item  [69] = [ "Irit Leaf", 1, 1, "Herb" ];  //  70
item  [70] = [ "Coins", 1, 3, "" ];  //  (157)
item  [71] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [72] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (2)
item  [73] = [ "Coins", 1, 3, "" ];  //  (160)
item  [74] = [ "Coins", 1, 3, "" ];  //  (163)
item  [75] = [ "Coins", 1, 3, "" ];  //  (166)
item  [76] = [ "Nothing", 1, 0, "" ];
item  [77] = [ "Harralander", 1, 1, "Herb" ];
item  [78] = [ "Coins", 1, 3, "" ];  //  (169)
item  [79] = [ "Coins", 1, 15, "" ];  //  80  (184)
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Harralander", 1, 1, "Herb" ];
item  [82] = [ "copper ore", 1, 1, "" ];
item  [83] = [ "Nothing", 1, 0, "" ];
item  [84] = [ "Coins", 1, 3, "" ];  //  (187)
item  [85] = [ "Marrentill", 1, 1, "Herb" ];
item  [86] = [ "Earth-rune", 1, 3, "Rune" ];  //  (9)
item  [87] = [ "Coins", 1, 3, "" ];  //  (190)
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Coins", 1, 3, "" ];  //  90  (193)
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Fire-rune", 1, 4, "Rune" ];  //  (12)
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Coins", 1, 5, "" ];  //  (198)
item  [94] = [ "Nothing", 1, 0, "" ];
item  [95] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (14)
item  [96] = [ "Mind-rune", 1, 6, "Rune" ];  //  (12)
item  [97] = [ "Coins", 1, 5, "" ];  //  (203)
item  [98] = [ "Coins", 1, 3, "" ];  //  (206)
item  [99] = [ "Coins", 1, 5, "" ];  //  100  (211)
item [100] = [ "Coins", 1, 3, "" ];  //  (214)
item [101] = [ "Fishing Bait", 1, 1, "" ];
item [102] = [ "Coins", 1, 3, "" ];  //  (217)
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [105] = [ "Coins", 1, 3, "" ];  //  (220)
item [106] = [ "Iron dagger", 1, 1, "" ];
item [107] = [ "Coins", 1, 15, "" ];  //  (235)
item [108] = [ "Marrentill", 1, 1, "Herb" ];
item [109] = [ "Nothing", 1, 0, "" ];  //  110
item [110] = [ "Coins", 1, 15, "" ];  //  (250)
item [111] = [ "Coins", 1, 5, "" ];  //  (255)
item [112] = [ "Coins", 1, 5, "" ];  //  (260)
item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Coins", 1, 3, "" ];  //  (263)
item [115] = [ "Nothing", 1, 0, "" ];
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Coins", 1, 15, "" ];  //  (278)
item [118] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [119] = [ "Coins", 1, 3, "" ];  //  120  (281)
item [120] = [ "Tarromin", 1, 1, "Herb" ];
item [121] = [ "copper ore", 1, 1, "" ];
item [122] = [ "Coins", 1, 3, "" ];  //  (284)
item [123] = [ "Mind-rune", 1, 6, "Rune" ];  //  (18)
item [124] = [ "Coins", 1, 5, "" ];  //  (289)
item [125] = [ "Coins", 1, 3, "" ];  //  (292)
item [126] = [ "Coins", 1, 3, "" ];  //  (295)
item [127] = [ "Coins", 1, 3, "" ];  //  (298)
item [128] = [ "Tarromin", 1, 1, "Herb" ];
item [129] = [ "Nothing", 1, 0, "" ];  //  130
item [130] = [ "Coins", 1, 3, "" ];  //  (301)
item [131] = [ "Fishing Bait", 1, 1, "" ];
item [132] = [ "Coins", 1, 3, "" ];  //  (304)
item [133] = [ "Coins", 1, 3, "" ];  //  (307)
item [134] = [ "Earth-rune", 1, 3, "Rune" ];  //  (12)
item [135] = [ "Coins", 1, 3, "" ];  //  (310)
item [136] = [ "Coins", 1, 3, "" ];  //  (313)
item [137] = [ "Coins", 1, 3, "" ];  //  (316)
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "Tarromin", 1, 1, "Herb" ];  //  140
item [140] = [ "Nothing", 1, 0, "" ];
item [141] = [ "Coins", 1, 3, "" ];  //  (319)
item [142] = [ "Coins", 1, 3, "" ];  //  (322)
item [143] = [ "Coins", 1, 5, "" ];  //  (327)
item [144] = [ "Coins", 1, 3, "" ];  //  (330)
item [145] = [ "Coins", 1, 3, "" ];  //  (333)
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "copper ore", 1, 1, "" ];
item [148] = [ "Cadantine", 1, 1, "Herb" ];
item [149] = [ "Nothing", 1, 0, "" ];  //  150
item [150] = [ "Coins", 1, 3, "" ];  //  (336)
item [151] = [ "Guam Leaf", 1, 1, "Herb" ];
item [152] = [ "Nothing", 1, 0, "" ];
item [153] = [ "Coins", 1, 3, "" ];  //  (339)
item [154] = [ "Nothing", 1, 0, "" ];
item [155] = [ "Coins", 1, 3, "" ];  //  (342)
item [156] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (21)
item [157] = [ "Coins", 1, 3, "" ];  //  (345)
item [158] = [ "Nothing", 1, 0, "" ];
item [159] = [ "copper ore", 1, 1, "" ];  //  160
item [160] = [ "Guam Leaf", 1, 1, "Herb" ];
item [161] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (28)
item [162] = [ "Coins", 1, 5, "" ];  //  (350)
item [163] = [ "Coins", 1, 3, "" ];  //  (353)
item [164] = [ "Kwuarm", 1, 1, "Herb" ];
item [165] = [ "Harralander", 1, 1, "Herb" ];
item [166] = [ "Nothing", 1, 0, "" ];
item [167] = [ "Nothing", 1, 0, "" ];
item [168] = [ "Nothing", 1, 0, "" ];
item [169] = [ "Coins", 1, 3, "" ];  //  170  (356)
item [170] = [ "Coins", 1, 3, "" ];  //  (359)
item [171] = [ "Fishing Bait", 1, 1, "" ];
item [172] = [ "Nothing", 1, 0, "" ];
item [173] = [ "Nothing", 1, 0, "" ];
item [174] = [ "Fishing Bait", 1, 1, "" ];
item [175] = [ "Fire-rune", 1, 4, "Rune" ];  //  (16)
item [176] = [ "Coins", 1, 3, "" ];  //  (362)
item [177] = [ "Coins", 1, 3, "" ];  //  (365)
item [178] = [ "Coins", 1, 3, "" ];  //  (368)
item [179] = [ "Coins", 1, 5, "" ];  //  180  (373)
item [180] = [ "Coins", 1, 3, "" ];  //  (376)
item [181] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [182] = [ "Coins", 1, 5, "" ];  //  (381)
item [183] = [ "Fishing Bait", 1, 1, "" ];
item [184] = [ "Coins", 1, 3, "" ];  //  (384)
item [185] = [ "copper ore", 1, 1, "" ];
item [186] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [187] = [ "Coins", 1, 3, "" ];  //  (387)
item [188] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [189] = [ "Coins", 1, 3, "" ];  //  190  (390)
item [190] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [191] = [ "Coins", 1, 3, "" ];  //  (393)
item [192] = [ "Coins", 1, 3, "" ];  //  (396)
item [193] = [ "Coins", 1, 3, "" ];  //  (399)
item [194] = [ "Guam Leaf", 1, 1, "Herb" ];
item [195] = [ "Coins", 1, 3, "" ];  //  (402)
item [196] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [197] = [ "Tarromin", 1, 1, "Herb" ];
item [198] = [ "Guam Leaf", 1, 1, "Herb" ];
item [199] = [ "Nothing", 1, 0, "" ];  //  200
item [200] = [ "Coins", 1, 3, "" ];  //  (405)
item [201] = [ "copper ore", 1, 1, "" ];
item [202] = [ "Coins", 1, 3, "" ];  //  (408)
item [203] = [ "Coins", 1, 5, "" ];  //  (413)
item [204] = [ "Coins", 1, 3, "" ];  //  (416)
item [205] = [ "Coins", 1, 3, "" ];  //  (419)
item [206] = [ "Nothing", 1, 0, "" ];
item [207] = [ "Coins", 1, 3, "" ];  //  (422)
item [208] = [ "Nothing", 1, 0, "" ];
item [209] = [ "Nothing", 1, 0, "" ];  //  210
item [210] = [ "Coins", 1, 3, "" ];  //  (425)
item [211] = [ "Mind-rune", 1, 6, "Rune" ];  //  (24)
item [212] = [ "Tarromin", 1, 1, "Herb" ];
item [213] = [ "Nothing", 1, 0, "" ];
item [214] = [ "Fishing Bait", 1, 1, "" ];
item [215] = [ "Nothing", 1, 0, "" ];
item [216] = [ "Nothing", 1, 0, "" ];
item [217] = [ "Coins", 1, 3, "" ];  //  (428)
item [218] = [ "Coins", 1, 3, "" ];  //  (431)
item [219] = [ "Coins", 1, 3, "" ];  //  220  (434)
item [220] = [ "Coins", 1, 3, "" ];  //  (437)
item [221] = [ "Coins", 1, 5, "" ];  //  (442)
item [222] = [ "Coins", 1, 3, "" ];  //  (445)
item [223] = [ "Coins", 1, 3, "" ];  //  (448)
item [224] = [ "Coins", 1, 3, "" ];  //  (451)
item [225] = [ "Coins", 1, 5, "" ];  //  (456)
item [226] = [ "Coins", 1, 5, "" ];  //  (461)
item [227] = [ "Marrentill", 1, 1, "Herb" ];
item [228] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [229] = [ "Guam Leaf", 1, 1, "Herb" ];  //  230
item [230] = [ "Marrentill", 1, 1, "Herb" ];
item [231] = [ "Coins", 1, 3, "" ];  //  (464)
item [232] = [ "Nothing", 1, 0, "" ];
item [233] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (3)
item [234] = [ "Coins", 1, 3, "" ];  //  (467)
item [235] = [ "Nothing", 1, 0, "" ];
item [236] = [ "Coins", 1, 3, "" ];  //  (470)
item [237] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (35)
item [238] = [ "Coins", 1, 15, "" ];  //  (485)
item [239] = [ "Coins", 1, 3, "" ];  //  240  (488)
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Coins", 1, 3, "" ];  //  (491)
item [242] = [ "Coins", 1, 3, "" ];  //  (494)
item [243] = [ "Coins", 1, 3, "" ];  //  (497)
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Coins", 1, 3, "" ];  //  (500)
item [246] = [ "Coins", 1, 15, "" ];  //  (515)
item [247] = [ "Coins", 1, 25, "" ];  //  (540)
item [248] = [ "Coins", 1, 5, "" ];  //  (545)
item [249] = [ "Coins", 1, 3, "" ];  //  250  (548)
item [250] = [ "Coins", 1, 3, "" ];  //  (551)
item [251] = [ "Marrentill", 1, 1, "Herb" ];
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Nothing", 1, 0, "" ];
item [254] = [ "Earth-rune", 1, 3, "Rune" ];  //  (15)
item [255] = [ "Coins", 1, 3, "" ];  //  (554)
item [256] = [ "Nothing", 1, 0, "" ];
item [257] = [ "Marrentill", 1, 1, "Herb" ];
item [258] = [ "Guam Leaf", 1, 1, "Herb" ];
item [259] = [ "Coins", 1, 3, "" ];  //  260  (557)
item [260] = [ "Fishing Bait", 1, 1, "" ];
item [261] = [ "Coins", 1, 3, "" ];  //  (560)
item [262] = [ "Coins", 1, 3, "" ];  //  (563)
item [263] = [ "Irit Leaf", 1, 1, "Herb" ];
item [264] = [ "Nothing", 1, 0, "" ];
item [265] = [ "Coins", 1, 3, "" ];  //  (566)
item [266] = [ "Coins", 1, 5, "" ];  //  (571)
item [267] = [ "Coins", 1, 3, "" ];  //  (574)
item [268] = [ "Coins", 1, 3, "" ];  //  (577)
item [269] = [ "Fishing Bait", 1, 1, "" ];  //  270
item [270] = [ "Coins", 1, 3, "" ];  //  (580)
item [271] = [ "Coins", 1, 5, "" ];  //  (585)
item [272] = [ "Nothing", 1, 0, "" ];
item [273] = [ "Coins", 1, 5, "" ];  //  (590)
item [274] = [ "Nothing", 1, 0, "" ];
item [275] = [ "Earth-rune", 1, 3, "Rune" ];  //  (18)
item [276] = [ "Coins", 1, 5, "" ];  //  (595)
item [277] = [ "Coins", 1, 3, "" ];  //  (598)
item [278] = [ "Guam Leaf", 1, 1, "Herb" ];
item [279] = [ "Coins", 1, 15, "" ];  //  280  (613)
item [280] = [ "copper ore", 1, 1, "" ];
item [281] = [ "Coins", 1, 3, "" ];  //  (616)
item [282] = [ "Coins", 1, 3, "" ];  //  (619)
item [283] = [ "Nothing", 1, 0, "" ];
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Nothing", 1, 0, "" ];
item [286] = [ "Nothing", 1, 0, "" ];
item [287] = [ "Coins", 1, 5, "" ];  //  (624)
item [288] = [ "Nothing", 1, 0, "" ];
item [289] = [ "Ranarr Weed", 1, 1, "Herb" ];  //  290
item [290] = [ "Coins", 1, 3, "" ];  //  (627)
item [291] = [ "Mind-rune", 1, 6, "Rune" ];  //  (30)
item [292] = [ "Nothing", 1, 0, "" ];
item [293] = [ "Guam Leaf", 1, 1, "Herb" ];
item [294] = [ "Coins", 1, 3, "" ];  //  (630)
item [295] = [ "Nothing", 1, 0, "" ];
item [296] = [ "Coins", 1, 15, "" ];  //  (645)
item [297] = [ "Coins", 1, 5, "" ];  //  (650)
item [298] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [299] = [ "Harralander", 1, 1, "Herb" ];  //  300

runs [0] = [ 299, 300 ];  // kills 300, drops 300

// run 2

// runs [1] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*

item [000] = [ "Coins", 1, 3, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];  //  or Dwarf Weed
item [000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Earth-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Medium Bronze Helmet", 1, 1, "" ];

item [000] = [ "copper ore", 1, 1, "" ];
item [000] = [ "Fishing Bait", 1, 1, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Warrior";          // monster's name
var mcbl = 18;                  // monster's combat level
var mindex = 35;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name