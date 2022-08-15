// <알람 시계>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []

rl.on("line", (line) => {
        // 입력값 조건
        input = line.split(' ');
        for (let i = 0; i < input.length; i++) {
            input[i] = Number(input[i]);
        }

        if ((input[0] >= 0 && input[0] <= 23) && (input[1] >= 0 && input[1] <= 59)) {
            rl.close();
        } else {
            input = [];
            console.log('다시 입력해주세요! 입력 범위 : 0 ≤ H ≤ 23, 0 ≤ M ≤ 59');
        }
})

rl.on('close', () => {
    // 45분 앞당겨서 출력
    let H = input[0];
    let M = input[1];

    if (M >= 45) {
        M = M - 45;
    } else {
        M = 60 - (45 - M);
        if (H === 0) {
            H = 23;
        } else {
            H = H - 1;
        }
    }
    console.log(H, M);
process.exit();
})