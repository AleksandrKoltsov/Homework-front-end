let inputNum = 0,
    changeNum1 = 0,
    changeNum2 = 0,
    changeNum3 = 0;

inputNum = +prompt('Введите 3-х значное число: ','');

changeNum1 = inputNum % 10;
inputNum = (inputNum / 10) ^ 0;
changeNum2 = inputNum % 10;
inputNum = (inputNum / 10) ^ 0;
changeNum3 = inputNum % 10;

if (changeNum1 == changeNum2 && changeNum1 == changeNum3) {
    alert('Вы ввели три одинаковых цифры!');
} else if (changeNum1 == changeNum2 || changeNum1 == changeNum3) {
    alert('Вы ввели две одинаковых цифры!');
}else if (changeNum1 == changeNum2 || changeNum2 == changeNum3) {
    alert('Вы ввели две одинаковых цифры!');
}else {
    alert('совпадений не найдено!');
}
