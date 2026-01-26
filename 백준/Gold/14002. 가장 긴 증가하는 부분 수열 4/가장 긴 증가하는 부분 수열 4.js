const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number(input[0]);
const A_list = input[1].split(' ').map(Number);

const dp = Array(N).fill(1);
const prev = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (A_list[i] > A_list[j] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
            prev[i] = j;
        }
    }
}

const maxLength = Math.max(...dp);
let idx = dp.indexOf(maxLength);

const lis = [];
while (idx !== -1) {
    lis.push(A_list[idx]);
    idx = prev[idx];
}
lis.reverse();

console.log(maxLength);
console.log(lis.join(' '));
