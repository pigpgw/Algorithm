const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf8').trim());

const MOD = 1_000_000_000;

const dp = Array.from({ length: input + 1 }, () => Array(10).fill(0));

for (let j = 1; j <= 9; j++) dp[1][j] = 1;

for (let i = 2; i <= input; i++) {
    dp[i][0] = dp[i - 1][1] % MOD;
    for (let j = 1; j <= 8; j++) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
    dp[i][9] = dp[i - 1][8] % MOD;
}

console.log(dp[input].reduce((acc, cur) => (acc + cur) % MOD, 0));
