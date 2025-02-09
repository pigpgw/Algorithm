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

let visitSequece = 1;

const dfs = (node, visit, depth) => {
    if (visited[node] !== -1) return;
    visited[node] = visitSequece * depth;
    result += visited[node];
    visitSequece++;
    for (const next of graph[node]) {
        dfs(next, visit, depth + 1);
    }
};

dfs(R, visitSequece, 0);

console.log(result);
