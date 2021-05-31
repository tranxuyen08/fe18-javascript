var $ = function(id) {
    return document.getElementById(id);
};
var calculator = function() {
    var a = parseFloat($("a").value);
    var b = parseFloat($("b").value);


    if (a == 0 && b == 0) {
        document.writeln('Phương trình có vô số nghiệm');
    } else if (a == 0 && b != 0) {
        document.writeln('Phương trình vô nghiệm');
    } else
        document.writeln('x = ' + (-b / a))
};
window.onload = function() {
    $("submit").onclick = calculator;
};