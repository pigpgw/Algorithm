let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numberList = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

const seq = [];
let result = [];
const visitied = Array(n).fill(false);

const dfs = (count) => {
    if (count === m) {
        result.push(seq.join(' '));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (visitied[i] || Math.max(...seq) > numberList[i]) continue;
        visitied[i] = true;
        seq.push(numberList[i]);
        dfs(count + 1);
        visitied[i] = false;
        seq.pop();
    }
};
dfs(0);
console.log([...new Set(result)].join('\n'));
