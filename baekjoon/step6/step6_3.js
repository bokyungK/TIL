// 10809 | 알파벳 찾기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('');
const alphabet = [];
const result = []

for (let i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i));
    input.includes(alphabet[i - 97]) ? result.push(input.indexOf(alphabet[i - 97])) : result.push(-1);
}

console.log(result.join(' '));