const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((item) => item.split(' ').map(Number));

const pattern_list = [
    // ---- I (2)
    [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
    ],

    // ---- O (1)
    [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ],

    // ---- L / J (8)
    [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1],
        [2, 0],
    ],
    [
        [0, 0],
        [0, 1],
        [1, 0],
        [2, 0],
    ],
    [
        [0, 0],
        [0, 1],
        [1, 1],
        [2, 1],
    ],
    [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
    ],
    [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
    ],
    [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
    ],
    [
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
    ],

    // ---- S / Z (4)
    [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
    ],
    [
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 0],
    ],
    [
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
    ],
    [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
    ],

    // ---- T (4)
    [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 1],
    ],
    [
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 1],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2],
        [0, 1],
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, 1],
    ],
];

let result = -1;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        for (const pattern of pattern_list) {
            let total = 0;
            let okay = true;
            for (const block of pattern) {
                const [dy, dx] = block;
                const ny = i + dy;
                const nx = j + dx;

                if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
                    okay = false;
                    break;
                }
                total += board[ny][nx];
            }
            if (!okay) continue;
            result = Math.max(total, result);
        }
    }
}

console.log(result);
