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

item    [0] = [ "Coins", 1, 60, "" ];  // 1, (60)
item    [1] = [ "Fire-rune", 1, 25, "Rune" ];  // 2, (25)
item    [2] = [ "Coins", 2, 60, "" ];  // 3,  (120)
item    [3] = [ "Marrentill", 1, 1, "Herb" ];
item    [4] = [ "Coins", 1, 60, "" ];  // 4, (180)
item    [5] = [ "Coins", 1, 60, "" ];  // 5, (240)
item    [6] = [ "Steel Axe", 1, 1, "" ];  // 6
item    [7] = [ "Coins", 1, 60, "" ];  // 7, (300)
item    [8] = [ "Coins", 1, 15, "" ];  // 8, (315)
item    [9] = [ "Blood-rune", 1, 3, "Rune" ];  // 9, (3)
item   [10] = [ "Coins", 1, 60, "" ];  // 10, (375)
item   [11] = [ "Chaos-rune", 1, 3, "Rune" ];  // 11, (3)

runs [0] = [ 11, 11 ];  // kills 11 , drops 12

//  runs [1] = [ x, y ];  // kills ? ( y - 12 ), drops ? ( x - 11 )

/*

item  [000] = [ "Coins", 1, 15, "" ];  //  ()
item  [000] = [ "Coins", 1, 60, "" ];  //  ()

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
item  [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item  [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [000] = [ "uncut emerald", 1, 1, "Gem" ];

item  [000] = [ "Half of a key (Loop)", 1, 1, "" ];

item  [000] = [ "Steel Axe", 1, 1, "" ];

item  [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;   // total drops
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Fire Giant";   // monster's name
var mcbl = 109;             // monster's combat level
var mindex = 159;           // index into monster data base
var mrpt = 1;               // number of non-breaking space to add after index name