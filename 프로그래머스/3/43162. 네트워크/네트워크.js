

function solution(n, computers) {
    // visited배열로 세고 연결된것들 돌떄마다 체크후 반환
    const visited = new Array(n).fill(false)    
    const dfs = (curr) => {
        for (let i = 0; i < n; i++){
            if (visited[i]) continue
            if (computers[curr][i] === 0) continue
            visited[i] = true
            dfs(i)
        }
    }
    let count = 0
    for (let i = 0; i < n; i++){
        if (visited[i]) continue
        visited[i] = true
        count++
        dfs(i)
    }
    return count
}