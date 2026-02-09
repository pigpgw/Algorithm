const fs = require('fs');
const [N, K] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const visited = new Array(100001).fill(-1);
const prev = new Array(100001).fill(-1);
const queue = [];
queue.push(N);
visited[N] = 0;
let head = 0;

while (queue.length > head) {
    const x = queue[head++];
    if (x === K) {
        break;
    }

    const nexts = [x - 1, x + 1, 2 * x];
    for (const nx of nexts) {
        if (nx < 0 || nx > 100000) continue;
        if (visited[nx] !== -1) continue;
        visited[nx] = visited[x] + 1;
        queue.push(nx);
        prev[nx] = x;
    }
}

console.log(visited[K]);

const path = [];
let curr = K;

while (curr !== -1) {
    path.push(curr);
    curr = prev[curr];
}

path.reverse();
console.log(path.join(' '));
