function solution(bridge_length, weight, truck_weights) {
    let time = 0
    const bridge = Array.from({length:bridge_length}).fill(0)
    let total_weight = 0
    
    while (truck_weights.length > 0 || total_weight > 0){
        // 다리에 올라가있는 트럭들의 무게의 합 + 다음 트럭의 무게의합 이 weight 보다 낮다면 트럭이 1초마다 출발한다.
        const arrived = bridge.shift()
        if (arrived !== 0){
            total_weight -= arrived
        }
        if (weight >= truck_weights[0] + total_weight){
            const poped = truck_weights.shift()
            bridge.push(poped)
            total_weight += poped
        }else {
            bridge.push(0)
        }
        
        time++
    }
    return time
}
