function factorial(a){

    let i = 1
    
    for(; a > 0; a--){
    
        i *= a;
    }
    
    return i;
}

console.info(factorial(3));
console.info(factorial(5));
console.info(factorial(10));