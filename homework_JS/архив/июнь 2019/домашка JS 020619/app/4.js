let leapYear = prompt('Введите год: ','2019');

if (leapYear % 400 == 0 || leapYear % 4 == 0) {
    if (leapYear % 100 == 0) {
        if (leapYear % 400 == 0 && leapYear % 100 == 0) {
            alert('Этот год высокосный!'); 
        }else
        alert('Этот год не высокосный');
    }else { 
        alert('Этот год высокосный!'); 
    }
}else {
    alert('Этот год не высокосный');
}