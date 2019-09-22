let arrXo = ["X","O"],
    o = 3,
    x = 3,
    arrTable = [],
    str ='';


for(let i = 0; i < x; i++){
     
    arrTable[i] = [];

     for(let j = 0; j < o; j++){
        arrTable[i][j] = arrXo[Math.floor(Math.random() * arrXo.length)];
     }
}
str = arrTable.join('\n');

console.log(str);