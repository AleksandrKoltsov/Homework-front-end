export class ModelBook{
    constructor(funcHandler){
        this.funcHandler = funcHandler;
        this.config = ['get', 'https://randomuser.me/api/', true];
        // this.contacts = JSON.parse(localStorage.getItem('contacts')) || []; 
    }
    getUser(){
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('readystatechange', ()=> {
            if(ajax.status == 200 && ajax.readyState == 4){
                this.funcHandler(ajax.responseText);
            }
        });

        ajax.open(...this.config);
        ajax.setRequestHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        ajax.send();
    }
 
}