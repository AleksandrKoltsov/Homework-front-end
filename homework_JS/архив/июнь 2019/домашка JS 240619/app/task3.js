let numUser = parseInt(prompt('Введите число: ','')),
    factor = numUser;

while(factor > 0){

    if(numUser % factor == 0){
        console.log(factor);
    }
    factor--;
}