const dy = [-1,0,1,0]
const dx = [0,-1,0,1]

function solution(maps) {
    const N = maps.length
    const M = maps[0].length
    const bfs = () => {
        const queue = [[0,0,1]]
        const visited = Array.from({length:N},() => new Array(M).fill(false))
        visited[0][0] = true
        while(queue.length > 0){
            const [curry,currx,currDepth] = queue.shift()
            for (let i = 0; i < 4; i++){
                const ny = curry + dy[i]
                const nx = currx + dx[i]
                if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue
                if (maps[ny][nx] === 0) continue
                if (visited[ny][nx]) continue
                if (ny === N - 1 &&  nx === M - 1) return currDepth + 1
                visited[ny][nx] = true
                queue.push([ny,nx,currDepth + 1])
            }
        }
        return -1
    }
    return bfs()
}