// <영수증>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
rl.on("line", (line) => {
    // 첫 번째 줄 입력 조건
    if ((count === 0) && Number(line) && (line >= 1 && line <= 1000000000)) {
        input.push(Number(line));
        count += 1;
    } else if (count === 1 && Number(line) && (line >= 1 && line <= 100)) {
    // 두 번째 줄 입력 조건
        input.push(Number(line));
        count += 1;
    } else if (count >= 2) {
    // 나머지 줄 입력 조건
        input.push(line.split(' '));

        const a = Number(input[count][0]);
        const b = Number(input[count][1]);

        if ((a >= 1 && a <= 1000000) && (b >= 1 && b <= 10)) {
            input[count][0] = a;
            input[count][1] = b;
            count += 1;
        } else {
            console.log('a 또는 b의 입력 범위가 틀렸습니다! 다시 입력해주세요.');
        }
    }

    if (count === input[1] + 2) {
        rl.close();
    }
})

rl.on('close', () => {
    // 영수증 총 금액과 일치 여부 계산
    let sum = 0;
    for (let i = 2; i < input.length; i++) {
        sum = sum + (input[i][0] * input[i][1]);
    }
    console.log(sum === input[0] ? 'Yes' : 'No');
process.exit();
})