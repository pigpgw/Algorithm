let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numberList = input[1].split(' ').map(Number);
const result = [];
const seq = [];
const visited = Array(n).fill(false);

const dfs = (count) => {
    if (count === m) {
        result.push([...seq]);
        return;
    }

    numberList.forEach((number, i) => {
        if (!visited[i]) {
            visited[i] = true;
            seq.push(number);
            dfs(count + 1);
            seq.pop();
            visited[i] = false;
        }
    });
};

dfs(0);
// 정렬을 모든 원소를 기준으로 수행
result.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
});

// 결과 출력
result.forEach((list) => console.log(list.join(' ')));
