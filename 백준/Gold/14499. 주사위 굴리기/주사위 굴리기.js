const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let [N, M, x, y, K] = input[0].split(' ').map(Number);
let board = input.slice(1, input.length - 1).map((line) => line.split(' ').map(Number));
const order_list = input[input.length - 1].split(' ').map(Number);
let dice = [0, 0, 0, 0, 0, 0];

for (const order of order_list) {
    const newDice = [0, 0, 0, 0, 0, 0];
    switch (order) {
        case 1: // 동쪽
            let ny1 = y + 1;
            if (ny1 < 0 || ny1 >= M) continue;
            y = ny1;

            newDice[0] = dice[4]; // top = west
            newDice[1] = dice[5]; // bottom = east
            newDice[4] = dice[1]; // west = bottom
            newDice[5] = dice[0]; // east = top
            newDice[2] = dice[2];
            newDice[3] = dice[3];

            if (board[x][y] === 0) board[x][y] = newDice[1];
            else {
                newDice[1] = board[x][y];
                board[x][y] = 0;
            }

            console.log(newDice[0]);
            dice = newDice;
            break;

        case 2: // 서쪽
            let ny2 = y - 1;
            if (ny2 < 0 || ny2 >= M) continue;
            y = ny2;

            newDice[0] = dice[5]; // top = east
            newDice[1] = dice[4]; // bottom = west
            newDice[4] = dice[0]; // west = top
            newDice[5] = dice[1]; // east = bottom
            newDice[2] = dice[2];
            newDice[3] = dice[3];

            if (board[x][y] === 0) board[x][y] = newDice[1];
            else {
                newDice[1] = board[x][y];
                board[x][y] = 0;
            }

            console.log(newDice[0]);
            dice = newDice;
            break;

        case 3: // 북쪽
            let nx3 = x - 1;
            if (nx3 < 0 || nx3 >= N) continue;
            x = nx3;

            newDice[0] = dice[3]; // top = south
            newDice[1] = dice[2]; // bottom = north
            newDice[2] = dice[0]; // north = top
            newDice[3] = dice[1]; // south = bottom
            newDice[4] = dice[4];
            newDice[5] = dice[5];

            if (board[x][y] === 0) board[x][y] = newDice[1];
            else {
                newDice[1] = board[x][y];
                board[x][y] = 0;
            }

            console.log(newDice[0]);
            dice = newDice;
            break;

        case 4: // 남쪽
            let nx4 = x + 1;
            if (nx4 < 0 || nx4 >= N) continue;
            x = nx4;

            newDice[0] = dice[2]; // top = north
            newDice[1] = dice[3]; // bottom = south
            newDice[2] = dice[1]; // north = bottom
            newDice[3] = dice[0]; // south = top
            newDice[4] = dice[4];
            newDice[5] = dice[5];

            if (board[x][y] === 0) board[x][y] = newDice[1];
            else {
                newDice[1] = board[x][y];
                board[x][y] = 0;
            }

            console.log(newDice[0]);
            dice = newDice;
            break;
    }
}
