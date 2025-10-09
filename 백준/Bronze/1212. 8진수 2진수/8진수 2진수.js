const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let result = '';

const transferBinary = (n) => {
    let store = '';
    let power = 1;
    while (power * 2 <= n) {
        power *= 2;
    }
    while (power >= 1) {
        if (n >= power) {
            store += '1';
            n -= power;
        } else {
            store += '0';
        }
        power /= 2;
    }
    return store;
};
for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    let binary = transferBinary(num);
    if (i === 0) {
        binary = String(Number(binary));
    } else {
        binary = binary.padStart(3, '0');
    }
    result += binary;
}
console.log(result);

