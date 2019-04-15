"use strict";


// #1

function fib(n){   
    var fn1 = 1,
        fn2 = 1;
    for (var i = 3; i <= n; i++) {
        var result = fn1 + fn2;
        fn1 = fn2;
        fn2 = result;      
      }
      return fn2; 
}
alert( fib(77) );


// #2

var n = 1000;
var num = 0;

while (n > 50) {
    num++;
    n /= 2;
}   
alert (num);