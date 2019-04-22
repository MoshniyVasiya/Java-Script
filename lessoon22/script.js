"use strict";


/* 1. Дан массив с числами (Пример: var arr = [2, -5, 1, -2, 0, -3, 2, -14]) - массив может быть и другим.
1) В начале вам нужно убрать из него все отрицательные числа используя filter
2) Извлесь корень из каждого значения этого массива и записать в переменную. Используя map.
3) Вывести массив в консоль

2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
Использовать функция reduce

3. Напишите функцию summArguments, которая сложит все аргументы переданные в функцию. Например
summArguments(10, 1, 2, 5); // 18
summArguments(10); // 10 */



// # 1

var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var positiveArr = arr.filter(function(number){  
    return number > -1;
});

var positiveArr2 = positiveArr.map(function(name){   
    return Math.sqrt(name) ;
});
console.log(positiveArr2);

// # 2 

var arr2 = [4, 3, 5, 5, 0, 4, 8, 6];
var result = arr2.slice(0, 4).reduce(function(sum, current){   
    return sum + current
}, 0);
    
console.log(result);

// # 3

function summArguments(){   
    var sum = 0;

    for(var i = 0; i < arguments.length; i++){  
        sum += arguments[i];
    }
    console.log(sum);
    return sum  
};
summArguments(2, 5, 10, 23);


