const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const board = input.slice(1).map((item) => item.split(' ').map(Number));
const visited = Array.from({ length: N }, () => false);

let result = Infinity;

const dfs = (start, curr, arr, visited) => {
    if (arr.length === N - 1) {
        if (board[curr][start] !== 0) {
            const sum = arr.reduce((acc, cur) => acc + cur, 0) + board[curr][start];
            result = Math.min(result, sum);
        }
        return;
    }

    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        if (board[curr][i] === 0) continue;
        visited[i] = true;
        arr.push(board[curr][i]);
        dfs(start, i, arr, visited);
        visited[i] = false;
        arr.pop();
    }
};

for (let i = 0; i < N; i++) {
    visited[i] = true;
    dfs(i, i, [], visited);
    visited[i] = false;
}

console.log(result);
