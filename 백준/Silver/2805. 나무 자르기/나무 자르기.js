const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const treeList = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...treeList);
let result = 0;

while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    let totalCut = 0;

    for (let tree of treeList) {
        if (mid < tree) {
            totalCut += tree - mid;
        }
    }

    if (totalCut >= M) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result);
