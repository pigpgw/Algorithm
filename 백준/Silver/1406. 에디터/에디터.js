let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let left = input[0].split('');
let right = [];
let M = Number(input[1]);
let orderList = input.slice(2).map((list) => list.split(' '));

orderList.forEach((list) => {
    let order = list[0];
    let target = list[1] ? list[1] : null;
    if (order === 'L') {
        if (left.length > 0) right.push(left.pop());
    } else if (order === 'D') {
        if (right.length > 0) left.push(right.pop());
    } else if (order === 'B') {
        if (left.length > 0) left.pop();
    } else if (order === 'P') left.push(target);
});

console.log(left.concat(right.reverse()).join(''));
