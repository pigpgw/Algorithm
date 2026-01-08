const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const input_list = input.slice(1);

const gcd = (num1, num2) => {
    while (num2 !== 0) {
        const r = num1 % num2;
        num1 = num2;
        num2 = r;
    }
    return num1;
};

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

for (const item of input_list) {
    let find = false;
    const [M, N, x, y] = item.split(' ').map(Number);
    const limit = lcm(M, N);
    let result = x;
    for (let i = x; i <= limit; i += M) {
        if ((i - y) % N === 0) {
            find = true;
            break;
        }
        result += M;
    }
    console.log(find ? result : -1);
}
