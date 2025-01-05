let max = 0;
let location = 0;
const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .map((item) => Number(item));

input.map((item, i) => {
    if (max < item) {
        max = item;
        location = i + 1;
    }
});
console.log(max);
console.log(location);