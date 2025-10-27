const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const card_list = input[1].split(' ').map(Number);
card_list.unshift(0);

const dp = new Array(N + 1).fill(99999);
dp[0] = 0;
dp[1] = card_list[1];
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j] + card_list[j]);
    }
}

console.log(dp[N]);
