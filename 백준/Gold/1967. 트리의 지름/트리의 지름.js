const { captureRejectionSymbol } = require('events')
const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split("\n")
const n = Number(input[0])
const node_list = input.slice(1).map(item => item.split(" ").map(Number))

const graph = {}
for (let i = 1; i <= n; i++) {
    graph[i] = []
}

for (const [parentNode, childNode, weight] of node_list) {
    graph[parentNode].push([childNode, weight])
    graph[childNode].push([parentNode, weight])
}

const bfs = (start) => {
    let farNode = start
    let fatNodeWegiht = 0
    const queue = [[start, 0]]
    const visited = new Array(n).fill(false)
    visited[start] = true
    while (queue.length > 0) {
        const [currNode, currWeight] = queue.shift()
        if (fatNodeWegiht < currWeight) {
            fatNodeWegiht = currWeight
            farNode = currNode
        }
        for (const [next, nextWeight] of graph[currNode]) {
            if (visited[next]) continue
            visited[next] = true
            queue.push([next, currWeight + nextWeight])
        }
    }
    return [farNode, fatNodeWegiht]
}

const [farNode, _] = bfs(1)
const [m, result] = bfs(farNode)
console.log(result)