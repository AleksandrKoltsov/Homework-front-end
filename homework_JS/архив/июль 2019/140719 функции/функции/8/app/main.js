function inputTime(time){
    
    let hour, min, sec, arrTime = [];

    arrTime = time.split(':');

    hour = parseInt(arrTime[0]);
    min = parseInt(arrTime[1]);
    sec = parseInt(arrTime[2]);

    hour < 0 || hour > 24 || isNaN(hour) ? alert("error input date") : hour == undefined ? hour = 0 : false;
    min < 0 || min > 60 || isNaN(min) ? alert("error input date") : min == undefined ? min = 0 : false;
    sec < 0 || sec > 60 || isNaN(sec) ? alert("error input date") : sec == undefined ? sec = 0 : false;
     
    hour = hour * 60 * 60;
    min = min * 60;
    sec = sec + min + hour;

    return sec+'sec';      
}

let inSec = prompt("input time - hh:mm:ss ");

console.log(inputTime(inSec));


