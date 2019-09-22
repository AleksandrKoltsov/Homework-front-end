function perfectNumber(a){

    let num = 0;

    for(let i = a - 1; i > 0; i--){

        if(a % i == 0){
            num += i;
        }
    }
    return (a == num) ? console.log(a+' - Ура! Это число совершенное!') :
     console.log(a+' - увы, это число совсем не совершенное.');
    
}

perfectNumber(28);
perfectNumber(38);