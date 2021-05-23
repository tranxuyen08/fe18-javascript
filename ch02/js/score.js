var isValid = true;
var entry;
var averageScore;
var total = 0;

//get 3 scores from user and add them together
entry = prompt("Enter test score (0 -10)")
if (isNaN(entry) || entry < 0 || entry > 10) {
    isValid = false;
} else {
    var score1 = parseInt(entry);
    total += score1;
}

entry = prompt("Enter test score (0 -10)")
if (isNaN(entry) || entry < 0 || entry > 10) {
    isValid = false;
} else {
    var score2 = parseInt(entry);
    total += score2;
}

entry = prompt("Enter test score (0 -10)")
if (isNaN(entry) || entry < 0 || entry > 10) {
    isValid = false;
} else {
    var score3 = parseInt(entry);
    total += score3;
}

//calculate the average
averageScore = parseInt(total / 3);


