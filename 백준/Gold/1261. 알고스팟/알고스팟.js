const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [M, N] = input[0].split(' ').map(Number); // M=가로, N=세로
const board = input.slice(1).map(line => line.split('').map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(Infinity));
visited[0][0] = 0;

const deque = [[0,0]];
const dx = [-1,0,1,0];
const dy = [0,-1,0,1];

while(deque.length){
    const [y,x] = deque.shift();
    const curr = visited[y][x];

    for(let i=0;i<4;i++){
        const ny = y + dy[i];
        const nx = x + dx[i];
        if(ny<0||ny>=N||nx<0||nx>=M) continue;

        const next = curr + board[ny][nx];
        if(visited[ny][nx] > next){
            visited[ny][nx] = next;
            if(board[ny][nx] === 0) deque.unshift([ny,nx]); // 비용 0 → 앞
            else deque.push([ny,nx]);                      // 비용 1 → 뒤
        }
    }
}

console.log(visited[N-1][M-1]);
