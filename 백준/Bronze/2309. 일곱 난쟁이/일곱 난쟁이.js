const input = require('fs')
    .readFileSync('/dev/stdin', 'utf-8')
    .trim()
    .split('\n')
    .map((item) => Number(item));

const totalHeight = input
    .map((item) => Number(item))
    .reduce((acc, cur) => {
        return acc + cur;
    }, 0);

const findOddKids = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
};

const [kids1, kids2] = findOddKids(input, totalHeight - 100);
console.log(
    input
        .filter((height) => height !== kids1 && height !== kids2)
        .sort((a, b) => a - b)
        .join('\n')
);
