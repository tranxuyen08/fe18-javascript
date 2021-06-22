function getshape(n) {
    var result = '';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            result += '*';
        }

        result += '\n';
    }
    return result;
}
function getResult() {
    var a;
    var again;
    do {
        a = prompt('Enter number', 3);
        if (isNaN(a)) {
            alert('error');
        } else {
            a = parseInt(a);
            show = getshape(a);
            alert('result :' + '\n' + show);
        }
        again = prompt('Enter again (y/n)', 'y');
    } while (again === 'y');
}
window.onload = function () {
    getResult();
};