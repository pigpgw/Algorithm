function solution(array, commands) {
    return commands.map(command => {
        const [startIdx,endIdx,targetIdx] = command
        return array.filter((item,idx) => idx >= startIdx - 1 && idx <= endIdx - 1).sort((a,b) => a - b)[targetIdx - 1]
    })
}