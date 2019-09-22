let sumTab,
    volA,
    volB;

for(volA = 2; volA < 10; volA++){
    for(volB = 1; volB <= 10; volB++)
    {
        sumTab = volA * volB;
        console.log(volA + ' * ' + volB + ' = ' + sumTab);
    }
}