// 2839 | 설탕 배달
const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);
let result = 0;

if (N % 5 === 0) {
    result = Math.floor(N / 5);
} else {
    let count = Math.floor(N / 5);
    while (count >= 0) {
        let subFive = N - (count * 5);
        if (subFive % 3 === 0) {
            result = Math.floor(subFive / 3) + count;
            break;
        } else {
            result = -1;
        }
        count -= 1;
    }
}

console.log(result);