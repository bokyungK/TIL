// 10773 | 제로

const fs = require('fs');
let input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const stack = [];
let sum = 0;

input = input.slice(1, input.length);
input.forEach((num, idx) => {
    input[idx] = parseInt(num);
})

input.forEach((num, idx) => {
    num === 0 ? stack.pop() : stack.push(num)
})

stack.forEach((num) => {
    sum += num;
})

console.log(sum);