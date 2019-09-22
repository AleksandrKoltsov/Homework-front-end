let num1, den1, num2, den2,
    fraction1 = {}, // объект дробь 1
    fraction2 = {}; // объект дробь 2

    while(isNaN(num1) || isNaN(num2) || isNaN(den1) || isNaN(den2)){

        num1 = Math.round(parseInt(prompt("Введите числитель первой дроби: ")));
        den1 = Math.round(parseInt(prompt("Введите знаменатель первой дроби: ")));
        num2 = Math.round(parseInt(prompt("Введите числитель второй дроби: ")));
        den2 = Math.round(parseInt(prompt("Введите знаменатель второй дроби: ")));
    }

    fraction1.numerator = num1;
    fraction1.denominator = den1;
    fraction2.numerator = num2;
    fraction2.denominator = den2;

function divDef(x, y){ //находит общий делитель для дальнейшего сокращения дроби

    let i;

    x > 0 ? i = x : i = y; // в случае когда числитель меньше 0 то общий делитель находим из знаменателя

    for(; i > 0; i--){

        if(x % i == 0 && y % i == 0){

            return i;
        }  
    }
}

function addFrac(a, b){ // сложение дробей

    let sumNum, sumDen;

    sumNum = (a.numerator * b.denominator) + (b.numerator * a.denominator);
    sumDen = a.denominator * b.denominator;
    
    return console.log(`${a.numerator}/${a.denominator} + ${b.numerator}/${b.denominator} = ${fracReduc(sumNum, sumDen)}`);
}
function subtracFrac(a, b){ // вычитание дробей

    let sumNum, sumDen;

    sumNum = (a.numerator * b.denominator) - (b.numerator * a.denominator);
    sumDen = a.denominator * b.denominator;
        
    return console.log(`${a.numerator}/${a.denominator} - ${b.numerator}/${b.denominator} = ${fracReduc(sumNum, sumDen)}`);
}
function multiFrac(a, b){ // умножение дробей

        let sumNum, sumDen;

        sumNum = a.numerator * b.numerator; //числитель
        sumDen = a.denominator * b.denominator ; //знаменатель

        return console.log(`${a.numerator}/${a.denominator} * ${b.numerator}/${b.denominator} = ${fracReduc(sumNum, sumDen)}`);
}
function divFrac(a, b){ // деление дробей
        
        let sumNum, sumDen;

        sumNum = a.numerator * b.denominator //числитель
        sumDen = a.denominator * b.numerator  ; //знаменатель

        return console.log(`${a.numerator}/${a.denominator} / ${b.numerator}/${b.denominator} = ${fracReduc(sumNum, sumDen)}`);
        
}
function fracReduc(sumNum, sumDen){ // сокращение дроби // приведение неправильной дроби к целому числу
   
    let bal = 0, // остаток числителя после приведения дроби к целому числу
        numInt = 0, // целое число при преобразовании неправильной дроби в правильную
        t; //общий делитель

    if(sumNum < 0 || sumDen < 0){ //если дробь отрицательная 

        return negativFrac(sumNum, sumDen);
    }

    if(sumNum == 0) return 0;

    if(sumNum < sumDen && sumNum > 0){

        t = divDef(sumNum, sumDen); // общий делитель для сокращения дроби
        sumNum /= t; // сокращаем дробь через общий делитель
        sumDen /= t;

        return `${sumNum}/${sumDen}`;
    }
    if(sumNum == sumDen){ //если числитель и знаменатель равны
        
        return 1;
    }
    
    if(sumNum > sumDen){ //если дробь неправильная

        for(let i = sumNum; i > 0; i--){ //цикл для определения целой части дрорби

            if(i % sumDen == 0){ // когда числитель делится без остатка на знаменатель

                numInt = i / sumDen; // извлекаем целую часть
                sumNum = bal; // перезаписываем остаток от целой части в числитель
                break;
            }

            bal++; //считает остаток от целой части
        }

        t = divDef(sumNum, sumDen); // общий делитель для сокращения дроби
        sumNum /= t; // сокращаем дробь через общий делитель
        sumDen /= t;

        if(sumNum == 0) return `${numInt}`;

        else return `${numInt} ${sumNum}/${sumDen}`;

    } 
}

function negativFrac(sumNum, sumDen){ //считаем отрицательную дробь

    let bal = 0, // остаток числителя после приведения дроби к целому числу
    numInt = 0, // целое число при преобразовании неправильной дроби в правильную
    t; //общий делитель

    sumNum = Math.abs(sumNum); //числитель по модулю
    sumDen = Math.abs(sumDen); //знаменатель по модулю

    if(sumNum < sumDen && sumNum > 0){

        t = divDef(sumNum, sumDen); // общий делитель для сокращения дроби
        sumNum /= t; // сокращаем дробь через общий делитель
        sumDen /= t;

        return `${sumNum * -1}/${sumDen}`;
    }
    if(sumNum == sumDen){ //если числитель и знаменатель равны
        
        return -1;
    }
    
    if(sumNum > sumDen){ //если дробь неправильная

        for(let i = sumNum; i > 0; i--){ //цикл для определения целой части дрорби

            if(i % sumDen == 0){ // когда числитель делится без остатка на знаменатель

                numInt = i / sumDen; // извлекаем целую часть
                sumNum = bal; // перезаписываем остаток от целой части в числитель
                break;
            }

            bal++; //считает остаток от целой части
        }

        t = divDef(sumNum, sumDen); // общий делитель для сокращения дроби
        sumNum /= t; // сокращаем дробь через общий делитель
        sumDen /= t;

        if(sumNum == 0) return `${numInt * -1}`;

        else return `${numInt * -1} ${sumNum}/${sumDen}`;
    }

}
addFrac(fraction1, fraction2); //функция сложения дробей
subtracFrac(fraction1, fraction2); //функция вычитания дробей
multiFrac(fraction1, fraction2); //функция умножения дробей
divFrac(fraction1, fraction2); //функция деления дробей

