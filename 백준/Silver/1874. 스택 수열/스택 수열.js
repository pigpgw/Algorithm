const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const target_list = input.slice(1).map(Number);
const stack = [];
const result = [];

for (let i = 1; i <= n; i++) {
    stack.push(i);
    result.push('+');

    while (stack.length > 0 && stack[stack.length - 1] === target_list[0]) {
        stack.pop();
        target_list.shift();
        result.push('-');
    }
}

if (target_list.length > 0) {
    console.log('NO');
} else console.log(result.join('\n'));
