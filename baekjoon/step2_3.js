// <윤년>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
rl.on("line", (line) => {
    input = Number(line);
    rl.close();
});

rl.on('close', () => {
    // 윤년 선별
    if (((input % 4 === 0) && ((input % 100 !== 0 || input % 400 === 0)))) {
        console.log(1);
    } else {
        console.log(0);
    }
process.exit();
})