// const startArray = [1, 2, 3, 4, 5];

// const newArray = startArray.map((elem) => elem * elem);
// console.log(newArray);

// const startArray = ['hi', 'hello', 'bye'];

// const newArray = startArray.map((elem) => elem + '!');
// console.log(newArray);

// const startArray = ['hi', 'hello', 'bye'];

// const newArray = startArray.map((elem) => elem.split("").reverse().join(""));
// console.log(newArray);

// const arr = ['123', '456', '789'];

// const newArr = arr.map((elem) => {
//     let arr = [elem.split()];
//     return arr;
// })

// console.log(newArr);
// console.log(arr);


// const startArray = [1, 2, 3, 4, 5];
// 
// const newArray = startArray.map((elem, index) => elem * index);
// console.log(newArray);

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map((elem) => {
    return elem.map((num) => num * num);  
})

console.log(result);