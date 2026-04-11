const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split("\n")
const N = Number(input[0])
const board = input.slice(1).map(item => item.split(" ").map(Number))
const dx = [0, -1, 0, 1]
const dy = [-1, 0, 1, 0]

const result = Array.from({ length: N }, () => Array(N).fill(0))
const applyvisited = Array.from({ length: N }, () => Array(N).fill(false))
const applyBfs = (y, x, color) => {
    const queue = [[y, x, 0]]
    applyvisited[y][x] = true
    result[y][x] = color

    while (queue.length > 0) {
        const [currY, currX, currDepth] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const ny = currY + dy[i]
            const nx = currX + dx[i]
            if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue
            if (applyvisited[ny][nx]) continue
            if (board[ny][nx] === 0) continue
            applyvisited[ny][nx] = true
            queue.push([ny, nx, currDepth + 1])
            result[ny][nx] = color
        }
    }
}

let land = 1

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (board[i][j] === 1 && !applyvisited[i][j]) applyBfs(i, j, land++)
    }
}

const bfs = (y, x, color) => {
    const queue = [[y, x, 0]]
    const visited = Array.from({ length: N }, () => Array(N).fill(false))
    visited[y][x] = true

    while (queue.length > 0) {
        const [currY, currX, currDepth] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const ny = currY + dy[i]
            const nx = currX + dx[i]
            if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue
            if (result[ny][nx] === color) continue
            if (board[ny][nx] === 1 && result[ny][nx] !== color) return currDepth
            if (board[ny][nx] === 0 && !visited[ny][nx]) {
                queue.push([ny, nx, currDepth + 1])
                visited[ny][nx] = true
            }
        }
    }
    return Infinity
}


let minResult = 9999
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (board[i][j] === 1) minResult = Math.min(bfs(i, j, result[i][j]), minResult)

    }
}

console.log(minResult)
