function outSecTime(time){

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

    return sec;    
}

function outTime(time){
    
   let  hour = Math.round(time / 3600),
        min = Math.round((time / 60) % 60),
        sec = time % 60;

    hour = String(hour);
    min = String(min);
    sec = String(sec);

    hour.length == 1 ? hour = '0'+ hour : false;
    min == 0 ? min = '00' : min.length == 1 ?  min = '0' + min : false;
    sec == 0 ? sec = '00' : sec.length == 1 ? sec = '0' + sec : false;

    return console.log("\u00AB" + hour + ":" + min + ":" + sec + "\u00BB");
}

let time1 = prompt("input first time - hh:mm:ss : ",'24:59:59'),
    time2 = prompt("input second time - hh:mm:ss : ",'12:30:30'),
    sec1 = 0,
    sec2 = 0,
    time3 = 0;

sec1 = outSecTime(time1);
sec2 = outSecTime(time2);

time3 = sec1 - sec2

outTime(time3);