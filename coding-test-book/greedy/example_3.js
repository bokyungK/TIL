// 숫자 카드 게임

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
const arr = [];

rl.on('line', (line) => {
    count += 1;

    arr.push(line.split(' ').map((txt) => {
        return Number(txt);
    }));

    const row = arr[0][0];

    if (count === row + 1) {
        rl.close();
    }
})

rl.on('close', () => {
    const min = [];
    arr.splice(0, 1);
    
    for (const row of arr) {
        min.push(Math.min(...row));
    }

    console.log(Math.max(...min));

    process.exit();
})