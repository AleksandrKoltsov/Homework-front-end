let inputNum = 0,
    positive = 0,
    negative = 0,
    zero = 0,
    even = 0,
    odd = 0;
 

for(let i = 10; i > 0; i--){

    inputNum = parseInt(prompt('Введите число: ',''));
    
    (inputNum % 2 == 0) ? even++ : odd++;
    (inputNum > 0) ? positive++ : 
    (inputNum < 0) ? negative++ : zero++;
}
alert('Вы ввели положительных чисел: ' + positive + ';' + ' отрицательных чисел: ' + negative + ';' + ' Нулей: ' + zero + ';' + ' Из них четных чисел: ' + even + ';' + ' Нечетных чисел: ' + odd);
