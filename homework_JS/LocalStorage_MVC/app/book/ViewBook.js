export class ViewBook{
    constructor(addLine, getCon, delLine, clearContact, sortByNum, sortByName){
        this.inpName = document.querySelector('.name');
        this.inpNum = document.querySelector('.num');
        this.btnAdd = document.querySelector('.add');
        this.btnDel = document.querySelector('.del');
        this.sortNum = document.querySelector('.sortNum');
        this.sortName = document.querySelector('.sortName');
        this.list = document.querySelector('.phoneBook');
        this.btnDelAll = document.querySelector('.delAll');

        this.inpName.addEventListener('keydown', this.inputName);
        this.inpNum.addEventListener('keydown', this.inputNumber);
        this.btnAdd.addEventListener('click', addLine);
        this.btnDel.addEventListener('click', delLine);
        this.btnDelAll.addEventListener('click', clearContact);
        this.sortNum.addEventListener('click', sortByNum);
        this.sortName.addEventListener('click', sortByName);
        document.addEventListener('DOMContentLoaded', getCon); //событие для вывода базы данных на эекран
    }
    inputName(event){ //фильтр по буквам
        
        if(event.which >= 65 && event.which <= 90 || event.which == 32 || event.which == 8 || event.which == 9 || event.which == 20){
            return;
        }else{
            event.preventDefault(); //отмена стандартного действия
        }
    }
    inputNumber(event){//фильтр по цифрам + numpad + backspace + tab + space
        
        if(event.which >= 48 && event.which <= 57 || event.which >= 96 && event.which <= 105 || event.which == 32 || event.which == 8 || event.which == 107 || event.which == 187 || event.which == 9){
            return;
        }else{
            event.preventDefault();
        }
    }

    getContact(){//получение данных из полей input, возможно перенесу в ModelBook
        return {
            number: this.inpNum.value,
            name: this.inpName.value
        };
    }
    renderCont(arr){//вывод на экран полученного объекта из контроллера
        this.inpName.value = null; //обнуление полей ввода после клика по кнопке
        this.inpNum.value = null;
        this.removeLi();  

        for(let i = 0; i< arr.length; i++){ //создание нового элемента/элементов
            const li = document.createElement('li');
            li.innerHTML += `<p>${arr[i].number} ${arr[i].name}</p>`;
            this.list.appendChild(li);
        }
    }

    removeLi(){
        while(this.list.hasChildNodes()){
            this.list.removeChild(this.list.firstChild);
        }
    }

    deleteAll(){
        this.removeLi();         
    }
}