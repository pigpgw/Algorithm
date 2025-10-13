const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let X = Number(input);

const dp = new Array(X + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= X; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[X]);
