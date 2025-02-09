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
    item.sort((a, b) => b - a);
});

const dfs = (node, depth) => {
    if (visited[node] !== -1) return;
    visited[node] = depth;
    for (const next of graph[node]) {
        dfs(next, depth + 1);
    }
};

dfs(R, 0);
console.log(visited.slice(1).join('\n'));
