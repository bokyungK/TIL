// <오븐 시계>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
let count = 0;
rl.on("line", (line) => {
        // 입력값 조건
        if (count === 0) {
            input = line.split(' ');
            for (let i = 0; i < input.length; i++) {
                input[i] = Number(input[i]);
            }
            if ((input[0] >= 0 && input[0] <= 23) && (input[1] >= 0 && input[1] <= 59)) {
                count += 1;
            } else {
                input = [];
            }
        } else if (count === 1 && (line >= 0 && line <= 1000)) {
            count += 1;
            input.push(Number(line));
            rl.close();
        }
})

rl.on('close', () => {
    // 오븐 종료 시각 계산
    const A = input[0];
    const B = input[1];
    const C = input[2];
    result = [];

    if((B + C) < 60) {
        result[0] = A
        result[1] = B + C;
    } else if(((B + C) > 60) && ((B + C) % 60 === 0)) {
        result[0] = A + ((B + C) / 60);
        result[1] = 0;
    } else {
        result[0] = A + parseInt((B + C) / 60);
        result[1] = (B + C) - (parseInt((B + C) / 60) * 60);
    }

    if (result[0] > 23) {
        result[0] = result[0] - 24;
    }
    console.log(result[0], result[1]);
process.exit();
})