function solution(citations) {
    let start=0
    let end = citations.length
    let answer = 0
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        const quote = citations.filter(item => item >= mid).length
        
        if (quote >= mid){
            answer = mid
            start = mid + 1
        } else {
            end= mid - 1
        }
    }
    return answer
}