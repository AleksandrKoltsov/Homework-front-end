let number = 0,
    oddEven = true;

number = prompt('Введите целое число: ','');

oddEven = number % 2 == 0;

alert('ваше число "true" - четное и "false" - нечетное: ' + oddEven);