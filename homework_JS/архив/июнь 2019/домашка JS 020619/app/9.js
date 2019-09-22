let question1 = prompt(' 2 + 2 = ?','a) 3, b) 4, c) 5'),
    i = 0;

if (question1 == 'b' || question1 == 4) {
        i++;
    alert('Правильно! Вы заработали 1 балл');
}else {
    alert('Вы ошиблись! и ничего не заработали');
}

let question2 = prompt(' 2 * 2 = ?','a) 3, b) 4, c) 5');

if (question2 == 'b' || question2 == 4) {
    i++;
    alert('Правильно! Вы заработали 1 балл');
}else {
    alert('Вы ошиблись! и ничего не заработали');
}

let question3 = prompt(' 2 / 2 = ?','a) 1, b) 2, c) 3');

if (question3 == 'a' || question3 == 1) {
    i++;
    alert('Правильно! Вы заработали 1 балл');
}else {
    alert('Вы ошиблись! и ничего не заработали');
}

alert('Поздравляю! вы заработали ' + i + ' балл(а)');