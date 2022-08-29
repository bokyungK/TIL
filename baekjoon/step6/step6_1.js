// <아스키 코드>

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const result = input.charCodeAt(0);
console.log(result);