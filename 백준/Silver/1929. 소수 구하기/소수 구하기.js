const fs = require('fs');
let [M, N] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const calcaulateMinority = (number) => {
    if (number === 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) if (number % i === 0) return false;
    return true;
};

for (let i = M; i <= N; i++) if (calcaulateMinority(i)) console.log(i);
