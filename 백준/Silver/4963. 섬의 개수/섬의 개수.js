const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")
let i = 0
const dy = [1, 1, 0, -1, -1, -1, 0, 1]
const dx = [0, 1, 1, 1, 0, -1, -1, -1]
const bfs = (board, y, x, visited, h, w) => {
    const queue = [[y, x]]
    visited[y][x] = true

    while (queue.length > 0) {
        const [curry, currx] = queue.shift()
        for (let i = 0; i < 8; i++) {
            const ny = curry + dy[i]
            const nx = currx + dx[i]
            if (ny < 0 || ny >= h || nx >= w || nx < 0) continue
            if (visited[ny][nx]) continue
            if (board[ny][nx] == 0) continue
            visited[ny][nx] = true
            queue.push([ny, nx])
        }
    }
}
while (true) {
    const [w, h] = input[i].split(" ").map(Number)
    i++
    if (w === 0 && h === 0) break
    const board = input.slice(i, i + h).map(item => item.split(" ").map(Number))
    i += h
    const visited = Array.from({ length: h }, () => Array(w).fill(false))
    let result = 0
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (board[i][j] === 1 && !visited[i][j]) {
                result += 1
                bfs(board, i, j, visited, h, w)
            }
        }
    }
    console.log(result)
}