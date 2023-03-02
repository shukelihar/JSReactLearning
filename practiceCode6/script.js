"use strict";

// function sayHello(name) {
//     return `Привет, + ${name}`;
// }

// function returnNeighboringNumbers(num) {
//     let mass = [num - 1, num, num + 1];
//     return mass;
// }

// Место для третьей задачи
function getMathResult(num, numRep) {
    let answer = `${num}`;

    if(numRep > 0 && typeof(numRep) === 'number') {
        for(let i = 2; i < numRep + 1; i++) {
            answer += `---${num * i}`;
        }
    } else {    
    }
    return answer;
}

getMathResult(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);