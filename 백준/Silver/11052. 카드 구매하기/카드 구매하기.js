const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const cost_list = [0, ...input[1].split(' ').map(Number)];
const dp = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    dp[i] = cost_list[i];
    for (let j = 1; j <= Math.floor(i / 2); j++) {
        const candidate = dp[i - j] + cost_list[j];
        if (candidate > dp[i]) dp[i] = candidate;
    }
}

console.log(dp[N]);
