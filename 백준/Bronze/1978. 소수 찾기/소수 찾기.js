const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [inputCount, numberList] = input;

let count = 0;
numberList
    .split(' ')
    .map((item) => Number(item))
    .forEach((number) => {
        let judgeDecimal = 0;
        for (let i = 0; i <= number; i++) {
            if (number % i === 0) judgeDecimal += 1;
        }
        if (judgeDecimal === 2) count += 1;
    });

console.log(count);
