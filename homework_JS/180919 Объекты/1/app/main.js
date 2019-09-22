import {Product} from '../app/Product.js';
import {strName} from '../app/prod.js';

let arrShopList = [], //Массив объектов
    quantity = prompt('Введите количество покупок:', 10), 
    name,
    amount,
    bought,
    arrName = [],
    arrBought = [0,1],
    minAmount = 0,
    maxAmount = 10;

arrName = strName.split(' '); //Массив имен продуктов
const nameLen = arrName.length, 
      boughtLen = arrBought.length;

    for (let i = 0; i < quantity; i++) { // формируем массив объектов продуктов 

        name = arrName[Math.floor(Math.random() * nameLen)];
        amount = Math.floor((Math.random() * maxAmount - minAmount) + minAmount +1);
        bought = arrBought[Math.floor(Math.random() * boughtLen)];

        let product = new Product(name, amount, bought);

        arrShopList.push(product); 
    }
function sortArr(){ //сортировка списка от не купленых к купленым
    arrShopList.sort(function(a, b){
        return a.bought-b.bought;
    });
}
function infoArr(){ //выыод списка продуктов в консоль
    for(let j = 0; j < arrShopList.length; j++){

        console.log(arrShopList[j].getInfo());
    }
}

function inputArr(){ //добавление нового пункта в список продуктов

    let mess = confirm('Хотите добавить новый пункт списка в ручную "ОК" \n если случаным образом то "CANCEL"'),
        newName,
        newAmount,
        newBought,
        product2;

    if(mess == true){
     
            newName = prompt('Введите название продукта: '),
            newAmount = parseInt(prompt('Введите количество продуктов: ')),
            newBought = 1;

        const index = arrShopList.findIndex(arrShopList => arrShopList.name === newName); //поиск объекта с одинаковым значение name

            if(arrShopList[index].name == newName){
               
                    arrShopList[index].amount += newAmount; //изменяем значения объекта в случае совпадения имени
                    arrShopList[index].bought = 1;
            }else{
                 product2 = new Product(newName, newAmount, newBought);

                 arrShopList.push(product2);
            }
    }else { //генерация случайной позиции в список 

        newName = arrName[Math.floor(Math.random() * nameLen)],
        newAmount = Math.floor((Math.random() * maxAmount - minAmount) + minAmount +1),
        newBought = 1;
        product2 = new Product(newName, newAmount, newBought);
        arrShopList.push(product2);
    }
}
sortArr()
infoArr();
inputArr();
console.clear();
sortArr()
infoArr();