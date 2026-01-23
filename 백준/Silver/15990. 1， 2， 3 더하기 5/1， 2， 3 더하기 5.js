const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const T = Number(input[0]);
const nums = input.slice(1).map(Number);

const maxN = Math.max(...nums);
const dp = Array.from({ length: maxN + 1 }, () => [0, 0, 0, 0]); // dp[i][1..3]

dp[1][1] = 1;
dp[1][2] = 0;
dp[1][3] = 0;

if (maxN >= 2) {
    dp[2][1] = 0;
    dp[2][2] = 1;
    dp[2][3] = 0;
}

if (maxN >= 3) {
    dp[3][1] = 1; // 2+1
    dp[3][2] = 1; // 1+2
    dp[3][3] = 1; // 3
}

// dp 계산
for (let i = 4; i <= maxN; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % 1000000009;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % 1000000009;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % 1000000009;
}

for (let n of nums) {
    console.log((dp[n][1] + dp[n][2] + dp[n][3]) % 1000000009);
}
