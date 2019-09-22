let numLen1 = parseInt(prompt('Введите начало числового диапазона: ','10')),
    numLen2 = parseInt(prompt('Введите конец числового диапазона: ','100')),
    sumLen = 0;
    numLen3 = numLen1;

while(numLen3 <= numLen2){
    sumLen = sumLen + numLen3;
    numLen3++;
}

alert('Сумма диапазона чисел от ' + numLen1 + ' до ' + numLen2 + ' = ' + sumLen);