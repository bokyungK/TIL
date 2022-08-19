// <합>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
rl.on("line", (line) => {
    if (line >= 1 && line <= 10000) {
        input = Number(line);
        rl.close();
    }
})

rl.on('close', () => {
    // 합 계산
    let result = 0;
    for (let i = 1; i <= input; i++) {
        result += i;
    }
    console.log(result);
process.exit();
})