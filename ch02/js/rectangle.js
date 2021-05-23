var isValid = true;
var length = prompt('Length:');
if (isNaN(length) || length <= 0) {
    alert("Please enter number > 0");
    isValid = false;
} else {
    length = parseFloat(length);
    var width = prompt('width:');
    if (isNaN(width) || width <= 0) {
        alert("Please enter number > 0");
        isValid = false;
    } else {
        width = parseFloat(width);
        var area = length * width;
        var perimeter = (length + width) * 2;
    }
}