const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const array = input[1].split(' ').map(Number);

const store = new Map();

for (const num of array) {
    store.set(num, store.get(num) ? store.get(num) + 1 : 1);
}

const stack = [];

const result = new Array(N).fill(-1);
for (let i = 0; i < N; i++) {
    while (stack.length > 0 && store.get(array[stack[stack.length - 1]]) < store.get(array[i])) {
        const idx = stack.pop();
        result[idx] = array[i];
    }
    stack.push(i);
}

console.log(result.join(' '));
