// 2292 | 벌집

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let lineNum = 0;
input = Math.floor(input) - 1;

while (input > 0) {
    lineNum += 6;
    input -= lineNum;
}

const result = (lineNum / 6) + 1;
console.log(result);