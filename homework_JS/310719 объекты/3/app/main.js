let time = { // объект хранящий время
        sec : 0,
        min : 0,
        hour : 0
    },
    param = prompt(` введите параметр для изменения времени "sec" "min" "hours" `);

function showScreen(a){ //выводит время в консоль

    a.sec == 0 ? a.sec = '00' : a.sec < 10 ? a.sec = '0' + a.sec : 0; //добавляю нолики если время < 10 либо = 0
    a.min == 0 ? a.min = '00' : a.min < 10 ? a.min = '0' + a.min : 0;
    a.hour == 0 ? a.hour = '00' : a.hour < 10 ? a.hour = '0' + a.hour : 0;

    return console.log(`${a.hour}:${a.min}:${a.sec}`);
}

function calcTime(sec){ // расчитывает переданное время и перезаписывает объект

    let hour, min;

    hour = Math.trunc(sec / 3600); // откидываю дробную часть и присваиваю целое значение -- часы
    sec %= 3600;                   // оставшееся время от часов 
    min = Math.trunc(sec / 60);    // откидываю дробную часть и присваиваю целое значение -- минуты
    sec %= 60;                     // оставшееся время от минут - секунды

    time.sec = sec; //перезаписываю новые значения в объект
    time.min = min;
    time.hour = hour;
}

function setSec(min = 0, max = 100000000){ //функция запрашивает необходимое количество секунд

    
    let sec;
    while(isNaN(sec) || sec > max || sec < min){ //проверка 

        sec = parseInt(prompt(`Введите количество секунд от ${min} до ${max}`, 1));
    }
   
    return sec; //время возвращается в секундах
}

function setMinut(min = 0, max = 10000000){  //функция запрашивает необходимое количество минут
    
    let minut;
    while(isNaN(minut) || minut > max || minut < min){ //проверка 

        minut = prompt(`Введите количество минут от ${min} до ${max}`, 1);
    }
   
    return minut*60; //время возвращается в секундах
}

function setHour(min = 0, max = 1000000){ //функция запрашивает необходимое количество часов

    
    let hour;
    while(isNaN(hour) || hour > max || hour < min){ //проверка

        hour = prompt(`Введите количество часов от ${min} до ${max}`, 1);
    }
   
    return hour*3600; //время возвращается в секундах
}

showScreen(time); //показывает время в консоль

switch (param) { //небольшой свитч для красивого вывода функций

    case 'sec':                 
        calcTime(setSec());
        showScreen(time);
        break;

    case 'min':
        calcTime(setMinut());
        showScreen(time);
        break;

    case 'hours':
        calcTime(setHour());
        showScreen(time);
        break;

    default:
        alert("Всего хорошего!");
        break;
}




