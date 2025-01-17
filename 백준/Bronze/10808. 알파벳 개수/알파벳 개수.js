let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let str = '';
for (let i = 97; i <= 122; i++) {
    str += String.fromCharCode(i);
}
let alphabetList = str.split('');
const result = {};

alphabetList.forEach((alphabet) => {
    result[alphabet] = 0;
});

input.split('').forEach((alphabet) => {
    result[alphabet] += 1;
});

console.log(Object.values(result).join(' '));
