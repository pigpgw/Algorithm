const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")
const [N, M] = input[0].split(" ").map(Number)
const board = input.slice(1).map(item => item.split(""))
const visited = Array.from({ length: N }, () => new Array(M).fill(false))

let result = false

const dy = [0, -1, 0, 1]
const dx = [-1, 0, 1, 0]
const dfs = (prev, color) => {
    const y = prev[prev.length - 1][0]
    const x = prev[prev.length - 1][1]
    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i]
        const nx = x + dx[i]
        if (ny >= N || ny < 0 || nx >= M || nx < 0) continue
        if (board[ny][nx] !== color) continue

        if (prev.length >= 4 && prev[0][0] === ny && prev[0][1] === nx) {
            result = true
            return
        }
        if (visited[ny][nx]) continue
        visited[ny][nx] = true
        prev.push([ny, nx])
        dfs(prev, color)
        prev.pop()
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
        dfs([[i, j]], board[i][j])
        visited[i][j] = false
    }
}

console.log("No")