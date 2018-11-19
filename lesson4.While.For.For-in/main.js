// for (var i = 1; i <=100; i++) {
//     document.write(i + '<br>');
// }

// for (var i = 11; i <= 33; i++){
//     document.write(i + '<br>');
// }

// for (var i = 0; i <=100; i = i + 2) {
//     document.write(i + '<br>');
// }

// var result = 0;
// for (var i = 0; i <= 100; i++){
//     result += i;
// }
// alert(result);

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// var arr = [1, 2, 3, 4, 5];
// var result = 0;
// for (var i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// alert(result);

// var obj = {
//     green: 'зеленый', 
//     red: 'красный', 
//     blue: 'голубой'
// }

// for (var key in obj){
//     alert(key);
//     alert(obj[key]);
// }

// var obj = {
//     Kolya: '200',
//     Vasya: '300',
//     Petya: '400'
// }

// for (var key in obj){
//     alert(key + ' зарплата ' + obj[key] + ' долларов ');
// }

// var arr = [2, 5, 9, 15, 0, 4];
// var result = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         alert(arr[i]);
//     }
// }

// var arr = [2, -5, -9, 15, 0, 4];
// var result = 0;
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] >= 0) {
//         result += arr[i];
//     } 
// }
// alert(result);

// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] == 4) {
//         alert('Yes');
//         break;
//     }  
// }

// var arr = ['10', '20', '30', '50', '235', '3000'];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
// 		alert(arr[i]);
// 	}
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = '';
// for (var i = 0; i < arr.length; i++) {
// 	str += '-' + arr[i];
// }

// // document.write(str + '-');

// var arr = ['mon', 'tue', 'wed', 'thur', 'friday', 'saturday', 'sunday'];
// for (i = 0; i < arr.length; i++) {
//     if (i == 4 || i == 5) {
//         document.write('<b>' + arr[i] + '<br><br>');
//     } else {
//         document.write(arr[i] + '<br>');
//     }
// }

// var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// day = 3;

// for (var i = 0; i < arr.length; i++) {
// 	if (i == day) {
// 		document.write('<i>' + arr[i] + '</i><br>');
// 	} else {
// 		document.write(arr[i] + '<br>');
// 	}
// }

    // for (var n = 1000, num = 0; n > 50; n /= 2, num++);
    // alert(n);
    // alert(num)