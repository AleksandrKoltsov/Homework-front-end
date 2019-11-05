export class ViewChat{
    constructor(getData, sendData){
        this.chat = document.querySelector('.chat');
        this.chatWindow = document.querySelector('.chatWindow');
        this.btnPost = document.querySelector('.post');
        this.name = document.querySelector('.name');
        this.text = document.querySelector('.text');
        this.btnPost.addEventListener('click', sendData);
        document.addEventListener('DOMContentLoaded', getData);

    }
    renderChat(data){
        console.log(data);
        for (let i=0; i<data.length; i++)
        this.chatWindow.innerHTML += `
        <div class="chatMsg">
        ${data[i].time} - ${data[i].name}
        <br>
        ${data[i].text}
        <br>
        <br>
        </div>`
    }

    getSendData(){
        return {
            name: this.name.value,
            text: this.text.value
        }
    }
}