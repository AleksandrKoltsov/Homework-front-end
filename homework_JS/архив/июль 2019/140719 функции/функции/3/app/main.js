function parsNum(a,b,c){

    if(isNaN(a) || isNaN(b) || isNaN(c)){

         return console.log("error");

    }else{

    let num = parseInt(a+""+b+""+c);
    
    return num;
    }
}
console.log(parsNum(1,4,9));
console.log(typeof parsNum(1,4,9));