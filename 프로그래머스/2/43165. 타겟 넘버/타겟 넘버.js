function solution(numbers, target) {
    var answer = 0;
    const dfs = (curr,arr) => {
        if (arr.length === numbers.length){
            const total = arr.reduce((acc,cur) => acc + cur)
            if (total === target) answer += 1
            return
        }
        for (const next of [-1,1]){
            const nx = next * numbers[curr + 1]
            arr.push(nx)
            dfs(curr + 1,arr)
            arr.pop()
        }
        
    }
    dfs(0,[numbers[0]])
    dfs(0,[numbers[0] * -1])
    return answer;
}