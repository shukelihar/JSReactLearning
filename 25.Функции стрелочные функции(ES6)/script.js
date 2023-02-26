"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 5));

function ret() {
    let num = 50;

    //
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// Function Expression - можно вызвать только после кода
const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log('asd');
    return a + b;
};
calc(2,3);