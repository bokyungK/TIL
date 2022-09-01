// 5622 | 다이얼

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let num = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let timeArr = [];
let result = 0;

input.forEach((alphabet, idx) => {
    num.forEach((string) => {
        string.includes(alphabet) ? timeArr.push(num.indexOf(string) + 2) : ''
    })
    
    timeArr[idx] += 1;
    result += timeArr[idx];
})

console.log(result);