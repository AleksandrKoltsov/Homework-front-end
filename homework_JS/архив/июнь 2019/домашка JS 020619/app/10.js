let currDate = prompt('Введите дату в формате мм/дд/гг');
let d = new Date();

d.setTime(Date.parse(currDate));
d.setDate(d.getDate() + 2);

alert(d);