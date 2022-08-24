// <빠른 A+B>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", (line) => {
    // 입력 조건
    let length = input.length;
    if (length === 0) {
        input.push(Number(line));
    } else if (length <= input[0]) {
        input.push(line.split(' '));
        input[length][0] = Number(input[length][0]);
        input[length][1] = Number(input[length][1]);
        result.push(input[length][0] + input[length][1], '\n');
    }
       
    if (length === input[0]) {
        result.pop();
        rl.close();
    }
})

rl.on('close', () => {
    // 빠른 결과 처리
    console.log(result.join(''));
    process.exit();
})