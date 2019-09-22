let sumPurchase = +prompt('Введите сумму покупки: ','');

if (sumPurchase <= 0) {
    alert('Вы ничего не купили!');
}else if (sumPurchase >= 200 && sumPurchase <= 299) {
    sumPurchase = sumPurchase - (sumPurchase * 0.03);
    alert('Вы получаете скидку в 3%, к оплате '+ sumPurchase + ' денег');
}else if (sumPurchase >= 300 && sumPurchase <= 499) {
    sumPurchase = sumPurchase - (sumPurchase * 0.05);
    alert('Вы получаете скидку в 5%, к оплате '+ sumPurchase + ' денег');
}else if (sumPurchase >= 500) {
    sumPurchase = sumPurchase - (sumPurchase * 0.07);
    alert('Вы получаете скидку в 7%, к оплате '+ sumPurchase + ' денег');
}else {
    alert('вы не набрали нужную сумму для скидки');
}