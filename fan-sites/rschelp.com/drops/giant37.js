/*

 item
 
 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, herb, rune, gem)
 
 run
 
 0 last drop of run (x, index of last drop of run)
 1 kills in run (y, kill number of x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "";

// run 1

item    [0] = [ "Fire-rune", 1, 10, "Rune" ];  // 1, (10)
item    [1] = [ "Chaos-rune", 1, 1, "Rune" ];  // (1)
item    [2] = [ "Coins", 1, 38, "" ];  // (38)
item    [3] = [ "Limpwurt root", 1, 1, "" ];
item    [4] = [ "Beer", 1, 1, "" ];
item    [5] = [ "Coins", 1, 15, "" ];  // (53)
item    [6] = [ "Limpwurt root", 1, 1, "" ];
item    [7] = [ "Tarromin", 1, 1, "Herb" ];
item    [8] = [ "Large Iron Helmet", 1, 1, "" ];
item    [9] = [ "Coins", 1, 38, "" ];  // 10, (91)
item   [10] = [ "Coins", 1, 8, "" ];  // (99)
item   [11] = [ "Limpwurt root", 1, 1, "" ];
item   [12] = [ "Large Iron Helmet", 1, 1, "" ];
item   [13] = [ "Coins", 1, 38, "" ];  // (137)
item   [14] = [ "Coins", 1, 38, "" ];  // (175)
item   [15] = [ "Beer", 1, 1, "" ];
item   [16] = [ "Coins", 1, 8, "" ];  // (183)
item   [17] = [ "Nature-rune", 1, 4, "Rune" ];  // (4)
item   [18] = [ "Coins", 1, 52, "" ];  // (235)
item   [19] = [ "Coins", 1, 52, "" ];  // 20, (287)
item   [20] = [ "Coins", 1, 15, "" ];  // (302)
item   [21] = [ "Coins", 1, 38, "" ];  // (340)
item   [22] = [ "Coins", 1, 38, "" ];  // (378)
item   [23] = [ "Coins", 1, 38, "" ];  // (416)
item   [24] = [ "Beer", 1, 1, "" ];
item   [25] = [ "Coins", 1, 52, "" ];  // (468)
item   [26] = [ "Limpwurt root", 1, 1, "" ];
item   [27] = [ "Nothing", 1, 0, "" ];
item   [28] = [ "Coins", 1, 38, "" ];  // (506)
item   [29] = [ "Coins", 1, 38, "" ];  // 30, (544)
item   [30] = [ "uncut emerald", 1, 1, "Gem" ];
item   [31] = [ "Marrentill", 1, 1, "Herb" ];
item   [32] = [ "Coins", 1, 8, "" ];  // (552)
item   [33] = [ "Coins", 1, 8, "" ];  // (560)
item   [34] = [ "Coins", 1, 15, "" ];  // (575)
item   [35] = [ "Coins", 1, 52, "" ];  // (627)
item   [36] = [ "Nothing", 1, 0, "" ];
item   [37] = [ "Coins", 1, 15, "" ];  // (642)
item   [38] = [ "Coins", 1, 38, "" ];  // (680)
item   [39] = [ "Limpwurt root", 1, 1, "" ];  // 40
item   [40] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [41] = [ "Nothing", 1, 0, "" ];
item   [42] = [ "Coins", 1, 38, "" ];  // (718)
item   [43] = [ "Coins", 1, 15, "" ];  // (733)
item   [44] = [ "Coins", 1, 8, "" ];  // (741)
item   [45] = [ "Beer", 1, 1, "" ];
item   [46] = [ "Nothing", 1, 0, "" ];
item   [47] = [ "Water-rune", 1, 5, "Rune" ];  // (5)
item   [48] = [ "uncut sapphire", 1, 1, "Gem" ];
item   [49] = [ "Coins", 1, 38, "" ];  // 50, (779)
item   [50] = [ "Nothing", 1, 0, "" ];
item   [51] = [ "Coins", 1, 41, "" ];  // (820)
item   [52] = [ "Coins", 1, 38, "" ];  // (858)
item   [53] = [ "Coins", 1, 38, "" ];  // (896)
item   [54] = [ "Iron Kite Shield", 1, 1, "" ];
item   [55] = [ "Coins", 1, 38, "" ];  // (934)
item   [56] = [ "Coins", 1, 38, "" ];  // (972)
item   [57] = [ "Coins", 1, 15, "" ];  // (987)
item   [58] = [ "Law-rune", 1, 1, "Rune" ];  // (1)
item   [59] = [ "Limpwurt root", 1, 1, "" ];  // 60
item   [60] = [ "Harralander", 1, 1, "Herb" ];
item   [61] = [ "Coins", 1, 38, "" ];  // (1025)
item   [62] = [ "Coins", 1, 88, "" ];  // (1113)
item   [63] = [ "Coins", 1, 38, "" ];  // (1151)
item   [64] = [ "Coins", 1, 52, "" ];  // (1203)
item   [65] = [ "Coins", 1, 38, "" ];  // (1241)
item   [66] = [ "Law-rune", 1, 1, "Rune" ];  // (2)
item   [67] = [ "Bronze Mace", 1, 1, "" ];
item   [68] = [ "Limpwurt root", 1, 1, "" ];
item   [69] = [ "Water-rune", 1, 5, "Rune" ];  // 70, (10)
item   [70] = [ "Coins", 1, 38, "" ];  // (1279)
item   [71] = [ "Coins", 1, 3, "" ];  // (1282)
item   [72] = [ "Coins", 1, 88, "" ];  // (1370)
item   [73] = [ "Nothing", 1, 0, "" ];
item   [74] = [ "Coins", 1, 52, "" ];  // (1422)
item   [75] = [ "Fire-rune", 1, 10, "Rune" ];  // (20)
item   [76] = [ "Coins", 1, 52, "" ];  // (1474)
item   [77] = [ "Coins", 1, 3, "" ];  // (1477)
item   [78] = [ "Coins", 1, 38, "" ];  // (1515)
item   [79] = [ "Beer", 1, 1, "" ];  // 80
item   [80] = [ "Beer", 1, 1, "" ];
item   [81] = [ "Ranarr Weed", 1, 1, "Herb" ];
item   [82] = [ "Beer", 1, 1, "" ];
item   [83] = [ "Nature-rune", 1, 4, "Rune" ];  // (8)
item   [84] = [ "Coins", 1, 38, "" ];  // (1553)
item   [85] = [ "Coins", 1, 52, "" ];  // (1605)
item   [86] = [ "Harralander", 1, 1, "Herb" ];
item   [87] = [ "Coins", 1, 38, "" ];  // (1643)

runs [0] = [ 87, 88 ];  // kills 88 , drops 88

// run 2

item   [88] = [ "Large Iron Helmet", 1, 1, "" ];
item   [89] = [ "Iron dagger", 1, 1, "" ];  // 90
item   [90] = [ "Mind-rune", 1, 2, "Rune" ];  // (2)
item   [91] = [ "Bronze Mace", 1, 1, "" ];
item   [92] = [ "Coins", 1, 15, "" ];  // (15)
item   [93] = [ "Coins", 1, 38, "" ];  // (53)
item   [94] = [ "Ranarr Weed", 1, 1, "Herb" ];
item   [95] = [ "Coins", 1, 15, "" ];  // (68)
item   [96] = [ "Coins", 1, 52, "" ];  // (120)
item   [97] = [ "Water-rune", 1, 5, "Rune" ];  // (5)
item   [98] = [ "Limpwurt root", 1, 1, "" ];
item   [99] = [ "Coins", 1, 38, "" ];  // 100, (158)
item  [100] = [ "Coins", 1, 38, "" ];  // (196)
item  [101] = [ "Coins", 1, 38, "" ];  // (234)
item  [102] = [ "Large Iron Helmet", 1, 1, "" ];
item  [103] = [ "uncut emerald", 1, 1, "Gem" ];
item  [104] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (1)
item  [105] = [ "Coins", 1, 3, "" ];  // (237)
item  [106] = [ "Limpwurt root", 1, 1, "" ];
item  [107] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (2)
item  [108] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (3)
item  [109] = [ "Limpwurt root", 1, 1, "" ];  // 110
item  [110] = [ "Large Iron Helmet", 1, 1, "" ];
item  [111] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (4)
item  [112] = [ "Coins", 1, 38, "" ];  // (275)
item  [113] = [ "Iron Kite Shield", 1, 1, "" ];
item  [114] = [ "Coins", 1, 3, "" ];  // (278)
item  [115] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [116] = [ "Coins", 1, 3, "" ];  // (281)
item  [117] = [ "Coins", 1, 38, "" ];  // (319)
item  [118] = [ "Coins", 1, 8, "" ];  // (327)
item  [119] = [ "Large Iron Helmet", 1, 1, "" ];  // 120
item  [120] = [ "Coins", 1, 38, "" ];  // (365)
item  [121] = [ "Coins", 1, 38, "" ];  // (403)
item  [122] = [ "Coins", 1, 38, "" ];  // (441)
item  [123] = [ "Coins", 1, 38, "" ];  // (479)
item  [124] = [ "Coins", 1, 52, "" ];  // (531)
item  [125] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [126] = [ "Coins", 1, 38, "" ];  // (569)
item  [127] = [ "Mind-rune", 1, 2, "Rune" ];  // (4)
item  [128] = [ "Steel Long Sword", 1, 1, "" ];
item  [129] = [ "Fire-rune", 1, 10, "Rune" ];  // 130, (10)
item  [130] = [ "Coins", 1, 3, "" ];  // (572)
item  [131] = [ "Coins", 1, 8, "" ];  // (580)
item  [132] = [ "Coins", 1, 8, "" ];  // (588)
item  [133] = [ "Coins", 1, 38, "" ];  // (626)
item  [134] = [ "Water-rune", 1, 5, "Rune" ];  // (10)
item  [135] = [ "Coins", 1, 3, "" ];  // (629)
item  [136] = [ "Limpwurt root", 1, 1, "" ];
item  [137] = [ "Coins", 1, 38, "" ];  // (667)
item  [138] = [ "Law-rune", 1, 1, "Rune" ];  // (1)
item  [139] = [ "Fire-rune", 1, 10, "Rune" ];  // 140, (20)
item  [140] = [ "Large Iron Helmet", 1, 1, "" ];
item  [141] = [ "Coins", 1, 52, "" ];  // (719)
item  [142] = [ "Iron Kite Shield", 1, 1, "" ];
item  [143] = [ "Coins", 1, 8, "" ];  // (727)
item  [144] = [ "Iron dagger", 1, 1, "" ];
item  [145] = [ "Coins", 1, 15, "" ];  // (742)
item  [146] = [ "Beer", 1, 1, "" ];
item  [147] = [ "Coins", 1, 15, "" ];  // (757)
item  [148] = [ "Nature-rune", 1, 4, "Rune" ];  // (4)
item  [149] = [ "Coins", 1, 38, "" ];  // 150, (795)
item  [150] = [ "Coins", 1, 38, "" ];  // (833)
item  [151] = [ "Water-rune", 1, 5, "Rune" ];  // (15)
item  [152] = [ "Nature-rune", 1, 4, "Rune" ];  // (8)
item  [153] = [ "Coins", 1, 38, "" ];  // (871)
item  [154] = [ "Coins", 1, 38, "" ];  // (909)
item  [155] = [ "Coins", 1, 38, "" ];  // (947)
item  [156] = [ "Limpwurt root", 1, 1, "" ];
item  [157] = [ "Coins", 1, 3, "" ];  // (950)
item  [158] = [ "Large Iron Helmet", 1, 1, "" ];
item  [159] = [ "Coins", 1, 52, "" ];  // 160, (1002)
item  [160] = [ "Large Iron Helmet", 1, 1, "" ];
item  [161] = [ "Limpwurt root", 1, 1, "" ];
item  [162] = [ "Coins", 1, 8, "" ];  // (1010)
item  [163] = [ "Iron Kite Shield", 1, 1, "" ];
item  [164] = [ "Beer", 1, 1, "" ];
item  [165] = [ "Coins", 1, 15, "" ];  // (1025)
item  [166] = [ "Bronze Mace", 1, 1, "" ];
item  [167] = [ "Large Iron Helmet", 1, 1, "" ];
item  [168] = [ "Coins", 1, 3, "" ];  // (1028)
item  [169] = [ "Cosmic-rune", 1, 1, "Rune" ];  // 170, (5)
item  [170] = [ "Limpwurt root", 1, 1, "" ];

runs [1] = [ 170, 171 ];  // kills 83, drops 83

// run 3

item  [171] = [ "Half of a key (Loop)", 1, 1, "" ];
item  [172] = [ "Mind-rune", 1, 2, "Rune" ];  // (2)
item  [173] = [ "Limpwurt root", 1, 1, "" ];
item  [174] = [ "Coins", 1, 8, "" ];  // (8)
item  [175] = [ "Coins", 1, 88, "" ];  // (96)
item  [176] = [ "Coins", 1, 38, "" ];  // (134)
item  [177] = [ "Law-rune", 1, 1, "Rune" ];  // (1)
item  [178] = [ "Coins", 1, 38, "" ];  // (172)  -- 210 --
item  [179] = [ "Large Iron Helmet", 1, 1, "" ];  // 180
item  [180] = [ "Fire-rune", 1, 10, "Rune" ];  // (10)
item  [181] = [ "Iron Kite Shield", 1, 1, "" ];
item  [182] = [ "Steel Long Sword", 1, 1, "" ];
item  [183] = [ "Steel Long Sword", 1, 1, "" ];
item  [184] = [ "Large Iron Helmet", 1, 1, "" ];
item  [185] = [ "Coins", 1, 38, "" ];  // (210)  -- 248 --
item  [186] = [ "Coins", 1, 38, "" ];  // (248)  -- 286 --
item  [187] = [ "Nothing", 1, 0, "" ];
item  [188] = [ "Fire-rune", 1, 10, "Rune" ];  // (20)  -- 30 --
item  [189] = [ "Beer", 1, 1, "" ];  // 190
item  [190] = [ "Nature-rune", 1, 4, "Rune" ];  // (4)
item  [191] = [ "Limpwurt root", 1, 1, "" ];
item  [192] = [ "Coins", 1, 15, "" ];  // (263)  -- 301 --
item  [193] = [ "Coins", 1, 52, "" ];  // (315)  -- 353 --
item  [194] = [ "Limpwurt root", 1, 1, "" ];
item  [195] = [ "Coins", 1, 3, "" ];  // (318)  -- 356 --
item  [196] = [ "Beer", 1, 1, "" ];
item  [197] = [ "Law-rune", 1, 1, "Rune" ];  // (2)
item  [198] = [ "Coins", 1, 38, "" ];  // (356)  -- 394 --
item  [199] = [ "Harralander", 1, 1, "Herb" ];  // 200
item  [200] = [ "Coins", 1, 52, "" ];  // (408)  -- 446 --
item  [201] = [ "Limpwurt root", 1, 1, "" ];
item  [202] = [ "Coins", 1, 38, "" ];  // (446)  -- 484 --
item  [203] = [ "Limpwurt root", 1, 1, "" ];
item  [204] = [ "Coins", 1, 38, "" ];  // (484)  -- 522 --
item  [205] = [ "Mind-rune", 1, 2, "Rune" ];  // (4)  -- 6 --
item  [206] = [ "Coins", 1, 38, "" ];  // (522)  -- 560 --
item  [207] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (1)
item  [208] = [ "Coins", 1, 52, "" ];  // (574)  -- 612 --
item  [209] = [ "Coins", 1, 3, "" ];  // 210, (577)  -- 615 --
item  [210] = [ "Harralander", 1, 1, "Herb" ];
item  [211] = [ "Coins", 1, 8, "" ];  // (585)  -- 623 --
item  [212] = [ "Iron dagger", 1, 1, "" ];
item  [213] = [ "Iron dagger", 1, 1, "" ];
item  [214] = [ "Coins", 1, 8, "" ];  // (593)  -- 631 -- 808 --
item  [215] = [ "Iron dagger", 1, 1, "" ];
item  [216] = [ "Large Iron Helmet", 1, 1, "" ];
item  [217] = [ "Iron dagger", 1, 1, "" ];
item  [218] = [ "Coins", 1, 52, "" ];  // (645)  -- 631 -- 860 --
item  [219] = [ "Mind-rune", 1, 2, "Rune" ];  // 220, (6)  -- 8 --
item  [220] = [ "Coins", 1, 3, "" ];  // (648)  -- 631 -- 863 --
item  [221] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [222] = [ "Coins", 1, 52, "" ];  // (700)  -- 631 -- 915 --
item  [223] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [224] = [ "Law-rune", 1, 1, "Rune" ];  // (3)
item  [225] = [ "Cosmic-rune", 1, 1, "Rune" ];  // (2)
item  [226] = [ "Coins", 1, 38, "" ];  // (738)  -- 631 -- 953 --
item  [227] = [ "Coins", 1, 3, "" ];  // (741)  -- 631 -- 956 --
item  [228] = [ "Nature-rune", 1, 4, "Rune" ];  // (8)
item  [229] = [ "Cosmic-rune", 1, 1, "Rune" ];  // 230, (3)  -- 4 --
item  [230] = [ "Coins", 1, 3, "" ];  // (744)  -- 631 -- 959 --
item  [231] = [ "Chaos-rune", 1, 1, "Rune" ];  // (1)
item  [232] = [ "Coins", 1, 38, "" ];  // (782)  -- 631 -- 997 --
item  [233] = [ "Coins", 1, 38, "" ];  // (820)  -- 631 -- 1035 --
item  [234] = [ "Coins", 1, 38, "" ];  // (858)  -- 631 -- 1073 --
item  [235] = [ "Coins", 1, 88, "" ];  // (946)  -- 631 -- 1161 --
item  [236] = [ "Coins", 1, 52, "" ];  // (998)  -- 631 -- 1213 --
item  [237] = [ "Coins", 1, 38, "" ];  // (1036)  -- 631 -- 1251 --
item  [238] = [ "Iron dagger", 1, 1, "" ];
item  [239] = [ "Iron dagger", 1, 1, "" ];  // 240
item  [240] = [ "Bronze Mace", 1, 1, "" ];
item  [241] = [ "Large Iron Helmet", 1, 1, "" ];
item  [242] = [ "Fire-rune", 1, 10, "Rune" ];  // (30)  -- 40 --
item  [243] = [ "Water-rune", 1, 5, "Rune" ];  // (5)

runs [2] = [ 243, 244 ];  // kills 73, drops 73

item  [244] = [ "Coins", 1, 38, "" ];  // 245  (38)
item  [245] = [ "Death-rune", 1, 1, "Rune" ];  //  (1)
item  [246] = [ "Coins", 1, 38, "" ];  //  (76)
item  [247] = [ "Coins", 1, 38, "" ];  //  (114)
item  [248] = [ "Coins", 1, 52, "" ];  //  (166)
item  [249] = [ "Steel Long Sword", 1, 1, "" ];  //  250
item  [250] = [ "Beer", 1, 1, "" ];
item  [251] = [ "Limpwurt root", 1, 1, "" ];
item  [252] = [ "Coins", 1, 15, "" ];  //  (181)
item  [253] = [ "Beer", 1, 1, "" ];
item  [254] = [ "Coins", 1, 38, "" ];  //  (219)  1 law and 1 cosmic on the ground
item  [255] = [ "Coins", 1, 52, "" ];  //  (271)
item  [256] = [ "Coins", 1, 15, "" ];  //  (286)
item  [257] = [ "Iron dagger", 1, 1, "" ];
item  [258] = [ "Coins", 1, 8, "" ];  //  (294)
item  [259] = [ "Coins", 1, 38, "" ];  //  260  (332)  2nd law rune on ground
item  [260] = [ "Coins", 1, 38, "" ];  //  (370)
item  [261] = [ "Iron dagger", 1, 1, "" ];
item  [262] = [ "Coins", 1, 38, "" ];  //  (408)
item  [263] = [ "Nature-rune", 1, 4, "Rune" ];  //  (4)
item  [264] = [ "Nothing", 1, 0, "" ];
item  [265] = [ "Iron Kite Shield", 1, 1, "" ];
item  [266] = [ "Fire-rune", 1, 10, "Rune" ];  //  (10)
item  [267] = [ "Fire-rune", 1, 10, "Rune" ];  //  (20)
item  [268] = [ "Mind-rune", 1, 2, "Rune" ];  //  (2)
item  [269] = [ "Coins", 1, 3, "" ];  //  270  (411)
item  [270] = [ "Iron dagger", 1, 1, "" ];
item  [271] = [ "Coins", 1, 38, "" ];  //  (449)
item  [272] = [ "Coins", 1, 8, "" ];  //  (457)
item  [273] = [ "Tarromin", 1, 1, "Herb" ];
item  [274] = [ "Coins", 1, 8, "" ];  //  (465)
item  [275] = [ "Coins", 1, 8, "" ];  //  (473)
item  [276] = [ "Coins", 1, 8, "" ];  //  (481)
item  [277] = [ "Coins", 1, 8, "" ];  //  (489)
item  [278] = [ "Coins", 1, 15, "" ];  //  (504)
item  [279] = [ "Coins", 1, 38, "" ];  //  280  (542)
item  [280] = [ "Limpwurt root", 1, 1, "" ];  // chaos rune on the ground
item  [281] = [ "Coins", 1, 52, "" ];  //  (594)
item  [282] = [ "Coins", 1, 38, "" ];  //  (632)
item  [283] = [ "Avantoe", 1, 1, "Herb" ];  // law and chaos on the ground
item  [284] = [ "Coins", 1, 3, "" ];  //  (635)
item  [285] = [ "Coins", 1, 38, "" ];  //  (673)
item  [286] = [ "Limpwurt root", 1, 1, "" ];
item  [287] = [ "Large Iron Helmet", 1, 1, "" ];  //  death rune on the ground
item  [288] = [ "Coins", 1, 38, "" ];  //  (711)  law rune on the ground
item  [289] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  290  (1)
item  [290] = [ "Limpwurt root", 1, 1, "" ];
item  [291] = [ "Water-rune", 1, 5, "Rune" ];  //  (5)
item  [292] = [ "Coins", 1, 38, "" ];  //  (749)
item  [293] = [ "Coins", 1, 3, "" ];  //  (752)
item  [294] = [ "Coins", 1, 8, "" ];  //  (760)
item  [295] = [ "Iron Kite Shield", 1, 1, "" ];
item  [296] = [ "Nature-rune", 1, 4, "Rune" ];  //  (8)
item  [297] = [ "Coins", 1, 15, "" ];  //  (775)
item  [298] = [ "Coins", 1, 88, "" ];  //  (863)
item  [299] = [ "Limpwurt root", 1, 1, "" ];  //  300
item  [300] = [ "Coins", 1, 15, "" ];  //  (878)

runs [3] = [ 300, 301 ];  // kills 57, drops 57

//  runs [4] = [ x, y ];  // kills ? ( y - 301 ), drops ? ( x - 300 )

/*

item  [000] = [ "Coins", 1, 3, "" ];  //  ()
item  [000] = [ "Coins", 1, 8, "" ];  //  ()
item  [000] = [ "Coins", 1, 15, "" ];  //  ()
item  [000] = [ "Coins", 1, 38, "" ];  //  ()
item  [000] = [ "Coins", 1, 41, "" ];  //  ()
item  [000] = [ "Coins", 1, 52, "" ];  //  ()
item  [000] = [ "Coins", 1, 88, "" ];  //  ()

item  [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [000] = [ "Marrentill", 1, 1, "Herb" ];
item  [000] = [ "Tarromin", 1, 1, "Herb" ];
item  [000] = [ "Harralander", 1, 1, "Herb" ];
item  [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [000] = [ "Avantoe", 1, 1, "Herb" ];

item  [000] = [ "Water-rune", 1, 5, "Rune" ];  //  ()
item  [000] = [ "Fire-rune", 1, 10, "Rune" ];  //  ()
item  [000] = [ "Mind-rune", 1, 2, "Rune" ];  //  ()
item  [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item  [000] = [ "Chaos-rune", 1, 1, "Rune" ];  //  ()
item  [000] = [ "Nature-rune", 1, 4, "Rune" ];  //  ()
item  [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()
item  [000] = [ "Death-rune", 1, 1, "Rune" ];  //  ()

item  [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [000] = [ "uncut emerald", 1, 1, "Gem" ];

item  [000] = [ "Half of a key (Loop)", 1, 1, "" ];

item  [000] = [ "Limpwurt root", 1, 1, "" ];
item  [000] = [ "Beer", 1, 1, "" ];

item  [000] = [ "Bronze Mace", 1, 1, "" ];
item  [000] = [ "Iron dagger", 1, 1, "" ];

item  [000] = [ "Large Iron Helmet", 1, 1, "" ];
item  [000] = [ "Iron Kite Shield", 1, 1, "" ];
item  [000] = [ "Steel Long Sword", 1, 1, "" ];

item  [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;   // total drops
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Giant";        // monster's name
var mcbl = 37;              // monster's combat level
var mindex = 98;            // index into monster data base
var mrpt = 2;               // number of non-breaking space to add after index name