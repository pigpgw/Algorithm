const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array(N + 1).fill(Infinity);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N]);
