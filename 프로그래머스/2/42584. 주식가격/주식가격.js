function solution(prices) {
    // 값 저장할것 필요
    const result = []
    let head = 0
    while (prices.length > head){
        // 앞에서 뽑는다.
        const poped = prices[head++]
        // 이후 가격들을 순차적으로 확인한다.(남은 배열개수만큼 근데 떨어지면 종료)
        let count = 0
        for (let i = head; i < prices.length; i++){
            count++
            if (poped > prices[i]) break
        }
        result.push(count)
    }
    return result
}