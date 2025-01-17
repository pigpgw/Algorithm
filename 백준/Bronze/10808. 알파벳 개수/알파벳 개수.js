let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let str = '';
for (let i = 97; i <= 122; i++) {
    str += String.fromCharCode(i);
}
let alphabetList = str.split('');
const result = {};
input = input.split('');

alphabetList.forEach((alphabet) => {
    result[alphabet] = 0;
});

input.forEach((alphabet) => {
    if (input.indexOf(alphabet) !== -1) {
        result[alphabet] = (result[alphabet] || 0) + 1;
    } else {
        result[alphabet] = 0;
    }
});
console.log(Object.values(result).join(' '));
