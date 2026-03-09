function solution(numbers) {
    const visited = new Array(numbers.length).fill(false)
    const minority = new Set()
    
    const isMinority = (arr) => {
        const number = Number(arr.join(""))
        if (number === 0 || number === 1) return false 
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0) return false
        }
        return true
    }
    
    const backtrack = (arr) => {
        if (arr.length === numbers.length){
            return
        }
        for (let i = 0; i < numbers.length; i++){
            if (visited[i]) continue
            arr.push(numbers[i])
            visited[i] = true
            if (isMinority(arr)) minority.add(Number(arr.join("")))
            backtrack(arr)
            visited[i] = false
            arr.pop()
        }
    }
    backtrack([])
    return  [...minority].length
}