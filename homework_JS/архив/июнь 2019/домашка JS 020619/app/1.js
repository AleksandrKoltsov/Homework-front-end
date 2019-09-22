let age = 0;

age = prompt('Ведите ваш возраст: ','');

if (age <= 11) {
    alert("Вы ребенок");
}else if (age >= 12 && age <= 18) {
    alert('Вы подросток');
}else if (age >= 19 && age <=60) {
    alert("Вы взрослый");
}else {
    alert('Вы пенсионер');
}