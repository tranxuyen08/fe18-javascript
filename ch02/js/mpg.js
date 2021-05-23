var calculate = function () {
    var miles = prompt("Enter miles driven");
    if (isNaN(miles)) {
        alert("Please enter number type");
        return;
    }
    miles = parseFloat(miles);
    var gallons = prompt("Enter gallons of gas used");
    if (isNaN(gallons) || gallons == '0') {
        alert("Please enter number type and not zero");
        return;
    }
    gallons = parseFloat(gallons);
    var mpg = miles / gallons;
    alert("Miles per gallon = " + mpg);
};