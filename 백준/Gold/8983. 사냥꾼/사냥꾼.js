const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N, L] = input[0].split(' ').map(Number);
const sadae_list = input[1].split(' ').map(Number);
const animal_list = input.slice(2).map((position) => position.split(' ').map(Number));
let result = 0;

for (const [x, y] of animal_list) {
    for (const sadae of sadae_list) {
        if (Math.abs(sadae - x) + y <= L) {
            result += 1; // ✔️ 잡히면 카운트
            break; // 하나의 사대라도 잡을 수 있으면 종료
        }
    }
}
console.log(result);
