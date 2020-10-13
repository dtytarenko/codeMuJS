const getDiff = (...arrs) => {
    let result = [];
    let arr0 = arrs.shift();

    for (let elem of arr0){
        if(!getDiffInArrays(elem, arrs)){
            result.push(elem);
        }
    }

    return result;
}

const getDiffInArrays = (elem, arrs) => {
    for (let arr of arrs){
        if(!inArray(elem, arr)){
            return false;
        }
    }

    return true;
}

const inArray = (elem, arr) => {
    return arr.indexOf(elem) !== -1;
}

let result = getDiff([1, 2, 3, 5], [2, 3, 4, 5], [4, 3, 2, 5]);
console.log(result); 