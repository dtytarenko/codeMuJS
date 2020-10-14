// let startObject = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// const showObjectElements = (obj) => {
//     for (let key in obj){
//         if (typeof obj[key] !== 'object'){
//             console.log(obj[key]);
//         } else {
//             showObjectElements(obj[key]);
//         }
//     }
// }

// showObjectElements(startObject);

// let startObject = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// const calcObjectElements = (obj) => {
//     let sum = 0;

//     for (let key in obj){
//         if (typeof obj[key] !== 'object'){
//             sum += obj[key];
//         } else {
//             sum += calcObjectElements(obj[key]);
//         }
//     }

//     return sum;
// }

// console.log( calcObjectElements(startObject) );

// const startArr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// const concatArrayElements = (arr) => {
//     let result = '';

//     for (let el of arr){
//         if (typeof el !== 'object'){
//             result += el;
//         } else {
//             result += concatArrayElements(el);
//         }
//     }

//     return result;
// }

// console.log(concatArrayElements(startArr));

// const powArrayELements = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] == 'object'){
//             arr[i] = powArrayELements(arr[i]);
//         } else {
//             arr[i] = Math.pow(arr[i], 2);
//         }
//     }

//     return arr;
// }

// console.log(powArrayELements([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));

// const arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// const createArray = (arr) => {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])

//         if (typeof arr[i] == 'object') {
//             createArray(arr[i]);
//         } else {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(createArray(arr));

