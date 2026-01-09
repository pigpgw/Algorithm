const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = [];
let output = '';

const dfs = (depth, curr) => {
    if (depth === M) {
        output += arr.join(' ') + '\n';
        return;
    }

    for (let i = curr; i <= N; i++) {
        arr.push(i);
        dfs(depth + 1, i);
        arr.pop();
    }
};

dfs(0, 1);
console.log(output);
