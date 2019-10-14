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

var notes = "On my first run I only took 4 swordfish to get an idea which works better, food or prayer. The damage rate is to low for prayer, but a lot more food was needed to stay longer. Run 2 - 6 = 15, 17, 15, 17, 15 swordfish. I'm averaged about 4.46 lessers per swordfish.";

// run 1

item   [0] = [ "Coins", 1, 120, "" ];  //  (120)
item   [1] = [ "Coins", 1, 40, "" ];  //  (160)
item   [2] = [ "Coins", 1, 10, "" ];  //  (170)
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Coins", 1, 40, "" ];  //  (210)
item   [5] = [ "Coins", 1, 120, "" ];  //  (330)
item   [6] = [ "Fire-rune", 1, 20, "Rune" ];  //  (20)
item   [7] = [ "Coins", 1, 40, "" ];  //  (370)
item   [8] = [ "Gold", 1, 1, "" ];
item   [9] = [ "Coins", 1, 40, "" ];  //  (410)
item  [10] = [ "Coins", 1, 120, "" ];  //  (530)
item  [11] = [ "Large Steel Helmet", 1, 1, "" ];
item  [12] = [ "Coins", 1, 200, "" ];  //  (730)
item  [13] = [ "Coins", 1, 120, "" ];  //  (850)
item  [14] = [ "Coins", 1, 40, "" ];  //  (890)
item  [15] = [ "Coins", 1, 120, "" ];  //  (1010)
item  [16] = [ "Fire-rune", 1, 40, "Rune" ];  //  (60)
item  [17] = [ "Coins", 1, 10, "" ];  //  (1020)
item  [18] = [ "Coins", 1, 40, "" ];  //  (1060)
item  [19] = [ "Coins", 1, 200, "" ];  //  (1260)
item  [20] = [ "Mithril Chain Mail Body", 1, 1, "" ];
item  [21] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)

runs [0] = [ 21, 22 ];  // kills 22, drops 22

// run 2

item  [22] = [ "Coins", 1, 40, "" ];  //  (40)
item  [23] = [ "Coins", 1, 10, "" ];  //  (50)
item  [24] = [ "Coins", 1, 40, "" ];  //  (90)
item  [25] = [ "Coins", 1, 120, "" ];  //  (210)
item  [26] = [ "Coins", 1, 40, "" ];  //  (250)
item  [27] = [ "Coins", 1, 120, "" ];  //  (370)
item  [28] = [ "Gold", 1, 1, "" ];
item  [29] = [ "Fire-rune", 1, 40, "Rune" ];  //  (40)
item  [30] = [ "Coins", 1, 40, "" ];  //  (410)
item  [31] = [ "Coins", 1, 40, "" ];  //  (450)
item  [32] = [ "Coins", 1, 40, "" ];  //  (490)
item  [33] = [ "Coins", 1, 120, "" ];  //  (610)
item  [34] = [ "Coins", 1, 40, "" ];  //  (650)
item  [35] = [ "Coins", 1, 120, "" ];  //  (770)
item  [36] = [ "Coins", 1, 120, "" ];  //  (890)
item  [37] = [ "Coins", 1, 40, "" ];  //  (930)
item  [38] = [ "Mithril Chain Mail Body", 1, 1, "" ];
item  [39] = [ "Coins", 1, 120, "" ];  //  (1050)
item  [40] = [ "Coins", 1, 10, "" ];  //  (1060)
item  [41] = [ "Coins", 1, 120, "" ];  //  (1180)
item  [42] = [ "Coins", 1, 40, "" ];  //  (1220)
item  [43] = [ "Avantoe", 1, 1, "Herb" ];
item  [44] = [ "Coins", 1, 10, "" ];  //  (1230)
item  [45] = [ "Mithril Chain Mail Body", 1, 1, "" ];
item  [46] = [ "Coins", 1, 40, "" ];  //  (1270)
item  [47] = [ "Coins", 1, 40, "" ];  //  (1310)
item  [48] = [ "Coins", 1, 120, "" ];  //  (1430)
item  [49] = [ "Gold", 1, 1, "" ];
item  [50] = [ "Steel Axe", 1, 1, "" ];
item  [51] = [ "Coins", 1, 40, "" ];  //  (1470)
item  [52] = [ "Fire-rune", 1, 40, "Rune" ];  //  (80)
item  [53] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [54] = [ "Coins", 1, 120, "" ];  //  (1590)
item  [55] = [ "Large Steel Helmet", 1, 1, "" ];
item  [56] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (8)
item  [57] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (16)
item  [58] = [ "Coins", 1, 40, "" ];  //  (1630)
item  [59] = [ "Nothing", 1, 0, "" ];
item  [60] = [ "Coins", 1, 40, "" ];  //  (1670)
item  [61] = [ "Coins", 1, 200, "" ];  //  (1870)
item  [62] = [ "Coins", 1, 120, "" ];  //  (1990)
item  [63] = [ "Coins", 1, 40, "" ];  //  (2030)
item  [64] = [ "Coins", 1, 120, "" ];  //  (2150)
item  [65] = [ "Coins", 1, 40, "" ];  //  (2190)
item  [66] = [ "Steel Axe", 1, 1, "" ];
item  [67] = [ "Large Steel Helmet", 1, 1, "" ];
item  [68] = [ "Coins", 1, 120, "" ];  //  (2310)
item  [69] = [ "Nothing", 1, 0, "" ];
item  [70] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (24)
item  [71] = [ "Coins", 1, 120, "" ];  //  (2430)
item  [72] = [ "Medium Rune Helmet", 1, 1, "" ];
item  [73] = [ "Coins", 1, 120, "" ];  //  (2550)
item  [74] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (32)
item  [75] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (40)
item  [76] = [ "Steel Axe", 1, 1, "" ];
item  [77] = [ "Steel Axe", 1, 1, "" ];
item  [78] = [ "Fire-rune", 1, 40, "Rune" ];  //  (120)
item  [79] = [ "Coins", 1, 120, "" ];  //  (2670)
item  [80] = [ "Coins", 1, 40, "" ];  //  (2710)
item  [81] = [ "Coins", 1, 40, "" ];  //  (2750)
item  [82] = [ "Coins", 1, 40, "" ];  //  (2790)
item  [83] = [ "Coins", 1, 120, "" ];  //  (2910)
item  [84] = [ "Coins", 1, 40, "" ];  //  (2950)
item  [85] = [ "Fire-rune", 1, 40, "Rune" ];  //  (160)
item  [86] = [ "Large Steel Helmet", 1, 1, "" ];
item  [87] = [ "Coins", 1, 40, "" ];  //  (2990)
item  [88] = [ "Mithril Square Shield", 1, 1, "" ];
item  [89] = [ "Coins", 1, 40, "" ];  //  (3030)
item  [90] = [ "Coins", 1, 40, "" ];  //  (3070)
item  [91] = [ "Large Steel Helmet", 1, 1, "" ];
item  [92] = [ "Coins", 1, 200, "" ];  //  (3270)
item  [93] = [ "Coins", 1, 120, "" ];  //  (3390)
item  [94] = [ "wine (Jug of)", 1, 2, "" ];
item  [95] = [ "Coins", 1, 120, "" ];  //  (3510)
item  [96] = [ "Coins", 1, 200, "" ];  //  (3710)
item  [97] = [ "wine (Jug of)", 1, 2, "" ];

runs [1] = [ 97, 98 ];  // kills 76, drops 76

// run 3

item  [98] = [ "Large Steel Helmet", 1, 1, "" ];
item  [99] = [ "Coins", 1, 40, "" ];  //  (40)
item [100] = [ "Steel Scimitar", 1, 1, "" ];
item [101] = [ "Coins", 1, 120, "" ];  //  (160)
item [102] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (8)
item [103] = [ "Coins", 1, 120, "" ];  //  (280)
item [104] = [ "Coins", 1, 200, "" ];  //  (480)
item [105] = [ "Coins", 1, 40, "" ];  //  (520)
item [106] = [ "Coins", 1, 40, "" ];  //  (560)
item [107] = [ "Coins", 1, 200, "" ];  //  (760)
item [108] = [ "Coins", 1, 200, "" ];  //  (960)
item [109] = [ "Coins", 1, 120, "" ];  //  (1080)
item [110] = [ "Steel Axe", 1, 1, "" ];
item [111] = [ "Coins", 1, 200, "" ];  //  (1280)
item [112] = [ "Steel Axe", 1, 1, "" ];
item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Fire-rune", 1, 40, "Rune" ];  //  (40)
item [115] = [ "Coins", 1, 120, "" ];  //  (1400)
item [116] = [ "Coins", 1, 120, "" ];  //  (1520)
item [117] = [ "Fire-rune", 1, 40, "Rune" ];  //  (80)
item [118] = [ "Coins", 1, 120, "" ];  //  (1640)
item [119] = [ "Coins", 1, 200, "" ];  //  (1840)
item [120] = [ "Coins", 1, 10, "" ];  //  (1850)
item [121] = [ "Fire-rune", 1, 40, "Rune" ];  //  (120)
item [122] = [ "Coins", 1, 40, "" ];  //  (1890)
item [123] = [ "Coins", 1, 120, "" ];  //  (2010)
item [124] = [ "Coins", 1, 120, "" ];  //  (2130)
item [125] = [ "Coins", 1, 120, "" ];  //  (2250)
item [126] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (16)
item [127] = [ "Tarromin", 1, 1, "Herb" ];
item [128] = [ "Coins", 1, 120, "" ];  //  (2370)
item [129] = [ "Coins", 1, 120, "" ];  //  (2490)
item [130] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (24)
item [131] = [ "Coins", 1, 40, "" ];  //  (2530)
item [132] = [ "Coins", 1, 200, "" ];  //  (2730)
item [133] = [ "Steel Axe", 1, 1, "" ];
item [134] = [ "Coins", 1, 40, "" ];  //  (2770)
item [135] = [ "Coins", 1, 120, "" ];  //  (2890)
item [136] = [ "Coins", 1, 120, "" ];  //  (3010)
item [137] = [ "Fire-rune", 1, 40, "Rune" ];  //  (160)
item [138] = [ "Coins", 1, 40, "" ];  //  (3050)
item [139] = [ "Coins", 1, 40, "" ];  //  (3090)
item [140] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (32)
item [141] = [ "Coins", 1, 40, "" ];  //  (3130)
item [142] = [ "Coins", 1, 120, "" ];  //  (3250)
item [143] = [ "Coins", 1, 40, "" ];  //  (3290)
item [144] = [ "Coins", 1, 40, "" ];  //  (3330)
item [145] = [ "Coins", 1, 40, "" ];  //  (3370)
item [146] = [ "Coins", 1, 10, "" ];  //  (3380)
item [147] = [ "Steel Axe", 1, 1, "" ];
item [148] = [ "Coins", 1, 120, "" ];  //  (3500)
item [149] = [ "Fire-rune", 1, 40, "Rune" ];  //  (200)
item [150] = [ "Coins", 1, 120, "" ];  //  (3620)
item [151] = [ "Coins", 1, 40, "" ];  //  (3660)
item [152] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (40)
item [153] = [ "wine (Jug of)", 1, 2, "" ];
item [154] = [ "Coins", 1, 120, "" ];  //  (3780)
item [155] = [ "Steel Scimitar", 1, 1, "" ];
item [156] = [ "Nothing", 1, 0, "" ];
item [157] = [ "Coins", 1, 120, "" ];  //  (3900)
item [158] = [ "Coins", 1, 200, "" ];  //  (4100)
item [159] = [ "Coins", 1, 120, "" ];  //  (4220)
item [160] = [ "Fire-rune", 1, 40, "Rune" ];  //  (240)
item [161] = [ "Large Steel Helmet", 1, 1, "" ];

runs [2] = [ 161, 162 ];  // kills 64, drops 64

// run 4

item [162] = [ "Coins", 1, 120, "" ];  //  (120)
item [163] = [ "Coins", 1, 120, "" ];  //  (240)
item [164] = [ "Coins", 1, 120, "" ];  //  (360)
item [165] = [ "Coins", 1, 40, "" ];  //  (400)
item [166] = [ "Coins", 1, 40, "" ];  //  (440)
item [167] = [ "Coins", 1, 120, "" ];  //  (560)
item [168] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [169] = [ "Coins", 1, 200, "" ];  //  (760)
item [170] = [ "Coins", 1, 40, "" ];  //  (800)
item [171] = [ "Coins", 1, 120, "" ];  //  (920)
item [172] = [ "Coins", 1, 120, "" ];  //  (1040)
item [173] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (8)
item [174] = [ "wine (Jug of)", 1, 2, "" ];
item [175] = [ "Coins", 1, 120, "" ];  //  (1160)
item [176] = [ "Fire-rune", 1, 40, "Rune" ];  //  (40)
item [177] = [ "Coins", 1, 120, "" ];  //  (1280)
item [178] = [ "Coins", 1, 120, "" ];  //  (1400)
item [179] = [ "Coins", 1, 40, "" ];  //  (1440)
item [180] = [ "Coins", 1, 40, "" ];  //  (1480)
item [181] = [ "Coins", 1, 120, "" ];  //  (1600)
item [182] = [ "Coins", 1, 200, "" ];  //  (1800)
item [183] = [ "Coins", 1, 40, "" ];  //  (1840)
item [184] = [ "Coins", 1, 120, "" ];  //  (1960)
item [185] = [ "Coins", 1, 120, "" ];  //  (2080)
item [186] = [ "Coins", 1, 200, "" ];  //  (2280)
item [187] = [ "Coins", 1, 120, "" ];  //  (2400)
item [188] = [ "Coins", 1, 40, "" ];  //  (2440)
item [189] = [ "Coins", 1, 120, "" ];  //  (2560)
item [190] = [ "Coins", 1, 120, "" ];  //  (2680)
item [191] = [ "Coins", 1, 120, "" ];  //  (2800)
item [192] = [ "Coins", 1, 120, "" ];  //  (2920)
item [193] = [ "Coins", 1, 40, "" ];  //  (2960)
item [194] = [ "Mithril Chain Mail Body", 1, 1, "" ];
item [195] = [ "Coins", 1, 120, "" ];  //  (3080)
item [196] = [ "Coins", 1, 40, "" ];  //  (3120)
item [197] = [ "Death-rune", 1, 2, "Rune" ];  //  (4)
item [198] = [ "Death-rune", 1, 2, "Rune" ];  //  (6)
item [199] = [ "Coins", 1, 120, "" ];  //  (3240)
item [200] = [ "Coins", 1, 10, "" ];  //  (3250)
item [201] = [ "Fire-rune", 1, 40, "Rune" ];  //  (80)
item [202] = [ "Coins", 1, 40, "" ];  //  (3290)
item [203] = [ "Fire-rune", 1, 40, "Rune" ];  //  (120)
item [204] = [ "Coins", 1, 40, "" ];  //  (3330)
item [205] = [ "Coins", 1, 120, "" ];  //  (3450)
item [206] = [ "Coins", 1, 120, "" ];  //  (3570)
item [207] = [ "Fire-rune", 1, 20, "Rune" ];  //  (140)
item [208] = [ "Coins", 1, 120, "" ];  //  (3690)
item [209] = [ "Coins", 1, 120, "" ];  //  (3810)
item [210] = [ "Coins", 1, 120, "" ];  //  (3930)
item [211] = [ "Steel Axe", 1, 1, "" ];
item [212] = [ "Coins", 1, 120, "" ];  //  (4050)
item [213] = [ "Steel Scimitar", 1, 1, "" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Coins", 1, 200, "" ];  //  (4250)
item [216] = [ "Coins", 1, 40, "" ];  //  (4290)
item [217] = [ "uncut ruby", 1, 1, "Gem" ];
item [218] = [ "Coins", 1, 120, "" ];  //  (4410)
item [219] = [ "Coins", 1, 120, "" ];  //  (4530)
item [220] = [ "Coins", 1, 120, "" ];  //  (4650)
item [221] = [ "Coins", 1, 120, "" ];  //  (4770)

runs [3] = [ 221, 222 ];  // kills 60, drops 60

// run 5

item [222] = [ "Coins", 1, 40, "" ];  //  (40)
item [223] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [224] = [ "Large Steel Helmet", 1, 1, "" ];
item [225] = [ "Coins", 1, 40, "" ];  //  (80)
item [226] = [ "Coins", 1, 120, "" ];  //  (200)
item [227] = [ "Large Steel Helmet", 1, 1, "" ];
item [228] = [ "Coins", 1, 40, "" ];  //  (240)
item [229] = [ "Coins", 1, 120, "" ];  //  (360)
item [230] = [ "Coins", 1, 120, "" ];  //  (480)
item [231] = [ "Coins", 1, 120, "" ];  //  (600)
item [232] = [ "Coins", 1, 40, "" ];  //  (640)
item [233] = [ "Coins", 1, 40, "" ];  //  (680)
item [234] = [ "Coins", 1, 10, "" ];  //  (690)
item [235] = [ "Large Steel Helmet", 1, 1, "" ];
item [236] = [ "Coins", 1, 120, "" ];  //  (810)
item [237] = [ "Coins", 1, 10, "" ];  //  (820)
item [238] = [ "Coins", 1, 40, "" ];  //  (860)
item [239] = [ "Death-rune", 1, 2, "Rune" ];  //  (4)
item [240] = [ "Coins", 1, 120, "" ];  //  (980)
item [241] = [ "Coins", 1, 120, "" ];  //  (1100)
item [242] = [ "Coins", 1, 40, "" ];  //  (1140)
item [243] = [ "Coins", 1, 120, "" ];  //  (1260)
item [244] = [ "Coins", 1, 10, "" ];  //  (1270)
item [245] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (8)
item [246] = [ "Steel Scimitar", 1, 1, "" ];
item [247] = [ "Coins", 1, 200, "" ];  //  (1470)
item [248] = [ "Coins", 1, 40, "" ];  //  (1510)
item [249] = [ "Steel Axe", 1, 1, "" ];
item [250] = [ "Coins", 1, 10, "" ];  //  (1520)
item [251] = [ "wine (Jug of)", 1, 2, "" ];
item [252] = [ "Coins", 1, 120, "" ];  //  (1640)
item [253] = [ "Death-rune", 1, 2, "Rune" ];  //  (6)
item [254] = [ "Coins", 1, 200, "" ];  //  (1840)
item [255] = [ "Coins", 1, 120, "" ];  //  (1960)
item [256] = [ "Coins", 1, 200, "" ];  //  (2160)
item [257] = [ "Coins", 1, 200, "" ];  //  (2360)
item [258] = [ "Coins", 1, 10, "" ];  //  (2370)
item [259] = [ "Coins", 1, 120, "" ];  //  (2490)
item [260] = [ "Coins", 1, 40, "" ];  //  (2530)
item [261] = [ "Coins", 1, 40, "" ];  //  (2570)
item [262] = [ "Coins", 1, 120, "" ];  //  (2690)
item [263] = [ "Fire-rune", 1, 40, "Rune" ];  //  (40)
item [264] = [ "Coins", 1, 40, "" ];  //  (2730)
item [265] = [ "Fire-rune", 1, 40, "Rune" ];  //  (80)
item [266] = [ "Coins", 1, 40, "" ];  //  (2770)
item [267] = [ "Fire-rune", 1, 50, "Rune" ];  //  (130)
item [268] = [ "Coins", 1, 40, "" ];  //  (2810)
item [269] = [ "Coins", 1, 40, "" ];  //  (2850)
item [270] = [ "Coins", 1, 120, "" ];  //  (2970)
item [271] = [ "Coins", 1, 120, "" ];  //  (3090)
item [272] = [ "Coins", 1, 120, "" ];  //  (3210)
item [273] = [ "Coins", 1, 120, "" ];  //  (3330)
item [274] = [ "Fire-rune", 1, 40, "Rune" ];  //  (170)
item [275] = [ "Death-rune", 1, 2, "Rune" ];  //  (8)
item [276] = [ "Coins", 1, 120, "" ];  //  (3450)
item [277] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (16)
item [278] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (24)
item [279] = [ "Gold", 1, 1, "" ];
item [280] = [ "Coins", 1, 40, "" ];  //  (3490)
item [281] = [ "Coins", 1, 120, "" ];  //  (3610)
item [282] = [ "Coins", 1, 120, "" ];  //  (3730)
item [283] = [ "Coins", 1, 200, "" ];  //  (3930)
item [284] = [ "Coins", 1, 120, "" ];  //  (4050)
item [285] = [ "Steel Axe", 1, 1, "" ];
item [286] = [ "Steel Axe", 1, 1, "" ];
item [287] = [ "Coins", 1, 40, "" ];  //  (4090)
item [288] = [ "Steel Axe", 1, 1, "" ];
item [289] = [ "Medium Rune Helmet", 1, 1, "" ];
item [290] = [ "Coins", 1, 10, "" ];  //  (4100)
item [291] = [ "Mithril Square Shield", 1, 1, "" ];
item [292] = [ "Coins", 1, 40, "" ];  //  (4140)

runs [4] = [ 292, 293 ];  // kills 71, drops 71

// run 6

item [293] = [ "Coins", 1, 40, "" ];  //  (40)
item [294] = [ "Coins", 1, 120, "" ];  //  (160)
item [295] = [ "wine (Jug of)", 1, 2, "" ];
item [296] = [ "Death-rune", 1, 2, "Rune" ];  //  (2)
item [297] = [ "uncut sapphire", 1, 1, "Gem" ];
item [298] = [ "Coins", 1, 40, "" ];  //  (200)
item [299] = [ "Fire-rune", 1, 40, "Rune" ];  //  (40)
item [300] = [ "Coins", 1, 120, "" ];  //  (320)
item [301] = [ "Fire-rune", 1, 40, "Rune" ];  //  (80)
item [302] = [ "Coins", 1, 40, "" ];  //  (360)
item [303] = [ "Coins", 1, 40, "" ];  //  (400)
item [304] = [ "Coins", 1, 10, "" ];  //  (410)
item [305] = [ "Fire-rune", 1, 40, "Rune" ];  //  (120)
item [306] = [ "Nothing", 1, 0, "" ];
item [307] = [ "Coins", 1, 120, "" ];  //  (530)
item [308] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (8)
item [309] = [ "Coins", 1, 120, "" ];  //  (650)
item [310] = [ "Death-rune", 1, 2, "Rune" ];  //  (4)
item [311] = [ "Coins", 1, 40, "" ];  //  (690)
item [312] = [ "Mithril Square Shield", 1, 1, "" ];
item [313] = [ "Coins", 1, 120, "" ];  //  (810)
item [314] = [ "Coins", 1, 120, "" ];  //  (930)
item [315] = [ "Fire-rune", 1, 40, "Rune" ];  //  (160)
item [316] = [ "Coins", 1, 120, "" ];  //  (1050)
item [317] = [ "Guam Leaf", 1, 1, "Herb" ];
item [318] = [ "Coins", 1, 120, "" ];  //  (1170)
item [319] = [ "Large Steel Helmet", 1, 1, "" ];
item [320] = [ "Coins", 1, 200, "" ];  //  (1370)
item [321] = [ "Coins", 1, 10, "" ];  //  (1380)
item [322] = [ "Coins", 1, 40, "" ];  //  (1420)
item [323] = [ "uncut sapphire", 1, 1, "Gem" ];
item [324] = [ "Coins", 1, 120, "" ];  //  (1540)
item [325] = [ "Fire-rune", 1, 40, "Rune" ];  //  (200)
item [326] = [ "Coins", 1, 40, "" ];  //  (1580)
item [327] = [ "Coins", 1, 120, "" ];  //  (1700)
item [328] = [ "Coins", 1, 120, "" ];  //  (1820)
item [329] = [ "Coins", 1, 40, "" ];  //  (1860)
item [330] = [ "Steel Scimitar", 1, 1, "" ];
item [331] = [ "Large Steel Helmet", 1, 1, "" ];
item [332] = [ "Coins", 1, 40, "" ];  //  (1900)
item [333] = [ "Coins", 1, 40, "" ];  //  (1940)
item [334] = [ "Coins", 1, 120, "" ];  //  (2060)
item [335] = [ "Coins", 1, 120, "" ];  //  (2180)
item [336] = [ "Coins", 1, 40, "" ];  //  (2220)
item [337] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (16)
item [338] = [ "Coins", 1, 120, "" ];  //  (2340)
item [339] = [ "Steel Axe", 1, 1, "" ];
item [340] = [ "Coins", 1, 40, "" ];  //  (2380)
item [341] = [ "Coins", 1, 40, "" ];  //  (2420)
item [342] = [ "Coins", 1, 40, "" ];  //  (2460)
item [343] = [ "Coins", 1, 120, "" ];  //  (2580)
item [344] = [ "Coins", 1, 120, "" ];  //  (2700)
item [345] = [ "Coins", 1, 40, "" ];  //  (2740)
item [346] = [ "Coins", 1, 120, "" ];  //  (2860)
item [347] = [ "Coins", 1, 120, "" ];  //  (2980)
item [348] = [ "Coins", 1, 40, "" ];  //  (3020)
item [349] = [ "Death-rune", 1, 2, "Rune" ];  //  (6)
item [350] = [ "Steel Axe", 1, 1, "" ];
item [351] = [ "Coins", 1, 10, "" ];  //  (3030)
item [352] = [ "Death-rune", 1, 2, "Rune" ];  //  (8)
item [353] = [ "Coins", 1, 40, "" ];  //  (3070)
item [354] = [ "Nothing", 1, 0, "" ];
item [355] = [ "Coins", 1, 40, "" ];  //  (3110)
item [356] = [ "Coins", 1, 200, "" ];  //  (3310)
item [357] = [ "Harralander", 1, 1, "Herb" ];
item [358] = [ "Coins", 1, 40, "" ];  //  (3350)
item [359] = [ "Large Steel Helmet", 1, 1, "" ];
item [360] = [ "Coins", 1, 200, "" ];  //  (3550)
item [361] = [ "Chaos-rune", 1, 8, "Rune" ];  //  (24)
item [362] = [ "Coins", 1, 120, "" ];  //  (3670)
item [363] = [ "Coins", 1, 120, "" ];  //  (3790)
item [364] = [ "Steel Scimitar", 1, 1, "" ];
item [365] = [ "Coins", 1, 200, "" ];  //  (3990)
item [366] = [ "Coins", 1, 120, "" ];  //  (4110)
item [367] = [ "Coins", 1, 40, "" ];  //  (4150)
item [368] = [ "Death-rune", 1, 2, "Rune" ];  //  (10)
item [369] = [ "Coins", 1, 40, "" ];  //  (4190)

runs [5] = [ 369, 370 ];  // kills 77, drops 77

// run 7

// runs [6] = [ x, y ];  // kills ? ( y - 370 ), drops ? ( x - 369 )

/*
item [000] = [ "Coins", 1, 10, "" ];  //  ()
item [000] = [ "Coins", 1, 40, "" ];  //  ()
item [000] = [ "Coins", 1, 120, "" ];  //  ()
item [000] = [ "Coins", 1, 200, "" ];  //  ()

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

item [000] = [ "Fire-rune", 1, 20, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 40, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 2, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Steel Axe", 1, 1, "" ];
item [000] = [ "Steel Scimitar", 1, 1, "" ];

item [000] = [ "Large Steel Helmet", 1, 1, "" ];
item [000] = [ "Mithril Square Shield", 1, 1, "" ];
item [000] = [ "Mithril Chain Mail Body", 1, 1, "" ];
item [000] = [ "Medium Rune Helmet", 1, 1, "" ];
item [000] = [ "Rune Chain Mail Body", 1, 1, "" ];

item [000] = [ "wine (Jug of)", 1, 2, "" ];
item [000] = [ "Gold", 1, 1, "" ];
item [000] = [ "gold Nuggets", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Lesser Demon";        // monster's name
var mcbl = 79;                     // monster's combat level
var mindex = 149;                  // index into monster data base
var mrpt = 1;                      // number of non-breaking space to add after index name