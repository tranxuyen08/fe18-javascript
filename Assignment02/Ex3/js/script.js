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

function handlerSort(personA, personB) {
    personA = personA.toLowerCase();
    personB = personB.toLowerCase();
    //tên đầy đủ giống nhau
    if (personA === personB) {
        return 0;
    }
    var lastNameA = personA.slice(personA.lastIndexOf(' ') + 1);
    if (personA.indexOf(' ') === -1) {
        lastNameA = personA;
    }
    var fistNameA = personA.replace(lastNameA, '').trim();
    var lastNameB = personB.slice(personB.lastIndexOf(' ') + 1);
    if (personB.indexOf(' ') === -1) {
        lastNameB = personB;
    }
    var fistNameB = personB.replace(lastNameB, '').trim();
    //Lặp cho đến khi tên không trùng nhau
    while (lastNameA === lastNameB) {
        var lastA = fistNameA.slice(fistNameA.lastIndexOf(' ') + 1);
        if (fistNameA.indexOf(' ') === -1) {
            lastA = fistNameA;
        }
        fistNameA = fistNameA.replace(lastA, '').trim();
        lastNameA = lastA + ' ' + lastNameA;

        var lastB = fistNameB.slice(fistNameB.lastIndexOf(' ') + 1);
        if (fistNameB.indexOf(' ') === -1) {
            lastB = fistNameB;
        }
        fistNameB = fistNameB.replace(lastB, '').trim();
        lastNameB = lastB + ' ' + lastNameB;
    }
    if (lastNameB < lastNameA) {
        return 1;
    } else {
        return -1;
    }
};

function insert() {
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
        listBefore.innerHTML = listName.reduce(function (html, item) {
            return html += `<li>${item}</li>`
        }, '');
        var listAfterSort = listName.slice().sort(handlerSort);
        var listAfter = document.getElementById('list_after_sort');

        listAfter.innerHTML = listAfterSort.reduce(function (html, item) {
            return html += `<li>${item}</li>`
        }, '');
        inputElement.value = '';
        inputElement.focus();
    }
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
    insertBtn.onclick = insert;
    document.getElementById('insert_name').onsubmit = function (e) {
        e.preventDefault();
        insert();
    }
}
