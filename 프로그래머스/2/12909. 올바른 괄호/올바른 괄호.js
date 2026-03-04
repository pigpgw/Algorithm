function solution(s){
    const parenthesises = s.split("")
    const queue = []
    for (const parenthesis of parenthesises){
        if (parenthesis === "("){
            queue.push(parenthesis)
        } else {
            if (queue.length === 0) return false
            else queue.pop()
        }
    }
    return queue.length !== 0 ? false : true
}