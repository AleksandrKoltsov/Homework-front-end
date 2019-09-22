import ObjStyle from "./ObjStyle.js";

const arrStyle = [];

let stlMargin = new ObjStyle('Margin', 'margin: 2em;'),
    stlFontSize = new ObjStyle('Font size', 'font-size: 2em;'),
    stlColor = new ObjStyle('Text color', 'color: red;'),
    stlFontFam = new ObjStyle('Font fammily', 'font-family: sans-serif;'),
    stlPad = new ObjStyle('Padding', 'padding: 1em;'),
    stlBorder = new ObjStyle('Border', 'border: 1px solid blue;'),
    stlBordRad = new ObjStyle('Background-color', 'background-color: green;');

arrStyle.push(stlMargin,stlColor,stlFontFam,stlFontSize,stlPad,stlBorder,stlBordRad);

function infoObj(arr){
    
    for(let i = 0; i < arr.length; i++){

    let p = document.createElement('p');
        p.innerText = arr[i].text;
        p.style = arr[i].value;
        document.body.append(p);
    }

}

infoObj(arrStyle);