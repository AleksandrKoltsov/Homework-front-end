let car = {                 // создал объект "автомобиль"
    manufacturer : "UAZ",
    model : "UAZ-452",
    year: 1979,
    average_speed: "60km/h"},

    s = parseInt(prompt("Input distance km.: ", 500)); //задать расстояние в км

function  showCar(){ //функция для вывода свойств объекта

    for (let key in car) {

        console.log(key + " : " + car[key]); 
      }
}

function calcTime(s){ //считаем время заданного пути

    let time = Math.round(s / 60),

        d = 0; // количество часов отдыха

    for(let i = 1; i < time; i++){

        i % 4 == 0 ? d++ : 0;
    }
    return time + d;
}

showCar();

console.log(s+"km you drive in " + calcTime(s) +  " hours ");

