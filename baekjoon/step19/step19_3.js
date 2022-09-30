// 9012 | 괄호

const fs = require('fs');
let input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);
input.map((bracket, idx) => {
    input[idx] = bracket.split('');
})

input.forEach((arr) => {
    const leftBracket = [];
    let checker = 'YES';
    
    arr.forEach((bracket, idx) => {
        if (bracket === '(') {
            leftBracket.push(idx);
        }
    })
    
    leftBracket.reverse();
    for (let i = 0; i < leftBracket.length; i++) {
        if (arr[leftBracket[i] + 1] === ')') {
            arr.splice(leftBracket[i], 2);
        } else {
            checker = 'NO';
            break;
        }
    }

    arr.length !== 0 ? checker = 'NO' : ''
    console.log(checker);
})