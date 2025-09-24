const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const expr = input.split('');
const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
const stack = [];
const output = [];
for (const item of expr) {
    if ('+-/*()'.indexOf(item) === -1) {
        output.push(item);
    } else if (item === '(') {
        stack.push('(');
    } else if (item === ')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
            output.push(stack.pop());
        }
        stack.pop();
    } else {
        while (
            stack.length &&
            stack[stack.length - 1] !== '(' &&
            precedence[stack[stack.length - 1]] >= precedence[item]
        ) {
            output.push(stack.pop());
        }
        stack.push(item);
    }
}

while (stack.length) {
    output.push(stack.pop());
}

console.log(output.join(''));
