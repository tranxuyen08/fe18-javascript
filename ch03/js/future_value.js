do {
    var futureValue;

    // get user entries
    do {
        var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
    } while (isNaN(investment));
    investment = parseFloat(investment);
    do {
        var rate = prompt("Enter interest rate as xx.x (greater than zero and less than 15)", 7.5);
    } while (isNaN(rate) || rate <= 0 || rate >= 15)
    rate = parseFloat(rate);
    do {
        var years = prompt("Enter number of years", 5);
    } while (isNaN(years) || years <= 0)
    years = parseInt(years);

    // calulate future value
    futureValue = investment;
    document.write("Investment amount = " + investment);
    document.write(" Interest rate = " + rate);
    document.write(" Years = " + years);
    document.write('<br/>');
    for (var i = 1; i <= years; i++) {
        document.write('Year = ' + i);
        var interest = (futureValue * rate) / 100;
        document.write(', Interest = ' + interest);
        futureValue += interest;
        document.write(", Value = " + parseInt(futureValue) + "<br>");
    }
    document.write('<br/>');
    var next = prompt('Press Y to continue', 'Y').toLowerCase();
} while (next === 'y');
document.write('<h2>Thanks for using the Future Value application.</h2>')
