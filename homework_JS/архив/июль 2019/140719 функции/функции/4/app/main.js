function countSquare(a, b) {

    if(isNaN(a || isNaN(b))){

        return console.log('error');

    }else{

        if(a && b){

            return a * b;

        }else if(a){

            return a * a;

        }else{

            return console.log('error');
        }
    }
}

console.log(countSquare(2));
console.log(countSquare(6, 8));


