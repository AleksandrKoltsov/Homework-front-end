let lengthRoute = 0,
    timeRoute = 0,
    speedRoute = 0;

lengthRoute = prompt('Введите расстояние: ','км.');
timeRoute = prompt('Введите время:','часов');

speedRoute = lengthRoute / timeRoute;

alert('Вам необходимо двигаться со скоростью ' + speedRoute + 'км/ч чтобы успеть вовремя!');