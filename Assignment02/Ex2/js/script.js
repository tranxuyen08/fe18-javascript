var btnNext = document.getElementById('next');
var rows = 10, cols = 10;
var array2D = [];
var home = document.getElementById('create');
var isShowMenu = false;
var resultElement = document.getElementById('result');

function reset() {
    document.getElementById('container').innerHTML = '';
    document.getElementById('container').appendChild(home);
    document.getElementById('menu').classList.remove('active')
    resultElement.innerHTML = '';
    rows = 10;
    cols = 10;
    isShowMenu = false;
}

function showMenu() {
    document.getElementById('menu').classList.add('active')
}

function createArrayAuto(rows, cols) {
    for (let i = 0; i < rows; i++) {
        var row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * (rows + cols) * 10) + 1);
        }
        array2D[i] = row;
    }
}

function read() {
    var inputData = document.querySelectorAll('.data');
    var index = 0;

    for (let i = 0; i < rows; i++) {
        var row = [];
        for (let j = 0; j < cols; j++) {
            var value = 0;
            if (inputData[index].value !== '') {
                value = Number(inputData[index].value);
            }
            index++;
            row.push(value);
        }
        array2D[i] = row;
    }
}

function createTableInput(rows, cols) {
    var form = document.createElement('form');
    form.id = 'create';
    var table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        var row = table.insertRow(-1);
        for (let j = 0; j < cols; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = `<input class="data" type="number" min="0" max="${(cols + rows) * 10}" placeholder="${i + '-' + j}">`
        }
    }
    form.appendChild(table);
    return form;
}

btnNext.onclick = function () {
    var auto = document.getElementById('auto').checked;
    var rowsControlValue = document.getElementById('rows').value;
    var colsControlValue = document.getElementById('cols').value;
    if (rowsControlValue >= 3 && rowsControlValue < 16) {
        rows = Number(rowsControlValue);
    }
    if (colsControlValue >= 3 && colsControlValue < 16) {
        cols = Number(colsControlValue);
    }
    if (auto) {
        createArrayAuto(rows, cols);
        document.getElementById('create').remove();
        isShowMenu = true;
        showMenu();
    } else {
        document.getElementById('create').remove();
        var box = document.createElement('div');
        var title = document.createElement('h1');
        title.innerText = `Enter the value of the array (Default = 0; Max = ${(cols + rows) * 10})`;
        box.append(title);
        var tableInput = createTableInput(rows, cols);
        box.id = 'step2';
        box.append(tableInput);
        var control = document.createElement('div');
        control.id = 'control';
        control.innerHTML = `<button id="next">Confirm</button><button id="exit">Back</button><button id="auto">Auto input</button>`
        box.append(control)
        document.getElementById('container').append(box);

        document.getElementById('exit').onclick = reset;
        document.getElementById('next').onclick = function () {
            read();
            box.remove();
            isShowMenu = true;
            showMenu();
        };
        document.getElementById('auto').onclick = function () {
            createArrayAuto(rows, cols);
            box.remove();
            isShowMenu = true;
            showMenu();
        };
    }
}


function enforcement(newNode) {
    resultElement.innerHTML = newNode;
}

function createTableResult(array) {
    var table = '<table>';
    for (let i = 0; i < array.length; i++) {
        var row = '<tr>';
        for (let j = 0; j < array[i].length; j++) {
            row += `<td>${array[i][j]}</td>`;
        }
        table += row + '</tr>';
    }
    table += '</table>';
    return table;
}

function print() {
    if (!isShowMenu) {
        return;
    }
    var table = createTableResult(array2D)
    var titleNode = '<h2>All the elements of the array:</h2>';
    enforcement(`<div class="print">${titleNode + table}</div>`);
}


function sum() {
    if (!isShowMenu) {
        return;
    }
    var sum = calculateSum();
    print();
    var notice = document.createElement('div');
    notice.className = 'notice';
    notice.innerHTML = `<h2>Sum of all elements in array is <span>${sum}</span>.</h2>`;
    resultElement.appendChild(notice);
}


function search() {
    if (!isShowMenu) {
        return;
    }
    var isNext = true;
    do {
        var key = prompt('Enter an integer from 1 to 50:');
        if (key === null) {
            isNext = false;
            break;
        }
        if (!isNaN(key)) {
            key = Number(key);
        }
        if (Number.isInteger(key) && key >= 0 && key <= (cols + rows) * 10) {
            break;
        } else {
            alert(`Please enter an integer between 0 and ${(cols + rows) * 10}`);
        }
    } while (1);
    if (isNext) {
        print();
        var exist = handleSearch(key);
        var notice = document.createElement('h2');
        notice.className = 'notice';
        if (!exist) {
            notice.innerHTML = `The number <span>${key}</span> does not exist in the array!`;
            resultElement.appendChild(notice);
        } else {
            notice.innerHTML = `The indices of the number <span>${key}</span> in the array: `;
            for (let i = 0; i < exist.length; i++) {
                notice.innerHTML += `<span>${exist[i]}</span>; `
            }
            resultElement.appendChild(notice);
        }
    }
}

function sort() {
    if (!isShowMenu) {
        return;
    }
    print();
    var arrayAfterSort = handleSort();
    var table = createTableResult(arrayAfterSort);
    var title = `<h2>Sorted array ascending by row:</h2>`
    resultElement.innerHTML += `<div class="notice">${title + table}</div>`
}


function calculateSum() {
    var sum = 0;
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            sum += array2D[i][j];
        }
    }
    return sum;
}


function handleSearch(key) {
    var index = [];
    for (let i = 0; i < array2D.length; i++) {
        if (!array2D[i].includes(key)) {
            continue;
        }
        for (let j = 0; j < array2D[i].length; j++) {
            if (array2D[i][j] == key) {
                index[index.length] = `${i + 1}-${j + 1}`;
            }
        }
    }
    if (index.length > 0) {
        return index;
    }
    return false;
}

function handleSort() {
    var array = copyArray();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length - 1; j++) {
            var index = j;
            for (let k = j; k < array[i].length; k++) {
                if (array[i][k] < array[i][index]) {
                    index = k;
                }
            }
            if (index != j) {
                var tmp = array[i][j];
                array[i][j] = array[i][index];
                array[i][index] = tmp;
            }
        }

    }
    return array;
}

function copyArray() {
    var arr = new Array();
    for (let i = 0; i < rows; i++) {
        var row = new Array();
        for (let j = 0; j < cols; j++) {
            row.push(array2D[i][j])
        }
        arr.push(row);
    }
    return arr;
}
