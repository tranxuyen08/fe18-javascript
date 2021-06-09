var $ = function (id) {
    return document.getElementById(id);
};
var arr = new Array(10);
var resultElement = null;
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 50) + 1;
}

function enforcement(newNode) {
    resultElement.innerHTML = newNode;
}

function print() {
    var titleNode = '<h2>All the elements of the array:</h2>';
    var listArr = arr.reduce(function (list, item, index) {
        return list += `<b>N[${index}]</b> = ` + item + '; ';
    }, '<div>') + '</div>';
    enforcement(titleNode + listArr);
}

function search() {
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
        if (Number.isInteger(key) && key > 0 && key < 51) {
            break;
        } else {
            alert('Please enter an integer between 1 and 50');
        }
    } while (1);
    if (isNext) {
        print();
        var exist = handleSearch(key);
        var notice = document.createElement('h2');
        if (!exist) {
            notice.innerHTML = `The number <span>${key}</span> does not exist in the array!`;
            resultElement.appendChild(notice);
        } else {
            notice.innerHTML = exist.reduce(function (html, item) {
                return html += `<span>${item}</span>; `
            }, `The indices of the number <span>${key}</span> in the array: `);
            resultElement.appendChild(notice);
        }
    }
}

function max() {
    var indexMax = findMax();
    print();
    var notice = document.createElement('h2');
    notice.innerHTML = `The largest number in the array is <span>${arr[indexMax]}</span> with index <span>${indexMax}</span>.`
    resultElement.appendChild(notice);
}

function sum() {
    var sum = arr.reduce(function (total, item) {
        return total += item;
    }, 0);
    print();
    var notice = document.createElement('h2');
    notice.innerHTML = `Sum of all elements in array is <span>${sum}</span>.`
    resultElement.appendChild(notice);
}

function sort() {
    var arrAfterSort = handleSort(arr.slice());
    print();
    var notice = document.createElement('h2');
    notice.innerHTML = `Sorted array descending: `
    for (let i = 0; i < arrAfterSort.length; i++) {
        notice.innerHTML += `<span>${arrAfterSort[i]}</span>; `;
    }
    resultElement.appendChild(notice);
}

function findMax() {
    var index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            index = i;
        }
    }
    return index;
}

function handleSearch(key) {
    if (!arr.includes(key)) {
        return false;
    } else {
        var index = [];
        arr.forEach(function (item, i) {
            if (item === key) {
                index[index.length] = i;
            }
        })
        return index;
    }
}

function handleSort(array) {
    return array.sort(function (x, y) {
        return y - x;
    });
}

window.onload = function () {
    resultElement = $('result');
    $('print').onclick = print;
    $('sort').onclick = sort;
    $('sum').onclick = sum;
    $('search').onclick = search;
    $('max').onclick = max;
}