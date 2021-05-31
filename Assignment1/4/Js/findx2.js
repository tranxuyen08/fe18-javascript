var $ = function(id) {
    return document.getElementById(id);
};
var calculator = function() {
    var a = parseFloat($("a").value);
    var b = parseFloat($("b").value);
    var c = parseFloat($("c").value);
    document.writeln("ax2 + bx + c =0 <br/>");
    document.writeln("a = " + a + '<br/>');
    document.writeln("b = " + b + "<br/>");
    document.writeln("c = " + c + "<br/>");
    document.write("Phương trình: " + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0<br/>");
    var delta;

    if (a == 0) {
        if (b != 0) {
            document.write("x = " + (-c / b));
        } else if (c == 0) {
            document.write("Phương trình có vô số nghiệm")
        } else {
            document.write("Phương trình vô nghiệm")
        }
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            document.write("Phương trình vô nghiệm")
        } else if (delta == 0) {
            document.write("Phương trình có nghiệm kép: x1 = x2 = " + (-b / (2 * a)));
        } else {
            document.write("Phương trình hai nghiệm:<br/>")
            document.write("x1 = " + (-b + Math.sqrt(delta) / (2 * a)) + "<br/>");
            document.write("x2 = " + (-b - Math.sqrt(delta) / (2 * a)));
        }
    }
};
window.onload = function() {
    $("submit").onclick = calculator;
};