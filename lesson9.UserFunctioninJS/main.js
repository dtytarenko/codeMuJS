// function cube (num) {
//     return num * num 
// }

// alert(cube(3));

// function sum (num, b) {
//     return num + b
// }

// alert(sum(3, 2));

// function easy (a,b,c) {
//     return (a - b) / c;
// }

function easy (num) {
    var day = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
    if (num >= 1 && num <= 7) {
        return day[num - 1]
    } else {
        return 'write valid number'
    }
}

alert(easy(0));