const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let [N, M, R] = input[0].split(' ').map(Number);
let board = input.slice(1, input.length - 1).map((line) => line.split(' ').map(Number));
const order_list = input[input.length - 1].split(' ').map(Number);

const solution = (order) => {
    const xHalf = M / 2;
    const yHalf = N / 2;
    let newBoard;
    switch (order) {
        case 1:
            newBoard = Array.from({ length: N }, () => new Array(M).fill(-1));
            for (let i = 0; i < yHalf; i++) {
                for (let j = 0; j < M; j++) {
                    [newBoard[i][j], newBoard[N - i - 1][j]] = [board[N - i - 1][j], board[i][j]];
                }
            }
            board = newBoard;
            break;
        case 2:
            newBoard = Array.from({ length: N }, () => new Array(M).fill(-1));
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < xHalf; j++) {
                    [newBoard[i][j], newBoard[i][M - 1 - j]] = [board[i][M - 1 - j], board[i][j]];
                }
            }
            board = newBoard;

            break;
        case 3:
            newBoard = Array.from({ length: M }, () => new Array(N).fill(-1));
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < M; j++) {
                    newBoard[j][N - 1 - i] = board[i][j];
                }
            }
            [M, N] = [N, M];
            board = newBoard;
            break;
        case 4:
            newBoard = Array.from({ length: M }, () => new Array(N).fill(-1));
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < M; j++) {
                    newBoard[M - 1 - j][i] = board[i][j];
                }
            }
            [M, N] = [N, M];
            board = newBoard;
            break;
        case 5:
            newBoard = Array.from({ length: N }, () => new Array(M).fill(-1));
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < M; j++) {
                    if (i < yHalf && j < xHalf) {
                        newBoard[i][j + xHalf] = board[i][j];
                    } else if (i < yHalf && j >= xHalf) {
                        newBoard[i + yHalf][j] = board[i][j];
                    } else if (i >= yHalf && j >= xHalf) {
                        newBoard[i][j - xHalf] = board[i][j];
                    } else {
                        newBoard[i - yHalf][j] = board[i][j];
                    }
                }
            }
            board = newBoard;
            break;
        case 6:
            newBoard = Array.from({ length: N }, () => new Array(M).fill(-1));
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < M; j++) {
                    if (i < yHalf && j < xHalf) {
                        newBoard[i + yHalf][j] = board[i][j];
                    } else if (i >= yHalf && j < xHalf) {
                        newBoard[i][j + xHalf] = board[i][j];
                    } else if (i >= yHalf && j >= xHalf) {
                        newBoard[i - yHalf][j] = board[i][j];
                    } else {
                        newBoard[i][j - xHalf] = board[i][j];
                    }
                }
            }
            board = newBoard;
            break;
    }
};

for (const order of order_list) {
    solution(order);
}

for (let i = 0; i < N; i++) {
    console.log(board[i].join(' '));
}
