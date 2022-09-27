// 4948 | 베르트랑 공준

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// input string -> number
input.forEach((num, idx) => {
    input[idx] = parseInt(num);
})
input.pop();

// get prime number
input.forEach((num) => {
    const arrNum = (num * 2) + 1 
    const primeNumber = new Array(arrNum).fill(true);
    primeNumber[0] = false;
    primeNumber[1] = false;
    
    for (let i = 0; i < arrNum; i++) {
        if (primeNumber[i]) {
            primeNumber[i] = i;
            for (let j = i * 2; j <= primeNumber.length; j += i) {
                primeNumber[j] = false;
            }
        } else {
            continue;
        }
    }
    const result = primeNumber.filter((prime) => prime !== false);
    const finalResult = result.filter((prime) => prime > num);
    console.log(finalResult.length);
})