// <빠른 A+B>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
let result = [];
rl.on("line", (line) => {
    // 입력 조건
    if (count === 0 && ((parseInt(line) >= 1) && (parseInt(line) <= 1000000))) {
        input.push(parseInt(line));
        count += 1;
    } else if ((count <= input[0] && line.includes(' '))) {
        const ab = line.split(' ');
        ab[0] = Number(ab[0]);
        ab[1] = Number(ab[1]);
  
        if(((ab[0] >= 1) && (ab[0] <= 1000)) && ((ab[1] >= 1) && (ab[1] <= 1000))) {
            input[count] = ab;
            result.push(input[count][0] + input[count][1], '\n');
            count += 1;
        }
    }
    if (count === input[0] + 1) {
        input.pop();
        rl.close();
    }
})

rl.on('close', () => {
    // 빠른 결과 처리
    console.log(result.join(''));
    process.exit();
})