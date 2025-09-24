const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const expr = input[1].split('');
const values = input.slice(2).map(Number);

const stack = [];

for (const item of expr) {
    if ('*+-/'.indexOf(item) === -1) {
        stack.push(values[item.charCodeAt(0) - 65]);
    } else {
        const num1 = stack.pop();
        const num2 = stack.pop();
        if (item === '+') stack.push(num2 + num1);
        else if (item === '-') stack.push(num2 - num1);
        else if (item === '*') stack.push(num2 * num1);
        else stack.push(num2 / num1);
    }
}

console.log(stack.pop().toFixed(2));
