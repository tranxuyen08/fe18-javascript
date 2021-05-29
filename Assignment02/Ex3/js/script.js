var listName = [];
var insertBtn = document.getElementById('insert');
var resetBtn = document.getElementById('reset');
var inputElement = document.getElementById('fullname');


function addHeadingResult() {
    var resultBox = document.getElementById('result');
    if (!resultBox.classList.contains('active')) {
        resultBox.querySelector('#before').innerHTML = '<h2>List Name Before Sort</h2><ol id="list_before_sort"></ol>'
        resultBox.querySelector('#after').innerHTML = '<h2>List Name After Sort</h2><ol id="list_after_sort"></ol>'
        resultBox.classList.add('active')
    }
}

function sort() {
    var array = [];
    var list = copyArray(); // Chưa hiểu tại sao gán vẫn bị thay đổi array gốc, nên xây dựng function này để array góc k bị thay đổi sau khi sort
    for (let i = 0; i < list.length; i++) {
        var firstName1 = list[i].slice(0, list[i].lastIndexOf(' '));
        var lastName1 = list[i].slice(list[i].lastIndexOf(' ') + 1);
        if (list[i].indexOf(' ') == -1) {
            lastName1 = list[i];
            firstName1 = '';
        }
        var index = i;
        var lastName = lastName1;
        var firstName = firstName1;

        for (let j = i + 1; j < list.length; j++) {
            var firstName2 = list[j].slice(0, list[j].lastIndexOf(' '));
            var lastName2 = list[j].slice(list[j].lastIndexOf(' ') + 1);
            if (list[j].indexOf(' ') == -1) {
                lastName2 = list[j];
                firstName2 = '';
            }
            if (lastName2.toLowerCase() < lastName1.toLowerCase()) {
                index = j;
                lastName = lastName2;
                firstName = firstName2;
            }
        }
        if (index != i) {
            var tmp = list[i];
            list[i] = list[index];
            list[index] = tmp;
        }
        array[i] = [firstName, lastName];
    }
    return array;
}


window.onload = function () {
    resetBtn.onclick = function () {
        var resultBox = document.getElementById('result');
        resultBox.classList.remove('active');
        resultBox.querySelector('#before').innerHTML = '';
        resultBox.querySelector('#after').innerHTML = '';
        listName = [];
    };
    inputElement.onfocus = function () {
        var form = document.getElementById('insert_name');
        if (form.classList.contains('invalid')) {
            form.classList.remove('invalid')
        }
    }
    insertBtn.onclick = function (e) {
        var form = document.getElementById('insert_name');
        var fullName = document.getElementById('fullname').value;
        var isInsert = true;
        if (fullName.trim() === '') {
            isInsert = false;
            form.classList.add('invalid')
        }
        if (isInsert) {
            addHeadingResult();
            listName[listName.length] = fullName.trim();
            var listBefore = document.getElementById('list_before_sort');

            // chú ý: ở đây không in trực tiếp mà sử dụng 2 vòng lặp tách biệt để in ra 2 mảng phân biệt trước và sau khi sắp xếp
            // đề phòng trường hợp tái sử dụng lại mảng cũ
            var listHTML = '';
            for (let i = 0; i < listName.length; i++) {
                listHTML += `<li>${listName[i]}</li>`
            }
            listBefore.innerHTML = listHTML;
            var listAfterSort = sort();
            var listAfter = document.getElementById('list_after_sort');
            listHTML = '';
            for (let i = 0; i < listAfterSort.length; i++) {
                listHTML += `<li>${listAfterSort[i][0]} <b>${listAfterSort[i][1]}</b></li>`
            }
            listAfter.innerHTML = listHTML;
            inputElement.value = '';
            inputElement.focus();
        }
    }
}


/**
 * Không dùng phép gán để copy array mà lại dùng function lặp qua mảng gốc và add từng phần tử
 * Cũng chưa hểu tại sao gán trực tiếp hay truyền tham sô thì array gốc vẫn sẽ thay đổi mặc dù thao tác thay đổi hoàn toàn ở new array
 * @returns {any[]}
 */
function copyArray() {
    var array = new Array();
    for (let i = 0; i < listName.length; i++) {
        array.push(listName[i]);
    }
    return array;
}