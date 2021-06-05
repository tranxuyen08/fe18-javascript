// cách 1
// function getMonthV() {
//   var monthip;
//   var getDaysInMonth = function (month) {
//     var dateV = new Date();
//     var show;
//     var year = dateV.getFullYear();
//     return new Date(year, month, 0).getDate();
//   };
//   do {
//     monthip = prompt('Enter Month (enter 999 to end entries)', 999);
//     monthip = parseInt(monthip);
//     if (monthip >= 1 && monthip <= 12) {
//       show = getDaysInMonth(monthip);
//       alert('result =' + show);
//     } else if (monthip != 999) {
//       alert(
//         'Entry must by a valid number from 1 through 12\n' +
//           'Or enter 999 to end entries'
//       );
//     }
//   } while (monthip != 999);
// }
// cách 2
function getMonthV() {
  var monthip;
  var dateCurrent = new Date();
  var year = dateCurrent.getFullYear();
  do {
    monthip = prompt('Enter Month (enter 999 to end entries)', 999);
    monthip = parseInt(monthip);
    if (monthip >= 1 && monthip <= 12) {
      show = getDaysInMonth(monthip, year);
      alert('result =' + show);
    } else if (monthip != 999) {
      alert(
        'Entry must by a valid number from 1 through 12\n' +
          'Or enter 999 to end entries'
      );
    }
  } while (monthip != 999);
}
function getDaysInMonth(monthip, year) {
  switch (monthip) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
      break;
    default:
      return 'No value';
      break;
  }
}

window.onload = function () {
  getMonthV();
};
