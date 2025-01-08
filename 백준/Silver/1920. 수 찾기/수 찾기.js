const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [_1, arr1, _2, arr2] = input;
const list1 = arr1
    .split(' ')
    .map((item) => Number(item))
    .sort((a, b) => a - b);
const list2 = arr2.split(' ').map((item) => Number(item));

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
};

list2.forEach((item) => {
    console.log(binarySearch(list1, item) !== -1 ? 1 : 0);
});
