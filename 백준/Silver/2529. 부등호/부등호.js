const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const k = Number(input[0]);
const 부등 = input[1].split(' ');

const 방문배열 = Array.from({ length: 10 }, () => false);

let 최소값 = null;
let 최대값 = null;

const backtrack = (arr) => {
    if (arr.length === k + 1) {
        const value = arr.join('');
        if (최소값 === null || 최소값 > value) 최소값 = value;
        if (최대값 === null || 최대값 < value) 최대값 = value;
        return;
    }
    for (let i = 0; i <= 9; i++) {
        const depth = arr.length;
        if (depth >= 1) {
            const 부등호 = 부등[depth - 1];
            const 이전 = arr[depth - 1];
            if (부등호 === '>' && 이전 <= i) continue;
            if (부등호 === '<' && 이전 >= i) continue;
        }
        if (방문배열[i]) continue;
        방문배열[i] = true;
        arr.push(i);
        backtrack(arr);
        arr.pop();
        방문배열[i] = false;
    }
};

backtrack([]);

console.log(최대값);
console.log(최소값);
