const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const T = input[0];
const input_list = input.slice(1);
const isDecimal = (number) => {
    for (let i = 2; i * i <= Math.floor(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

for (const num of input_list) {
    const thieve = [];
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (isDecimal(i) && isDecimal(num - i)) {
            thieve.push([i, num - i]);
        }
    }
    console.log(
        thieve
            .sort((a, b) => a[0] - b[0])
            [thieve.length - 1].map(Number)
            .join(' ')
    );
}
