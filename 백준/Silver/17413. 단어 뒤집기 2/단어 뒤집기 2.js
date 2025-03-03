const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let result = '';
let word = '';
let isTag = false;
let count = 0;

for (const str of input) {
    if (str === '<') {
        result += word.split('').reverse().join('') + str;
        isTag = true;
        word = '';
    } else if (str === '>') {
        result += word + str;
        isTag = false;
        word = '';
    } else if (str === ' ') {
        result += isTag ? word + ' ' : word.split('').reverse().join('') + ' ';
        word = '';
    } else {
        word += str;
    }
}

result += word.split('').reverse().join('');

console.log(result);
