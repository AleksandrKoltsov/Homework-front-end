let maleName = "Агро,Адэйр,Аенгус,Айлилл,Айрелл,Алан,Аллен,Алансон,Альбион,Анант,Анвелл,Ангус,Анион,Ансгар,Арлен,Арден,Арлан,Арт,Артур,Атти,Беленус,Белус,Бард,Барден,Барра,Барри,Беван,Бекан,Берд,Блейн,Блейр,Бойд,Брейден,Брайан,Брайс,Бранн,Брендан,Брет,Варден,Вейлин,Виллем,Винн,Воган,Галвин,Гвен,Гверн,Гилмор,Гленн,Даллас,Дей,Джодок,Дуфф,Емрис,Иден,Кайден,Калдер,Кар,Кевен,Кевин,Кеган,Коди,Кон,Конн,Лейс,Лесли,Ли,Луг,Марвин,Мелком,Мердок,Невлин,Нейл,Нис,Одхан,Олан,Онгхус,Перт,Повелл,Реган,Ронан,Таранис,Тревор,Тристан,Фаррел,Фелан,Элбан",
    arrMaleName = maleName.split(","),

    femaleNmae = "Авалон,Айн,Айрис,Аластриона,Алеена,Арела,Арлина,Арлета,Брееда,Бренна,Бретта,Брианна,Бриджид,Бригитта,Брит,Бритта,Венетия,Винни,Гвендолен,Гвендолин,Гвенн,Гинерва,Грания,Девона,Дива,Дивона,Женнивер,Женнифер,Зинерва,Иделла,Иделиса,Имоджин,Иона,Камрин,Кассади,Кеннеди,Кили,Кхира,Лавена,Лесли,Линетта,Мабина,Мавелла,Мавис,Макензи,Малвина,Меви,Мерна,Нара,Нарина,Нела,Ова,Офа,Пенарддан,Ригхан,Риннон,Ровена,Райанн,Сабрина,Сейлан,Селма,Синни,Тахра,Триста,Ула,Уна,Феделм,Фенелла,Фианна,Фингула,Финдабайр,Фхина,Шавна,Шайла,Шайлих,Шела,Эвелин,Эдана,Эйна,Элис,Эна,Эния,Эпона,Эслинн,Эдна,Этна",
    arrFemaleName = femaleNmae.split(","),
    
    place = "Еуклиомор,Брасо,Зрора,Меим,Хоасане,Флиберт,Цифард,Киесган,Влеолвер,Иеслабридж,Злислоувер,Еовусвайн,Упрамвер,Уврертон,Срарк,Кеукпас,Узранд,Дроданд,Еисаофиа,Дреиган,Уафеасэт,Хаибург,Клеапловер,Игриобей,Прэртон,Ураиполис,Уксадлас,Джада,Злефладена,Брансе,Улорк,Нофлэнто,Фрудейл,Зраго,Деит,Аифлуонрон,Аилифис,Клуиросс,Ниулэнто,Оуросэт",
    arrLocation = place.split(","),
   
    gender = ["девочка", "мальчик"],

    color =["зеленый", "красный", "белый", "желтый", "синий", "оранжевый", "черный"], 

    quantity = parseInt(prompt("Введите количество драконов в стаи от 1 до 100", '10')),

    arrFlock = [],
    minHeads = 1,
    maxHeads = 20,
    minAge = 100,
    maxAge = 3000,
    sumHeads = 0,
    powerFlock = 1,
    sumMale = 0,
    sumFemale = 0,
    averageAmount = 0;

for(let i = 0; i < quantity; i++){

    let dragon = {};
    dragon.gender = gender[Math.floor(Math.random() * 2)];

    if(dragon.gender == "мальчик"){

        dragon.name = arrMaleName[Math.floor(Math.random() * arrMaleName.length)];
        sumMale++;

    }else if(dragon.gender == "девочка"){

        dragon.name = arrFemaleName[Math.floor(Math.random() * arrFemaleName.length)];
        sumFemale++;
    }
    
    dragon.place = arrLocation[Math.floor(Math.random() * arrLocation.length)]
    dragon.color = color[Math.floor(Math.random() * color.length)]
    dragon.heads = Math.floor(Math.random() * (maxHeads - minHeads + 1) + minHeads);
    dragon.age = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);

    arrFlock.push(dragon);
}

arrFlock.sort(function(a, b){
    return a.age-b.age
});

for(let j = 0; j < arrFlock.length; j++ ){
    sumHeads +=arrFlock[j].heads;
    powerFlock *=arrFlock[j].heads;
}

averageAmount = Math.floor(sumHeads / arrFlock.length);

console.info("Сумма голово стаи: ", sumHeads,  "\n", "Мощность стаи: ", powerFlock, "\n", "Всего драконов мужского пола: ", sumMale, "\n", "Всего драконов женского пола: ", sumFemale, "\n", "Среднее количество голово драконов в стае: ",averageAmount, "\n", "Самый молодой дракон: ", arrFlock[0], "\n",  "Самый старый дракон: ", arrFlock[arrFlock.length -1]);


