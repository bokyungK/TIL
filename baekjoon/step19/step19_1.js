// 10828 | 스택

const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const stack = [];
const result = []

input.forEach((command) => {
    if (command.includes('push')) {
        stack.push(command.slice(command.indexOf(' ') + 1, command.length));
        return;
    }
    if (command.includes('pop')) {
        if (stack.length === 0) {
            result.push(-1)
        } else {
            result.push(stack[stack.length - 1]);
            stack.pop();   
        }
        return;
    }
    if (command.includes('size')) {
        result.push(stack.length);
        return;
    }
    if (command.includes('empty')) {
        stack.length === 0 ? result.push(1) : result.push(0);
        return;
    }
    if (command.includes('top')) {
        stack.length === 0 ? result.push(-1) : result.push(stack[stack.length - 1])
    }
})

console.log(result.join('\n'));