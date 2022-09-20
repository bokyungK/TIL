// 1978 | 소수 찾기

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let countPrimeNumber = 0;

input[1] = input[1].split(' ');
input[1].forEach((item, idx) => {
    input[1][idx] = parseInt(item);
})

input[1].forEach((item, idx) => {
    let checker = true;

    if (item === 1) {
        checker = false;
    } else {
        let num = 2;
        while (item - 1 >= num) {
            if (item % num === 0) {
                checker = false;
                break;   
            } else {
                checker = true;
            }
            num += 1;
        }
    }
    checker === true ? countPrimeNumber += 1 : ''
})

console.log(countPrimeNumber);
