const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const stringArr = [...new Set(input.slice(1))];
console.log(
    stringArr
        .sort((a, b) => {
            if (a.length === b.length) {
                return a.localeCompare(b);
            }
            return a.length - b.length;
        })
        .join('\n')
);
