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

var notes = "For the first 50 kills I did not have the Map Piece.<br />For the second 50 kills I was holding the Map Piece.<br />The last entries were done with the Map Piece in the bank.<br />This drop table was generated after the completion of the quest.";

item   [0] = [ "Map Piece", 1, 1, "" ];  // no map piece
item   [1] = [ "Map Piece", 1, 1, "" ];
item   [2] = [ "Map Piece", 1, 1, "" ];
item   [3] = [ "Map Piece", 1, 1, "" ];
item   [4] = [ "Map Piece", 1, 1, "" ];
item   [5] = [ "Map Piece", 1, 1, "" ];
item   [6] = [ "Map Piece", 1, 1, "" ];
item   [7] = [ "Map Piece", 1, 1, "" ];
item   [8] = [ "Map Piece", 1, 1, "" ];
item   [9] = [ "Map Piece", 1, 1, "" ];
item  [10] = [ "Map Piece", 1, 1, "" ];
item  [11] = [ "Map Piece", 1, 1, "" ];  // *
item  [12] = [ "Map Piece", 1, 1, "" ];
item  [13] = [ "Map Piece", 1, 1, "" ];
item  [14] = [ "Map Piece", 1, 1, "" ];
item  [15] = [ "Map Piece", 1, 1, "" ];
item  [16] = [ "Map Piece", 1, 1, "" ];
item  [17] = [ "Map Piece", 1, 1, "" ];
item  [18] = [ "Map Piece", 1, 1, "" ];
item  [19] = [ "Map Piece", 1, 1, "" ];
item  [20] = [ "Map Piece", 1, 1, "" ];  // *
item  [21] = [ "Map Piece", 1, 1, "" ];
item  [22] = [ "Map Piece", 1, 1, "" ];
item  [23] = [ "Map Piece", 1, 1, "" ];
item  [24] = [ "Map Piece", 1, 1, "" ];
item  [25] = [ "Map Piece", 1, 1, "" ];
item  [26] = [ "Map Piece", 1, 1, "" ];
item  [27] = [ "Map Piece", 1, 1, "" ];
item  [28] = [ "Map Piece", 1, 1, "" ];
item  [29] = [ "Map Piece", 1, 1, "" ];
item  [30] = [ "Map Piece", 1, 1, "" ];
item  [31] = [ "Map Piece", 1, 1, "" ];
item  [32] = [ "Map Piece", 1, 1, "" ];
item  [33] = [ "Map Piece", 1, 1, "" ];
item  [34] = [ "Map Piece", 1, 1, "" ];
item  [35] = [ "Map Piece", 1, 1, "" ];
item  [36] = [ "Map Piece", 1, 1, "" ];
item  [37] = [ "Map Piece", 1, 1, "" ];
item  [38] = [ "Map Piece", 1, 1, "" ];
item  [39] = [ "Map Piece", 1, 1, "" ];
item  [40] = [ "Map Piece", 1, 1, "" ];
item  [41] = [ "Map Piece", 1, 1, "" ];
item  [42] = [ "Map Piece", 1, 1, "" ];
item  [43] = [ "Map Piece", 1, 1, "" ];
item  [44] = [ "Map Piece", 1, 1, "" ];
item  [45] = [ "Map Piece", 1, 1, "" ];
item  [46] = [ "Map Piece", 1, 1, "" ];
item  [47] = [ "Map Piece", 1, 1, "" ];
item  [48] = [ "Map Piece", 1, 1, "" ];
item  [49] = [ "Map Piece", 1, 1, "" ];

item  [50] = [ "Nothing", 1, 0, "" ];  // map piece in inventory
item  [51] = [ "Nothing", 1, 0, "" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "Nothing", 1, 0, "" ];
item  [56] = [ "Nothing", 1, 0, "" ];
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Nothing", 1, 0, "" ];
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Nothing", 1, 0, "" ];
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Nothing", 1, 0, "" ];
item  [65] = [ "Nothing", 1, 0, "" ];
item  [66] = [ "Nothing", 1, 0, "" ];
item  [67] = [ "Nothing", 1, 0, "" ];
item  [68] = [ "Nothing", 1, 0, "" ];
item  [69] = [ "Nothing", 1, 0, "" ];
item  [70] = [ "Nothing", 1, 0, "" ];
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Nothing", 1, 0, "" ];
item  [75] = [ "Nothing", 1, 0, "" ];
item  [76] = [ "Nothing", 1, 0, "" ];
item  [77] = [ "Nothing", 1, 0, "" ];
item  [78] = [ "Nothing", 1, 0, "" ];
item  [79] = [ "Nothing", 1, 0, "" ];
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Nothing", 1, 0, "" ];
item  [82] = [ "Nothing", 1, 0, "" ];
item  [83] = [ "Nothing", 1, 0, "" ];
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Nothing", 1, 0, "" ];
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "Nothing", 1, 0, "" ];
item  [95] = [ "Nothing", 1, 0, "" ];
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Nothing", 1, 0, "" ];
item  [99] = [ "Nothing", 1, 0, "" ];

item [100] = [ "Map Piece", 1, 1, "" ];  // map piece in the bank
item [101] = [ "Map Piece", 1, 1, "" ];
item [102] = [ "Map Piece", 1, 1, "" ];
item [103] = [ "Map Piece", 1, 1, "" ];
item [104] = [ "Map Piece", 1, 1, "" ];
item [105] = [ "Map Piece", 1, 1, "" ];
item [106] = [ "Map Piece", 1, 1, "" ];
item [107] = [ "Map Piece", 1, 1, "" ];
item [108] = [ "Map Piece", 1, 1, "" ];
item [109] = [ "Map Piece", 1, 1, "" ];

runs [0] = [ 109, 110 ];  // kills 1, drops 1

// runs [1] = [ x, y ];  // kills ? ( y - 0 ), drops ? ( x - -1 )

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

item [000] = [ "Map Piece", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Wormbrain";        // monster's name
var mcbl = 7;                   // monster's combat level
var mindex = 11;                // index into monster data base (mrpt)
var mrpt = 2;                   // number of non-breaking space to add after index name (3 for 0 - 9, 2 for 10 - 99, 3 for 100 - 999 )