const fs = require('fs');
let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map(Number));

const N = input[0][0];
const n_list = input[1];

const calcaulateMinority = (number) => {
    if (number === 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
let result = 0;
for (const num of n_list) {
    if (calcaulateMinority(num)) result += 1;
}
console.log(result);
