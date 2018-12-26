// function isNumberInRange (a) {
//     return a > 0 && a < 10;
// }

// console.log(isNumberInRange(5));


// var arr = [1, 3, 5, 6, 9, 11, 15, 30];
// var result = [];

// for (var i = 0; i < arr.length; i++); {
    
//     function isNumberInRange (arr) {
//         return arr[i] > 0 && arr[i] < 10;
//     }

//     if (isNumberInRange(arr[i])) {
//         result.push(arr[i]);
//     }
// }

// console.log(result);




// function getDigitsSum(num) {
// 	var num = String(num);
// 	var sum = 0;
// 	for (var i = 0; i < num.length; i++) {
// 		sum += Number(num[i]);
// 	}
// 	return sum;
// }

// alert(getDigitsSum(123)); 


// for (var i = 1; i < 2017; i++) {
// 	if (getDigitsSum(i) == 13) {
// 		console.log(i);
// 	}
// }


// function isEven(num) {
// 	return num % 2 == 0;
// }


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = [];
// for (var i = 0; i < arr.length; i++) {
// 	if(isEven(arr[i])) {
// 		result.push(arr[i]);
// 	}
// }

// console.log(result);


// function getDivisors(num) {
// 	var arr = [];
// 	for (var i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i);
// 		}
// 	}
	
// 	return arr;
// }

// alert(getDivisors(12));