const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').trim().split("\n")
const n = Number(input[0])
const number_list = input[1].split(" ").map(Number)
const dp = [...number_list]
for (let i = 1; i < n; i++) {
    dp[i] = Math.max(number_list[i], dp[i - 1] + number_list[i])
}

console.log(Math.max(...dp))