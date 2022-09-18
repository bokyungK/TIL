// 10757 | 큰 수 A + B

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let result;

input.forEach((item, idx) => {
    input[idx] = BigInt(input[idx]);
})

result = String(input[0] + input[1]);
console.log(result);