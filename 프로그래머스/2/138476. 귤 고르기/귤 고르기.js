function solution(k, tangerine) {
    // k개 제거해서 최소개수 만들기 object에 개수 추가하고 순서대로 정렬해서 빼고 결과보기
    const fruits = {}
    for (const fruite of tangerine){
        if (!fruits[fruite])  fruits[fruite] = 0
        fruits[fruite] += 1
    }
    const counts = Object.values(fruits)
        .sort((a, b) => b - a);
    let answer = 0
    let remain = k
    for (const count of counts){
        remain -= count
        answer += 1
        if (remain <= 0) break
    }
    return answer
}