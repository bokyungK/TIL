// 1152 | 단어의 개수

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const result = input.length;

input[0] === '' ? console.log(0) : console.log(result);

// 공백 하나가 입력으로 들어오는 반례를 생각하지 못해 틀렸었다!