import {ModelBook} from '/app/book/ModelBook.js';
import {ViewBook} from '/app/book/ViewBook.js';


export class ControllerBook{
    constructor(){
        this.model = new ModelBook();
        this.view = new ViewBook(
            ()=> this.clickBtnAdd(),
            ()=> this.getListCont(),
            ()=> this.clickBtnDel(),
            ()=> this.clickBtnDelAll(),
            ()=> this.clickBtnSortNum(),
            ()=> this.clickBtnSortName()
        );
    }

    clickBtnAdd(){ // клик по кнопке добавить 
        let txt = this.view.getContact();
        const objContact = this.model.setCont(txt);
        this.view.renderCont(objContact);
    }
    getListCont(){ //загрузка и рендер списка контактов из localstorage
        const objC = JSON.parse(localStorage.getItem('contacts')) || [];
        this.view.renderCont(objC);
        
    }
    clickBtnDel(){//клик по кнопке удаления контакта
        let delTxt = this.view.getContact();
        let objDel = JSON.parse(localStorage.getItem('contacts')) || [];
        let filterArr = this.model.deleteLine(delTxt, objDel);
        this.view.renderCont(filterArr);
    }
    clickBtnDelAll(){//клик по кнопке удалить все
        this.view.deleteAll(this.model.clickBtnDelAll());
    }
    clickBtnSortNum(){//клиик по кнопке сортировка по номеру
        this.view.renderCont(this.model.sortNum());
    }
    clickBtnSortName(){//клик по кнопке сортировка по имени
        this.view.renderCont(this.model.sortName());
    }
}
