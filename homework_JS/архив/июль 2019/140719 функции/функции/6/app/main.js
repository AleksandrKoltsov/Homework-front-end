function perfectNumber(a){

    let num = 0;
  
    for(let i = a - 1; i > 0; i--){

        a % i == 0 ? num += i : 1;       
    }
    return(a === num ? a +' совершенное число' : 'не совершенные числа'); 
       
}

function countPerfNum(min, max){
    
    while(max >= min){
        
        console.log(perfectNumber(max));
        max--;
    }
}

countPerfNum(1, 500);
