function getMonthV() {
  var monthip;
  var getDaysInMonth = function (month) {
    var dateV = new Date();
    var show;
    var year = dateV.getFullYear();
    return new Date(year, month, 0).getDate();
  };
  do {
    monthip = prompt('Enter Month (enter 999 to end entries)', 999);
    monthip = parseInt(monthip);
    if (monthip >= 1 && monthip <= 12) {
      show = getDaysInMonth(monthip);
      alert('result =' + show);
    } else if (monthip != 999) {
      alert(
        'Entry must by a valid number from 1 through 12\n' +
          'Or enter 999 to end entries'
      );
    }
  } while (monthip != 999);
}
window.onload = function () {
  getMonthV();
};
