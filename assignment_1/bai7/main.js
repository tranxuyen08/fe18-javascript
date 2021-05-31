function addStudent() {
  var studentCode;
  var studentName;
  var studentAge;
  var studentSex;
  var studentItem = '';
  var studentList = [];
  var show = 'The student list';
  var again;
  do {
    studentCode = prompt('Enter Student Code', 1);
    studentName = prompt('Enter Student Name', 'Dương Vương');
    studentAge = prompt('Enter Student Age', 21);
    studentSex = prompt('Enter Student Sex', 'Male');
    studentItem =
      'Student ID : ' +
      studentCode +
      ' - Student Name : ' +
      studentName +
      ' - Student Age : ' +
      studentAge +
      ' - Student Sex : ' +
      studentSex;
    studentList[studentList.length] = studentItem;
    again = prompt('Bạn có muốn tiếp tục (Nhấn ESC để thoát) !', 'y');
  } while (again !== null);
  document.write(show + '<br>');
  for (var i = 0; i < studentList.length; i++) {
    document.write(studentList[i] + '<br>');
  }
}
window.onload = function () {
  addStudent();
};
