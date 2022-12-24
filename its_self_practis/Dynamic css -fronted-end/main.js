let text = document.getElementById("text-container"); // text

let inputField = document.getElementById("colorbox"); // input

let rangeCheck = document.getElementById("rangebox"); //range

console.log(rangeCheck.value);

function setColor(){

// console.log(inputField.value);

console.log(rangeCheck.value);

text.style.color = inputField.value;

}

function rangeFunc(){

text.style.fontSize = rangeCheck.value +'px';

}

function textStyle(styleCheck){

// console.log(styleCheck);

if(styleCheck == 'underline'){

if(text.style.textDecoration == styleCheck){

text.style.textDecoration = null;

return;

}

text.style.textDecoration = styleCheck;

return;

}

if(text.style.fontStyle == styleCheck){

text.style.fontStyle = null;

return;

}

text.style.fontStyle = styleCheck;

}

function fn_fontFamily(){

let fontFamily = document.getElementById("fontFamily");

console.log(fontFamily.value);

text.style.fontFamily = fontFamily.value;

}

function getStyle() {

console.log(text.style);

}