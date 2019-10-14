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

item   [0] = [ "Coins", 1, 1, "" ];  // 1  (1)
item   [1] = [ "Coins", 1, 1, "" ];  //  (2)
item   [2] = [ "Coins", 1, 1, "" ];  //  (3)
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Nothing", 1, 0, "" ];
item   [5] = [ "Coins", 1, 1, "" ];  //  (4)
item   [6] = [ "Coins", 1, 7, "" ];  //  (11)
item   [7] = [ "Air-rune", 1, 4, "Rune" ];  //  (4)
item   [8] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  (1)
item   [9] = [ "Nothing", 1, 0, "" ];  // 10
item  [10] = [ "Coins", 1, 1, "" ];  //  (12)
item  [11] = [ "Coins", 1, 1, "" ];  //  (13)
item  [12] = [ "Coins", 1, 12, "" ];  //  (25)
item  [13] = [ "Earth-rune", 1, 2, "Rune" ];  //  (2)
item  [14] = [ "Coins", 1, 25, "" ];  //  (50)
item  [15] = [ "Coins", 1, 1, "" ];  //  (51)
item  [16] = [ "Medium Bronze Helmet", 1, 1, "" ];
item  [17] = [ "Coins", 1, 12, "" ];  //  (63)
item  [18] = [ "Nothing", 1, 0, "" ];
item  [19] = [ "Nothing", 1, 0, "" ];  // 20
item  [20] = [ "Iron dagger", 1, 1, "" ];
item  [21] = [ "Coins", 1, 1, "" ];  //  (64)
item  [22] = [ "Coins", 1, 4, "" ];  //  (68)
item  [23] = [ "Fire-rune", 1, 1, "Rune" ];  //  (1)
item  [24] = [ "Coins", 1, 4, "" ];  //  (72)
item  [25] = [ "Coins", 1, 4, "" ];  //  (76)
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Coins", 1, 1, "" ];  //  (77)
item  [28] = [ "Coins", 1, 1, "" ];  //  (78)
item  [29] = [ "Air-rune", 1, 4, "Rune" ];  // 30  (8)
item  [30] = [ "Coins", 1, 1, "" ];  //  (79)
item  [31] = [ "Coins", 1, 7, "" ];  //  (86)
item  [32] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  (2)
item  [33] = [ "Coins", 1, 4, "" ];  //  (90)
item  [34] = [ "Coins", 1, 1, "" ];  //  (91)
item  [35] = [ "Coins", 1, 4, "" ];  //  (95)
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "Coins", 1, 7, "" ];  //  (102)
item  [38] = [ "Nature-rune", 1, 1, "Rune" ];  //  (1)
item  [39] = [ "Coins", 1, 17, "" ];  // 40  (119)
item  [40] = [ "Coins", 1, 12, "" ];  //  (131)
item  [41] = [ "Coins", 1, 7, "" ];  //  (138)
item  [42] = [ "Iron dagger", 1, 1, "" ];
item  [43] = [ "Coins", 1, 1, "" ];  //  (139)
item  [44] = [ "Coins", 1, 1, "" ];  //  (140)
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Nothing", 1, 0, "" ];
item  [47] = [ "Fire-rune", 1, 1, "Rune" ];  //  (2)
item  [48] = [ "Coins", 1, 1, "" ];  //  (141)
item  [49] = [ "Nothing", 1, 0, "" ];  // 50
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Coins", 1, 1, "" ];  //  (142)
item  [52] = [ "iron ore", 1, 1, "" ];
item  [53] = [ "Air-rune", 1, 4, "Rune" ];  //  (12)
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Coins", 1, 25, "" ];  //  (167)
item  [57] = [ "Coins", 1, 1, "" ];  //  (168)
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Medium Bronze Helmet", 1, 1, "" ];  // 60
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Iron dagger", 1, 1, "" ];
item  [62] = [ "Coins", 1, 1, "" ];  //  (169)
item  [63] = [ "Coins", 1, 1, "" ];  //  (170)
item  [64] = [ "Coins", 1, 1, "" ];  //  (171)
item  [65] = [ "Coins", 1, 12, "" ];  //  (183)
item  [66] = [ "Coins", 1, 17, "" ];  //  (200)
item  [67] = [ "Coins", 1, 12, "" ];  //  (212)
item  [68] = [ "Air-rune", 1, 4, "Rune" ];  //  (16)
item  [69] = [ "Coins", 1, 1, "" ];  // 70  (213)
item  [70] = [ "Coins", 1, 1, "" ];  //  (214)
item  [71] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (4)
item  [72] = [ "Coins", 1, 1, "" ];  //  (215)
item  [73] = [ "Coins", 1, 15, "" ];  //  (230)
item  [74] = [ "Coins", 1, 4, "" ];  //  (234)
item  [75] = [ "Iron dagger", 1, 1, "" ];
item  [76] = [ "iron ore", 1, 1, "" ];
item  [77] = [ "Coins", 1, 1, "" ];  //  (235)
item  [78] = [ "Coins", 1, 1, "" ];  //  (236)
item  [79] = [ "Coins", 1, 1, "" ];  // 80  (237)
item  [80] = [ "Coins", 1, 12, "" ];  //  (249)
item  [81] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [82] = [ "Coins", 1, 1, "" ];  //  (250)
item  [83] = [ "Coins", 1, 12, "" ];  //  (262)
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  (5)
item  [86] = [ "Coins", 1, 4, "" ];  //  (266)
item  [87] = [ "iron ore", 1, 1, "" ];
item  [88] = [ "Coins", 1, 1, "" ];  //  (267)
item  [89] = [ "Earth-rune", 1, 2, "Rune" ];  // 90  (4)
item  [90] = [ "Iron dagger", 1, 1, "" ];
item  [91] = [ "Coins", 1, 30, "" ];  //  (297)
item  [92] = [ "Coins", 1, 4, "" ];  //  (301)
item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "grain", 1, 1, "" ];
item  [95] = [ "Iron dagger", 1, 1, "" ];
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Coins", 1, 30, "" ];  //  (331)
item  [98] = [ "Coins", 1, 30, "" ];  //  (361)
item  [99] = [ "Nothing", 1, 0, "" ];  // 100
item [100] = [ "Coins", 1, 4, "" ];  //  (365)
item [101] = [ "Coins", 1, 7, "" ];  //  (372)
item [102] = [ "Coins", 1, 1, "" ];  //  (373)
item [103] = [ "Coins", 1, 12, "" ];  //  (385)
item [104] = [ "Coins", 1, 1, "" ];  //  (386)
item [105] = [ "Coins", 1, 1, "" ];  //  (387)
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Nothing", 1, 0, "" ];
item [108] = [ "Coins", 1, 1, "" ];  //  (388)
item [109] = [ "grain", 1, 1, "" ];  // 110
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Nothing", 1, 0, "" ];
item [112] = [ "iron ore", 1, 1, "" ];
item [113] = [ "Coins", 1, 5, "" ];  //  (393)
item [114] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item [115] = [ "Coins", 1, 1, "" ];  //  (394)
item [116] = [ "Coins", 1, 1, "" ];  //  (395)
item [117] = [ "Coins", 1, 1, "" ];  //  (396)
item [118] = [ "Coins", 1, 12, "" ];  //  (408)
item [119] = [ "Iron dagger", 1, 1, "" ];  // 120
item [120] = [ "Coins", 1, 1, "" ];  //  (409)
item [121] = [ "Coins", 1, 7, "" ];  //  (416)
item [122] = [ "Coins", 1, 30, "" ];  //  (446)
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Coins", 1, 7, "" ];  //  (453)
item [125] = [ "Coins", 1, 4, "" ];  //  (457)
item [126] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [127] = [ "Coins", 1, 7, "" ];  //  (464)
item [128] = [ "Coins", 1, 1, "" ];  //  (465)
item [129] = [ "Coins", 1, 1, "" ];  // 130  (466)
item [130] = [ "Nothing", 1, 0, "" ];
item [131] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  (6)
item [132] = [ "Coins", 1, 12, "" ];  //  (478)
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "Coins", 1, 1, "" ];  //  (479)
item [135] = [ "Coins", 1, 12, "" ];  //  (491)
item [136] = [ "Coins", 1, 12, "" ];  //  (503)
item [137] = [ "Coins", 1, 7, "" ];  //  (510)
item [138] = [ "Coins", 1, 4, "" ];  //  (514)
item [139] = [ "Coins", 1, 12, "" ];  // 140  (526)
item [140] = [ "Coins", 1, 1, "" ];  //  (527)
item [141] = [ "Coins", 1, 1, "" ];  //  (528)
item [142] = [ "Coins", 1, 17, "" ];  //  (545)
item [143] = [ "Coins", 1, 1, "" ];  //  (546)
item [144] = [ "Coins", 1, 17, "" ];  //  (563)
item [145] = [ "Coins", 1, 25, "" ];  //  (588)
item [146] = [ "Iron dagger", 1, 1, "" ];
item [147] = [ "Coins", 1, 7, "" ];  //  (595)
item [148] = [ "Coins", 1, 7, "" ];  //  (602)
item [149] = [ "Nothing", 1, 0, "" ];  // 150
item [150] = [ "Coins", 1, 7, "" ];  //  (609)
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Coins", 1, 1, "" ];  //  (610)
item [153] = [ "Coins", 1, 1, "" ];  //  (611)
item [154] = [ "Coins", 1, 1, "" ];  //  (612)
item [155] = [ "Coins", 1, 1, "" ];  //  (613)
item [156] = [ "Iron dagger", 1, 1, "" ];
item [157] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item [158] = [ "Nothing", 1, 0, "" ];
item [159] = [ "Coins", 1, 1, "" ];  // 160  (614)
item [160] = [ "Coins", 1, 17, "" ];  //  (631)
item [161] = [ "Nothing", 1, 0, "" ];
item [162] = [ "Coins", 1, 7, "" ];  //  (638)
item [163] = [ "Coins", 1, 12, "" ];  //  (650)
item [164] = [ "Iron dagger", 1, 1, "" ];
item [165] = [ "Nothing", 1, 0, "" ];

runs [0] = [ 165, 166 ];  // kills 166, drops 165

// run 2

item [166] = [ "Coins", 1, 1, "" ];  //  167  (1)
item [167] = [ "Nothing", 1, 0, "" ];
item [168] = [ "Coins", 1, 7, "" ];  //  (8)
item [169] = [ "Coins", 1, 1, "" ];  //  170  (9)
item [170] = [ "Coins", 1, 17, "" ];  //  (26)
item [171] = [ "Coins", 1, 7, "" ];  //  (33)
item [172] = [ "Coins", 1, 30, "" ];  //  (63)
item [173] = [ "Fire-rune", 1, 1, "Rune" ];  //  (1)
item [174] = [ "Coins", 1, 1, "" ];  //  (64)
item [175] = [ "Coins", 1, 4, "" ];  //  (68)
item [176] = [ "Coins", 1, 1, "" ];  //  (69)
item [177] = [ "Coins", 1, 1, "" ];  //  (70)
item [178] = [ "Coins", 1, 1, "" ];  //  (71)
item [179] = [ "Coins", 1, 1, "" ];  //  180  (72)
item [180] = [ "Iron dagger", 1, 1, "" ];
item [181] = [ "Coins", 1, 1, "" ];  //  (73)
item [182] = [ "Fire-rune", 1, 1, "Rune" ];  //  (2)
item [183] = [ "Coins", 1, 12, "" ];  //  (85)
item [184] = [ "Iron dagger", 1, 1, "" ];
item [185] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [186] = [ "Nothing", 1, 0, "" ];
item [187] = [ "Coins", 1, 1, "" ];  //  (86)
item [188] = [ "Coins", 1, 1, "" ];  //  (87)
item [189] = [ "Coins", 1, 4, "" ];  //  190  (91)
item [190] = [ "Coins", 1, 4, "" ];  //  (95)
item [191] = [ "Coins", 1, 4, "" ];  //  (99)
item [192] = [ "Coins", 1, 4, "" ];  //  (103)
item [193] = [ "Coins", 1, 7, "" ];  //  (110)
item [194] = [ "Coins", 1, 7, "" ];  //  (117)
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [198] = [ "Coins", 1, 4, "" ];  //  (121)
item [199] = [ "Nothing", 1, 0, "" ];  //  200
item [200] = [ "Coins", 1, 1, "" ];  //  (122)
item [201] = [ "Coins", 1, 25, "" ];  //  (147)
item [202] = [ "Coins", 1, 1, "" ];  //  (148)
item [203] = [ "Coins", 1, 12, "" ];  //  (160)
item [204] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [205] = [ "Coins", 1, 1, "" ];  //  (161)
item [206] = [ "Coins", 1, 1, "" ];  //  (162)
item [207] = [ "Coins", 1, 1, "" ];  //  (163)
item [208] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [209] = [ "Earth-rune", 1, 2, "Rune" ];  //  210  (2)
item [210] = [ "Coins", 1, 30, "" ];  //  (193)
item [211] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  (1)
item [212] = [ "Nothing", 1, 0, "" ];
item [213] = [ "Coins", 1, 7, "" ];  //  (200)
item [214] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (3)
item [215] = [ "Coins", 1, 1, "" ];  //  (201)
item [216] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [217] = [ "Iron dagger", 1, 1, "" ];
item [218] = [ "Coins", 1, 1, "" ];  //  (202)
item [219] = [ "Nothing", 1, 0, "" ];  //  220
item [220] = [ "Coins", 1, 1, "" ];  //  (203)
item [221] = [ "Coins", 1, 17, "" ];  //  (220)
item [222] = [ "Coins", 1, 1, "" ];  //  (221)
item [223] = [ "Coins", 1, 7, "" ];  //  (228)
item [224] = [ "Coins", 1, 4, "" ];  //  (232)
item [225] = [ "Coins", 1, 12, "" ];  //  (244)
item [226] = [ "Coins", 1, 7, "" ];  //  (251)
item [227] = [ "Nothing", 1, 0, "" ];
item [228] = [ "Coins", 1, 1, "" ];  //  (252)
item [229] = [ "Nothing", 1, 0, "" ];  //  230
item [230] = [ "Coins", 1, 1, "" ];  //  (253)
item [231] = [ "Nothing", 1, 0, "" ];
item [232] = [ "grain", 1, 1, "" ];
item [233] = [ "Coins", 1, 1, "" ];  //  (254)
item [234] = [ "Coins", 1, 1, "" ];  //  (255)
item [235] = [ "Nothing", 1, 0, "" ];
item [236] = [ "Coins", 1, 4, "" ];  //  (259)
item [237] = [ "Iron dagger", 1, 1, "" ];
item [238] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [239] = [ "Nothing", 1, 0, "" ];  //  240
item [240] = [ "Coins", 1, 1, "" ];  //  (260)
item [241] = [ "Iron dagger", 1, 1, "" ];
item [242] = [ "Coins", 1, 17, "" ];  //  (277)
item [243] = [ "Nothing", 1, 0, "" ];
item [244] = [ "Air-rune", 1, 4, "Rune" ];  //  (4)
item [245] = [ "Coins", 1, 12, "" ];  //  (289)
item [246] = [ "Coins", 1, 1, "" ];  //  (290)
item [247] = [ "Nothing", 1, 0, "" ];
item [248] = [ "Coins", 1, 17, "" ];  //  (307)
item [249] = [ "Nothing", 1, 0, "" ];  //  250
item [250] = [ "Iron dagger", 1, 1, "" ];
item [251] = [ "Coins", 1, 12, "" ];  //  (319)
item [252] = [ "Iron dagger", 1, 1, "" ];
item [253] = [ "Coins", 1, 1, "" ];  //  (320)
item [254] = [ "Coins", 1, 1, "" ];  //  (321)
item [255] = [ "Coins", 1, 7, "" ];  //  (328)
item [256] = [ "Coins", 1, 1, "" ];  //  (329)
item [257] = [ "Coins", 1, 1, "" ];  //  (330)
item [258] = [ "Coins", 1, 4, "" ];  //  (334)
item [259] = [ "Medium Bronze Helmet", 1, 1, "" ];  //  260
item [260] = [ "Coins", 1, 4, "" ];  //  (338)
item [261] = [ "Coins", 1, 7, "" ];  //  (345)
item [262] = [ "Nothing", 1, 0, "" ];
item [263] = [ "Coins", 1, 12, "" ];  //  (357)
item [264] = [ "Nothing", 1, 0, "" ];
item [265] = [ "Earth-rune", 1, 2, "Rune" ];  //  (4)
item [266] = [ "Coins", 1, 7, "" ];  //  (364)
item [267] = [ "Coins", 1, 1, "" ];  //  (365)
item [268] = [ "Coins", 1, 1, "" ];  //  (366)
item [269] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  270  (4)
item [270] = [ "Coins", 1, 4, "" ];  //  (370)
item [271] = [ "Coins", 1, 1, "" ];  //  (371)
item [272] = [ "Coins", 1, 7, "" ];  //  (378)
item [273] = [ "Iron dagger", 1, 1, "" ];
item [274] = [ "Coins", 1, 25, "" ];  //  (403)
item [275] = [ "Iron dagger", 1, 1, "" ];
item [276] = [ "Coins", 1, 1, "" ];  //  (404)
item [277] = [ "Coins", 1, 7, "" ];  //  (411)
item [278] = [ "Fire-rune", 1, 1, "Rune" ];  //  (3)
item [279] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  280  (6)
item [280] = [ "Coins", 1, 7, "" ];  //  (418)
item [281] = [ "Fire-rune", 1, 1, "Rune" ];  //  (4)
item [282] = [ "Coins", 1, 7, "" ];  //  (425)
item [283] = [ "Coins", 1, 1, "" ];  //  (426)
item [284] = [ "Coins", 1, 7, "" ];  //  (433)
item [285] = [ "Coins", 1, 4, "" ];  //  (437)
item [286] = [ "Coins", 1, 7, "" ];  //  (444)
item [287] = [ "Coins", 1, 1, "" ];  //  (445)
item [288] = [ "Coins", 1, 1, "" ];  //  (446)
item [289] = [ "Coins", 1, 25, "" ];  //  290  (471)
item [290] = [ "Coins", 1, 17, "" ];  //  (488)
item [291] = [ "Coins", 1, 1, "" ];  //  (489)
item [292] = [ "Coins", 1, 7, "" ];  //  (496)
item [293] = [ "Nothing", 1, 0, "" ];
item [294] = [ "Coins", 1, 7, "" ];  //  (503)
item [295] = [ "Coins", 1, 1, "" ];  //  (504)
item [296] = [ "Coins", 1, 1, "" ];  //  (505)
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [299] = [ "Coins", 1, 1, "" ];  //  300  (506)

runs [1] = [ 299, 300 ];  // kills 134, drops 134

// runs [2] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*

item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 4, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 7, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 17, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()
item [000] = [ "Coins", 1, 30, "" ];  //  ()

item [000] = [ "Air-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Bronze Arrows", 1, 1, "Arrows" ];  //  ()
item [000] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  ()
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Medium Bronze Helmet", 1, 1, "" ];

item [000] = [ "iron ore", 1, 1, "" ];
item [000] = [ "grain", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "carnillean guard";        // monster's name
var mcbl = 28;                         // monster's combat level
var mindex = 73;                       // index into monster data base
var mrpt = 2;                          // number of non-breaking space to add after index name