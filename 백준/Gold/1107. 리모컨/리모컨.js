const fs = require('fs');
const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map(Number));

const N = input[0][0];
const M = input[1][0];
const M_list = input[2] || [];
let answer = Math.abs(N - 100);

const canPress = (num) => {
    return String(num)
        .split('')
        .every((d) => !M_list.includes(Number(d)));
};

// 큰 값 탐색
let bigger_value = N;

while (bigger_value <= 1000000) {
    if (canPress(bigger_value)) {
        answer = Math.min(answer, String(bigger_value).length + Math.abs(N - bigger_value));
        break;
    }
    bigger_value++;
}

// 작은 값 탐색
let smmaller_value = N;

while (smmaller_value >= 0) {
    if (canPress(smmaller_value)) {
        answer = Math.min(answer, String(smmaller_value).length + Math.abs(N - smmaller_value));
        break;
    }
    smmaller_value--;
}

console.log(answer);
