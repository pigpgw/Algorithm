const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [M, N] = input[0].split(" ").map(Number)
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const board = input.slice(1).map(item => item.split(" ").map(Number))

const dx = [0, -1, 0, 1]
const dy = [-1, 0, 1, 0]

const queue = []
let result = 1;
let head = 0

for (let j = 0; j < N; j++) {
    for (let i = 0; i < M; i++) {
        if (board[j][i] === 1) {
            queue.push([j, i, 1])
            visited[j][i] = true
        }
    }
}
const bfs = () => {
    while (head < queue.length) {
        const [y, x, day] = queue[head++]
        for (let i = 0; i < 4; i++) {
            const next_x = x + dx[i]
            const next_y = y + dy[i]
            if (
                next_x < 0 || next_x >= M ||
                next_y < 0 || next_y >= N
            ) continue
            if (board[next_y][next_x] === -1) continue
            if (visited[next_y][next_x]) continue
            queue.push([next_y, next_x, day + 1])
            visited[next_y][next_x] = true
            board[next_y][next_x] = day + 1 
            result = Math.max(result,day + 1)
        }
    }
}

bfs()


for (let j = 0; j < N; j++) {
    for (let i = 0; i < M; i++) {
        if (board[j][i] === 0 ) {
            console.log(-1)
            return
        }
    }
}

console.log(result - 1)