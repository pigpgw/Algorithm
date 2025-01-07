const input = require('fs')
    .readFileSync('/dev/stdin', 'utf-8')
    .trim()
    .split('\n')
    .map((item) => Number(item));

const N = Number(input[0]);
const numbers = input.slice(1, N + 1).sort((a, b) => a - b);
console.log(numbers.join('\n'));
