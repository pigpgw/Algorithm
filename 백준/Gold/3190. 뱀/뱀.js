const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0])
const K = Number(input[1])
const apple_location_list = input.slice(2, K + 2).map(item => item.split(" ").map(Number))
const L = Number(input[K + 2])
const direction_list = input.slice(K + 3, K + 3 + L).map(item => item.split(" "))

const board = Array.from({ length: N }, () => new Array(N).fill(0))

for (const [y, x] of apple_location_list) {
    board[y - 1][x - 1] = 1
}

const turns = new Map()
for (const [targetTime, nextDirection] of direction_list) {
    turns.set(Number(targetTime), nextDirection);
}

// 오른쪽 0 아래 1 왼쪽 2 위 3
let dir = 0
let time = 0

const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1]

const body = [[0, 0]]


while (true) {
    time += 1;

    const [hy, hx] = body[body.length - 1];
    const ny = hy + dy[dir];
    const nx = hx + dx[dir];

    // 벽
    if (ny < 0 || ny >= N || nx < 0 || nx >= N) {
        console.log(time);
        break;
    }

    const hasApple = board[ny][nx] === 1

    if (body.some(([y, x]) => y === ny && x === nx)) {
        console.log(time);
        break;
    }

    if (!hasApple) body.shift()

    body.push([ny, nx]);

    if (hasApple) board[ny][nx] = 0;

    if (turns.has(time)) {
        const rot = turns.get(time);
        dir = rot === "L" ? (dir + 3) % 4 : (dir + 1) % 4;
    }
}