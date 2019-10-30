import {ModelBook} from '/app/book/ModelBook.js';
import {ViewBook} from '/app/book/ViewBook.js';


export class ControllerBook{
    constructor(){
        this.model = new ModelBook((d)=> this.receiveData(d));
        this.view = new ViewBook(
            ()=> this.clickBtnHandler(),
        );
    }
    receiveData(data){
        this.view.renderCont(JSON.parse(data).results[0]);
    }
    clickBtnHandler(){
        this.model.getUser();
    }

}
