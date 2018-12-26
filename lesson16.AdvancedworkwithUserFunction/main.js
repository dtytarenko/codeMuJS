// function arrCall(arr, n) {
//     if (n < arr.length) { 
//       console.log(arr[n])
//       return arrCall(arr, n + 1);
//     } 
//   }
  
//   let arr = [1, 2, 3, 4];
//   arrCall(arr, 0);
  
function sumNum(n) {
    let result = (n + '').split('').map(function(item){
        return item * 1;
    }).reduce(function(sum, item){ 
        return sum + item;
    });

    n = result;
    if (result > 9){
        return sumNum(n);
    }
    console.log(n);
}

sumNum(930);