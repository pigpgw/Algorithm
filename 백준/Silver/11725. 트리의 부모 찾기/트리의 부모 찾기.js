const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split("\n")
const N = Number(input[0])
const mainLineList = input.slice(1).map(item => item.split(" ").map(Number))
const graph = {}
for (let i = 1; i <= N; i++) {
    graph[i] = []
}
for (const [nodeA, nodeB] of mainLineList) {
    graph[nodeA].push(nodeB)
    graph[nodeB].push(nodeA)
}

const result = new Array(N + 1).fill(-1)
const visited = new Array(N + 1).fill(false)

const search = (curr) => {
    for (const next of graph[curr]) {
        if (visited[next]) continue
        result[next] = curr
        visited[next] = true
        search(next)
    }
}
visited[1] = true
search(1)
for (const num of result.slice(2)) {
    console.log(num)
}