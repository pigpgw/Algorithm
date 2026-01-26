const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number(input[0]);
const A_list = input[1].split(' ').map(Number);

const dp = Array(N + 1).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (A_list[i] > A_list[j]) {
            dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
    }
}

console.log(Math.max(...dp));
