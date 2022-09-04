// 2941 | 크로아티아 알파벳

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const change = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

while (input.length !== 0) {
    if (change.includes(input[0] + input[1])) {
        input = input.replace(input[0] + input[1], '');
    } else if (change.includes(input[0] + input[1] + input[2])) {
        input = input.replace(input[0] + input[1] + input[2], '');
    } else {
        input = input.replace(input[0], '');
    }
    count += 1;
}

console.log(count);