"use strict";


// #1
var a = '1';

if(a === '1'){ 
    console.log('Верно');
}else{  
    console.log('Неверно');
}


// #2
var item = false;

if(item != true){ 
    console.log('Верно');
}else if(item == true){  
    console.log('Неверно');
}

var message = (item != true) ? 'Верно' : 'Неверно' ;
console.log(message);


// #3
var a = 4;
var message2 = (a > 0 && a < 4) ? 'Верно' : 'Неверно';
console.log(message2);


// #4 
if(a > 3 && a < 12 || b >=7 && b < 15){ 
    console.log('Верно');
}else{  
    console.log('Неверно');
}


// #5  
var month = prompt('Какой сейчас месяц', '');

if(month >= 1 && month <=2  || month == 12){
alert('Winter');
}else if(month >= 3 && month <= 5){
alert('Spring');
}else if(month >= 6 && month <= 8){
alert('Summer');
}else if(month >= 9 && month <= 11){
alert('Autumn');
}else{alert('There are only 12 monthes');}


// #6
for(var i = 1; i <= 100; i++){    
    if(i%2 == 1){continue;}
    console.log(i);
}