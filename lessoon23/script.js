"use strict";
/*
1. Нужно вывести в консоль сколько минут осталось до конца текущего дня.

2. Нужно вывести в консоль сколько секунд прошло с начала текущего дня.

3. Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013

4. Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01
и в ответ будет выдавать сколько дней осталось до его дня рождения. */


// # 1

var now = new Date();
    
console.log('До конца дня осталось - ' + (24 * 60 - ((now.getHours() * 60) + now.getMinutes()) ) + ' минут.');

// # 2 

var todayCurrent = new Date();
    
var result1 = todayCurrent.getHours() * 3600 + todayCurrent.getMinutes() * 60 + todayCurrent.getSeconds()
        
console.log( result1 + ' - Cекунд прошло с начала текущего дня.');

// # 3

var day = new Date( 2013, 0, 25);
    day = day.getDay();
    switch(day){    
        case 0:
        console.log('Sunday');
        break;
        case 1:
        console.log('Monday');
        break;
        case 2:
        console.log('Tuesday');
        break;
        case 3:
        console.log('Wednesday');
        break;
        case 4:
        console.log('Thursday');
        break;
        case 5:
        console.log('Friday');
        break;
        case 6:
        console.log('Saturday');
        break;
    }
    console.log( day );
   

var day = new Date( 2013, 0, 25);

console.log( day.toLocaleString( 'ru', {weekday:'long'}) );

// # 4

function getBirthday()
{
var age = prompt('Введите дату своего рождения в формате ГГГГ-ММ-ДД', '1990-10-01');
var today = new Date();
var birthObj = age.split('-');
if(birthObj.length != 3 || birthObj[1] > 12 || birthObj[2] > 31 || birthObj[0] > (new Date().getFullYear())){
    alert(`Дата рождения введена неверно!`);
}else{  
    var birthDay = new Date(today.getFullYear(), +birthObj[1] - 1, +birthObj[2]);
    var days = Math.trunc((birthDay - today) / 1000 / 3600 / 24);
    if ( days < 0 ){
        birthDay.setFullYear(today.getFullYear() + 1);
        days = Math.trunc((birthDay - today) / 1000 / 3600 / 24) + 1;
    }else if(+days == 0){   
        alert(`Сегодня ваш день рождения!`);
        return;
    }
    alert('До вашего дня рождения осталось ' + days + ' дня(ей)' );
}}
getBirthday();
