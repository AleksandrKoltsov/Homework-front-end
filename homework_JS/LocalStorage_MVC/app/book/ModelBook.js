export class ModelBook{
    constructor(){
        this.contacts = JSON.parse(localStorage.getItem('contacts')) || []; 
    }

    setCont(txt){//запись нового контакта
        if(txt.num == '' || txt.name == '') return; //если поля не заполнены завершить метод
        this.contacts.push(txt); //
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        return this.contacts;
    }
    deleteLine(obj, arr){ //удаление заданного контакта

        for(let i = 0; i < arr.length; i++){ //поиск указанного контакта в существующих записях 
            if(arr[i].number == obj.number){ //если есть совпадение то удаляем объект
                delete arr[i];
            }
        }
        let result = arr.filter(Boolean); //проход по масиву и удажение всех false
        localStorage.setItem('contacts', JSON.stringify(result));
        return result;

    }
    clickBtnDelAll(){//очищаем список контактов полностью
        localStorage.setItem('contacts', '[]');
        return this.contacts;
    }
    sortNum(){//выполняет сортировку по номеру
        this.contacts.sort((a, b) => a.number - b.number);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        return this.contacts;
    }
    sortName(){//выполняет сортировку по имени
        this.contacts.sort((a, b) => {
            let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0 
        });

        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        return this.contacts;
    }
}