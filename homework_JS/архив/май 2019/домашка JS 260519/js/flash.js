let volumeFlash = 0,
    quantityFiles = 0;

volumeFlash = prompt('Введите объем флешки в Гб: ','');

quantityFiles = (volumeFlash * 1024) / 840;

alert('Вы сможете записать ' + Math.floor(quantityFiles) + ' файла(ов) размером 840Мб');