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

item   [0] = [ "Nothing", 1, 0, "" ];
item   [1] = [ "Nothing", 1, 0, "" ];
item   [2] = [ "Nothing", 1, 0, "" ];

runs [0] = [ 2, 3 ];  // kills 0, drops 0

// runs [0] = [ x, y ];  // kills ? ( y - 0 ), drops ? ( x - -1 )

/*

item [000] = [ "Coins", 1, 3, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 24, "Rune" ];  //  ()

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;   // total drops
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Monk of Zamorak";        // monster's name
var mcbl = 47;                        // monster's combat level
var mindex = 115;                     // index into monster data base
var mrpt = 1;                         // number of non-breaking space to add after index name