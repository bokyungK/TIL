// 2908 | 상수

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let result = '';

input.forEach((num, idx) => {
    input[idx] = parseInt(num.split('').reverse().join(''));
})

if (input[0] > input[1]) {
    result = input[0];
} else if (input[0] < input[1]) {
    result = input[1];
}

console.log(result);