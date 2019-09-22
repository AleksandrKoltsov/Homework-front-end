export class Product{ //класс для нового продукта
    constructor(name = 'noname', amount = 0, price = 0){
        this.name = name;
        this.amount = amount;
        this.price = price;
    }
    getInfo(){ //метод для вывода списка в консоль
        return `Что: ${this.name}; колличество: ${this.amount}; цена: ${this.price}грн.`;
         
    }   
}
