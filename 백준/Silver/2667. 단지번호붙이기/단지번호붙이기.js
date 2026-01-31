const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number(input[0])
const board = input.slice(1).map(item => item.split("").map(Number))

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [0, 1, 0, -1]
const dy = [-1, 0, 1, 0]
const result = []
const bfs = (y, x) => {
    const queue = [[y, x]]
    visited[y][x] = true
    let count = 1
    while (queue.length) {
        const [curr_y, curr_x] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const next_y = curr_y + dy[i]
            const next_x = curr_x + dx[i]
            if (next_x < 0 || next_x >= N || next_y < 0 || next_y >= N) continue
            if (board[next_y][next_x]=== 0) continue
            if (visited[next_y][next_x]) continue
            visited[next_y][next_x] = true
            queue.push([next_y,next_x])
            count++
        }
    }
    return count
}


for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && board[i][j] === 1){
            const count = bfs(i, j)
            result.push(count)
        }
    }
}

result.sort((a, b) => a - b);

console.log(result.length);
result.forEach(num => console.log(num));