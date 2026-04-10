const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")
const [N, M] = input[0].split(" ").map(Number)
const board = input.slice(1).map(item => item.split(""))
const visited = Array.from({ length: N }, () => new Array(M).fill(false))

let result = false

const dy = [0, -1, 0, 1]
const dx = [-1, 0, 1, 0]
const dfs = (startY, startX, depth, currY, currX, color) => {
    for (let i = 0; i < 4; i++) {
        const ny = currY + dy[i]
        const nx = currX + dx[i]
        if (ny >= N || ny < 0 || nx >= M || nx < 0) continue
        if (board[ny][nx] !== color) continue

        if (depth >= 4 && startY === ny && startX === nx) {
            result = true
            return
        }
        if (visited[ny][nx]) continue
        visited[ny][nx] = true
        dfs(startY, startX, depth + 1, ny, nx, color)
        visited[ny][nx] = false
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (result) {
            console.log("Yes")
            return
        }
        visited[i][j] = true
        dfs(i, j, 1, i, j, board[i][j])
        visited[i][j] = false
    }
}

console.log("No")