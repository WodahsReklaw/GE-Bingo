//# Datafile For Level Difficulties
//# Implementation Agnoistic
//# Data is formatted as follows
//# _LevelIndex_, _Name_,  _Difficulty_,  _Row_, _Col_, _TimeValue_
//#   0-59        "Name"     "Agent"    "Name_Row"  "Col_Row" Value(Seconds)

var levelList = [];
levelList["Version"] = {version: "1.0"};
levelList[0] = { number: 0, name: "Dam", diff: "A", row: "Dam", col: "Dam", value: 55 };
levelList[1] = { number: 1, name: "Dam", diff: "SA", row: "Dam", col: "Dam", value: 80 };
levelList[2] = { number: 2, name: "Dam", diff: "00A", row: "Dam", col: "Dam", value: 130 };
levelList[3] = { number: 3, name: "Facility", diff: "A", row: "Dam", col: "Facility", value: 50 };
levelList[4] = { number: 4, name: "Facility", diff: "SA", row: "Dam", col: "Facility", value: 70 };
levelList[5] = { number: 5, name: "Facility", diff: "00A", row: "Dam", col: "Facility", value: 72 };
levelList[6] = { number: 6, name: "Runway", diff: "A", row: "Dam", col: "Runway", value: 23 };
levelList[7] = { number: 7, name: "Runway", diff: "SA", row: "Dam", col: "Runway", value: 25 };
levelList[8] = { number: 8, name: "Runway", diff: "00A", row: "Dam", col: "Runway", value: 40 };
levelList[9] = { number: 9, name: "Surface 1", diff: "A", row: "Dam", col: "Surface 1", value: 64 };
levelList[10] = { number: 10, name: "Surface 1", diff: "SA", row: "Dam", col: "Surface 1", value: 116 };
levelList[11] = { number: 11, name: "Surface 1", diff: "00A", row: "Dam", col: "Surface 1", value: 118 };
levelList[12] = { number: 12, name: "Bunker 1", diff: "A", row: "Dam", col: "Bunker 1", value: 19 };
levelList[13] = { number: 13, name: "Bunker 1", diff: "SA", row: "Dam", col: "Bunker 1", value: 26 };
levelList[14] = { number: 14, name: "Bunker 1", diff: "00A", row: "Dam", col: "Bunker 1", value: 77 };
levelList[15] = { number: 15, name: "Silo", diff: "A", row: "Silo", col: "Dam", value: 72 };
levelList[16] = { number: 16, name: "Silo", diff: "SA", row: "Silo", col: "Dam", value: 90 };
levelList[17] = { number: 17, name: "Silo", diff: "00A", row: "Silo", col: "Dam", value: 120 };
levelList[18] = { number: 18, name: "Frigate", diff: "A", row: "Silo", col: "Facility", value: 40 };
levelList[19] = { number: 19, name: "Frigate", diff: "SA", row: "Silo", col: "Facility", value: 75 };
levelList[20] = { number: 20, name: "Frigate", diff: "00A", row: "Silo", col: "Facility", value: 80 };
levelList[21] = { number: 21, name: "Surface 2", diff: "A", row: "Silo", col: "Runway", value: 54 };
levelList[22] = { number: 22, name: "Surface 2", diff: "SA", row: "Silo", col: "Runway", value: 80 };
levelList[23] = { number: 23, name: "Surface 2", diff: "00A", row: "Silo", col: "Runway", value: 105 };
levelList[24] = { number: 24, name: "Bunker 2", diff: "A", row: "Silo", col: "Surface 1", value: 26 };
levelList[25] = { number: 25, name: "Bunker 2", diff: "SA", row: "Silo", col: "Surface 1", value: 60 };
levelList[26] = { number: 26, name: "Bunker 2", diff: "00A", row: "Silo", col: "Surface 1", value: 77 };
levelList[27] = { number: 27, name: "Statue", diff: "A", row: "Silo", col: "Bunker 1", value: 148 };
levelList[28] = { number: 28, name: "Statue", diff: "SA", row: "Silo", col: "Bunker 1", value: 148 };
levelList[29] = { number: 29, name: "Statue", diff: "00A", row: "Silo", col: "Bunker 1", value: 148 };
levelList[30] = { number: 30, name: "Archives", diff: "A", row:"Archives", col: "Dam", value: 18 };
levelList[31] = { number: 31, name: "Archives", diff: "SA", row: "Archives", col: "Dam", value: 58 };
levelList[32] = { number: 32, name: "Archives", diff: "00A", row: "Archives", col: "Dam", value: 58 };
levelList[33] = { number: 33, name: "Streets", diff: "A", row: "Archives", col: "Facility", value: 75 };
levelList[34] = { number: 34, name: "Streets", diff: "SA", row: "Archives", col: "Facility", value: 118 };
levelList[35] = { number: 35, name: "Streets", diff: "00A", row: "Archives", col: "Facility", value: 120 };
levelList[36] = { number: 36, name: "Depot", diff: "A", row: "Archives", col: "Runway", value: 26 };
levelList[37] = { number: 37, name: "Depot", diff: "SA", row: "Archives", col: "Runway", value: 49 };
levelList[38] = { number: 38, name: "Depot", diff: "00A", row: "Archives", col: "Runway", value: 59 };
levelList[39] = { number: 39, name: "Train", diff: "A", row: "Archives", col: "Surface 1", value: 75 };
levelList[40] = { number: 40, name: "Train", diff: "SA", row: "Archives", col: "Surface 1", value: 105 };
levelList[41] = { number: 41, name: "Train", diff: "00A", row: "Archives", col: "Surface 1", value: 135 };
levelList[42] = { number: 42, name: "Jungle", diff: "A", row: "Archives", col: "Bunker 1", value: 60 };
levelList[43] = { number: 43, name: "Jungle", diff: "SA", row: "Archives", col: "Bunker 1", value: 70 };
levelList[44] = { number: 44, name: "Jungle", diff: "00A", row: "Archives", col: "Bunker 1", value: 80 };
levelList[45] = { number: 45, name: "Control", diff: "A", row: "Control", col: "Dam", value: 240 };
levelList[46] = { number: 46, name: "Control", diff: "SA", row: "Control", col: "Dam", value: 255 };
levelList[47] = { number: 47, name: "Control", diff: "00A", row: "Contorl", col: "Dam", value: 265 };
levelList[48] = { number: 48, name: "Caverns", diff: "A", row: "Control", col: "Facility", value: 65 };
levelList[49] = { number: 49, name: "Caverns", diff: "SA", row: "Control", col: "Facility", value: 105 };
levelList[50] = { number: 50, name: "Caverns", diff: "00A", row: "Control", col: "Facility", value: 125 };
levelList[51] = { number: 51, name: "Cradle", diff: "A", row: "Control", col: "Runway", value: 38 };
levelList[52] = { number: 52, name: "Cradle", diff: "SA", row: "Control", col: "Runway", value: 42 };
levelList[53] = { number: 53, name: "Cradle", diff: "00A", row: "Control", col: "Runway", value: 43 };
levelList[54] = { number: 54, name: "Aztec", diff: "A", row: "Control", col: "Surface 1", value: 110 };
levelList[55] = { number: 55, name: "Aztec", diff: "SA", row: "Control", col: "Surface 1", value: 140 };
levelList[56] = { number: 56, name: "Aztec", diff: "00A", row: "Control", col: "Surface 1", values: 160 };
levelList[57] = { number: 57, name: "Egypt", diff: "A", row: "Control", col: "Bunker 1", value: 49 };
levelList[58] = { number: 58, name: "Egypt", diff: "SA", row: "Control", col: "Bunker 1", value: 52 };
levelList[59] = { number: 59, name: "Egypt", diff: "00A", row: "Control", col: "Bunker 1", value: 52 };


// Here most entries are __Name__ __Synergy[]__ __TimeConst(Or Value)__
var weaponList = [];

weaponList[0] = { name: "Slappers", synergy: ["Slappers"], const: 1.4 };
weaponList[1] = { name: "Golden Gun", synergy: ["Egypt"], const: 1.2 };
weaponList[2] = { name: "PP7", synergy: ["PP7"], const: 1.4  };
weaponList[3] = { name: "Taser", synergy: ["Taser"], const: 1.6 };
weaponList[4] = { name: "Hunting Knifes", synergy: ["Slappers", "Kinfe"], const: 1.4 };
weaponList[5] = { name: "Throwing Knifes", synergy: ["Knife"], const: 1.5 };
weaponList[6] = { name: "Magnum", synergy: ["Magnum"], const: 1.1 };
weaponList[7] = { name: "2x RC-P90", synergy: ["RC-P90"], const: 0.3};
weaponList[8] = { name: "2x Grenade L.", synergy: ["2x GL"], const: 0.4};
weaponList[9] = { name: "2x Rocket L.", synergy: ["2x RL"], const: 0.4};
//weaponList[10] = { name: "2x Laser", synergy: ["Shoot"], const: 0.2};

var cheatList = [];

cheatList[0] = { name: "Turbo Mode", synergy: ["cheat"], const: .5 };
cheatList[1] = { name: "Fast Animations", synergy: ["cheat"], const: 1.3 };
cheatList[2] = { name: "Enemey Rockets", synergy: ["cheat"], const: 1.5 };
cheatList[3] = { name: "Tiny Bond", synergy: ["cheat"], const: 1.1 };
cheatList[4] = { name: "DK Mode", synergy: ["cheat"], const: 0.8 };

var objectList = [];

objectList[0] = { name: "Crates", synergy: ["Deopt", "Destory"], maxAmmount: 100, value: 5 };
objectList[1] = { name: "Glass Panes", synergy: ["Glass", "Destory"], maxAmmount: 40, value: 7 };
objectList[2] = { name: "Drone Guns", synergy: ["Jungle", "Destory"], maxAmmount: 50, value: 18 };
objectList[3] = { name: "Security Cameras", synergy: ["Bunker 1","Bunker 2", "Surface 2", "Destory"], maxAmmount: 30, value: 11 };
objectList[4] = { name: "Computer Moniters", synergy: ["Aztec", "Destory"], maxAmmount: 50, value: 8 };
objectList[5] = { name: "Tables", synergy: ["Tables", "Destory"], maxAmmount: 40, value: 7 };

var guardList = [];

guardList[0] = { name: "Janus Special Force (black guard)", synergy: ["kill", "janus"], value: 5 };
guardList[1] = { name: "Russian Soldiers (Green guard)", synergy: ["kill", "russian"], value: 3 };
guardList[2] = { name: "Siberian Special Forces", synergy: ["kill", "Surface 1", "Surface 2"], value: 11 };
guardList[3] = { name: "Arctic Commandos (Blue Guards)", synergy: ["kill", "Bunker 2"], value: 4 };
guardList[4] = { name: "Moonraker Elite", synergy: ["kill", "elite"], value: 13 };
guardList[5] = { name: "Janus Marine", synergy: ["Train", "kill"], value: 3 };


//$(function() { srl.ootbingo(levelList, objectList, guardList, weaponList, cheatList, 5); });



