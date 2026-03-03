function solution(lines) {
  let min = Infinity;
  let max = -Infinity;
    for (const [start,end] of lines){
        min = Math.min(start,min)
        max = Math.max(end,max)
    }
    let result = 0
    for (let i = min; max > i; i++){
        let count = 0
        
        for (const [start,end] of lines){
            if (start < i + 1 && i < end) count++
        }
        if (count >=2) result += 1
    }
    return result
}