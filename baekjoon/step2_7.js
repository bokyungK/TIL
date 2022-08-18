// <주사위 세개>

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
        // 입력값 조건
        input = line.split(' ');
        for (let i = 0; i < input.length; i++) {
            input[i] = Number(input[i]);
        }

        if ((input[0] >= 1 && input[0] <= 6) &&
            (input[1] >= 1 && input[1] <= 6) &&
            (input[2] >= 1 && input[2] <= 6)) {
            rl.close();
        } else {
            input = [];
            console.log("다시 입력해주세요! 주사위는 '3개', 주사위 값 범위는 '1 ~ 6'입니다.");
        }
})

rl.on('close', () => {
    // 상금 계산
    const first = input[0];
    const second = input[1];
    const third = input[2];
    let cashPrize = 0;
    let biggestDiceEye = 0;

    if ((first === second) && (second === third) && (third === first)) {
        cashPrize = 10000 + first * 1000;
    } else if ((first !== second) && (second !== third) && (third !== first)) {
        for (let i = 0; i < input.length; i++) {
            if (biggestDiceEye < input[i]) {
                biggestDiceEye = input[i];
            }
        }
        cashPrize = biggestDiceEye * 100;
    } else {
        if ((first === second) && (first !== third)) {
            cashPrize = 1000 + (first * 100);
        } else if ((second === third) && (second !== first)) {
            cashPrize = 1000 + (second * 100);
        } else if ((third === first) && (third !== second)) {
            cashPrize = 1000 + (third * 100);
        }
    }
    console.log(cashPrize);
process.exit();
})