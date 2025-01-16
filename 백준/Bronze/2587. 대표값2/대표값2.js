let input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number)
    .sort((a, b) => a - b);
console.log(input.reduce((acc, crr) => acc + crr, 0) / input.length);
console.log(input[Math.floor(input.length / 2)]);
