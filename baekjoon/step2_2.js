// <시험 성적>

// 입출력 사용하기 세팅
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력값 사용하기 세팅
let input = []
rl.on("line", (line) => {
    if(line >= 0 && line <= 100) {
        input = Number(line);
        rl.close();
    }
});

rl.on('close', () => {
    // 점수 조건문 처리
    if (input >= 90 && input <= 100) {
        console.log('A');
    } else if (input >= 80 && input < 90) {
        console.log('B');
    } else if (input >= 70 && input < 80) {
        console.log('C');
    } else if (input >= 60 && input < 70) {
        console.log('D');
    } else {
        console.log('F');
    }
process.exit();
})