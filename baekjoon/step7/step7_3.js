// 1193 | 분수찾기 

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = Math.floor(input);
let sum = 0;
let i = 0;
let 분자 = 1;
let 분모 = 1;
let inputSum = 0;

while (input - sum > 0) {
    i += 1;
    sum = sum + i;
}

inputSum = input - sum;

if (i % 2 === 0) {
    분자 = i + inputSum;
    분모 -= inputSum;
} else {
    분자 -= inputSum;
    분모 = i + inputSum;
}

console.log(`${분자}/${분모}`);