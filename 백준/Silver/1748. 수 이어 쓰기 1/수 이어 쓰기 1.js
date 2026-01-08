const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = 0;
const len = String(N).length;

// 네가 의도한 앞자리 공식
for (let i = 1; i < len; i++) {
    result += (10 ** i - 10 ** (i - 1)) * i;
}

// 네가 의도한 마지막 공식 (괄호만 수정)
result += (N - 10 ** (len - 1) + 1) * len;

console.log(result);
