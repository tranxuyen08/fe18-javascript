var $ = function (id) {
    return document.getElementById(id);
};
var fixedMpg = function (miles, gallons) {
    var mpg = miles / gallons;
    mpg = mpg.toFixed(1);
    return mpg;
}
var calculateMPG = function () {
    // get value
    var miles = $("miles").value;
    var gallons = $("gallons").value;
    var isValid = true;

    // data validation
    if (isNaN(miles) || miles == '') {
        $("milesError").firstChild.nodeValue = "Miles must be numeric";
        isValid = false;
    } else if (miles <= 0) {
        $("milesError").firstChild.nodeValue = "Miles must be greater than zero";
        isValid = false;
    } else {
        $("milesError").firstChild.nodeValue = "";
    }
    if (isNaN(gallons) || gallons == '') {
        $("gallonsError").firstChild.nodeValue = "Gallons must be numeric";
        isValid = false;
    } else if (gallons <= 0) {
        $("gallonsError").firstChild.nodeValue = "Gallons must be greater than zero";
        isValid = false;
    } else {
        $("gallonsError").firstChild.nodeValue = "";
    }


    if (isValid) {
        miles = parseFloat(miles);
        gallons = parseFloat(gallons);
        $('mpg').value = fixedMpg(miles, gallons);
    }
};
var clearEntries = function () {
    $("miles_per_gallon").reset();
    $("milesError").firstChild.nodeValue = '*';
    $("gallonsError").firstChild.nodeValue = '*';
}
window.onload = function () {
    $("calculate").onclick = calculateMPG;
    $('clear').onclick = clearEntries;
};
