let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 최대한 적게 배달하rp 5로 나눈 나머지를 를 3으로 나누면 안됨
// 최대 5kg 나눌수 있는 수에서 점점 줄이고 3으로 나눠지는지

let number = Number(input);

let answer = 0;
while (number > 0) {
    if (number % 5 === 0) {
        answer += number / 5;
        number = 0;
        break;
    } else {
        number -= 3;
        answer += 1;
    }
}

console.log(number === 0 ? answer : -1);
