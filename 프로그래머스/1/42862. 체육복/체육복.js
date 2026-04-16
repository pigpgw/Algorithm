function solution(n, lost, reserve) {
    // 바로 앞이나 뒤
    // 입력 도난당한 학생들, 여벌의 채육복 가진
    // 여벌의 학생이 체육복 도난당한경우 다른학생 못빌려줌
    const origin = [...reserve]
    reserve = reserve.filter(user => lost.indexOf(user) === -1).sort((a,b) => a- b)
    lost = lost.filter(user => origin.indexOf(user) === -1).sort((a,b) => a- b)
    // 체육수업 들을 수 있는 학생 최대
    let result = 0
    // 최대로 빌려줄 수 있는 경우를 해봐야함
    for (const hasClothUser of reserve){
        let target = -1
        if (lost.indexOf(hasClothUser + 1) !== -1) target = hasClothUser + 1
        if (lost.indexOf(hasClothUser - 1) !== -1) target = hasClothUser - 1
        lost = lost.filter(item => item !== target)
        if (target !== -1) result += 1
    }
    return n - lost.length
}