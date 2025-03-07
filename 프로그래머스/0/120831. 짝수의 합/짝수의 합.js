function solution(n) {
    return Array(Math.floor(n/2)).fill().map((_,i) => (i + 1) * 2).reduce((acc,cur) => acc + cur,0)
}