const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = Array.from({ length: N }, (v, i) => i + 1);

let seq = 0;
const result = [];
while (result.length !== N) {
    seq = (seq + K - 1) % arr.length;
    result.push(arr[seq]);
    arr.splice(seq, 1);
}
console.log(`<${result.join(', ')}>`);
