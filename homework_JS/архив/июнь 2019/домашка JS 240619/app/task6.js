let calcNum1,
    calcNum2,
    sign,
    result = 0,
    i = 1;

while (i > 0) {
    
    if(confirm('Еще одну задачу?')){
     
        calcNum1 = parseInt(prompt(' Введите первое число',''));
        calcNum2 = parseInt(prompt(' Введите второе число',''));
        sign = prompt(' Введите знак  /   *   -   + ','');

        switch (sign) {
            case '/':
                result = calcNum1 / calcNum2;
                alert(result);
                continue;
            case '*':
                result = calcNum1 * calcNum2;
                alert(result);
                continue;
            case '+':
                result = calcNum1 + calcNum2;
                alert(result);
                continue;
            case '-':
                result = calcNum1 - calcNum2;
                alert(result);
                continue;
            default:
                alert('Вы ввели недопустимое значение!');
                continue;
        }

    }else{
        break;
    }

}