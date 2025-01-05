const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [inputCount, numberList] = input;

const isPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; Math.sqrt(x) >= i; i++) {
        if (x % i === 0) return false;
    }
    return true;
};

let result = 0;
numberList
    .split(' ')
    .map((item) => Number(item))
    .forEach((item) => {
        if (isPrime(item)) result += 1;
    });

console.log(result);
