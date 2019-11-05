import { ViewChat } from '/app/Chat/ViewChat.js';
import { ModelChat } from '/app/Chat/ModelChat.js';

export class ControllerChat{
    constructor(){
        this.view = new ViewChat(()=>this.getData(), ()=>this.sendData());
        this.model = new ModelChat((d)=> this.receiveData(d));
    }

    getData(){
        this.model.getChat();
    }

    receiveData(data){
        this.view.renderChat(JSON.parse(data));
    }

    sendData(){
        this.model.sendChat(this.view.getSendData());
    }
}