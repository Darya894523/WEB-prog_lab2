function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;
    let greeting;
    if (userAge<=17){
        greeting='Здравствуй, ';
        if(userSex == 'female'){
            greeting +='девчушка ';
        }
        else {
            greeting +='мальчишка ';
        }
    }
    else {
        greeting='Здравствуйте, ';
        if (userSex == 'female') {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин'
        }
    }
    alert (greeting +userName + ' ' + userSurname + '\n' + 'Ваш возраст:' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb('+ r + ',' + g + ',' + b + ')';

    document.getElementById('user-data').style.backgroundColor = color;

}
function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for (let i = 0; i<stepCount; i++){
        stairs.innerHTML += '<div class="step"></div>';
    }
    let steps = document.querySelectorAll('.step');
    for (let i = 0; i<steps.length; i++){
        steps [i].style.left = (400 + 10*i) + 'px';
        steps [i].style.top = (82 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер' + (i+1);
    }
}
function Table(){ 
    document.write("<h1>Таблица умножения</h1>"); 
     
    for (let j = 16; j<=17;j++){  
    document.write("<div style=' float:left ; width: 100px;'>"); 
    for (let i = 1; i <=9; i++)  
    { 
    document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
     
    }  
    document.write ("</div>"); 
     
    } 
}
function Snezh (){
    let snezhki= document.querySelector('#snezhki');
    let stepCount=90;
    for (let i=0; i<stepCount; i++) {
        snezhki.innerHTML+='<img class= "sneg" src= "11.png"> ';
    }
    let snow= document.querySelectorAll('.sneg');
    let screenWidth=window.screen.width;
    let screenHeight=window.screen.height;
    for (let i=0; i<snow.length; i++)
    {
     snow[i].style.left = Math.random ()*
     (screenWidth-100)+'px';
     snow[i].style.top = Math.random ()*(screenHeight-200)+'px';
     snow[i].style.width = Math.random ()* 200+'px';
    }
}
function All() {
    makeStairs();
    Snezh ();
}
