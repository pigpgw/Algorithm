const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const board = input.slice(1).map((item) => item.split(''));

let max_result = 1;

function check() {
    // 행 검사
    for (let i = 0; i < N; i++) {
        let count = 1;
        for (let j = 1; j < N; j++) {
            if (board[i][j] === board[i][j - 1]) {
                count++;
            } else {
                max_result = Math.max(max_result, count);
                count = 1;
            }
        }
        max_result = Math.max(max_result, count);
    }

    // 열 검사
    for (let j = 0; j < N; j++) {
        let count = 1;
        for (let i = 1; i < N; i++) {
            if (board[i][j] === board[i - 1][j]) {
                count++;
            } else {
                max_result = Math.max(max_result, count);
                count = 1;
            }
        }
        max_result = Math.max(max_result, count);
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        // 오른쪽 swap
        if (j + 1 < N && board[i][j] !== board[i][j + 1]) {
            [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
            check();
            [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        }

        // 아래 swap
        if (i + 1 < N && board[i][j] !== board[i + 1][j]) {
            [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
            check();
            [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        }
    }
}

console.log(max_result);
