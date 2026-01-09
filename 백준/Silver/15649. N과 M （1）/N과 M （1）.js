const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const visited = Array(N + 1).fill(false);
const array = [];

const dfs = (depth) => {
    if (depth === M) {
        console.log(array.join(' '));
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            array.push(i);
            visited[i] = true;
            dfs(depth + 1);
            visited[i] = false;
            array.pop();
        }
    }
};

dfs(0);
