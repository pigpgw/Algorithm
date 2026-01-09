const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = [];
let output = '';

const dfs = (depth) => {
    if (depth === M) {
        output += arr.join(' ') + '\n';
        return;
    }

    for (let i = 1; i <= N; i++) {
        arr.push(i);
        dfs(depth + 1);
        arr.pop();
    }
};

dfs(0);
console.log(output);
