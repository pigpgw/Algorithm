const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")

const [H, W, X, Y] = input[0].split(" ").map(Number)
const board = input.slice(1).map(item => item.split(" ").map(Number))
const result = Array.from({ length: H }, () => Array(W).fill(0))
for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (i < X || j < Y) {
            result[i][j] = board[i][j]
        } else {
            result[i][j] = board[i][j] - result[i - X][j - Y]
        }
    }
}
console.log(result.map(row => row.join(' ')).join('\n'))