function solution(array, commands) {
    const result = []
    for (const [i,j,k] of commands){
        let item_list = i === j ? array.slice(i-1,i) : array.slice(i - 1,j)
        item_list = item_list.sort((a,b) => a- b)
        console.log(item_list)
        result.push(item_list[k - 1])
    }
    return result
}