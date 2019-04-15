"use strict";


// #1

function isNumberInRange(num1){   

    return num1 > 0 && num1 < 10 ;  

}
console.log(isNumberInRange(10) );

// #2
/*
function isEven(i){ 
    var i; 
    if(i%2 == 0){
    return true;
}else if(i%2 == 1){  
    return false;
}else{
    return undefined;
}}
console.log(isEven(-2));

*/

function isEven(i){ 

    return (i%2 == 0);

}
console.log(isEven(60));



// #3

var value = +prompt('value?', '');
switch(value){
    case 0:
    alert( 0 );
    break;

    case 1:
    alert( 1 );
    break;

    case 2:
    case 3:
    alert( '2,3' );
    break;
}


// #4

function min(a, b){  
    return a < b ? a : b;
}

console.log(min(3, -5));