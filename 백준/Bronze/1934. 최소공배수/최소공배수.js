let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input[0];
const numberList = input.slice(1);
const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

numberList.forEach((list) => {
    const [a, b] = list.split(' ').map(Number);
    const g = gcd(a, b);
    const lcm = (a * b) / g; // 최소공배수 계산
    console.log(lcm);
});
