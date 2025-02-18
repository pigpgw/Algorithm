const fs = require('fs');
const { start } = require('repl');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, H] = input[0].split(' ').map(Number);
const tomatoList = input.slice(1).map((list) => list.split(' ').map(Number));

const graph = [];
for (let i = 0; i < H; i++) {
    const layer = [];
    for (let j = 0; j < N; j++) {
        layer.push(tomatoList.shift());
    }
    graph.push(layer);
}
const visited = Array.from({ length: H }, () => Array.from({ length: N }, () => Array(M).fill(false)));

const queue = [];

let total = 0;
let early = 0;
let notCook = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (graph[i][j][k] === 1) {
                visited[i][j][k] = true;
                queue.push([i, j, k, 0]);
            }
            if (graph[i][j][k] === 0) early += 1;
            total += 1;
        }
    }
}

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

let pointer = 0;
const bfs = () => {
    while (queue.length > pointer) {
        const [zlocation, xlocation, ylocation, startday] = queue[pointer++];
        for (let i = 0; i < 6; i++) {
            const x = xlocation + dx[i];
            const y = ylocation + dy[i];
            const z = zlocation + dz[i];

            if (x >= N || x < 0 || y >= M || y < 0 || H <= z || z < 0) continue;
            if (!visited[z][x][y] && graph[z][x][y] !== -1) {
                visited[z][x][y] = true;
                graph[z][x][y] = startday + 1;
                queue.push([z, x, y, startday + 1]);
            }
        }
    }
};

bfs();
// console.log(graph);

let maxDay = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (graph[i][j][k] > maxDay) {
                maxDay = graph[i][j][k];
            }
            if (graph[i][j][k] === 0) {
                notCook += 1;
            }
        }
    }
}
// console.log('total === early', total, early);
// console.log('notCook', notCook);
// console.log('maxDay', maxDay);
early === 0 ? console.log(0) : notCook !== 0 ? console.log(-1) : console.log(maxDay);
