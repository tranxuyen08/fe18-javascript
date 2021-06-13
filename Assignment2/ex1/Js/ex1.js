var $ = function(id) {
    return document.getElementById(id);
};

var arrays = [10, 20, 40, 60, 80, 32, 12, 11, 42, 14, 99];

function print() {

    document.write("All member of array:" + arrays);
};

// function search(n) {
//     var n = prompt("Enter the number");
//     if (n !== null) {
//         if (isNaN(n) || n === "") {
//             alert("Number is NaN");
//             return;
//         }

//         n = parseInt(n);
//         var search = arrays.indexOf(n);
//         if (search !== -1) {
//             document.write("Tồn tại  " + arrays[search] + " index = " + search);

//         } else {
//             document.write("Ko tồn tại");
//         }
//     }
// }


function search() {
    var n = prompt("input your number");
    if (n !== null) {
        if (isNaN(n) || n === "") {
            alert("Number is NaN");
            return;
        }
        var search = arrays.indexOf(parseInt(n));
        if (search !== -1) {
            document.write("Number input is : " + arrays[search] + " Index =" + search);
        } else {
            document.write("The number you not exit in array");
        }
    }
}

function find() {
    var index = 0;
    for (let i = 1; i < arrays.length; i++) {
        if (arrays[i] > arrays[index]) {
            index = i;
        }
    }
    document.write("Số Max trong mảng Array: " + arrays[index] + "<br>" + "Là phần tử vị trí số:" + index);

}

function sum() {
    var total = 0;
    var sum = function(previousValue, value) {
        return previousValue + value;
    };
    total = arrays.reduceRight(sum);
    document.write("All member of array: " + arrays + "<br>" + " Sum Arryy = " + total);

}

function descending() {
    arrays.sort(function(a, b) {
        return b - a;
    });
    document.write("Sort all elements of array by descending: " + arrays);
}

window.onload = function() {
    $('print_all').onclick = print;
    $('search_array').onclick = search;
    $('find_maximum').onclick = find;
    $('sum').onclick = sum;
    $('descending').onclick = descending;
}