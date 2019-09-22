export class Product{ //класс для нового продукта
    constructor(name = 'noname', amount = 0, bought = 0){
        this.name = name;
        this.amount = amount;
        this.bought = bought;
    }
    getInfo(){ //метод для вывода списка в консоль
        if(this.bought == 0){
            return `Что: ${this.name}; колличество: ${this.amount}; не куплено`;
        }else {
            return `Что: ${this.name}; колличество: ${this.amount}; куплено`;
        }  
    }   
}
