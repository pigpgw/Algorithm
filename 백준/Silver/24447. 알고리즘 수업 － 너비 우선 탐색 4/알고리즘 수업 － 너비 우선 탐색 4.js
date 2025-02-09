const { resourceLimits } = require('worker_threads');

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const trunkList = input.slice(1).map((item) => item.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(-1);

trunkList.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});

graph.forEach((item) => {
    item.sort((a, b) => a - b);
});
let result = 0;
const bfs = (start) => {
    const queue = [];
    let seq = 1;
    let front = 0;
    queue.push([start, 0]);
    visited[start] = 0;
    while (queue.length > front) {
        const [cur, depth] = queue[front++];
        for (const next of graph[cur]) {
            if (visited[next] === -1) {
                visited[next] = (depth + 1) * ++seq;
                result += visited[next];
                queue.push([next, depth + 1]);
            }
        }
    }
};

bfs(R);
console.log(result);
