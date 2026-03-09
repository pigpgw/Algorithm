function solution(answers) {
    const user1 = [1,2,3,4,5]
    const user2 = [2,1,2,3,2,4,2,5]
    const user3 = [3,3,1,1,2,2,4,4,5,5]
    let count1 = 0
    let count2 = 0
    let count3 = 0
    for (let i = 0; i < answers.length; i++){
        const rS  = answers[i]
        const u1S = user1[i % user1.length]
        const u2S = user2[i % user2.length]
        const u3S = user3[i % user3.length]
        if (u1S === rS) count1++
        if (u2S === rS) count2++
        if (u3S === rS) count3++
    }
    console.log(count1,count2,count3)
    const maxCount = Math.max(count1,count2,count3)
    const result = []
    if (count1 === maxCount) result.push(1)
    if (count2 === maxCount) result.push(2)
    if (count3 === maxCount) result.push(3)
    return result
}