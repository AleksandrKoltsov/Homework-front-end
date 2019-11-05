export class ModelChat {
    constructor(funcHandler) {
        this.funcHandler = funcHandler;
        this.config = ['get', , true];
    }

    getChat() {
        const aja = new XMLHttpRequest();
        aja.addEventListener('readystatechange', () => {
            if (aja.status == 200 && aja.readyState == 4) {
                this.funcHandler(aja.responseText);
            }
        });

        aja.open('get', 'http://so2niko.zzz.com.ua/examples/chat/api.php', true);
        aja.send();
    }

    sendChat(data) {
        const aja = new XMLHttpRequest();
        aja.open('post', 'http://so2niko.zzz.com.ua/examples/chat/api.php', true);
        aja.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        aja.send(`data=true&name=${data.name}&text=${data.text}`);
        aja.addEventListener('readystatechange', () => {
            if (aja.status == 200 && aja.readyState == 4) {
                this.getChat();
            }
        });
    }
}