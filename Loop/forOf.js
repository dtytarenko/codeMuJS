// let arr = [1, 2, 3, 4, 5]
// let result = 0;

// for (let el of arr) {
//     result += el;    
// }
// console.log(result);

const monthArray = Array.from({length: 12}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {month: "short"});
});

for (let month of monthArray){
    console.log(month);
}

const weekArray = Array.from({length: 7}, (e, i) => {
    return new Date(null, i, null).toLocaleDateString("en", {weekday: "short"});
});

console.log(weekArray);

