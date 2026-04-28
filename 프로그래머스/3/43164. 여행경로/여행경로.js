const findIdx = (tickets,start,des,visited) => {
    for (let i = 0; i < tickets.length; i++){
        if (tickets[i][0] === start && tickets[i][1] === des && !visited[i]) return i
    }
    return -1
}

function solution(tickets) {
    // 앞서는 경로가 2개 이상이면 알파벳 순서
    // 방문배열 여러개면 알파벳순
    const graph = {}
    for (const [start,destination] of tickets){
        if (!graph[start]) graph[start] = []
        graph[start].push(destination)
    }
    for (const [start,destination] of tickets){
        graph[start].sort()
    }
    const visited = new Array(tickets.length + 1).fill(false)
    const dfs = (curr,arr) => {
        if (arr.length === tickets.length + 1){
            return [...arr]
        }
        if (!graph[curr]) return 
        for (const next of graph[curr]){
            const idx = findIdx(tickets,curr,next,visited)
            if (idx === -1) continue
            if (visited[idx]) continue
            visited[idx] = true
            arr.push(next)
            const result = dfs(next,arr)
            if (result) return result 
            arr.pop()
            visited[idx] = false
        }
    }
    return dfs("ICN",["ICN"])
}