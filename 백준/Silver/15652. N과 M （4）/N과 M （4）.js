let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(' ').map(Number);
let result = '';
const seq = [];

const solution = (count) => {
    if (count === m) {
        result += `${seq.join(' ')}\n`;
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (Math.max(...seq) > i) continue;
        seq.push(i);
        solution(count + 1);
        seq.pop();
    }
};

solution(0);
console.log(result);
