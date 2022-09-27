// 9020 | 골드바흐의 추측

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// input string -> number
input.forEach((num, idx) => {
    input[idx] = parseInt(num);
})
const numbers = input.slice(1, input.length);

// get partition
numbers.forEach((num) => {
    const arrNum = (num) + 1 
    const primeNumber = new Array(arrNum).fill(true);
    let partition = [];
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
    
    for (let i = 0; i < result.length; i++) {
        if (partition.includes(result[i])) {
            break;
        }
        if (result.includes(num - result[i])) {
            partition.push(result[i]);
            partition.push(num - result[i]);
        }
    }
    console.log(partition[partition.length - 2], partition[partition.length - 1]);
})