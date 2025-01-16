let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input
    .slice(1)
    .map((info) => info.split(' '))
    .sort((a, b) => Number(a[0]) - Number(b[0]));

input.forEach((item) => {
    console.log(item.join(' '));
});
