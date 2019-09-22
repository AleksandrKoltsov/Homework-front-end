let EURO_RATE = 0.89,
    sumDollar = 0,
    sumEuro = 0;

sumDollar = prompt('сколько долларов конвертировать? ','');

sumEuro = sumDollar * EURO_RATE;

alert('Вы получите ' + sumEuro + ' евро');