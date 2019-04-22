"use strict";


// #1

var arrayWord = ['Кот', 'Собака', 'Жираф' ]

function searchArrayWord ( word, array ){ 
    for (var i = 0; i < array.length; i++){    
        if(word == array[i])  
         return true ;
        }return false ;
    }

console.log(searchArrayWord('Жираф', arrayWord ));


// #2

var arr = [1, 2, 3, 7, 6, 9]; 
    function averageArifmetic(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){    
        sum += arr[i];
    }
    return sum/arr.length ;
}

console.log(averageArifmetic(arr));


// #3

var arr2 = [1, 3, 5, 6, 7, 9];

function revArr(arr2){
    var array= [];
    for( var i = 0; i < arr2.length; i++){   
    array[i] = arr2[arr2.length-1 -i];
}return array;
}
    arr2 = revArr(arr2);
console.log(arr2);


// #4
var obj = {html:'HTML', css: 'CSS', js: 'ECMA'};
function arrTransform(obj){
    for(var key in obj){    
        arr[i] = key;
        i++;
    }
return arr;
}
console.log(arrTransform(obj));


// #5

/*5. Создайте объект описывающий Заказ на сайте.
Создать можно любым из способов - даже просто написать консрукцию var obj = {...}. 
Главное учесть, что единицы измерения обычно не записываются в объект, а 
записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).

В нем должно храниться:
- Имя покупателя
- Телефон покупателя
- Адрес покупателя
- Общая сумма заказа
- Общий вес заказа
- Купленные товары:
1 товар - Чашка \ 100 грн. \ вес 200 грамм
2 товар - Ложка \ 30 грн. \ вес 100 грамм
3 товар - Чайник \ 550 грн. \ вес 2 кг
4 товар - Кружка \ 150 грн \ вес 400 грамм*/

var order = {   
    'customer name': '',
    'customer phone': '',
    'customer address': '',
    'orderSummary': 0,
    'orderWeight': 0,
    'purchase':{    
        1:{ 
            'item': 'Чашка',
            'price': 100,
            'weight': 200
        },
        2:{ 
            'item': 'Ложка',
            'price': 30,
            'weight': 100
        },
        3:{ 
            'item': 'Чайник',
            'price': 550,
            'weight': 2000
        },
        4:{ 
            'item': 'Кружка',
            'price': 150,
            'weight': 400
        }
    }
};

for(var key in order.purchase){
    order.orderSummary += order.purchase[key].price;
}
for(var key in order.purchase){
    order.orderWeight += order.purchase[key].weight;
}
console.log(order);