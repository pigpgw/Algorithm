const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")

const N = Number(input[0])
const mainLineList = input.slice(1, N).map(item => item.split(" ").map(Number))
const ops = input[N].split(" ").map(Number)
const order = new Array(N + 1).fill(-1)

const graph = {}
for (let i = 1; i <= N; i++) {
    graph[i] = []
}

for (const [nodeA, nodeB] of mainLineList) {
    graph[nodeA].push(nodeB)
    graph[nodeB].push(nodeA)
}

for (let i = 0; i < N; i++) {
    order[ops[i]] = i
}

for (const key of Object.keys(graph)) {
    graph[key].sort((a, b) => order[a] - order[b])
}

const visited = new Array(N + 1).fill(false)

const result = [1]

const dfs = (curr) => {
    if (visited[curr]) return
    visited[curr] = true
    for (const next of graph[curr]) {
        if (visited[next]) continue
        result.push(next)
        dfs(next)
    }
}

dfs(1)
console.log(ops.join(" ") === result.join(" ") ? 1 : 0)