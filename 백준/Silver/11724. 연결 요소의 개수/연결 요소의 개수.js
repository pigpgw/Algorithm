const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(" ").map(Number)
const main_node_list = input.slice(1).map(item => item.split(" ").map(Number))


const graph = {}

for (const [u, v] of main_node_list) {
    if (!graph[u]) graph[u] = []
    if (!graph[v]) graph[v] = []

    graph[u].push(v)
    graph[v].push(u)
}

const visited = new Array(N + 1).fill(false)
let result = 0
const bfs =  (start) => {
    if (visited[start]) return
    const queue = [start]
    visited[start] = true
    result +=1

    while (queue.length){
        const cur = queue.shift()
        if (!graph[cur]) return
        for (const next of graph[cur]){
            if (!visited[next]){
                visited[next] = true
                queue.push(next)
            }
        }
    }
}
for (let i = 1; i <= N; i++){
        bfs(i)
}
console.log(result)