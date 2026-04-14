const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split("\n")
const T = Number(input[0])
const test_case = input.slice(1).map(Number)
const dp = new Array(101).fill(-1)
dp[1] = 1
dp[2] = 1
dp[3] = 1
dp[4] = 2
dp[5] = 2
for (let i = 6; i < 101; i++) {
    dp[i] = dp[i - 1] + dp[i - 5]
}

for (const test of test_case) {
    console.log(dp[test])
}