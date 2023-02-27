// 곱하기 혹은 더하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.split('').map((txt) => {
        return Number(txt);
    }));
    rl.close();
})

rl.on('close', () => {
    let result = 0;
    
    for (const num of input[0]) {
        if (result === 0) {
            result += num;
            continue;
        }
        result *= num;
    }

    console.log(result);
    process.exit();
})

// 문제점 => index 실수 많이 함, break/continue 헷갈려 함