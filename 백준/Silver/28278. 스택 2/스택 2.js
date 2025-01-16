let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const commandList = input.slice(1);
let stack = [];
let output = [];

for (let i = 0; i < N; i++) {
    const commandInfo = commandList[i].split(' ').map(Number);
    const command = commandInfo[0];
    const inputNumber = commandInfo[1];

    if (command === 1) {
        stack.push(inputNumber);
    } else if (command === 2) {
        if (stack.length > 0) output.push(stack.pop());
        else output.push(-1);
    } else if (command === 3) {
        output.push(stack.length);
    } else if (command === 4) {
        output.push(stack.length === 0 ? 1 : 0);
    } else if (command === 5) {
        output.push(stack.length > 0 ? stack[stack.length - 1] : -1);
    }
}

console.log(output.join('\n'));
