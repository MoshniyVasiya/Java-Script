"use strict";
/*
1. Нужно вывести в консоль сколько минут осталось до конца текущего дня.

2. Нужно вывести в консоль сколько секунд прошло с начала текущего дня.

3. Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013

4. Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01
и в ответ будет выдавать сколько дней осталось до его дня рождения. */


// # 1

var today = new Date();
var tommorow = new Date(2019, 3, 26);

var result = (tommorow - today) / 60000;
    
console.log('До конца дня осталось - ' + result.toFixed(2) + ' минут.');

// # 2 

var todayStart = new Date(2019, 3, 25);
var todayCurrent = new Date();
    
var result1 = (todayCurrent - todayStart) / 1000;
        
console.log( result1.toFixed() + ' - Cекунд прошло с начала текущего дня.');

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


var age = prompt('Введите дату своего рождения в формате ГГГГ-ММ-ДД', '1990-10-01');
var birthDate = new Date(age);
var now = new Date();
var presentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var dateOfBirth = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
var result = Math.round((dateOfBirth - presentDay) / 3600000 / 24);
if( result >= 1 ) { 
    alert('До вашего дня рождения осталось ' + result + ' дня(ей)!');
}else if( result === 0 ) {    
    alert('С днем рождения !!!');
}else{  
    var nextYear = 365 + result;
    alert('До вашего дня рождения осталось ' + nextYear + ' дня(ей)!');
}    