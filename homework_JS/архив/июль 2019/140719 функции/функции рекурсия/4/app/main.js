function primeNumber(num){

    parseInt(num);
    let div = 0;

    if(isNaN(num) || num == 0){

        return 'это не корректное число или не число';
        
    }else{
        
        for(let i = num; i > 0; i--){
                
            if(num % i == 0){
                div++
            }
        }

        if(div == 2){

        return  num + ' простое число' ;

        }else{
            return num + ' сложное число';
        }
    }
}

let number = prompt('input number: ', 7);

console.log(primeNumber(number));