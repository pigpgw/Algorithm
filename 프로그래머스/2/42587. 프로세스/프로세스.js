function solution(priorities, location) {
    const queue = priorities.map((item,i) => [item,i])
    let count = 0
    while(true){
        const [popedItemPriority,popedItemIndex] = queue.shift()
        const isFirstPriority = !queue.some(item =>  item[0] > popedItemPriority)
        if (!isFirstPriority){
            queue.push([popedItemPriority,popedItemIndex])
        } else {
            count++
            if (popedItemIndex === location){
                return count 
            }
        }
    }
}