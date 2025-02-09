let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const trunkList = input.slice(1).map((item) => item.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(0);

trunkList.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});

graph.forEach((item) => {
    item.sort((a, b) => a - b);
});

const queue = [];
queue.push(R);
let visit = 1;
visited[R] = 1;

while (queue.length) {
    const cur = queue.shift();
    for (const next of graph[cur]) {
        if (!visited[next]) {
            visited[next] = ++visit;
            queue.push(next);
        }
    }
}
console.log(visited.slice(1).join('\n'));
