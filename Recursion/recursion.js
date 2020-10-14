let result = [];

const fibonacci = (prevPrevNum, prevNum) => {
    let sum = prevPrevNum + prevNum;
    result.push(sum);

    if (result.length < 10){
        fibonacci(prevNum, sum);
    }
    
    return result;
}
fibonacci(1, 2);
console.log(result);


