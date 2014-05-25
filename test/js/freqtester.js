// creates a list of all of the goals
var goals = new Array();

for(var difficulty in bingoList) {
    var items = bingoList[difficulty];
    for(var i = 0; i < items.length; i++) {
        var goal = items[i];
        goals.push(goal["name"]);
    }
}

// creates a map of goals to their occurences
var goalCounts = new Object();

for(var i in goals) {
    goal = goals[i];
    goalCounts[goal] = 0;
}


// loops through a bunch of generated cards
var bingoFunc = ootBingoGenerator;

for(var i = 0; i < 100000; i++) {
    var bingoOpts = {
        seed: i,
        mode: 'normal',
        lang: 'name'
    };

    var bingoBoard = bingoFunc(bingoList, bingoOpts);
    for(boardKey in bingoBoard) {
        boardItem = bingoBoard[boardKey];
        goalCounts[boardItem.name]++;
    }
}



for(var i in goals) {
    var name = goals[i];
    var frequency = goalCounts[goal];

    console.log(name + ": " + frequency);

    //var newElement = document.createElement('div');
    //newElement.innerHTML = "TEST: " + name + " " + frequency;
    //document.getElementById("stuff").appendChild(newElement);
}                                       

console.log(goalCounts);

