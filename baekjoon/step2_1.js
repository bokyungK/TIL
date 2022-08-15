// <두 수 비교하기>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  // 생성한 rl 변수를 사용하는 법
let input = []
rl.on("line", (line) => { 
    input = line.split(' ');
    rl.close();
});

rl.on('close', () => {
    // 비교하기 위해 input 숫자형으로 변경
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    // input 배열 값 A, B에 담기
    const A = input[0];
    const B = input[1];

    // A, B 비교하기
    if (A > B) {
        console.log('>');
    } else if (A < B) {
        console.log('<');
    } else {
        console.log('==');
    }
process.exit();
})