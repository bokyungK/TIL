// 11653 | 소인수분해

const fs = require('fs');
let input= fs.readFileSync('/dev/stdin').toString().trim();
input = parseInt(input);
let result = [];
let divisor = 2;

while (input !== 1) {
    if (input % divisor === 0) {
        input = input / divisor;
        result.push(divisor);
    } else {
        divisor++;
    }
}

console.log(result.join('\n'));