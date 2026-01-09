const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const N_list = input[1].split(' ').map(Number);

N_list.sort((a, b) => a - b);

const result = [];
const visited = Array(N).fill(false);

const dfs = (arr) => {
    if (arr.length === M) {
        result.push([...arr]);
        return;
    }

    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;

        visited[i] = true;
        arr.push(N_list[i]);
        dfs(arr);
        arr.pop();
        visited[i] = false;
    }
};

dfs([]);
result.map((item) => {
    console.log(item.join(' '));
});
