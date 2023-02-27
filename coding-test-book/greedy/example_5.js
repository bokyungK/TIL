// 모험가 길드

// 공포도가 가장 높은 사람이 포함된 팀 순서대로 만들기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
const input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map((txt) => {
        return Number(txt);
    }));
    count += 1;

    if (count === 2) {
        rl.close();
    }
})

rl.on('close', () => {
    count = 0;
    let maxNum = 0;
    let index = 0;
    const team = [];
    input.splice(0, 1);
    input[0].sort().reverse();

    for (const num of input[0]) {
        count += 1;

        if (count === 1) {
            team.push([]);
            maxNum = num;
        }

        team[index].push(num);

        if (count === maxNum) {
            count = 0;
            index += 1;
        }
    }

    console.log(team.length);

    process.exit();
})