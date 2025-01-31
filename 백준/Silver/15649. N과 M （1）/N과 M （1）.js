let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(' ').map(Number);
let result = '';
const seq = [];
const visited = Array(n + 1).fill(false);

const dfs = (k) => {
    if (k === m) {
        result += `${seq.join(' ')}\n`;
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;

        visited[i] = true;
        seq.push(i);
        dfs(k + 1);
        seq.pop();
        visited[i] = false;
    }
};

dfs(0);
console.log(result);
