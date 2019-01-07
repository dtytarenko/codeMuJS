//function go(){
//    let elem = document.getElementById('test');
//    elem.innerHTML = "hihi, i`m <b>bold</b>";
//}


//function go(){
//    let elem = document.getElementById('test');
//    elem.outerHTML = '<h3> it`s magic </h3>';
//   elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
//}

//function go(){
//    let firstInput = +document.getElementById('input1').value;
//    let secondInput = +document.getElementById('input2').value;
//    let result  = document.getElementById('result');
//
//   result.innerHTML = firstInput + secondInput;
//}

//function go(){
//    let parag = document.getElementsByTagName('p');
//    for (let i = 0; i < parag.length; i++){
//        parag[i].innerHTML = 'change text';
//    }
//}

// function go(){
//     let elem = document.getElementsByClassName('www');
//     for (let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = i + 1;
//     }
// }

// function go(){
//     let elem = document.querySelectorAll('p.www')
//     for (let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = i + 1;
//     }
// }

// function go(){
//     let elem = document.getElementById('class');
//     alert(elem.getAttribute('class'));
// }


    function go(elem){
        var text = document.getElementById('text');
        text.innerHTML = elem.value;
    }
