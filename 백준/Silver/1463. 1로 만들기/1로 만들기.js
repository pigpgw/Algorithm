const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const dp = new Array(N + 1).fill(9999);
dp[1] = 0;
dp[2] = 1;
for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
}
console.log(dp[N]);
