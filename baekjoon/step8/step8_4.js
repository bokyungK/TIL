// 1929 | 소수 구하기

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const arrNum = parseInt(input[1]) + 1;
const primeNumber = new Array(arrNum).fill(true);
const sartNum = Math.sqrt(parseInt(input[1]));
primeNumber[0] = false;
primeNumber[1] = false;

for (let i = 0; i <= primeNumber.length; i++) {
    if (primeNumber[i]) {
        primeNumber[i] = i;
        for (let j = i * 2; j <= primeNumber.length; j += i) {
            primeNumber[j] = false;
        }
    } else {
        continue;
    }
}

const result = primeNumber.filter((num) => num !== false && num >= parseInt(input[0]));
console.log(result.join('\n'));