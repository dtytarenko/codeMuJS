// var arr = ['a', 'b', 'c'];
// alert(arr);
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// var arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]);

// var arr = [2, 5, 3, 9];
// var result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// alert(result);

// var obj = {a: 1, b: 2, c: 3};
// alert(obj['c']);
// alert(obj.c);

// var obj = {
//     Коля: '1000', Вася: '500', Петя: '200'
// };
// alert(obj.Петя);
// alert(obj.Коля);


// var obj = {1: 'mon', 2: 'tue', 3: 'wedn', 4: 'thur', 
//     5: 'friday', 6: 'sat', 7: 'sunday'};
// // alert(obj['4']);
// var day = 3;
// alert(obj[day]);

// var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// alert(arr[1][0]);

// var arr = {js:['jQuery', 'Angular'], 
//         php: 'hello', css: 'world'};
// alert(arr['js'][0]);

var obj = {
    'ru' : ['pn', 'vt', 'sr', 'chtv', 'pyat', 'sub', 'vosk'],
    'en' : ['mon', 'tue', 'wedn', 'thur', 'fri', 'sat', 'sun'],
}


var lang = 'ru';
var day = 0;
alert(obj[lang][day]);