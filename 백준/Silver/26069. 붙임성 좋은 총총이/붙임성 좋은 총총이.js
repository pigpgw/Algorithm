const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
let inputlist = input.slice(1);
let result = new Set();
result.add('ChongChong');
inputlist.forEach((list) => {
    const [n1, n2] = list.split(' ');
    if (result.has(n2)) {
        result.add(n1);
    }
    if (result.has(n1)) {
        result.add(n2);
    }
});

console.log(Array.from(result).length);
