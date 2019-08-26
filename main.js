let arr=[];
let number;
function pushArray() {
    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}

function importNumber() {
    number = Number(prompt("Number need find"));
    return number;
}

function linearFind() {
    arr = pushArray();
    number = importNumber();
    for (let i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            alert("Number need find at " + i + "position");
        }
    }
}

function binaryfind() {
    arr = pushArray();
    number = importNumber();
    let first = 1;
    let final = arr.length - 1;
    let i = 0;
    while (first <= final) {
        i = Math.floor((first + final) / 2);
        if (arr[i] == number) {
            alert("Number need find at " + i + "position");
            break;
        } else if (arr[i] < number) {
            first = i + 1;

        } else {
            final = i - 1;
        }
    }
}

