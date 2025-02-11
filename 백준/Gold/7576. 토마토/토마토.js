let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const tomatoList = input.slice(1).map((item) => item.split(' ').map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const graph = Array.from({ length: N }, () => Array(M).fill([]));

const queue = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tomatoList[i][j] === 1) {
            queue.push([i, j, 0]);
        }
    }
}
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let pointer = 0;
const dfs = () => {
    while (queue.length > pointer) {
        const [x, y, today] = queue[pointer++];
        graph[x][y] = [x, y, today];
        for (let i = 0; i <= 3; i++) {
            const xlocation = x + dx[i];
            const ylocation = y + dy[i];

            if (xlocation < 0 || xlocation >= N || ylocation < 0 || ylocation >= M) continue;
            if (visited[xlocation][ylocation] || tomatoList[xlocation][ylocation] !== 0) continue;
            visited[xlocation][ylocation] = true;
            queue.push([xlocation, ylocation, today + 1]);
        }
    }
};
dfs();
let day = 0;
let rest = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        const [x, y, recordeDay] = graph[i][j];
        if (day < recordeDay) day = recordeDay;
        if (tomatoList[i][j] === 0 && !visited[i][j]) {
            rest++;
        }
    }
}
if (rest === 0) console.log(day);
else console.log(-1);
