// 문자열 뒤집기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split('');
    rl.close();
})

rl.on('close', () => {
    let current = 'start';
    const arr = [];

    for (const value of input) {
        if (current === 'start') {
            arr.push(value);
            current = value;
            continue;
        }

        if (current !== value) {
            arr.push(value);
            current = value;
        }
    }

    const zero = arr.filter((num) => {
        return num === '0';
    })

    console.log(zero.length > arr.length - zero.length ? arr.length - zero.length : zero.length);
    process.exit();
})

// 배열을 다루거나 원하는 데이터를 추출하는데서 시간을 너무 많이 쓴다. 하나하나 값 찍어가면서 코드 짜기
// 값이 변하는 순간에 이전 값을 저장하지 말고, 처음에 값을 저장하고 변하는 순간에 새로 또 저장하도록 변경