// <사분면 고르기>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
let count = 0;

rl.on("line", (line) => {
        // 입력값 조건
        if (line >= -1000 && line <= 1000 && line !== 0) {
            count += 1;
            input.push(Number(line));
        }

        if (count > 1) {
            rl.close();
        }
})

rl.on('close', () => {
    // 사분면 선별
    const x = input[0];
    const y = input[1];

    if (x > 0 && y > 0) {
        console.log(1);
    } else if(x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else if (x > 0 && y < 0) {
        console.log(4);
    }
process.exit();
})