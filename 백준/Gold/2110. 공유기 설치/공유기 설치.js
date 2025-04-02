const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, C] = input[0].split(' ');
const list = input.slice(1).map(Number);

list.sort((a, b) => a - b);
let lt = 1;
let rt = list[list.length - 1];
let answer = 0;

while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    // mid를 기준으로 체크 인접 거리 최소 n개 이상 설치 가능하면 됨
    if (C <= count(list, mid)) {
        answer = mid;
        lt = mid + 1;
    } else {
        rt = mid - 1;
    }
}

function count(arr, dist) {
    let cnt = 1,
        el = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - el >= dist) {
            cnt++;
            el = arr[i];
        }
    }
    return cnt;
}
console.log(answer);
