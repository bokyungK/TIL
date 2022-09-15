// 10250 | ACM 호텔

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];

// 입력 데이터 전처리
input[0] = Number(input[0]);
for (let i = 1; i < input.length; i++) {
    input[i] = input[i].split(' ');
    for (let j = 0; j < 3; j++) {
        input[i][j] = Number(input[i][j]);
    }   
}

// 결과 처리
for (let k = 1; k < input.length; k++) {
    const H = input[k][0];
    const W = input[k][1];
    const N = input[k][2];
    
    if (Math.floor(N % H) === 0) {
        result.push(H * 100 + Math.floor(N / H));
    } else {
        result.push(Math.floor(N % H) * 100 + Math.floor(N / H) + 1);
    }
}

console.log(result.join('\n'));