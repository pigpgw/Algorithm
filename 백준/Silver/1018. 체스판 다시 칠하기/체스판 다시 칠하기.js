const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const Chess = input.slice(1).map((list) => list.split(''));
let answer = [];

const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];

//검은색이 먼저 시작하는 판
const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

const checkWhite = (x, y) => {
    let result = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (Chess[i + x][j + y] !== white[i][j]) result += 1;
        }
    }
    return result;
};

const checkBlack = (x, y) => {
    let result = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (Chess[i + x][j + y] !== black[i][j]) result += 1;
        }
    }
    return result;
};

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        answer.push(checkWhite(i, j));
        answer.push(checkBlack(i, j));
    }
}

console.log(Math.min(...answer));
