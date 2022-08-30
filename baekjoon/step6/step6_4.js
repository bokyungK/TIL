// 2675 문자열 반복

let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = new Array(Number(inputs[0])).fill('');

inputs.forEach((input, idx) => {
    if (idx < 1) {
        inputs[idx] = Number(input);
    } else {
        inputs[idx] = input.split(' ');
        inputs[idx][0] = Number(inputs[idx][0]);
    }
})

for (let i = 1; i < inputs[0] + 1; i++) {
    for (let j = 0; j < inputs[i][1].length; j++) {
        result[i - 1] += inputs[i][1][j].repeat(inputs[i][0]);
    }
}

console.log(result.join('\n'));