import {Product} from './Product.js';
import {strName} from './prod.js';

let arrShopList = [], //Массив объектов
    quantity = prompt('Введите количество покупок:', 10), 
    name,
    amount,
    price,
    minPrice = 5,
    maxPrice = 1000,
    arrName = [],
    minAmount = 0,
    maxAmount = 10;

arrName = strName.split(' '); //Массив имен продуктов
const nameLen = arrName.length; 

    for (let i = 0; i < quantity; i++) { // формируем массив объектов продуктов 

        name = arrName[Math.floor(Math.random() * nameLen)];
        amount = Math.floor((Math.random() * maxAmount - minAmount) + minAmount +1);
        price = Math.floor((Math.random() * maxPrice - minPrice) + minPrice);

        let product = new Product(name, amount, price);

        arrShopList.push(product); 
    }

function infoArr(){ //выыод списка продуктов в консоль
    for(let j = 0; j < arrShopList.length; j++){

        console.log(arrShopList[j].getInfo());
    }
}

function getSum(){// расчет суммы чека

    let sum, sumPrice = 0;

    for(let j = 0; j < arrShopList.length; j++){

      sum = arrShopList[j].amount * arrShopList[j].price;
      sumPrice += sum; 
    }
     
   return sumPrice;

}

function getHihgPrice(arr){ //самая высокая цена в чеке

    const max = arr.reduce(function(prev, current) {
        return (prev.price > current.price) ? prev : current
    });
    return `${max.name}; количество ${max.amount}; цена ${max.price}грн.`;     
}

function averagePrice(){//средняя стоимость одного товара в чеке

    let sum, sumPrice = 0;

    for(let j = 0; j < arrShopList.length; j++){

      sum = arrShopList[j].amount * arrShopList[j].price;
      sumPrice += sum; 
    }
    sumPrice /= quantity;
   return sumPrice;
}

infoArr();
console.log(`Итого: ${getSum()}грн.`);
console.log(`Самая дорогая покупка: ${getHihgPrice(arrShopList)}`);
console.log(`Средняя стоимость товара в чеке: ${averagePrice()}грн.`)

