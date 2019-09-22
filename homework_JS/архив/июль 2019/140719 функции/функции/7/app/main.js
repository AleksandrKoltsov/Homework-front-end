function inputTime(time){

    let hour, min, sec, arrTime = [];

    arrTime = time.split(':');

    hour = parseInt(arrTime[0]);
    min = parseInt(arrTime[1]);
    sec = parseInt(arrTime[2]);

    hour < 0 || hour > 24 || isNaN(hour) ? alert("error input date") : hour == undefined ? hour = 0 : false;
    min < 0 || min > 60 || isNaN(min) ? alert("error input date") : min == undefined ? min = 0 : false;
    sec < 0 || sec > 60 || isNaN(sec) ? alert("error input date") : sec == undefined ? sec = 0 : false;

    hour = String(hour);
    min = String(min);
    sec = String(sec);

    hour == 0 ? hour = '00': hour.length == 1 ? hour = '0'+ hour : false;
    min == 0 ? min = '00' : min.length == 1 ?  min = '0' + min : false;
    sec == 0 ? sec = '00' : sec.length == 1 ? sec = '0' + sec : false;

    return console.info("\u00AB" + hour + ":" + min + ":" + sec + "\u00BB");

}

let inTime = prompt("input time - hh:mm:ss ");

inputTime(inTime);


