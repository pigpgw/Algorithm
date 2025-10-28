const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const MOD = 1000000000;
const dp = Array.from({ length: input + 1 }, () => new Array(10).fill(0));

// 길이가 1일 때 (0으로 시작할 수 없음)
for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

// 점화식 적용
for (let i = 2; i <= input; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1] % MOD;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][8] % MOD;
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
}

// 마지막 줄 합산
const result = dp[input].reduce((acc, cur) => (acc + cur) % MOD, 0);
console.log(result);
