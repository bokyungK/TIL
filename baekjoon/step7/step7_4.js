// 2869 | 달팽이는 올라가고 싶다

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const A = Math.floor(input[0]);
const B = Math.floor(input[1]);
const V = Math.floor(input[2]);

if (Math.floor((V - B) % (A - B)) === 0) {
    console.log(Math.floor((V - B) / (A - B)))
} else {
    console.log(Math.floor((V - B) / (A - B)) + 1)
}