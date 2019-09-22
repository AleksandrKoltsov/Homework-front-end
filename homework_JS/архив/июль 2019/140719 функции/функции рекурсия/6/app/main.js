function febonacci(serNum) {
    
    let a = 1,
        b = 1,
        c = 0;

    for(let i = 3; i <= serNum; i++ ){

        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

let serNum = parseInt(prompt('Введите порядковый номер числа: '));

console.log(febonacci(serNum));