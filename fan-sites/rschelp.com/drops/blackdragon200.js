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

var notes = "On the first run, ran into the black dragon while killing Monk of Zamorak(47). Didn't have the resources, so only killed 1. On the 2nd run forgot to bring food, so used a lot of prayer for rapid heal.";

// run 1

item   [0] = [ "Coins", 1, 196, "" ];  //  (196)

runs [0] = [ 0, 1 ];  // kills 1, drops 1

// run 2

item   [1] = [ "Coins", 1, 66, "" ];  //  (66)
item   [2] = [ "Coins", 1, 196, "" ];  //  (262)
item   [3] = [ "Coins", 1, 66, "" ];  //  (328)
item   [4] = [ "Coins", 1, 196, "" ];  //  (524)
item   [5] = [ "Coins", 1, 16, "" ];  //  (540)
item   [6] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item   [7] = [ "Coins", 1, 690, "" ];  //  (1230)
item   [8] = [ "Coins", 1, 196, "" ];  //  (1426)
item   [9] = [ "Coins", 1, 196, "" ];  //  (1622)

runs [1] = [ 9, 10 ];  // kills 0, drops 0

// runs [1] = [ x, y ];  // kills ? ( y - 1 ), drops ? ( x - 0 )

/*
item [000] = [ "Coins", 1, 16, "" ];  //  ()
item [000] = [ "Coins", 1, 66, "" ];  //  ()
item [000] = [ "Coins", 1, 196, "" ];  //  ()
item [000] = [ "Coins", 1, 690, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 50, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 30, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Death-rune", 1, 30, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 10, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "damantite bar", 1, 1, "" ];
item [000] = [ "damantite bar", 1, 2, "" ];
item [000] = [ "Runite bar", 1, 1, "" ];

item [000] = [ "Iron Arrows", 1, 670, "Arrows" ];

item [000] = [ "Black Axe", 1, 1, "" ];
item [000] = [ "Mithril Axe", 1, 1, "" ];
item [000] = [ "Mithril 2-handed Sword", 1, 1, "" ];
item [000] = [ "Mithril battle Axe", 1, 1, "" ];
item [000] = [ "Rune battle Axe", 1, 1, "" ];
item [000] = [ "Rune Long Sword", 1, 1, "" ];
item [000] = [ "rune 2-handed Sword", 1, 1, "" ];

item [000] = [ "Mithril Square Shield", 1, 1, "" ];
item [000] = [ "Mithril Kite Shield", 1, 1, "" ];
item [000] = [ "Adamantite Plate Mail Body", 1, 1, "" ];
item [000] = [ "Rune Square Shield", 1, 1, "" ];
item [000] = [ "Rune Kite Shield", 1, 1, "" ];
item [000] = [ "Rune Chain Mail Body", 1, 1, "" ];
item [000] = [ "Rune Plate Mail Legs", 1, 1, "" ];

item [000] = [ "Dragon medium Helmet", 1, 1, "" ];

item [000] = [ "Chocolate Cake", 1, 1, "" ];
item [000] = [ "Chocolate Cake", 1, 2, "" ];
item [000] = [ "silver certificate (Ore)", 1, 20, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Black Dragon";      // monster's name
var mcbl = 200;                  // monster's combat level
var mindex = 168;                // index into monster data base
var mrpt = 1;                    // number of non-breaking space to add after index name