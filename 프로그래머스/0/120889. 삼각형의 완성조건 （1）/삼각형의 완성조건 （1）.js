function solution(sides) {
    return (([a,b,c] = sides.sort((a,b) => a-b)),c < a + b ? 1 : 2)
}
