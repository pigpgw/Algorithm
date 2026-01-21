const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array(10 ** 6).fill(Infinity);

dp[1] = 0;

for (let i = 2; i < N + 1; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[N]);
