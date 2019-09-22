let diamCirc = 0,
    sideSquar = 0,
    lenCirc = 0, 
    perSquar = 0; 

lenCirc = +prompt('Введите длинну окружности:','');
perSquar = +prompt('Введите периметр квадрата:','');
 
if (lenCirc > 0 && perSquar >0) {
    
    sideSquar = perSquar / 4;
    diamCirc = lenCirc / Math.PI;

    if (diamCirc <= sideSquar) {
            alert('данная окружность вписывается в указанный квадрат');
    }else {
            alert('данная окружность не может быть вписана в указанный квадрат');
    }
}else {
    alert('Вы ввели некорректное значение!');
}

