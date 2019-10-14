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

item   [0] = [ "Coins", 1, 15, "" ];  //  (15)
item   [1] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [2] = [ "Nothing", 1, 0, "" ];
item   [3] = [ "Coins", 1, 15, "" ];  //  (30)
item   [4] = [ "Coins", 1, 15, "" ];  //  (45)
item   [5] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item   [6] = [ "Coins", 1, 15, "" ];  //  (60)
item   [7] = [ "Nothing", 1, 0, "" ];
item   [8] = [ "Coins", 1, 15, "" ];  //  (75)
item   [9] = [ "Nature-rune", 1, 3, "Rune" ];  // 10,  (6)
item  [10] = [ "Iron battle Axe", 1, 1, "" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Coins", 1, 15, "" ];  //  (90)
item  [13] = [ "Avantoe", 1, 1, "Herb" ];
item  [14] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [15] = [ "Bronze Spear", 1, 1, "" ];
item  [16] = [ "Nature-rune", 1, 3, "Rune" ];  // (9)
item  [17] = [ "Coins", 1, 15, "" ];  //  (105)
item  [18] = [ "Coins", 1, 15, "" ];  //  (120)
item  [19] = [ "Nothing", 1, 0, "" ];  // 20
item  [20] = [ "Coins", 1, 15, "" ];  //  (135)
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Coins", 1, 15, "" ];  //  (150)
item  [23] = [ "Coins", 1, 15, "" ];  //  (165)
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Nature-rune", 1, 3, "Rune" ];  // (12)
item  [26] = [ "Coins", 1, 15, "" ];  //  (180)
item  [27] = [ "Iron battle Axe", 1, 1, "" ];
item  [28] = [ "Coins", 1, 15, "" ];  //  (195)
item  [29] = [ "Tarromin", 1, 1, "Herb" ];  // 30
item  [30] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [31] = [ "Avantoe", 1, 1, "Herb" ];
item  [32] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [33] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item  [34] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [35] = [ "Iron battle Axe", 1, 1, "" ];
item  [36] = [ "Coins", 1, 15, "" ];  //  (210)
item  [37] = [ "Coins", 1, 15, "" ];  //  (225)
item  [38] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [39] = [ "Nothing", 1, 0, "" ];  // 40
item  [40] = [ "Coins", 1, 15, "" ];  //  (240)
item  [41] = [ "Coins", 1, 15, "" ];  //  (255)
item  [42] = [ "Coins", 1, 15, "" ];  //  (270)
item  [43] = [ "uncut emerald", 1, 1, "Gem" ];
item  [44] = [ "Coins", 1, 15, "" ];  //  (285)
item  [45] = [ "Coins", 1, 15, "" ];  //  (300)
item  [46] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item  [47] = [ "Bronze Spear", 1, 1, "" ];
item  [48] = [ "Coins", 1, 15, "" ];  //  (315)
item  [49] = [ "Nothing", 1, 0, "" ];  // 50
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Coins", 1, 15, "" ];  //  (330)
item  [52] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [53] = [ "Coins", 1, 15, "" ];  //  (345)
item  [54] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [55] = [ "Coins", 1, 15, "" ];  //  (360)
item  [56] = [ "Coins", 1, 15, "" ];  //  (375)
item  [57] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item  [58] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item  [59] = [ "Nothing", 1, 0, "" ];  // 60
item  [60] = [ "Coins", 1, 15, "" ];  //  (390)
item  [61] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item  [62] = [ "Coins", 1, 15, "" ];  //  (405)
item  [63] = [ "Coins", 1, 15, "" ];  //  (420)
item  [64] = [ "Nature-rune", 1, 3, "Rune" ];  // (15)
item  [65] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item  [66] = [ "Coins", 1, 15, "" ];  //  (435)
item  [67] = [ "Coins", 1, 15, "" ];  //  (450)
item  [68] = [ "Coins", 1, 15, "" ];  //  (465)
item  [69] = [ "Nothing", 1, 0, "" ];  // 70
item  [70] = [ "Iron battle Axe", 1, 1, "" ];
item  [71] = [ "Iron battle Axe", 1, 1, "" ];
item  [72] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (8)
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Coins", 1, 15, "" ];  //  (480)
item  [75] = [ "Nature-rune", 1, 3, "Rune" ];  // (18)
item  [76] = [ "Coins", 1, 15, "" ];  //  (495)
item  [77] = [ "Coins", 1, 15, "" ];  //  (510)
item  [78] = [ "Coins", 1, 15, "" ];  //  (525)
item  [79] = [ "Nature-rune", 1, 3, "Rune" ];  // 80, (21)
item  [80] = [ "Coins", 1, 15, "" ];  //  (540)
item  [81] = [ "Coins", 1, 15, "" ];  //  (555)
item  [82] = [ "Coins", 1, 15, "" ];  //  (570)
item  [83] = [ "Coins", 1, 15, "" ];  //  (585)
item  [84] = [ "uncut emerald", 1, 1, "Gem" ];
item  [85] = [ "Coins", 1, 15, "" ];  //  (600)
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Nature-rune", 1, 3, "Rune" ];  // (24)
item  [88] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [89] = [ "Nothing", 1, 0, "" ];  // 90
item  [90] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Nature-rune", 1, 3, "Rune" ];  // (27)
item  [94] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [95] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (10)
item  [96] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (12)
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [99] = [ "Coins", 1, 15, "" ];  // 100,  (615)
item [100] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (14)
item [101] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item [102] = [ "Coins", 1, 15, "" ];  // (630)
item [103] = [ "Coins", 1, 15, "" ];  // (645)
item [104] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item [105] = [ "Tarromin", 1, 1, "Herb" ];
item [106] = [ "Coins", 1, 15, "" ];  // (660)
item [107] = [ "Iron battle Axe", 1, 1, "" ];
item [108] = [ "uncut emerald", 1, 1, "Gem" ];
item [109] = [ "Coins", 1, 15, "" ];  // 110, (675)
item [110] = [ "Nature-rune", 1, 3, "Rune" ];  // (30)
item [111] = [ "Bronze Spear", 1, 1, "" ];
item [112] = [ "Nature-rune", 1, 3, "Rune" ];  // (33)
item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Coins", 1, 15, "" ];  // (690)
item [115] = [ "Coins", 1, 15, "" ];  // (705)
item [116] = [ "Coins", 1, 15, "" ];  // (720)
item [117] = [ "Nature-rune", 1, 3, "Rune" ];  // (36)
item [118] = [ "Coins", 1, 15, "" ];  // (735)
item [119] = [ "Coins", 1, 15, "" ];  // 120, (750)
item [120] = [ "Nature-rune", 1, 3, "Rune" ];  // (39)
item [121] = [ "Coins", 1, 15, "" ];  // (765)
item [122] = [ "Death-rune", 1, 1, "Rune" ];  //  (3)
item [123] = [ "Coins", 1, 15, "" ];  // (780)
item [124] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (16)
item [125] = [ "Coins", 1, 15, "" ];  // (795)
item [126] = [ "Coins", 1, 15, "" ];  // (810)
item [127] = [ "Nothing", 1, 0, "" ];
item [128] = [ "Bronze Spear", 1, 1, "" ];
item [129] = [ "Law-rune", 1, 1, "Rune" ];  // 130,  (5)
item [130] = [ "Law-rune", 1, 1, "Rune" ];  //  (6)
item [131] = [ "Coins", 1, 15, "" ];  // (825)
item [132] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (18)
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "Marrentill", 1, 1, "Herb" ];
item [135] = [ "Coins", 1, 15, "" ];  // (840)
item [136] = [ "Coins", 1, 15, "" ];  // (855)
item [137] = [ "Coins", 1, 15, "" ];  // (870)
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "Iron battle Axe", 1, 1, "" ];  // 140
item [140] = [ "Nature-rune", 1, 3, "Rune" ];  // (42)
item [141] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (20)
item [142] = [ "Nothing", 1, 0, "" ];
item [143] = [ "Nothing", 1, 0, "" ];
item [144] = [ "Death-rune", 1, 1, "Rune" ];  //  (4)
item [145] = [ "Coins", 1, 15, "" ];  // (885)
item [146] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [147] = [ "Nothing", 1, 0, "" ];
item [148] = [ "Coins", 1, 15, "" ];  // (900)
item [149] = [ "uncut emerald", 1, 1, "Gem" ];  // 150
item [150] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (22)
item [151] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (24)
item [152] = [ "Coins", 1, 15, "" ];  // (915)
item [153] = [ "Tarromin", 1, 1, "Herb" ];
item [154] = [ "Coins", 1, 15, "" ];  // (930)
item [155] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (26)
item [156] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [157] = [ "Coins", 1, 15, "" ];  // (945)
item [158] = [ "Coins", 1, 15, "" ];  // (960)
item [159] = [ "Cadantine", 1, 1, "Herb" ];  // 160
item [160] = [ "Coins", 1, 15, "" ];  // (975) (980 some one else's drop)
item [161] = [ "Nothing", 1, 0, "" ];
item [162] = [ "Nothing", 1, 0, "" ];
item [163] = [ "Law-rune", 1, 1, "Rune" ];  //  (7)
item [164] = [ "Coins", 1, 15, "" ];  // (990) /995
item [165] = [ "Bronze Spear", 1, 1, "" ];
item [166] = [ "Coins", 1, 15, "" ];  // (1005) / 1010
item [167] = [ "Death-rune", 1, 1, "Rune" ];  //  (5)
item [168] = [ "Coins", 1, 15, "" ];  // (1020) /1025
item [169] = [ "Nature-rune", 1, 3, "Rune" ];  // 170, (45)
item [170] = [ "Death-rune", 1, 1, "Rune" ];  //  (6)
item [171] = [ "Nature-rune", 1, 3, "Rune" ];  // (48)
item [172] = [ "Coins", 1, 15, "" ];  // (1035) /1040
item [173] = [ "Coins", 1, 15, "" ];  // (1050) /1055
item [174] = [ "Coins", 1, 15, "" ];  // (1065) /1070
item [175] = [ "Law-rune", 1, 1, "Rune" ];  //  (8)
item [176] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (28)
item [177] = [ "Coins", 1, 15, "" ];  // (1080) /1085
item [178] = [ "Nature-rune", 1, 3, "Rune" ];  // (51)
item [179] = [ "Coins", 1, 15, "" ];  // 180, (1095) /1100
item [180] = [ "Coins", 1, 15, "" ];  // (1110) /1115
item [181] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (30)
item [182] = [ "Coins", 1, 15, "" ];  // (1125) /1130
item [183] = [ "Coins", 1, 15, "" ];  // (1140) /1145
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Coins", 1, 15, "" ];  // (1155) /1160
item [186] = [ "Coins", 1, 15, "" ];  // (1170) /1175
item [187] = [ "Coins", 1, 15, "" ];  // (1185) /1190
item [188] = [ "Nature-rune", 1, 3, "Rune" ];  // (54)
item [189] = [ "Coins", 1, 15, "" ];  // 190 (1200) /1205
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Iron battle Axe", 1, 1, "" ];
item [193] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (32)
item [194] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (34)
item [195] = [ "Coins", 1, 15, "" ];  // (1215) /1220
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Coins", 1, 15, "" ];  // (1230) /1235
item [198] = [ "Nature-rune", 1, 3, "Rune" ];  // (57)

runs [0] = [ 198, 199 ];  // kills 199, drops 199

// run 2

item [199] = [ "Coins", 1, 15, "" ];  // 200, (15)
item [200] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item [201] = [ "Nothing", 1, 0, "" ];
item [202] = [ "Nothing", 1, 0, "" ];
item [203] = [ "Coins", 1, 15, "" ];  // (30)
item [204] = [ "Coins", 1, 15, "" ];  // (45)
item [205] = [ "Coins", 1, 15, "" ];  // (60)
item [206] = [ "Coins", 1, 15, "" ];  // (75)
item [207] = [ "Nothing", 1, 0, "" ];
item [208] = [ "Coins", 1, 15, "" ];  // (90)
item [209] = [ "Coins", 1, 15, "" ];  // 210, (105)
item [210] = [ "Coins", 1, 15, "" ];  // (120)
item [211] = [ "Coins", 1, 15, "" ];  // (135)
item [212] = [ "Coins", 1, 15, "" ];  // (150)
item [213] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [214] = [ "Coins", 1, 15, "" ];  // (165)
item [215] = [ "Coins", 1, 15, "" ];  // (180)
item [216] = [ "Coins", 1, 15, "" ];  // (195)
item [217] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [218] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item [219] = [ "Nature-rune", 1, 3, "Rune" ];  // 220,  (6) / (9)
item [220] = [ "Coins", 1, 15, "" ];  // (210)
item [221] = [ "Marrentill", 1, 1, "Herb" ];
item [222] = [ "Coins", 1, 15, "" ];  // (225)
item [223] = [ "Coins", 1, 15, "" ];  // (240)
item [224] = [ "Iron battle Axe", 1, 1, "" ];
item [225] = [ "Guam Leaf", 1, 1, "Herb" ];
item [226] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (6)
item [227] = [ "uncut emerald", 1, 1, "Gem" ];
item [228] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (8)
item [229] = [ "Chaos-rune", 1, 2, "Rune" ];  // 230,  (10) / (12)
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "Coins", 1, 15, "" ];  // (255)
item [232] = [ "Nature-rune", 1, 3, "Rune" ];  // (9) / (12)
item [233] = [ "Nothing", 1, 0, "" ];
item [234] = [ "Nature-rune", 1, 3, "Rune" ];  // (12) / (15)
item [235] = [ "Nothing", 1, 0, "" ];
item [236] = [ "Bronze Spear", 1, 1, "" ];
item [237] = [ "Coins", 1, 15, "" ];  // (270)
item [238] = [ "Coins", 1, 15, "" ];  // (285)
item [239] = [ "Coins", 1, 15, "" ];  // 240, (300)
item [240] = [ "Coins", 1, 15, "" ];  // (315)
item [241] = [ "Coins", 1, 15, "" ];  // (330)
item [242] = [ "Coins", 1, 15, "" ];  // (345)
item [243] = [ "Coins", 1, 15, "" ];  // (360)
item [244] = [ "Coins", 1, 15, "" ];  // (375)
item [245] = [ "Coins", 1, 15, "" ];  // (390)
item [246] = [ "Coins", 1, 15, "" ];  // (405)
item [247] = [ "Coins", 1, 15, "" ];  // (420)
item [248] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [249] = [ "Chaos-rune", 1, 2, "Rune" ];  // 250, (12) / (14)
item [250] = [ "Chaos-rune", 1, 2, "Rune" ];  // (14) / (16)
item [251] = [ "Coins", 1, 15, "" ];  // (435)
item [252] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item [253] = [ "Nature-rune", 1, 3, "Rune" ];  // (15) / (21)
item [254] = [ "Nothing", 1, 0, "" ];
item [255] = [ "Coins", 1, 15, "" ];  // (450)
item [256] = [ "Coins", 1, 15, "" ];  // (465)
item [257] = [ "Coins", 1, 15, "" ];  // (480)
item [258] = [ "Guam Leaf", 1, 1, "Herb" ];
item [259] = [ "Coins", 1, 15, "" ];  // 260, (495)
item [260] = [ "Nothing", 1, 0, "" ];
item [261] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [262] = [ "Guam Leaf", 1, 1, "Herb" ];
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Death-rune", 1, 1, "Rune" ];  //  (2)
item [265] = [ "Coins", 1, 15, "" ];  // (510)
item [266] = [ "Nothing", 1, 0, "" ];
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Coins", 1, 15, "" ];  // (525)
item [269] = [ "Coins", 1, 15, "" ];  // 270, (540)
item [270] = [ "Chaos-rune", 1, 2, "Rune" ];  // (16) / (18)
item [271] = [ "Tarromin", 1, 1, "Herb" ];
item [272] = [ "Coins", 1, 15, "" ];  // (555)
item [273] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [274] = [ "Nature-rune", 1, 3, "Rune" ];  // (18) / (24)
item [275] = [ "Nothing", 1, 0, "" ];
item [276] = [ "Nature-rune", 1, 3, "Rune" ];  // (21) / (27)
item [277] = [ "Nature-rune", 1, 3, "Rune" ];  // (24) / (30)
item [278] = [ "Coins", 1, 15, "" ];  // (570)
item [279] = [ "Coins", 1, 15, "" ];  // 280,  (585)
item [280] = [ "Coins", 1, 15, "" ];  // (600)
item [281] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (2)
item [282] = [ "Nature-rune", 1, 3, "Rune" ];  // (27) / (33)
item [283] = [ "Coins", 1, 15, "" ];  // (615)
item [284] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [285] = [ "Tarromin", 1, 1, "Herb" ];
item [286] = [ "Coins", 1, 15, "" ];  // (630)
item [287] = [ "Coins", 1, 15, "" ];  // (645)
item [288] = [ "Guam Leaf", 1, 1, "Herb" ];
item [289] = [ "Coins", 1, 15, "" ];  // 290, (660)
item [290] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (3)
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Nothing", 1, 0, "" ];
item [293] = [ "Bronze Spear", 1, 1, "" ];
item [294] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [295] = [ "Coins", 1, 15, "" ];  // (675)
item [296] = [ "Coins", 1, 15, "" ];  // (690)
item [297] = [ "Coins", 1, 15, "" ];  // (705)
item [298] = [ "Irit Leaf", 1, 1, "Herb" ];
item [299] = [ "Death-rune", 1, 1, "Rune" ];  // 300,  (3)
item [300] = [ "Coins", 1, 15, "" ];  // (720)
item [301] = [ "Nothing", 1, 0, "" ];
item [302] = [ "Nature-rune", 1, 3, "Rune" ];  // (30) / (36)
item [303] = [ "Mithril Mace", 1, 1, "" ];

runs [1] = [ 303, 304 ];  // kills 105, drops 105

// runs [2] = [ x, y ];  // kills ? ( y - 304 ), drops ? ( x - 303 )

/*
item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 35, "" ];  //  ()
item [000] = [ "Coins", 1, 53, "" ];  //  ()
item [000] = [ "Coins", 1, 80, "" ];  //  ()

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

item [000] = [ "Chaos-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "mithril bar", 1, 1, "" ];

item [000] = [ "Bronze Spear", 1, 1, "" ];
item [000] = [ "Iron battle Axe", 1, 1, "" ];
item [000] = [ "Mithril Mace", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Ice Warrior";        // monster's name
var mcbl = 57;                    // monster's combat level
var mindex = 128;                 // index into monster data base
var mrpt = 1;                     // number of non-breaking space to add after index name