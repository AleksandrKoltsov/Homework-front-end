let numLength = parseInt(prompt('Введите число: ','100')),
    numCount = 0;

while(numLength > 0){

    numLength = parseInt(numLength / 10);
    numCount++;
}

alert('Количество цифр во введенном числе равно: ' + numCount);