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

item   [0] = [ "Guam Leaf", 1, 1, "Herb" ];  // 1
item   [1] = [ "copper ore", 1, 1, "" ];
item   [2] = [ "Guam Leaf", 1, 1, "Herb" ];
item   [3] = [ "Fishing Bait", 1, 1, "" ];
item   [4] = [ "Coins", 1, 3, "" ];
item   [5] = [ "Coins", 1, 3, "" ];
item   [6] = [ "Coins", 1, 3, "" ];
item   [7] = [ "Coins", 1, 5, "" ];
item   [8] = [ "Earth-rune", 1, 3, "Rune" ];
item   [9] = [ "Nothing", 1, 0, "" ];  // 10
item  [10] = [ "Coins", 1, 3, "" ];
item  [11] = [ "Unidentified Herb", 1, 1, "Herb" ];
item  [12] = [ "Unidentified Herb", 1, 1, "Herb" ];
item  [13] = [ "Coins", 1, 3, "" ];
item  [14] = [ "Coins", 1, 15, "" ];
item  [15] = [ "Coins", 1, 3, "" ];
item  [16] = [ "Nothing", 1, 0, "" ];
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Coins", 1, 3, "" ];
item  [19] = [ "Coins", 1, 3, "" ];  // 20
item  [20] = [ "Coins", 1, 3, "" ];
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Medium Bronze Helmet", 1, 1, "" ];
item  [23] = [ "Iron dagger", 1, 1, "" ];
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Coins", 1, 5, "" ];
item  [26] = [ "Coins", 1, 3, "" ];
item  [27] = [ "Unidentified Herb", 1, 1, "Herb" ];
item  [28] = [ "Coins", 1, 5, "" ];
item  [29] = [ "Unidentified Herb", 1, 1, "Herb" ];  // 30
item  [30] = [ "Coins", 1, 3, "" ];
item  [31] = [ "Coins", 1, 3, "" ];
item  [32] = [ "Fishing Bait", 1, 1, "" ];
item  [33] = [ "Coins", 1, 3, "" ];
item  [34] = [ "Coins", 1, 3, "" ];
item  [35] = [ "Coins", 1, 3, "" ];
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "copper ore", 1, 1, "" ];
item  [38] = [ "Coins", 1, 3, "" ];
item  [39] = [ "Nothing", 1, 0, "" ];  // 40
item  [40] = [ "Coins", 1, 3, "" ];
item  [41] = [ "Coins", 1, 3, "" ];
item  [42] = [ "Nothing", 1, 0, "" ];
item  [43] = [ "Coins", 1, 3, "" ];
item  [44] = [ "Unidentified Herb", 1, 1, "Herb" ];
item  [45] = [ "Unidentified Herb", 1, 1, "Herb" ];
item  [46] = [ "Nothing", 1, 0, "" ];
item  [47] = [ "copper ore", 1, 1, "" ];
item  [48] = [ "Coins", 1, 5, "" ];
item  [49] = [ "Guam Leaf", 1, 1, "Herb" ];  // 50
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Fire-rune", 1, 4, "Rune" ];
item  [54] = [ "Coins", 1, 5, "" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Coins", 1, 3, "" ];
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Coins", 1, 5, "" ];
item  [59] = [ "Coins", 1, 3, "" ];  // 60
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Fishing Bait", 1, 1, "" ];
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Coins", 1, 5, "" ];
item  [64] = [ "Coins", 1, 3, "" ];
item  [65] = [ "Coins", 1, 3, "" ];
item  [66] = [ "Fishing Bait", 1, 1, "" ];
item  [67] = [ "Coins", 1, 3, "" ];
item  [68] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [69] = [ "Coins", 1, 3, "" ];  // 70
item  [70] = [ "Coins", 1, 3, "" ];
item  [71] = [ "Unidentified Herb", 1, 1, "Herb" ];
item  [72] = [ "Coins", 1, 3, "" ];
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Medium Bronze Helmet", 1, 1, "" ];
item  [75] = [ "Nothing", 1, 0, "" ];
item  [76] = [ "Coins", 1, 3, "" ];
item  [77] = [ "Medium Bronze Helmet", 1, 1, "" ];
item  [78] = [ "copper ore", 1, 1, "" ];
item  [79] = [ "Coins", 1, 5, "" ];  // 80
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Marrentill", 1, 1, "Herb" ];
item  [82] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item  [83] = [ "Coins", 1, 3, "" ];
item  [84] = [ "Marrentill", 1, 1, "Herb" ];
item  [85] = [ "Nothing", 1, 0, "" ];
item  [86] = [ "Fishing Bait", 1, 1, "" ];
item  [87] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [88] = [ "Coins", 1, 3, "" ];
item  [89] = [ "Bronze Arrows", 1, 7, "Arrows" ];  // 90
item  [90] = [ "Coins", 1, 3, "" ];
item  [91] = [ "Coins", 1, 3, "" ];
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Coins", 1, 5, "" ];
item  [94] = [ "Nothing", 1, 0, "" ];
item  [95] = [ "Coins", 1, 3, "" ];
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Coins", 1, 3, "" ];
item  [99] = [ "Coins", 1, 5, "" ];
item [100] = [ "Guam Leaf", 1, 1, "Herb" ];  // 100
item [101] = [ "Coins", 1, 3, "" ];
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "copper ore", 1, 1, "" ];
item [104] = [ "copper ore", 1, 1, "" ];
item [105] = [ "Avantoe", 1, 1, "Herb" ];
item [106] = [ "Coins", 1, 3, "" ];
item [107] = [ "Coins", 1, 3, "" ];
item [108] = [ "Avantoe", 1, 1, "Herb" ];
item [109] = [ "Fishing Bait", 1, 1, "" ];
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Coins", 1, 5, "" ];  // 110
item [112] = [ "Coins", 1, 3, "" ];
item [113] = [ "Nothing", 1, 0, "" ];
item [114] = [ "Coins", 1, 3, "" ];
item [115] = [ "Coins", 1, 25, "" ];
item [116] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [117] = [ "Nothing", 1, 0, "" ];
item [118] = [ "Nothing", 1, 0, "" ];
item [119] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Coins", 1, 15, "" ];  // 120
item [122] = [ "Coins", 1, 3, "" ];
item [123] = [ "Fishing Bait", 1, 1, "" ];
item [124] = [ "Nothing", 1, 0, "" ];
item [125] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [126] = [ "Nothing", 1, 0, "" ];
item [127] = [ "Nothing", 1, 0, "" ];
item [128] = [ "Coins", 1, 3, "" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Nothing", 1, 0, "" ];
item [131] = [ "Nothing", 1, 0, "" ];  // 130
item [132] = [ "Fishing Bait", 1, 1, "" ];
item [133] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [134] = [ "Coins", 1, 3, "" ];
item [135] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [136] = [ "Nothing", 1, 0, "" ];
item [137] = [ "Iron dagger", 1, 1, "" ];
item [138] = [ "Earth-rune", 1, 3, "Rune" ];
item [139] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [140] = [ "Coins", 1, 5, "" ];
item [141] = [ "Nothing", 1, 0, "" ];
item [142] = [ "Earth-rune", 1, 3, "Rune" ];  // 140
item [143] = [ "Coins", 1, 3, "" ];
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [146] = [ "Unidentified Herb", 1, 1, "Herb" ];
item [147] = [ "Nothing", 1, 0, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Nothing", 1, 0, "" ];

runs [0] = [ 149, 150 ];  // kills 150, drops 150

// run 2

// runs [1] = [ x, y ];  // kills ? ( y - 150 ), drops ? ( x - 149 )

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Barbarian";        // monster's name
var mcbl = 16;                  // monster's combat level
var mindex = 31;                // index into monster data base
var mrpt = 2;                // number of non-breaking space to add after index name