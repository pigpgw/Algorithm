let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input[0];
const inputList = input.slice(1);

const check = (parenthesesList) => {
    let result = 0;
    const list = parenthesesList.split('');
    for (let item of list) {
        if (item === '(') result += 1;
        else if (item === ')') result -= 1;
        if (result < 0) return 'NO';
    }
    return result === 0 ? 'YES' : 'NO';
};

inputList.forEach((list) => {
    console.log(check(list));
});
