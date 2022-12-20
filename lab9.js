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