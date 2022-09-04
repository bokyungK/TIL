// 1316 | 그룹 단어 체커

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let checker = 0;
let count = 0;

for (let i = 1; i < Number(input[0]) + 1; i++) {
    let slot = [];
    for (let j = 0; j < input[i].length; j++) {
        if (!(slot.includes(input[i][j]))) {
            checker = true;
            slot.push(input[i][j]);
        } else if (slot.includes(input[i][j]) && slot[slot.length - 1] === input[i][j]) {
            checker = true;
        } else {
            checker = false;
            break;
        }
    }
    checker === false ? '' : count += 1;
}

console.log(count);