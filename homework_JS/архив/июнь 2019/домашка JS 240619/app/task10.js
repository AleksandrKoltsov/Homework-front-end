let numStart = 0,
    numEnd = 100,
    rezN = 50;
    // sumN = 0;

if(confirm('Загадайте число от 0 до 100')){

outer: while( rezN >= numStart){
        let out = prompt('число > ' + rezN + ', ' + ' < ' + rezN + ' или == ' + rezN);

        switch(out){
            case '>':
               numStart = rezN + 1;
               rezN = parseInt(((numEnd - numStart) / 2) + numStart);
                break;

            case '<':
                numEnd = rezN - 1;
                rezN = parseInt(((numEnd - numStart) / 2) + numStart);
                break;

            case '==':
                alert('Ваше число: ' + rezN);
                break outer;

            default:
                alert('Вы ввели недопустимое значение!');
                break;
        }
        
    };

}else {
    alert('Заходите еще!');
}