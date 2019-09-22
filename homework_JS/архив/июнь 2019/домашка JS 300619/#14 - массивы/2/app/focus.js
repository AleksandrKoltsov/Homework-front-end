
let n = 13, m = 4, card;
let mas = [];


for (let i = 0; i < m; i++){

    mas[i] = [];

    for (let j = 0; j < n; j++){
        switch(i){
                case 0:
                        j == 0 ? mas[i][j] = 'A' + '\u2660' : 
                        j == 1 ? mas[i][j] = 'J' + '\u2660' :
                        j == 11 ? mas[i][j] = 'Q' + '\u2660' :
                        j == 12 ? mas[i][j] = 'K'  + '\u2660' : mas[i][j] = j + '\u2660' ;
                break;

                case 1:
                        j == 0 ? mas[i][j] = 'A' + '\u2663' : 
                        j == 1 ? mas[i][j] = 'J' + '\u2663' :
                        j == 11 ? mas[i][j] = 'Q' + '\u2663' :
                        j == 12 ? mas[i][j] = 'K'  + '\u2663' : mas[i][j] = j + '\u2663' ;
                break;
                case 2:
                        j == 0 ? mas[i][j] = 'A' + '\u2665' : 
                        j == 1 ? mas[i][j] = 'J' + '\u2665' :
                        j == 11 ? mas[i][j] = 'Q' + '\u2665' :
                        j == 12 ? mas[i][j] = 'K'  + '\u2665' : mas[i][j] = j + '\u2665' ;
                break;
                case 3:
                        j == 0 ? mas[i][j] = 'A' + '\u2666' : 
                        j == 1 ? mas[i][j] = 'J' + '\u2666' :
                        j == 11 ? mas[i][j] = 'Q' + '\u2666' :
                        j == 12 ? mas[i][j] = 'K'  + '\u2666' : mas[i][j] = j + '\u2666' ;
                break;
        }
}
}
console.log(mas);
card = Math.floor(Math.random() * mas.length);


alert(mas[card][card]);


