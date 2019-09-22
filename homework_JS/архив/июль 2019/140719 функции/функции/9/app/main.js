function inputTime(){
    
    hour = Math.floor(time / 3600);
    min = Math.floor((time / 60) % 60);
    sec = time % 60;

    hour = String(hour);
    min = String(min);
    sec = String(sec);

    hour == 0 ? hour = '00': hour.length == 1 ? hour = '0'+ hour : false;
    min == 0 ? min = '00' : min.length == 1 ?  min = '0' + min : false;
    sec == 0 ? sec = '00' : sec.length == 1 ? sec = '0' + sec : false;

    return console.log("\u00AB" + hour + ":" + min + ":" + sec + "\u00BB");
}

let hour = 0,
    min = 0,
    sec = 0,
    time = parseInt(prompt("input seconds: "));

inputTime(time);



