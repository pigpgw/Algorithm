const fs = require('fs');
const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map(Number));

const A = Number(input[0]);
const A_list = input[1];

const dp = new Array(A).fill(1);

for (let i = 1; i < A; i++) {
    for (let j = 0; j < i; j++) {
        if (A_list[i] > A_list[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
