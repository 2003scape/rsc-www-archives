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

// run 1

item   [0] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 1
item   [1] = [ "Wizardshat (blue)", 1, 1, "" ];
item   [2] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 2
item   [3] = [ "Wizardshat (blue)", 1, 1, "" ];
item   [4] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 3
item   [5] = [ "Wizardshat (blue)", 1, 1, "" ];
item   [6] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 4
item   [7] = [ "Wizardshat (blue)", 1, 1, "" ];
item   [8] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 5
item   [9] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [10] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 6
item  [11] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [12] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 7
item  [13] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [14] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 8
item  [15] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [16] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 9
item  [17] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [18] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 10
item  [19] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [20] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 11
item  [21] = [ "Wizardshat (blue)", 1, 1, "" ];
item  [22] = [ "Wizards Robe (blue)", 2, 1, "" ];  // 12
item  [23] = [ "Wizardshat (blue)", 1, 1, "" ];

runs [0] = [ 23, 12 ];  // kills 0, drops 0

// runs [1] = [ x, y ];  // kills ? ( y - 12 ), drops ? ( x - 23 )

/*

item [000] = [ "Wizardshat (blue)", 1, 1, "" ];
item [000] = [ "Wizards Robe (blue)", 1, 1, "" ];

*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Wizard";           // monster's name
var mcbl = 16;                  // monster's combat level
var mindex = 32;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name