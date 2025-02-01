let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numberList = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const result = [];
const seq = [];
const visited = Array(n).fill(false);

const dfs = (count) => {
    if (count === m) {
        result.push(seq.join(' '));
        return;
    }

    numberList.forEach((number, i) => {
        if (!visited[i] && Math.max(...seq) < number) {
            visited[i] = true;
            seq.push(number);
            dfs(count + 1);
            seq.pop();
            visited[i] = false;
        }
    });
};

dfs(0);
result.forEach((list) => {
    console.log(list);
});
