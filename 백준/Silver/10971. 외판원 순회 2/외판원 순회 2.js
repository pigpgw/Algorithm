const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const board = input.slice(1).map((item) => item.split(' ').map(Number));
const visited = Array(N).fill(false);

let result = Infinity;

const dfs = (start, curr, count, cost) => {
    if (cost >= result) return;
    if (count === N) {
        if (board[curr][start] !== 0) {
            result = Math.min(result, cost + board[curr][start]);
        }
        return;
    }

    for (let i = 0; i < N; i++) {
        if (visited[i] || board[curr][i] === 0) continue;
        visited[i] = true;
        dfs(start, i, count + 1, cost + board[curr][i]);
        visited[i] = false;
    }
};

visited[0] = true;
dfs(0, 0, 1, 0);

console.log(result);
