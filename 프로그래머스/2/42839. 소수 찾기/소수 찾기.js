function solution(numbers) {
    const visited = new Array(numbers.length).fill(false)
    const primes = new Set()
    
    const isPrime = (num) => {
        if (num < 2) return false 
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0) return false
        }
        return true
    }
    
    const backtrack = (current) => {
        if (isPrime(current)) primes.add(current)
        
        for (let i = 0; i < numbers.length; i++){
            if (visited[i]) continue
            
            visited[i] = true
            backtrack(current*10 + Number(numbers[i]))
            visited[i] = false
        }
    }
    
    for (let i = 0; i < numbers.length; i++){
        visited[i] = true
        backtrack(Number(numbers[i]))
        visited[i] = false
    }
    return primes.size
}