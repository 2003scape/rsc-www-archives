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

var cwcb = 5;  // column width of checkboxes

var notes = "";

/*

   itype2
   
   0 item type (item [n][3])
   1 true = item qty count, false = item type count

*/

itype2.push([ "ISM Bars", false ]);
itype2.push([ "SM Bars", false ]);
itype2.push([ "M Bars", true ]);

itype2l = itype2.length;

// run 1

item   [0] = [ "Coins", 1, 2, "" ];  //  (2)  1
item   [1] = [ "Coins", 1, 8, "" ];  //  (10)
item   [2] = [ "Coins", 1, 120, "" ];  //  (130)
item   [3] = [ "Coins", 1, 15, "" ];  //  (145)
item   [4] = [ "Coins", 1, 15, "" ];  //  (160)
item   [5] = [ "Coins", 1, 2, "" ];  //  (162)
item   [6] = [ "Coins", 1, 2, "" ];  //  (164)
item   [7] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item   [8] = [ "Coins", 1, 48, "" ];  //  (212)
item   [9] = [ "Coins", 1, 15, "" ];  //  (227)  10
item  [10] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item  [11] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item  [12] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [13] = [ "steel bar", 1, 1, "" ];
item  [14] = [ "mithril bar", 1, 1, "" ];
item  [15] = [ "Water-rune", 1, 20, "Rune" ];  //  (80)
item  [16] = [ "Coins", 1, 2, "" ];  //  (229)
item  [17] = [ "Coins", 1, 2, "" ];  //  (231)
item  [18] = [ "steel bar", 2, 1, "SM Bars" ];
item  [19] = [ "mithril bar", 1, 1, "" ];
item  [20] = [ "Coins", 1, 48, "" ];  //  (279)
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Coins", 1, 48, "" ];  //  (327)  20
item  [23] = [ "Coins", 1, 48, "" ];  //  (375)
item  [24] = [ "Coins", 1, 15, "" ];  //  (390)
item  [25] = [ "Coins", 1, 48, "" ];  //  (438)
item  [26] = [ "Water-rune", 1, 20, "Rune" ];  //  (100)
item  [27] = [ "Coins", 1, 2, "" ];  //  (440)
item  [28] = [ "Coins", 1, 48, "" ];  //  (488)
item  [29] = [ "Coins", 1, 48, "" ];  //  (536)
item  [30] = [ "Water-rune", 1, 20, "Rune" ];  //  (120)
item  [31] = [ "Coins", 1, 48, "" ];  //  (584)
item  [32] = [ "Coins", 1, 2, "" ];  //  (586)  30
item  [33] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [34] = [ "steel bar", 1, 1, "" ];
item  [35] = [ "mithril bar", 1, 1, "" ];

runs [0] = [ 35, 31 ];  // kills 31, drops 36

// run 2

item  [36] = [ "iron bar", 3, 1, "ISM Bars" ];  //  32
item  [37] = [ "steel bar", 1, 1, "" ];
item  [38] = [ "mithril bar", 1, 1, "" ];
item  [39] = [ "Coins", 1, 8, "" ];  //  (8)
item  [40] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [41] = [ "steel bar", 1, 1, "" ];
item  [42] = [ "mithril bar", 1, 1, "" ];
item  [43] = [ "Coins", 1, 15, "" ];  //  (23)
item  [44] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item  [45] = [ "Coins", 1, 48, "" ];  //  (71)
item  [46] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item  [47] = [ "mithril bar", 1, 1, "M Bars" ];
item  [48] = [ "Coins", 1, 15, "" ];  //  (86)  40
item  [49] = [ "Coins", 1, 120, "" ];  //  (206)
item  [50] = [ "Coins", 1, 48, "" ];  //  (254)
item  [51] = [ "Steel Long Sword", 1, 1, "" ];
item  [52] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [53] = [ "steel bar", 1, 1, "" ];
item  [54] = [ "mithril bar", 1, 1, "" ];
item  [55] = [ "Coins", 1, 2, "" ];  //  (256)
item  [56] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item  [57] = [ "Coins", 1, 8, "" ];  //  (264)
item  [58] = [ "Coins", 1, 48, "" ];  //  (312)
item  [59] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [60] = [ "steel bar", 1, 1, "" ];
item  [61] = [ "mithril bar", 1, 1, "" ];
item  [62] = [ "Tarromin", 1, 1, "Herb" ];  //  50

runs [1] = [ 62, 50 ];  // kills 19, drops 27

// run 3

item  [63] = [ "Large Steel Helmet", 1, 1, "" ];  //  51
item  [64] = [ "Coins", 1, 15, "" ];  //  (15)
item  [65] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item  [66] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [67] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [68] = [ "steel bar", 1, 1, "" ];
item  [69] = [ "mithril bar", 1, 1, "" ];
item  [70] = [ "steel bar", 2, 1, "SM Bars" ];
item  [71] = [ "mithril bar", 1, 1, "" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Coins", 1, 48, "" ];  //  (63)
item  [74] = [ "Nothing", 1, 0, "" ];
item  [75] = [ "Coins", 1, 120, "" ];  //  (183)  60
item  [76] = [ "Coins", 1, 48, "" ];  //  (231)
item  [77] = [ "Coins", 1, 8, "" ];  //  (239)
item  [78] = [ "Coins", 1, 15, "" ];  //  (254)
item  [79] = [ "Coins", 1, 15, "" ];  //  (269)
item  [80] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [81] = [ "steel bar", 1, 1, "" ];
item  [82] = [ "mithril bar", 1, 1, "" ];
item  [83] = [ "Coins", 1, 48, "" ];  //  (317)
item  [84] = [ "Coins", 1, 48, "" ];  //  (365)
item  [85] = [ "mithril bar", 1, 1, "M Bars" ];
item  [86] = [ "Coins", 1, 2, "" ];  //  (367)
item  [87] = [ "Coins", 1, 15, "" ];  //  (382)  70
item  [88] = [ "Coins", 1, 2, "" ];  //  (384)
item  [89] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [90] = [ "steel bar", 1, 1, "" ];
item  [91] = [ "mithril bar", 1, 1, "" ];

runs [2] = [ 91, 72 ];  // kills 22, drops 29

// run 4

item  [92] = [ "Coins", 1, 8, "" ];  //  (8)  73
item  [93] = [ "Coins", 1, 48, "" ];  //  (56)
item  [94] = [ "iron bar", 3, 1, "ISM Bars" ];
item  [95] = [ "steel bar", 1, 1, "" ];
item  [96] = [ "mithril bar", 1, 1, "" ];
item  [97] = [ "Coins", 1, 48, "" ];  //  (104)
item  [98] = [ "Coins", 1, 2, "" ];  //  (106)
item  [99] = [ "iron bar", 3, 1, "ISM Bars" ];
item [100] = [ "steel bar", 1, 1, "" ];
item [101] = [ "mithril bar", 1, 1, "" ];
item [102] = [ "Coins", 1, 8, "" ];  //  (114)
item [103] = [ "Coins", 1, 2, "" ];  //  (116)  80
item [104] = [ "Irit Leaf", 1, 1, "Herb" ];
item [105] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item [106] = [ "Coins", 1, 48, "" ];  //  (164)
item [107] = [ "Coins", 1, 2, "" ];  //  (166)
item [108] = [ "Coins", 1, 48, "" ];  //  (214)
item [109] = [ "Coins", 1, 48, "" ];  //  (262)
item [110] = [ "Coins", 1, 48, "" ];  //  (310)
item [111] = [ "Coins", 1, 2, "" ];  //  (312)
item [112] = [ "Coins", 1, 48, "" ];  //  (360)
item [113] = [ "Coins", 1, 48, "" ];  //  (408)  90
item [114] = [ "Marrentill", 1, 1, "Herb" ];
item [115] = [ "Avantoe", 1, 1, "Herb" ];
item [116] = [ "iron bar", 3, 1, "ISM Bars" ];
item [117] = [ "steel bar", 1, 1, "" ];
item [118] = [ "mithril bar", 1, 1, "" ];
item [119] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [120] = [ "Coins", 1, 48, "" ];  //  (456)
item [121] = [ "Coins", 1, 48, "" ];  //  (504)
item [122] = [ "Coins", 1, 2, "" ];  //  (506)
item [123] = [ "Coins", 1, 48, "" ];  //  (554)
item [124] = [ "Kwuarm", 1, 1, "Herb" ];
item [125] = [ "Coins", 1, 48, "" ];  //  (602)  100
item [126] = [ "Coins", 1, 48, "" ];  //  (650)
item [127] = [ "Coins", 1, 48, "" ];  //  (698)

runs [3] = [ 127, 102 ];  // kills 30, drops 36

// run 5

item [128] = [ "Coins", 1, 48, "" ];  //  (48)  103
item [129] = [ "Coins", 1, 48, "" ];  //  (96)
item [130] = [ "Coins", 1, 2, "" ];  //  (98)
item [131] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item [132] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [133] = [ "Coins", 1, 48, "" ];  //  (146)
item [134] = [ "Coins", 1, 120, "" ];  //  (266)
item [135] = [ "Coins", 1, 48, "" ];  //  (314)  110
item [136] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item [137] = [ "Large Steel Helmet", 1, 1, "" ];
item [138] = [ "Coins", 1, 48, "" ];  //  (362)
item [139] = [ "Coins", 1, 8, "" ];  //  (370)
item [140] = [ "steel bar", 2, 1, "SM Bars" ];
item [141] = [ "mithril bar", 1, 1, "" ];
item [142] = [ "Coins", 1, 15, "" ];  //  (385)
item [143] = [ "iron bar", 3, 1, "ISM Bars" ];
item [144] = [ "steel bar", 1, 1, "" ];
item [145] = [ "mithril bar", 1, 1, "" ];
item [146] = [ "Coins", 1, 8, "" ];  //  (393)
item [147] = [ "Coins", 1, 8, "" ];  //  (401)
item [148] = [ "Coins", 1, 48, "" ];  //  (449)  120
item [149] = [ "iron bar", 3, 1, "ISM Bars" ];
item [150] = [ "steel bar", 1, 1, "" ];
item [151] = [ "mithril bar", 1, 1, "" ];
item [152] = [ "Coins", 1, 8, "" ];  //  (457)
item [153] = [ "Guam Leaf", 1, 1, "Herb" ];
item [154] = [ "Coins", 1, 8, "" ];  //  (465)
item [155] = [ "Coins", 1, 8, "" ];  //  (473)
item [156] = [ "Water-rune", 1, 20, "Rune" ];  //  (80)

runs [4] = [ 156, 126 ];  // kills 24, drops 29

// run 6

item [157] = [ "Coins", 1, 8, "" ];  //  (8)  127
item [158] = [ "Coins", 1, 48, "" ];  //  (56)
item [159] = [ "Coins", 1, 8, "" ];  //  (64)
item [160] = [ "Coins", 1, 48, "" ];  //  (112)  130
item [161] = [ "uncut emerald", 1, 1, "Gem" ];
item [162] = [ "Steel Short Sword", 1, 1, "" ];
item [163] = [ "Coins", 1, 8, "" ];  //  (120)
item [164] = [ "Coins", 1, 2, "" ];  //  (122)
item [165] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item [166] = [ "Guam Leaf", 1, 1, "Herb" ];
item [167] = [ "Coins", 1, 15, "" ];  //  (137)
item [168] = [ "Coins", 1, 15, "" ];  //  (152)
item [169] = [ "Coins", 1, 48, "" ];  //  (200)
item [170] = [ "Coins", 1, 8, "" ];  //  (208)  140
item [171] = [ "Coins", 1, 8, "" ];  //  (216)
item [172] = [ "Coins", 1, 2, "" ];  //  (218)
item [173] = [ "Coins", 1, 48, "" ];  //  (266)
item [174] = [ "Coins", 1, 48, "" ];  //  (314)
item [175] = [ "Coins", 1, 48, "" ];  //  (362)
item [176] = [ "mithril bar", 1, 1, "M Bars" ];
item [177] = [ "Coins", 1, 2, "" ];  //  (364)
item [178] = [ "iron bar", 3, 1, "ISM Bars" ];
item [179] = [ "steel bar", 1, 1, "" ];
item [180] = [ "mithril bar", 1, 1, "" ];
item [181] = [ "Coins", 1, 15, "" ];  //  (379)
item [182] = [ "Coins", 1, 48, "" ];  //  (427)  150
item [183] = [ "Coins", 1, 48, "" ];  //  (475)
item [184] = [ "Coins", 1, 48, "" ];  //  (523)
item [185] = [ "Coins", 1, 48, "" ];  //  (571)
item [186] = [ "steel bar", 2, 1, "SM Bars" ];
item [187] = [ "mithril bar", 1, 1, "" ];
item [188] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [189] = [ "Coins", 1, 48, "" ];  //  (619)
item [190] = [ "iron bar", 3, 1, "ISM Bars" ];
item [191] = [ "steel bar", 1, 1, "" ];
item [192] = [ "mithril bar", 1, 1, "" ];
item [193] = [ "Steel Short Sword", 1, 1, "" ];
item [194] = [ "Coins", 1, 8, "" ];  //  (627)
item [195] = [ "Coins", 1, 2, "" ];  //  (629)  160
item [196] = [ "Coins", 1, 2, "" ];  //  (631)
item [197] = [ "Coins", 1, 48, "" ];  //  (679)
item [198] = [ "Steel Short Sword", 1, 1, "" ];
item [199] = [ "Coins", 1, 48, "" ];  //  (727)
item [200] = [ "Nothing", 1, 0, "" ];
item [201] = [ "Coins", 1, 15, "" ];  //  (742)
item [202] = [ "mithril bar", 1, 1, "M Bars" ];
item [203] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item [204] = [ "Water-rune", 1, 20, "Rune" ];  //  (80)
item [205] = [ "Tarromin", 1, 1, "Herb" ];  //  170
item [206] = [ "Coins", 1, 2, "" ];  //  (744)
item [207] = [ "Coins", 1, 2, "" ];  //  (746)
item [208] = [ "Coins", 1, 8, "" ];  //  (754)
item [209] = [ "Coins", 1, 8, "" ];  //  (762)
item [210] = [ "Coins", 1, 15, "" ];  //  (777)
item [211] = [ "Coins", 1, 48, "" ];  //  (825)
item [212] = [ "Coins", 1, 48, "" ];  //  (873)
item [213] = [ "Coins", 1, 48, "" ];  //  (921)
item [214] = [ "Water-rune", 1, 20, "Rune" ];  //  (100)
item [215] = [ "Coins", 1, 15, "" ];  //  (936)  180

runs [5] = [ 215, 180 ];  // kills 54, drops 59

// run 7

item [216] = [ "Coins", 1, 15, "" ];  //  (15)  181
item [217] = [ "Coins", 1, 8, "" ];  //  (23)
item [218] = [ "Coins", 1, 15, "" ];  //  (38)
item [219] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item [220] = [ "Coins", 1, 15, "" ];  //  (53)
item [221] = [ "Avantoe", 1, 1, "Herb" ];
item [222] = [ "Coins", 1, 15, "" ];  //  (68)
item [223] = [ "Coins", 1, 15, "" ];  //  (83)
item [224] = [ "Coins", 1, 48, "" ];  //  (131)
item [225] = [ "Coins", 1, 48, "" ];  //  (179)  190
item [226] = [ "Coins", 1, 8, "" ];  //  (187)
item [227] = [ "Coins", 1, 15, "" ];  //  (202)
item [228] = [ "Coins", 1, 48, "" ];  //  (250)
item [229] = [ "iron bar", 3, 1, "ISM Bars" ];
item [230] = [ "steel bar", 1, 1, "" ];
item [231] = [ "mithril bar", 1, 1, "" ];
item [232] = [ "Coins", 1, 8, "" ];  //  (258)
item [233] = [ "Coins", 1, 15, "" ];  //  (273)
item [234] = [ "Coins", 1, 8, "" ];  //  (281)
item [235] = [ "iron bar", 3, 1, "ISM Bars" ];
item [236] = [ "steel bar", 1, 1, "" ];
item [237] = [ "mithril bar", 1, 1, "" ];
item [238] = [ "Coins", 1, 48, "" ];  //  (329)
item [239] = [ "Nothing", 1, 0, "" ];  //  200
item [240] = [ "Coins", 1, 15, "" ];  //  (344)
item [241] = [ "Coins", 1, 48, "" ];  //  (392)
item [242] = [ "Coins", 1, 15, "" ];  //  (407)
item [243] = [ "Coins", 1, 15, "" ];  //  (422)
item [244] = [ "Coins", 1, 48, "" ];  //  (470)
item [245] = [ "iron bar", 3, 1, "ISM Bars" ];
item [246] = [ "steel bar", 1, 1, "" ];
item [247] = [ "mithril bar", 1, 1, "" ];
item [248] = [ "Coins", 1, 8, "" ];  //  (478)
item [249] = [ "Coins", 1, 8, "" ];  //  (486)
item [250] = [ "iron bar", 3, 1, "ISM Bars" ];
item [251] = [ "steel bar", 1, 1, "" ];
item [252] = [ "mithril bar", 1, 1, "" ];
item [253] = [ "Guam Leaf", 1, 1, "Herb" ];  //  210
item [254] = [ "Coins", 1, 2, "" ];  //  (488)
item [255] = [ "Coins", 1, 15, "" ];  //  (503)
item [256] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [257] = [ "Coins", 1, 48, "" ];  //  (551)
item [258] = [ "Coins", 1, 15, "" ];  //  (566)
item [259] = [ "steel bar", 2, 1, "SM Bars" ];
item [260] = [ "mithril bar", 1, 1, "" ];
item [261] = [ "Coins", 1, 48, "" ];  //  (614)
item [262] = [ "Coins", 1, 48, "" ];  //  (662)
item [263] = [ "iron bar", 3, 1, "ISM Bars" ];
item [264] = [ "steel bar", 1, 1, "" ];
item [265] = [ "mithril bar", 1, 1, "" ];

runs [6] = [ 265, 219 ];  // kills 50, drops 39

// run 8

item [266] = [ "Guam Leaf", 1, 1, "Herb" ];  //  220
item [267] = [ "Coins", 1, 48, "" ];  //  (48)
item [268] = [ "Coins", 1, 48, "" ];  //  (96)
item [269] = [ "Coins", 1, 15, "" ];  //  (111)
item [270] = [ "Coins", 1, 120, "" ];  //  (231)
item [271] = [ "Coins", 1, 15, "" ];  //  (246)
item [272] = [ "Coins", 1, 8, "" ];  //  (254)
item [273] = [ "Coins", 1, 48, "" ];  //  (302)
item [274] = [ "iron bar", 3, 1, "ISM Bars" ];
item [275] = [ "steel bar", 1, 1, "" ];
item [276] = [ "mithril bar", 1, 1, "" ];
item [277] = [ "iron bar", 3, 1, "ISM Bars" ];
item [278] = [ "steel bar", 1, 1, "" ];
item [279] = [ "mithril bar", 1, 1, "" ];
item [280] = [ "Coins", 1, 48, "" ];  //  (350)  230
item [281] = [ "Harralander", 1, 1, "Herb" ];
item [282] = [ "iron bar", 3, 1, "ISM Bars" ];
item [283] = [ "steel bar", 1, 1, "" ];
item [284] = [ "mithril bar", 1, 1, "" ];
item [285] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)

runs [7] = [ 285, 234 ];  // kills 15, drops 20

// run 9

item [286] = [ "Guam Leaf", 1, 1, "Herb" ];  //  235
item [287] = [ "Coins", 1, 120, "" ];  //  (120)
item [288] = [ "Coins", 1, 8, "" ];  //  (128)
item [289] = [ "Coins", 1, 8, "" ];  //  (136)
item [290] = [ "iron bar", 3, 1, "ISM Bars" ];
item [291] = [ "steel bar", 1, 1, "" ];
item [292] = [ "mithril bar", 1, 1, "" ];
item [293] = [ "Coins", 1, 48, "" ];  //  (184)  240
item [294] = [ "Coins", 1, 2, "" ];  //  (186)
item [295] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item [296] = [ "Coins", 1, 8, "" ];  //  (194)
item [297] = [ "Coins", 1, 15, "" ];  //  (209)
item [298] = [ "Steel Short Sword", 1, 1, "" ];
item [299] = [ "Coins", 1, 2, "" ];  //  (211)
item [300] = [ "Coins", 1, 2, "" ];  //  (213)
item [301] = [ "Coins", 1, 48, "" ];  //  (261)
item [302] = [ "iron bar", 3, 1, "ISM Bars" ];
item [303] = [ "steel bar", 1, 1, "" ];
item [304] = [ "mithril bar", 1, 1, "" ];
item [305] = [ "Coins", 1, 48, "" ];  //  (309)  250
item [306] = [ "Coins", 1, 48, "" ];  //  (357)
item [307] = [ "Coins", 1, 48, "" ];  //  (365)
item [308] = [ "Coins", 1, 48, "" ];  //  (413)
item [309] = [ "Coins", 1, 48, "" ];  //  (461)
item [310] = [ "Coins", 1, 2, "" ];  //  (463)
item [311] = [ "Coins", 1, 8, "" ];  //  (471)
item [312] = [ "Coins", 1, 8, "" ];  //  (479)
item [313] = [ "Coins", 1, 48, "" ];  //  (527)
item [314] = [ "Nothing", 1, 0, "" ];
item [315] = [ "Irit Leaf", 1, 1, "Herb" ];  //  260
item [316] = [ "Steel Long Sword", 1, 1, "" ];
item [317] = [ "Coins", 1, 48, "" ];  //  (575)
item [318] = [ "Coins", 1, 15, "" ];  //  (590)
item [319] = [ "Coins", 1, 15, "" ];  //  (605)
item [320] = [ "Coins", 1, 48, "" ];  //  (653)
item [321] = [ "Coins", 1, 15, "" ];  //  (668)
item [322] = [ "Steel Long Sword", 1, 1, "" ];
item [323] = [ "Guam Leaf", 1, 1, "Herb" ];
item [324] = [ "iron bar", 3, 1, "ISM Bars" ];
item [325] = [ "steel bar", 1, 1, "" ];
item [326] = [ "mithril bar", 1, 1, "" ];
item [327] = [ "Coins", 1, 15, "" ];  //  (716)  270
item [328] = [ "Coins", 1, 15, "" ];  //  (764)
item [329] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [330] = [ "Steel Long Sword", 1, 1, "" ];
item [331] = [ "Coins", 1, 15, "" ];  //  (779)
item [332] = [ "Coins", 1, 120, "" ];  //  (899)
item [333] = [ "Coins", 1, 48, "" ];  //  (947)
item [334] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item [335] = [ "steel bar", 2, 1, "SM Bars" ];
item [336] = [ "mithril bar", 1, 1, "" ];

runs [8] = [ 336, 278 ];  // kills 44, drops 51

// run 10

item [337] = [ "Coins", 1, 48, "" ];  //  (48)  279
item [338] = [ "Coins", 1, 48, "" ];  //  (96)  280
item [339] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)
item [340] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [341] = [ "Coins", 1, 15, "" ];  //  (111)
item [342] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item [343] = [ "Coins", 1, 15, "" ];  //  (126)
item [344] = [ "iron bar", 3, 1, "ISM Bars" ];
item [345] = [ "steel bar", 1, 1, "" ];
item [346] = [ "mithril bar", 1, 1, "" ];
item [347] = [ "steel bar", 2, 1, "SM Bars" ];
item [348] = [ "mithril bar", 1, 1, "" ];
item [349] = [ "Steel Long Sword", 1, 1, "" ];
item [350] = [ "Coins", 1, 8, "" ];  //  (134)
item [351] = [ "Coins", 1, 2, "" ];  //  (136)  290
item [352] = [ "uncut sapphire", 1, 1, "Gem" ];
item [353] = [ "Coins", 1, 48, "" ];  //  (184)
item [354] = [ "Coins", 1, 2, "" ];  //  (186)
item [355] = [ "iron bar", 3, 1, "ISM Bars" ];
item [356] = [ "steel bar", 1, 1, "" ];
item [357] = [ "mithril bar", 1, 1, "" ];
item [358] = [ "Nothing", 1, 0, "" ];
item [359] = [ "iron bar", 3, 1, "ISM Bars" ];
item [360] = [ "steel bar", 1, 1, "" ];
item [361] = [ "mithril bar", 1, 1, "" ];

runs [9] = [ 361, 296 ];  // kills 18, drops 25

// run 11

item [362] = [ "Coins", 1, 48, "" ];  //  (48)  297
item [363] = [ "Coins", 1, 48, "" ];  //  (96)
item [364] = [ "Coins", 1, 48, "" ];  //  (144)
item [365] = [ "Water-rune", 1, 20, "Rune" ];  //  (20)  300
item [366] = [ "Coins", 1, 2, "" ];  //  (146)
item [367] = [ "Coins", 1, 48, "" ];  //  (194)
item [368] = [ "Coins", 1, 48, "" ];  //  (242)
item [369] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [370] = [ "iron bar", 3, 1, "ISM Bars" ];
item [371] = [ "steel bar", 1, 1, "" ];
item [372] = [ "mithril bar", 1, 1, "" ];
item [373] = [ "Coins", 1, 2, "" ];  //  (244)
item [374] = [ "Coins", 1, 48, "" ];  //  (292)
item [375] = [ "Coins", 1, 48, "" ];  //  (340)
item [376] = [ "Coins", 1, 15, "" ];  //  (355)
item [377] = [ "Coins", 1, 120, "" ];  //  (475)  310
item [378] = [ "Coins", 1, 48, "" ];  //  (523)
item [379] = [ "Coins", 1, 15, "" ];  //  (538)
item [380] = [ "Water-rune", 1, 20, "Rune" ];  //  (40)
item [381] = [ "Coins", 1, 48, "" ];  //  (586)
item [382] = [ "Coins", 1, 15, "" ];  //  (601)
item [383] = [ "Coins", 1, 48, "" ];  //  (649)
item [384] = [ "Coins", 1, 48, "" ];  //  (697)
item [385] = [ "Avantoe", 1, 1, "Herb" ];
item [386] = [ "Coins", 1, 8, "" ];  //  (705)
item [387] = [ "Coins", 1, 48, "" ];  //  (753)  320
item [388] = [ "Marrentill", 1, 1, "Herb" ];
item [389] = [ "Coins", 1, 48, "" ];  //  (801)
item [390] = [ "Coins", 1, 8, "" ];  //  (809)
item [391] = [ "Coins", 1, 120, "" ];  //  (929)
item [392] = [ "Coins", 1, 48, "" ];  //  (977)
item [393] = [ "Large Steel Helmet", 1, 1, "" ];
item [394] = [ "Coins", 1, 2, "" ];  //  (979)
item [395] = [ "Coins", 1, 48, "" ];  //  (1027)
item [396] = [ "Harralander", 1, 1, "Herb" ];
item [397] = [ "Marrentill", 1, 1, "Herb" ];  //  330
item [398] = [ "Water-rune", 1, 20, "Rune" ];  //  (60)
item [399] = [ "Coins", 1, 48, "" ];  //  (1075)
item [400] = [ "Coins", 1, 2, "" ];  //  (1077)
item [401] = [ "Coins", 1, 48, "" ];  //  (1125)
item [402] = [ "Water-rune", 1, 20, "Rune" ];  //  (80)
item [403] = [ "iron bar", 3, 1, "ISM Bars" ];
item [404] = [ "steel bar", 1, 1, "" ];
item [405] = [ "mithril bar", 1, 1, "" ];
item [406] = [ "Coins", 1, 15, "" ];  //  (1140)
item [407] = [ "Coins", 1, 48, "" ];  //  (1188)
item [408] = [ "Coins", 1, 2, "" ];  //  (1190)
item [409] = [ "Coins", 1, 8, "" ];  //  (1198)  340
item [410] = [ "Water-rune", 1, 20, "Rune" ];  //  (100)
item [411] = [ "Coins", 1, 48, "" ];  //  (1246)
item [412] = [ "Coins", 1, 15, "" ];  //  (1261)
item [413] = [ "Coins", 1, 48, "" ];  //  (1309)
item [414] = [ "Coins", 1, 2, "" ];  //  (1311)

runs [10] = [ 414, 345 ];  // kills 49, drops 53

// run 12


// runs [11] = [ x, y ];  // kills ? ( y - 345 ), drops ? ( x - 414 )

/*

item [000] = [ "Coins", 1, 2, "" ];  //  ()
item [000] = [ "Coins", 1, 8, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 48, "" ];  //  ()
item [000] = [ "Coins", 1, 120, "" ];  //  ()

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

item [000] = [ "Water-rune", 1, 20, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Steel Short Sword", 1, 1, "" ];
item [000] = [ "Steel Long Sword", 1, 1, "" ];

item [000] = [ "Large Steel Helmet", 1, 1, "" ];

item [000] = [ "iron bar", 3, 1, "ISM Bars" ];
item [000] = [ "steel bar", 1, 1, "" ];
item [000] = [ "mithril bar", 1, 1, "" ];

item [000] = [ "steel bar", 2, 1, "SM Bars" ];
item [000] = [ "mithril bar", 1, 1, "" ];

item [000] = [ "mithril bar", 1, 1, "M Bars" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Paladin";          // monster's name
var mcbl = 71;                  // monster's combat level
var mindex = 144;               // index into monster data base
var mrpt = 1;                   // number of non-breaking space to add after index name