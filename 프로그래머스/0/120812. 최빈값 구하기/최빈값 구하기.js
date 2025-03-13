function solution(array) {
    const maxNum = Math.max(...array)
    const list = Array(maxNum + 1).fill(0)
    array.forEach(item => {
        list[item] += 1
    })
    const maxCount = Math.max(...list)
    const result = []
    list.forEach((item,idx) => {
        if(item === maxCount){
            result.push(idx)
        }
    })
    return result.length === 1 ? result[0] : -1
}