// <A + B - 3>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
let firstInput = 0;
let count = -1;
rl.on("line", (line) => {
    // 입력 범위 설정
    if (firstInput === 0 && Number.isInteger(Number(line))) {
        firstInput = Number(line);
        count += 1;
    } else if (firstInput) {
        if (count >= 0 && count < firstInput) {
            input[count] = line.split(' ');
            input[count][0] = Number(input[count][0]);
            input[count][1] = Number(input[count][1]);

            if (((input[count][0] > 0) && (input[count][1] < 10)) && input[count][0] && input[count][1]) {
                count += 1;
            } else {
                console.log('범위 : A > 0, B < 10', '공백을 사용해 두 숫자를 입력하세요!');
            }
        }
        
        if (count === firstInput) {
            rl.close();
        }
    } else{
        console.log('테스트 케이스인 정수 하나를 입력해주세요!');
    }
})

rl.on('close', () => {
    // A + B
    for (let i = 0; i < input.length; i++) {
        console.log(input[i][0] + input[i][1]);
    }
process.exit();
})