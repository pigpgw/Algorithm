function solution(n, wires) {
    let result = Infinity

    for (let i = 0; i < wires.length; i++){
        const filtered_wires = wires.filter((_,idx) => idx !== i)
        const tree = {}
        let count = 0
        const bfs = (start) => {
            const visited = new Array(n + 1).fill(false)
            const queue = [start]
            visited[start] = true
            count++
            
            while(queue.length){
                const curr = queue.shift()
                
                for (const nxNode of tree[curr]){
                    if (visited[nxNode]) continue
                    queue.push(nxNode)
                    visited[nxNode] = true
                    count++
                }
            }
            
        }
        for (const [v1,v2] of filtered_wires){
            if (!tree[v1]) tree[v1] = []
            if (!tree[v2]) tree[v2] = []
            tree[v1].push(v2)
            tree[v2].push(v1)
        }
        bfs(filtered_wires[0][0])
        result = Math.min(result,Math.abs((n - count) - count))
    }
    return result
}