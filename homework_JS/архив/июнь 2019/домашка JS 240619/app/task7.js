let number = prompt('Введите число: ',''),
    shift = parseInt(prompt('На сколько сдинуть число? ','')),
    count_shift = number.length,
    div_number = 0,
    rem_div = 0,
    rem = 1;

while(count_shift > shift ){

    rem *=10;
    rem_div = parseFloat(number % rem);

    div_number = parseInt(number / rem);

    count_shift--;
} 

alert(String(rem_div) + String(div_number));


    