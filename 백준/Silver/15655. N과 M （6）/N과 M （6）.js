const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const N_list = input[1].split(' ').map(Number);

N_list.sort((a, b) => a - b);

const arr = [];

const dfs = (curr) => {
    if (arr.length === M) {
        console.log(arr.join(' '));
        return;
    }
    for (let i = curr; i < N; i++) {
        arr.push(N_list[i]);
        dfs(i + 1);
        arr.pop();
    }
};

dfs(0);
