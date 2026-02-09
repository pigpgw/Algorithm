const fs = require('fs');
const [N, K] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const Max = 100000;

const visited = new Array(Max + 1).fill(-1);

const queue = [[N, 0]];
visited[N] = 0;
let head = 0;

while (queue.length > head) {
    const [x, time] = queue[head++];
    const nexts = [2 * x, x - 1, x + 1];

    if (x === K) {
        console.log(visited[K]);
        break;
    }

    for (const nx of nexts) {
        if (nx >= Max + 1) continue;
        if (visited[nx] !== -1) continue;

        if (nx === 2 * x) {
            visited[nx] = time;
            queue.push([nx, time]);
        } else {
            visited[nx] = time + 1;
            queue.push([nx, time + 1]);
        }
    }
}
