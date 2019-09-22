var mas = [11,14,15];
function divide(numbr){
var len = mas.length,
i = 0;
if(numbr === 0)
return false;
for(; --len;){
    mas[len]*=numbr;
}
return true;
}
if(divide(3)){
    console.log(mas);
}else{
    console.log('13,17,18');
}