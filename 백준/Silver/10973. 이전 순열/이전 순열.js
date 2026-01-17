const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const target = input[1].split(' ').map(Number);
const permutation_array = Array.from({ length: N }, (_, idx) => idx + 1);
const first_permutation_number = permutation_array.join(' ');
const target_number = target.join(' ');

let index = target.length - 1;
let store = [];
while (index > 0) {
    store.push(target[index]);
    const nextIndex = index - 1;
    const currentValue = target[index];
    const nextValue = target[nextIndex];

    if (nextValue > currentValue) {
        // 🔥 핵심 수정
        const smaller = store.filter((v) => v < nextValue);
        const minBigger = Math.max(...smaller);

        // 오른쪽 구간에서만 인덱스 찾기
        const swapIndex = target.lastIndexOf(minBigger);

        [target[nextIndex], target[swapIndex]] = [target[swapIndex], target[nextIndex]];
        // 오른쪽 정렬
        const right = target.slice(nextIndex + 1).sort((a, b) => b - a);
        const result = [...target.slice(0, nextIndex + 1), ...right];
        console.log(result.join(' '));
        return;
    }

    index--;
}

console.log(-1);
