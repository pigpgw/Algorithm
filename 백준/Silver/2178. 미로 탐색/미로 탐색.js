const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [N,M] = input[0].split(" ").map(Number)
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const board = input.slice(1).map(item => item.split("").map(Number))
const dx = [0, 1, 0, -1]
const dy = [-1, 0, 1, 0]
const bfs = () => {
    const queue = [[0,0,1]]
    visited[0][0] = true
    while (queue.length) {
        const [curr_y, curr_x,curr_depth] = queue.shift()
        if (curr_y === N -1 && curr_x === M - 1){
            console.log(curr_depth)
            return
        }
        for (let i = 0; i < 4; i++) {
            const next_y = curr_y + dy[i]
            const next_x = curr_x + dx[i]
            if (next_x < 0 || next_x >= M || next_y < 0 || next_y >= N) continue
            if (board[next_y][next_x]=== 0) continue
            if (visited[next_y][next_x]) continue
            visited[next_y][next_x] = true
            queue.push([next_y,next_x,curr_depth + 1])
        }
    }
}

bfs()