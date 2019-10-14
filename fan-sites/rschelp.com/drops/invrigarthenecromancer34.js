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

var notes = "Killing the Necromancer 300 times required killing 2400 zombie(24), so it took awhile. Once you kill the 7 zombies he throws at you, then you can attack him. Once he's killed you fight his zombie.<br /><br />To get the Necromancer's drop, I had to un-wield my sword once his hits dropped below half and fought with my fists. Once he died, then I clicked away to move the zombie fight away from the Necromancer's drop. Wielded my sword and killed the zombie.<br /><br />I did not collect the coins that were dropped because it was to easy to mix the coins of the zombies in with the Necromancer's. I collected the bones to keep track of when the next fight would be with the Necromancer. I did pick up the gems and cosmic runes the zombies dropped. With so many runes dropped, I needed to go back to the bank and drop off the gems and the cosmic runes dropped by the zombies.<br /><br />Things really slow down if the Necromancer stands in front of the door and I clicked on him and hit the door or if I exit and head back to the bank and I am not fast enough closing the door. You spend a bit of time chasing him around the building.<br /><br />Drop 95 is a guess. I know that air-runes were dropped. At that point the number being dropped was only 12 and that's what I recorded. However, before I could pickup the drop the server crashed. When I attempted to log back on, world's 2 and 3 were off line. I had to wait for about and hour to log back in. When I got back on the drop was gone but the last zombie was still wandering around.<br /><br />During the last 2 days, I worked on the update to the drop table to add a drop event pop-up menu to allow you to see how many of the selected event occurred each run.";

//run 1

item   [0] = [ "Coins", 1, 29, "" ];  //  didn't keep the coins
item   [1] = [ "Water-rune", 1, 7, "Rune" ];  //  (7)
item   [2] = [ "Coins", 1, 29, "" ];
item   [3] = [ "Coins", 1, 4, "" ];
item   [4] = [ "Coins", 1, 4, "" ];
item   [5] = [ "Nothing", 1, 0, "" ];
item   [6] = [ "Body-rune", 1, 7, "Rune" ];  //  (7)
item   [7] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item   [8] = [ "Water-rune", 1, 7, "Rune" ];  //  (14)
item   [9] = [ "robe of Zamorak (top)", 1, 1, "" ];
item  [10] = [ "Nature-rune", 1, 3, "Rune" ];  //  (6)
item  [11] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item  [12] = [ "Coins", 1, 1, "" ];
item  [13] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item  [14] = [ "Air-rune", 1, 12, "Rune" ];  //  (12)
item  [15] = [ "Coins", 1, 2, "" ];
item  [16] = [ "Coins", 1, 2, "" ];
item  [17] = [ "Staff", 1, 1, "" ];
item  [18] = [ "Earth-rune", 1, 24, "Rune" ];  //  (24)
item  [19] = [ "Body-rune", 1, 7, "Rune" ];  //  (14)
item  [20] = [ "Body-rune", 1, 7, "Rune" ];  //  (21)
item  [21] = [ "Coins", 1, 2, "" ];

//server disconnect, dropped some coins. unknown quantity!

item  [22] = [ "Coins", 1, 4, "" ];
item  [23] = [ "Mind-rune", 1, 7, "Rune" ];  //  (7)
item  [24] = [ "Coins", 1, 29, "" ];
item  [25] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [26] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (6)
item  [27] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (9)
item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Air-rune", 1, 12, "Rune" ];  //  (24)
item  [30] = [ "Staff", 1, 1, "" ];
item  [31] = [ "Nothing", 1, 0, "" ];
item  [32] = [ "robe of Zamorak (top)", 1, 1, "" ];
item  [33] = [ "Nature-rune", 1, 3, "Rune" ];  //  (9)
item  [34] = [ "Nothing", 1, 0, "" ];
item  [35] = [ "Fire-rune", 1, 7, "Rune" ];  //  (7)
item  [36] = [ "Nature-rune", 1, 3, "Rune" ];  //  (12)
item  [37] = [ "Nature-rune", 1, 3, "Rune" ];  //  (15)
item  [38] = [ "Body-rune", 1, 7, "Rune" ];  //  (28)
item  [39] = [ "Fire-rune", 1, 12, "Rune" ];  //  (19)
item  [40] = [ "Coins", 1, 1, "" ];
item  [41] = [ "Nature-rune", 1, 3, "Rune" ];  //  (18)
item  [42] = [ "Coins", 1, 2, "" ];
item  [43] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item  [44] = [ "Fire-rune", 1, 12, "Rune" ];  //  (31)
item  [45] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (12)
item  [46] = [ "Nature-rune", 1, 3, "Rune" ];  //  (21)
item  [47] = [ "Coins", 1, 4, "" ];
item  [48] = [ "Coins", 1, 1, "" ];
item  [49] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (15)
item  [50] = [ "Water-rune", 1, 7, "Rune" ];  //  (21)
item  [51] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [52] = [ "Body-rune", 1, 7, "Rune" ];  //  (35)
item  [53] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item  [54] = [ "Coins", 1, 1, "" ];
item  [55] = [ "Coins", 1, 1, "" ];
item  [56] = [ "Coins", 1, 1, "" ];
item  [57] = [ "Water-rune", 1, 12, "Rune" ];  //  (33)
item  [58] = [ "Coins", 1, 4, "" ];
item  [59] = [ "Staff", 1, 1, "" ];
item  [60] = [ "Earth-rune", 1, 7, "Rune" ];  //  (31)
item  [61] = [ "Earth-rune", 1, 24, "Rune" ];  //  (55)
item  [62] = [ "Coins", 1, 2, "" ];
item  [63] = [ "Nature-rune", 1, 3, "Rune" ];  //  (24)
item  [64] = [ "Nothing", 1, 0, "" ];
item  [65] = [ "Earth-rune", 1, 7, "Rune" ];  //  (62)
item  [66] = [ "Staff", 1, 1, "" ];
item  [67] = [ "Nothing", 1, 0, "" ];
item  [68] = [ "Coins", 1, 2, "" ];
item  [69] = [ "Coins", 1, 2, "" ];
item  [70] = [ "Earth-rune", 1, 24, "Rune" ];  //  (86)
item  [71] = [ "Body-rune", 1, 12, "Rune" ];  //  (47)
item  [72] = [ "Fire-rune", 1, 7, "Rune" ];  //  (38)
item  [73] = [ "Coins", 1, 4, "" ];
item  [74] = [ "Coins", 1, 2, "" ];
item  [75] = [ "Earth-rune", 1, 7, "Rune" ];  //  (93)
item  [76] = [ "Coins", 1, 4, "" ];
item  [77] = [ "Nothing", 1, 0, "" ];
item  [78] = [ "Air-rune", 1, 12, "Rune" ];  //  (36)
item  [79] = [ "Coins", 1, 2, "" ];
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Coins", 1, 2, "" ];
item  [82] = [ "Earth-rune", 1, 7, "Rune" ];  //  (100)
item  [83] = [ "Nature-rune", 1, 3, "Rune" ];  //  (27)
item  [84] = [ "Coins", 1, 2, "" ];
item  [85] = [ "Nature-rune", 1, 3, "Rune" ];  //  (30)
item  [86] = [ "Staff", 1, 1, "" ];
item  [87] = [ "Coins", 1, 1, "" ];
item  [88] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (18)
item  [89] = [ "Coins", 1, 4, "" ];
item  [90] = [ "Coins", 1, 1, "" ];
item  [91] = [ "Staff", 1, 1, "" ];
item  [92] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "Body-rune", 1, 7, "Rune" ];  //  (54)
item  [95] = [ "Air-rune", 1, 12, "Rune" ];  //  (48) servers crashed!
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item  [99] = [ "Coins", 1, 2, "" ];
item [100] = [ "Coins", 1, 2, "" ];
item [101] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item [102] = [ "Staff", 1, 1, "" ];
item [103] = [ "Staff", 1, 1, "" ];
item [104] = [ "Coins", 1, 1, "" ];
item [105] = [ "Coins", 1, 2, "" ];
item [106] = [ "Mind-rune", 1, 7, "Rune" ];  //  (14)
item [107] = [ "Fire-rune", 1, 12, "Rune" ];  //  (50)
item [108] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [109] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [110] = [ "Coins", 1, 1, "" ];
item [111] = [ "Coins", 1, 1, "" ];
item [112] = [ "robe of Zamorak (top)", 1, 1, "" ];
item [113] = [ "Water-rune", 1, 12, "Rune" ];  //  (45)
item [114] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [115] = [ "Staff", 1, 1, "" ];
item [116] = [ "Coins", 1, 2, "" ];
item [117] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [118] = [ "Coins", 1, 2, "" ];
item [119] = [ "Coins", 1, 1, "" ];
item [120] = [ "Coins", 1, 2, "" ];
item [121] = [ "Coins", 1, 4, "" ];
item [122] = [ "Coins", 1, 1, "" ];
item [123] = [ "Coins", 1, 4, "" ];
item [124] = [ "Staff", 1, 1, "" ];
item [125] = [ "Earth-rune", 1, 7, "Rune" ];  //  (107)
item [126] = [ "Nature-rune", 1, 3, "Rune" ];  //  (33)
item [127] = [ "Earth-rune", 1, 12, "Rune" ];  //  (119)
item [128] = [ "Coins", 1, 2, "" ];
item [129] = [ "Coins", 1, 1, "" ];
item [130] = [ "Coins", 1, 4, "" ];
item [131] = [ "Staff", 1, 1, "" ];
item [132] = [ "Nothing", 1, 0, "" ];
item [133] = [ "Coins", 1, 1, "" ];
item [134] = [ "robe of Zamorak (top)", 1, 1, "" ];
item [135] = [ "Coins", 1, 2, "" ];
item [136] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "robe of Zamorak (top)", 1, 1, "" ];
item [140] = [ "Coins", 1, 2, "" ];
item [141] = [ "Staff", 1, 1, "" ];
item [142] = [ "Coins", 1, 1, "" ];
item [143] = [ "Coins", 1, 2, "" ];
item [144] = [ "Earth-rune", 1, 12, "Rune" ];  //  (131)
item [145] = [ "Body-rune", 1, 7, "Rune" ];  //  (61)
item [146] = [ "Coins", 1, 1, "" ];
item [147] = [ "Water-rune", 1, 7, "Rune" ];  //  (52)
item [148] = [ "Coins", 1, 2, "" ];
item [149] = [ "Body-rune", 1, 12, "Rune" ];  //  (73)
item [150] = [ "Staff", 1, 1, "" ];
item [151] = [ "Mind-rune", 1, 7, "Rune" ];  //  (21)
item [152] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (21)
item [153] = [ "Coins", 1, 29, "" ];
item [154] = [ "Water-rune", 1, 7, "Rune" ];  //  (59)
item [155] = [ "Nothing", 1, 0, "" ];
item [156] = [ "Water-rune", 1, 12, "Rune" ];  //  (71)
item [157] = [ "Nature-rune", 1, 3, "Rune" ];  //  (36)
item [158] = [ "Coins", 1, 2, "" ];
item [159] = [ "Water-rune", 1, 7, "Rune" ];  //  (78)
item [160] = [ "Coins", 1, 1, "" ];
item [161] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [162] = [ "Coins", 1, 1, "" ];
item [163] = [ "Earth-rune", 1, 7, "Rune" ];  //  (138)
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Coins", 1, 2, "" ];
item [166] = [ "Coins", 1, 2, "" ];
item [167] = [ "Coins", 1, 1, "" ];
item [168] = [ "Water-rune", 1, 7, "Rune" ];  //  (85)
item [169] = [ "Mind-rune", 1, 12, "Rune" ];  //  (33)
item [170] = [ "Staff", 1, 1, "" ];
item [171] = [ "Coins", 1, 29, "" ];
item [172] = [ "Fire-rune", 1, 7, "Rune" ];  //  (57)
item [173] = [ "Coins", 1, 29, "" ];
item [174] = [ "Earth-rune", 1, 24, "Rune" ];  //  (162)
item [175] = [ "Coins", 1, 4, "" ];
item [176] = [ "Coins", 1, 2, "" ];
item [177] = [ "Staff", 1, 1, "" ];
item [178] = [ "Coins", 1, 4, "" ];
item [179] = [ "Coins", 1, 4, "" ];
item [180] = [ "Coins", 1, 2, "" ];
item [181] = [ "Air-rune", 1, 7, "Rune" ];  //  (55)
item [182] = [ "Earth-rune", 1, 12, "Rune" ];  //  (174)
item [183] = [ "Coins", 1, 4, "" ];
item [184] = [ "Coins", 1, 29, "" ];
item [185] = [ "Nothing", 1, 0, "" ];
item [186] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (24)
item [187] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (27)
item [188] = [ "Water-rune", 1, 12, "Rune" ];  //  (97)
item [189] = [ "Coins", 1, 1, "" ];
item [190] = [ "Coins", 1, 2, "" ];
item [191] = [ "Mind-rune", 1, 12, "Rune" ];  //  (45)
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Nature-rune", 1, 3, "Rune" ];  //  (39)
item [194] = [ "Coins", 1, 29, "" ];
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Body-rune", 1, 7, "Rune" ];  //  (80)
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Staff", 1, 1, "" ];
item [199] = [ "Coins", 1, 2, "" ];
item [200] = [ "Mind-rune", 1, 7, "Rune" ];  //  (52)
item [201] = [ "Earth-rune", 1, 7, "Rune" ];  //  (181)
item [202] = [ "Earth-rune", 1, 24, "Rune" ];  //  (205)
item [203] = [ "Earth-rune", 1, 12, "Rune" ];  //  (217)
item [204] = [ "Blood-rune", 1, 1, "Rune" ];  //  (3)
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Water-rune", 1, 7, "Rune" ];  //  (104)
item [207] = [ "Body-rune", 1, 7, "Rune" ];  //  (87)
item [208] = [ "Coins", 1, 1, "" ];
item [209] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (30)
item [210] = [ "Coins", 1, 4, "" ];
item [211] = [ "Nature-rune", 1, 3, "Rune" ];  //  (42)
item [212] = [ "Coins", 1, 2, "" ];
item [213] = [ "Nature-rune", 1, 3, "Rune" ];  //  (45)
item [214] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [215] = [ "Mind-rune", 1, 12, "Rune" ];  //  (64)
item [216] = [ "Coins", 1, 1, "" ];
item [217] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (33)
item [218] = [ "Coins", 1, 1, "" ];
item [219] = [ "Coins", 1, 2, "" ];
item [220] = [ "Coins", 1, 2, "" ];
item [221] = [ "Nature-rune", 1, 3, "Rune" ];  //  (48)
item [222] = [ "Law-rune", 1, 2, "Rune" ];  //  (6)
item [223] = [ "Fire-rune", 1, 7, "Rune" ];  //  (64)
item [224] = [ "Earth-rune", 1, 24, "Rune" ];  //  (241)
item [225] = [ "Nothing", 1, 0, "" ];
item [226] = [ "Nothing", 1, 0, "" ];
item [227] = [ "Nature-rune", 1, 3, "Rune" ];  //  (51)
item [228] = [ "Fire-rune", 1, 7, "Rune" ];  //  (71)
item [229] = [ "Water-rune", 1, 7, "Rune" ];  //  (111)
item [230] = [ "Fire-rune", 1, 7, "Rune" ];  //  (78)
item [231] = [ "Nature-rune", 1, 3, "Rune" ];  //  (54)
item [232] = [ "Coins", 1, 2, "" ];
item [233] = [ "Mind-rune", 1, 12, "Rune" ];  //  (76)
item [234] = [ "Coins", 1, 1, "" ];
item [235] = [ "Staff", 1, 1, "" ];
item [236] = [ "Coins", 1, 1, "" ];
item [237] = [ "Mind-rune", 1, 7, "Rune" ];  //  (83)
item [238] = [ "Mind-rune", 1, 7, "Rune" ];  //  (90)
item [239] = [ "Air-rune", 1, 7, "Rune" ];  //  (62)
item [240] = [ "Coins", 1, 2, "" ];
item [241] = [ "Fire-rune", 1, 7, "Rune" ];  //  (85)
item [242] = [ "Nothing", 1, 0, "" ];
item [243] = [ "Coins", 1, 4, "" ];
item [244] = [ "Coins", 1, 2, "" ];
item [245] = [ "Coins", 1, 1, "" ];
item [246] = [ "Coins", 1, 2, "" ];
item [247] = [ "Coins", 1, 2, "" ];
item [248] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (36)
item [249] = [ "Coins", 1, 2, "" ];
item [250] = [ "Mind-rune", 1, 12, "Rune" ];  //  (102)
item [251] = [ "Coins", 1, 4, "" ];
item [252] = [ "Coins", 1, 2, "" ];
item [253] = [ "Coins", 1, 1, "" ];
item [254] = [ "Coins", 1, 4, "" ];
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Water-rune", 1, 12, "Rune" ];  //  (123)
item [257] = [ "Coins", 1, 4, "" ];
item [258] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [259] = [ "Staff", 1, 1, "" ];
item [260] = [ "Coins", 1, 2, "" ];
item [261] = [ "Nothing", 1, 0, "" ];
item [262] = [ "Coins", 1, 2, "" ];
item [263] = [ "Mind-rune", 1, 12, "Rune" ];  //  (114)
item [264] = [ "Nothing", 1, 0, "" ];
item [265] = [ "Coins", 1, 2, "" ];
item [266] = [ "Coins", 1, 1, "" ];
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Water-rune", 1, 12, "Rune" ];  //  (135)
item [269] = [ "Mind-rune", 1, 7, "Rune" ];  //  (121)
item [270] = [ "Nature-rune", 1, 3, "Rune" ];  //  (57)
item [271] = [ "Coins", 1, 2, "" ];
item [272] = [ "Nature-rune", 1, 3, "Rune" ];  //  (60)
item [273] = [ "Water-rune", 1, 7, "Rune" ];  //  (142)
item [274] = [ "Coins", 1, 2, "" ];
item [275] = [ "Law-rune", 1, 2, "Rune" ];  //  (8)
item [276] = [ "Air-rune", 1, 7, "Rune" ];  //  (69)
item [277] = [ "Nothing", 1, 0, "" ];
item [278] = [ "Coins", 1, 2, "" ];
item [279] = [ "Body-rune", 1, 7, "Rune" ];  //  (94)
item [280] = [ "Coins", 1, 2, "" ];
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Coins", 1, 2, "" ];
item [283] = [ "Nature-rune", 1, 3, "Rune" ];  //  (63)
item [284] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [285] = [ "Earth-rune", 1, 24, "Rune" ];  //  (265)
item [286] = [ "Staff", 1, 1, "" ];
item [287] = [ "Coins", 1, 2, "" ];
item [288] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [289] = [ "Air-rune", 1, 7, "Rune" ];  //  (76)
item [290] = [ "Coins", 1, 2, "" ];
item [291] = [ "Coins", 1, 1, "" ];
item [292] = [ "Coins", 1, 29, "" ];
item [293] = [ "Nothing", 1, 0, "" ];
item [294] = [ "Staff", 1, 1, "" ];
item [295] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (39)
item [296] = [ "Earth-rune", 1, 24, "Rune" ];  //  (289)
item [297] = [ "Mind-rune", 1, 12, "Rune" ];  //  (133)
item [298] = [ "Earth-rune", 1, 24, "Rune" ];  //  (313)
item [299] = [ "Air-rune", 1, 12, "Rune" ];  //  (88)

// a 88 w 142 e 313 f 85 b 94 m 133 ch 39 co 2 n 63 l 8 bl 3

runs [0] = [ 299, 300 ];  // kills 300, drops 300

//run 2

item [300] = [ "Coins", 1, 1, "" ];
item [301] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item [302] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [303] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item [304] = [ "Nature-rune", 1, 3, "Rune" ];  //  (6)

runs [1] = [ 304, 305 ];  // kills 5, drops 5

// runs [1] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*
item [000] = [ "Coins", 1, 1, "" ];
item [000] = [ "Coins", 1, 2, "" ];
item [000] = [ "Coins", 1, 4, "" ];
item [000] = [ "Coins", 1, 29, "" ];

item [000] = [ "Air-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Air-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 24, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "robe of Zamorak (top)", 1, 1, "" ];
item [000] = [ "robe of Zamorak (bottom)", 1, 1, "" ];
item [000] = [ "Staff", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Necromancer (Invrigar)";          // monster's name
var mcbl = 34;                                 // monster's combat level
var mindex = 92;                               // index into monster data base
var mrpt = 2;                                  // number of non-breaking space to add after index name