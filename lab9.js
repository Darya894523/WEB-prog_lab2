function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
         button.innerHTML = 'Спасибо';
    else
       button.innerHTML = 'Щелчок';
}

function clickAlisa(button) {
    if(button.innerHTML == 'Алиса')
         button.innerHTML = 'Васильева';
    else
       button.innerHTML = 'Алиса';
}
function clickDasha(button) {
    if(button.innerHTML == 'Дарья')
         button.innerHTML = 'Ветошкина';
    else
       button.innerHTML = 'Дарья';
}

function clickthiss(button) {
    if(button.innerHTML == 'Нажми меня'){
       button.innerHTML = 'Ещё раз нажми';
       button.style.color= 'red';}
    else
    if (button.innerHTML == 'Ещё раз нажми'){
        button.innerHTML = 'Ещё';
        button.style.color= 'green';}
    else
    if (button.innerHTML == 'Ещё'){
        button.innerHTML = 'Начать сначала';
        button.style.color= 'yellow';}
    else
       {button.innerHTML = 'Нажми меня';
       button.style.color= 'pink';}
}
function showCoords(event){
  event.target.innerHTML = 'x=' + event.offsetX + ', y = ' + event.offsetY 
  + ' ctrl '+event.ctrlKey + ' shift '+event.shiftKey + ' alt '+event.altKey;
}
window.addEventListener('DOMContentLoaded', function(){
  let coords = document.querySelector('#coords');
  coords.addEventListener('mousemove', showCoords);
});

function BlurFunc(input){
input.style.color='green';
input.style.fontSize='';
input.style.fontWeight='normal';

}

function Focusfan (input){
    input.style.color='purple';
    input.style.fontSize=28+'px';
    input.style.fontWeight='bold';
}

function ChangeFunc(input) {
    let output = document.getElementById ('output');
    output.innerHTML = input.value;
}

function ChangeFuncDop(input){
    let new_output = document.getElementById('new_output');
    new_output.innerHTML = 'Молоко:' + input.value + ' шт';
}
function ChangeFuncDop2(input){
    let new_output = document.getElementById('new_output2');
    new_output.innerHTML = 'Яйца:' + input.value + ' шт';
}
function ChangeFuncDop3(input){
    let new_output = document.getElementById('new_output3');
    new_output.innerHTML = 'Сосиски:' + input.value + ' шт';
}