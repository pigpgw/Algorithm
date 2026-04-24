function solution(begin, target, words) {
    // 한번에 한개의 단어만 바꾸기 가능 근데 그게 words에 있어야함
    // bfs
    let result = Infinity
    const visited = new Array(words.length).fill(false)
    const dfs = (curr,count) => {
        if (curr === target && count < result){
            result = count
            return
        }    
        for (let i = 0; i < words.length; i++){
            if (visited[i]) continue
            let diff = 0
            for (let j = 0; j< begin.length; j++){
                if (curr[j] !== words[i][j]) diff++
            }
            if (diff === 1){
                visited[i] = true
                dfs(words[i],count + 1)
                visited[i] = false
            }
        }
    }
    dfs(begin,0)
    return result === Infinity ? 0 : result;
}