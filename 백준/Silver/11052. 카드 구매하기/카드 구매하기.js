const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const cost_list = [0, ...input[1].split(' ').map(Number)];
const dp = Array(N + 1).fill(0);

dp[1] = cost_list[0];
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i - j] + cost_list[j], dp[i]);
    }
}

console.log(dp[N]);
