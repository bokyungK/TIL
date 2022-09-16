// 2775 | 부녀회장이 될테야

const fs = require('fs');
let input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.splice(1, input.length);
const result = [];

// 층수, 호수 데이터만 추출
input.map((item, idx) => {
    input[idx] = Number(item);
})

// 층수만큼 인원 수 배열 생성
for (let i = 0; i < input.length; i +=2) {
    const 층수 = input[i];
    const 호수 = input[i + 1];
    const totalArr = [];
    let floorArr = [];
    
    if (층수 === 0) {
        result.push(호수);
        continue;
    }
    
    // 0층 배열 생성
    for (let j = 1; j <= 호수; j++) {
        floorArr.push(j);
    }
    totalArr.push(floorArr);
    
    // 1층이상 배열 생성(아래층 인원 수 더해서 현재 층 인원 수 산출)
    for (let j = 0; j < 층수; j++) {
        let sum = 0;
        floorArr = []; // 배열 초기화
        for (let k = 0; k < 호수; k++) {
            sum += totalArr[j][k];
            floorArr.push(sum);
        }
        totalArr.push(floorArr);
    }

    // 새로 만든 배열로 결과 출력
    result.push(totalArr[층수][호수 - 1]);
}

console.log(result.join('\n'));