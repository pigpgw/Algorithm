const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const N_list = input[1].split(' ').map(Number);

const visited = Array.from({ length: N }, () => false);
let result = -1;

const backtrack = (arr) => {
    if (arr.length === N) {
        let total = 0;
        for (let i = 0; i < N - 1; i++) {
            total += Math.abs(arr[i] - arr[i + 1]);
        }
        result = Math.max(result, total);
    }

    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        arr.push(N_list[i]);
        visited[i] = true;
        backtrack(arr);
        visited[i] = false;
        arr.pop();
    }
};

backtrack([]);

console.log(result);
