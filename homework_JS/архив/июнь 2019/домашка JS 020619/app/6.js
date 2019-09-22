let sumUSD = +prompt('Введите сумму USD для конвертации: ','');
let currency = prompt ('Введите валюту для конвертации: EUR, UAH или AZN: ','');

if (sumUSD <=0) {
    alert('Вы ничего не получите!');
}else {
switch (currency) {
    case 'EUR':
        sumUSD = sumUSD * 0.89;
        alert('вы получите ' + sumUSD + ' EUR');
        break;
    case 'UAH':
        sumUSD = sumUSD * 26.93;
        alert('вы получите ' + sumUSD + ' UAH');
        break; 
    case 'AZN':
        sumUSD = sumUSD * 1.70;
        alert('вы получите ' + sumUSD + ' AZN');
        break;    
    case 'USD':
        alert('Это бессмысленно!');
        break;  
    default:
        alert('Такой валюты нет в моем списке конвертации');
        break;
}
    
}