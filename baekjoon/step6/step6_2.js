// 11720 | 숫자의 합

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = 0;

input[0] = Number(input[0]);
input[1] = input[1].split('');

for (let i = 0; i < input[0]; i++) {
    input[1][i] = Number(input[1][i]);
    result += input[1][i];
}

console.log(result);