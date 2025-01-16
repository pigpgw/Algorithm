let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const NSet = new Set(input.slice(1, 1 + N));
const MList = input.slice(1 + N, 1 + N + M);

let count = MList.reduce((acc, word) => acc + (NSet.has(word) ? 1 : 0), 0);
console.log(count);

