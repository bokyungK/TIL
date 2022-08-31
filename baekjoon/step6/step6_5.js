// 1157 | 단어 공부

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.toUpperCase().split('');
let alphabets = new Set(input);
alphabets = [...alphabets];
let count = [];

alphabets.forEach(alphabet => {
    count.push(input.filter(item => item === alphabet ).length);
})

count.filter(num => num === Math.max(...count)).length > 1 ?
    console.log('?') 
    :
    console.log(alphabets[count.indexOf(Math.max(...count))]);