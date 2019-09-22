let palNum = 0,
    palNUm1,
    palNUm2,
    palNUm3,
    palNUm4,
    palNUm5;

palNum = +prompt('Введите пятиразрядное число: ','');

palNUm5 = palNum % 10;
palNum = (palNum / 10) ^ 0;

palNUm4 = palNum % 10;
palNum = (palNum / 10) ^ 0;

palNUm3 = palNum % 10;
palNum = (palNum / 10) ^ 0;

palNUm2 = palNum % 10;
palNum = (palNum / 10) ^ 0;

palNUm1 = palNum % 10;
if ( palNUm1 == palNUm5 && palNUm2 == palNUm4) {
    if (palNUm3 == palNUm2 + 1) {
            alert("Ура! это число является палиндромом!");
    }else if (palNUm3 == palNUm2 -1) {
        alert("Ура! это число является палиндромом!");
    }else {
        alert("Увы, это число не является палиндромом");
    }
} else {
    alert("Увы, это число не является палиндромом");
}
