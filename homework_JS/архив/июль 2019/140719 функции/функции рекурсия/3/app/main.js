function searchMaxNum(num){

    let arrNum = num.split('');

    arrNum.sort(function(a, b) {return a - b});

    return arrNum[arrNum.length - 1];
    
}

let num = prompt("Введите число: ", '1234567890');

console.log('Самая большая цифра: ' + searchMaxNum(num));