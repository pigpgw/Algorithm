const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = new Array(input + 1).fill(0);
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= input; i++) {
    dp[i] = Math.floor(dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(Math.floor(dp[input]) % 10007);
