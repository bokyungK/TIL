// 1712 | 손익분기점

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let result = 0;

input.forEach((num, idx) => {
    input[idx] = parseInt(num);
})

const A = input[0];
const B = input[1];
const C = input[2];

if (B >= C) {
    result = -1;
} else {
    result = Math.floor(A / (C - B)) + 1;
}

console.log(result)