// 2581 | 소수

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = 0;
const min = [];

input.forEach((num, idx) => {
    input[idx] = parseInt(num);
})

for (let start = input[0]; start < input[1] + 1; start++) {
    if (start === 1) {
        continue
    } else {
        let num = 2;
        let checker = true;
        while (start > num) {
            if (start % num === 0) {
                checker = false;
                break;
            } else {
                checker = true;
            }
            num += 1;
        }
        if (checker === true) {
            sum += start,
            min.push(start)
    }
    }
}

if (sum !== 0) {
    console.log(`${sum}\n${min[0]}`);
} else {
    console.log(-1);
}