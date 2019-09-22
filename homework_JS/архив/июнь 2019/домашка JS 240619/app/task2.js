let num1 = parseInt(prompt('Введите первое число: ','')),
    num2 = parseInt(prompt('Введите второе число: ', '')),
    more = 0;

if (num1 <= num2) {

   for (let j = num1 - 1; j > 1; j--) {
        if(num1 % j == 0) {
            more = j;
            if(num2 % j == 0) {
                break;
            }
        }
    }

}else  {

    for (let j = num2 - 1; j > 1; j--) {
        if(num2 % j == 0) {
            more = j;
            if(num1 % j == 0) {
                break;
            }
        }
    }
}
if(more != undefined){

    alert(' Наибольший общий делитель: ' + more);
}else {
    
    alert('общего делителя нет!');
}