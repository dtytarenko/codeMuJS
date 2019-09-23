// Work with newDate

let date = new Date ();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// function getZero(num){
//     if (num > 0 && num < 10){
//         return '0' + num;
//     }
//     else {
//         return num;
//     }
// }
// console.log(date.getHours() + ':' + getZero(date.getMinutes()) + ':' + getZero(date.getSeconds()) + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// Work with getDay

// console.log(date.getDay());

function showDay (num){
    let nameOfDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return nameOfDay[num];
}
let currentDay = date.getDay();
// console.log(showDay(currentDay));

let oldDate = new Date (2015, 0, 07);
let oldDay = oldDate.getDay();
console.log(showDay(oldDay));