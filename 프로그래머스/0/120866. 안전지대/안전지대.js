function solution(board) {
    //보드 만들어서 안전지역 위험지역 만들기
    const n = board.length
    const result = Array.from({length:n},() => Array(n).fill(true))
    
    const dx = [-1,   0,   1,  -1,   1,  -1,   0,   1];
    const dy = [-1,  -1,  -1,   0,   0,   1,   1,   1];
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (board[i][j] === 1){
                result[i][j] = false
                for (let k = 0; k < 8; k++){
                    const nx = j + dx[k]
                    const ny = i + dy[k]
                    if (ny < 0 || ny>= n || nx < 0 || nx >=n) continue
                    result[ny][nx] = false
                }
            }
        }
    }
    let count = 0
    for (let i = 0; i< n; i++){
        for (let j = 0; j< n; j++){
            if (result[i][j]) count++
        }
    }
    return count
}