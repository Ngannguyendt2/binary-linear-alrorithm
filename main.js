let arr=[];
let num;
function pushArray() {
    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}

function importNumber() {
    num = Number(prompt("Number need find"));
    return num;
}

function linearFind() {
    for (let i = 0; i < arrayNumber.length; i++) {
        if (number == arrayNumber[i]) {
            alert("Number need find at " + i + "position");
            break;
        }
    }
}

function binaryfind() {
    let first = 1;
    let final = arrayNumber.length - 1;
    let i = 0;
    while (first <= final) {
        i = Math.floor((first + final) / 2);
        if (arrayNumber[i] == number) {
            alert("Number need find at " + i + "position");
            break;
        } else if (arrayNumber[i] < number) {
            first = i + 1;

        } else {
            final = i - 1;
        }
    }
}
let arrayNumber=pushArray();
let number=importNumber();

