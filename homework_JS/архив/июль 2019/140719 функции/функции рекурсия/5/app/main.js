function facNum(num){
    
    parseInt(num);
    let arrFacNum = [];

if(isNaN(num) || num == 0){

    return 'это не корректное число или не число';
    
}else{
        
        for(let i = num - 1; i > 0; i--){
            
            if(num % i == 0){

                arrFacNum.push(num / i);
                num = i;
            }
        }

        arrFacNum.sort(function(a, b) {return a - b});

        return arrFacNum.join('*');
    }
}

let  fac = prompt('input number: ');

console.log(facNum(fac));