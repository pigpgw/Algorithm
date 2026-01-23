// measure.js
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// 입력: 첫 줄 N, 둘째 줄 N개의 가격
const N = Number(input[0]);
const cost_list = [0, ...input[1].split(' ').map(Number)];
const dp = Array(N + 1).fill(Infinity);
dp[0] = 0;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j] + cost_list[j]);
    }
}

console.log(dp[N]);
