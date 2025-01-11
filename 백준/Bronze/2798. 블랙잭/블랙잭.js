const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const cardList = input[1].split(' ').map(Number);

let result = 0;
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            const sum = cardList[i] + cardList[j] + cardList[k];
            if (M >= sum && result < sum) result = sum;
        }
    }
}

console.log(result);
