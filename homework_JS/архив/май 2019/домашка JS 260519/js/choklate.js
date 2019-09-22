let  sumMoney = 0,
     priceChok = 0,
     sumChok = 0,
     change = 0;

sumMoney = prompt('Введите сумму денег в кошельке: ','');
priceChok = prompt ('Сколько стоит одна шоколадка? ','');

sumChok = sumMoney / priceChok;
change = sumMoney % priceChok;

alert('Вы сможет купить ' + Math.floor(sumChok) + ' шоколадки(ок) и у вас останется сдача ' + Math.round(change * 100) / 100 + ' денег' );
