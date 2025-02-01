let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(' ').map(Number);
let result = new Set();
const visited = Array(n + 1).fill(false);
const seq = [];

const dfs = (targetLength) => {
    if (targetLength === m) {
        const addedNumber = seq
            .map(Number)
            .sort((a, b) => a - b)
            .join(' ');
        if (!result.has(addedNumber)) {
            result.add(addedNumber);
        }
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;

        visited[i] = true;
        seq.push(i);
        dfs(targetLength + 1);
        seq.pop();
        visited[i] = false;
    }
};

dfs(0);
result.forEach((item) => {
    console.log(item);
});
