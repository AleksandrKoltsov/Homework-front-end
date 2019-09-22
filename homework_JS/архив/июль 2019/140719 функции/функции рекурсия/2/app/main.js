function nodNum(a, b){

    nod = 1;

    for(let i = a; i > 0; i--) {

        if (a % i == 0 && b % i == 0) {

            nod = i;

            break;
        }
    }
    return nod;
}

let nodNum1 = parseInt(prompt("Введите первое число: ", 96)),
    nodNum2 = parseInt(prompt("Введите второе число: ", 36));

console.log(nodNum(nodNum1, nodNum2));
