function solution(prices) {
    const n = prices.length
    const result = Array(n).fill(0)
    const stack = []
    
    for (let i =0; i < n; i++){
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]){
            const poped = stack.pop()
            result[poped] = i - poped
        }
        stack.push(i)
    }
    
    while (stack.length){
        const poped = stack.pop()
        result[poped] = n-poped - 1
    }
    return result
}