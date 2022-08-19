// <구구단>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
rl.on("line", (line) => {
    if (line >= 1 && line <= 9) {
        input = Number(line);
        rl.close();
    } else {
        console.log('다시 입력하세요! 입력 범위는 1 ~ 9 입니다.');
    }
});

rl.on('close', () => {
        for(let i = 1; i <= 9; i++) {
            console.log(`${input} * ${i} = ${input * i}`);
        }
process.exit();
})