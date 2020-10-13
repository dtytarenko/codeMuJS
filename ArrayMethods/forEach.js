// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.forEach(function(elem, index) {
// 	document.write(index + '. ' + elem + '<br>');
// });

let arr = [1, 2, 3, 4, 5,];
let sum = 0;

arr.forEach((el) => {
    sum += Math.pow(el, 2);
});

console.log(sum);
console.log(arr);