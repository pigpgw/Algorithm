function solution(progresses, speeds) {
    const queue = Array.from({length:progresses.length},(_,idx) => idx)
    const result = []
    let i = 0
    while (true){
        i += 1
        for (let i = 0; i < queue.length; i++){
            progresses[queue[i]] += speeds[queue[i]]
        }
        
        if (queue.length > 0){
            let count = 0
            while (queue.length > 0 && progresses[queue[0]] >= 100) {
                queue.shift()
                count += 1
            }
            result.push(count)
        } else {
            break
        }
    }
    return result.filter(item => item !== 0)
}