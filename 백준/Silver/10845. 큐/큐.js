const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);
const order_list = input.slice(1);

// 선입 선출 fifo 자료구조
// 배열 끝에 요소를 추가하면 push 마지막에 추가하려면 unshfit
// 배열 맨 앞 값 제거 shift 배열 맨뒤 Pop
const queue = [];

for (const item of order_list) {
    const l = item.split(' ');
    let order;
    let target;
    (l.length === 1 ? (order = l[0]) : (order = l[0]), (target = l[1]));
    switch (order) {
        case 'push':
            queue.push(target);
            break;
        case 'pop':
            console.log(queue.length >= 1 ? queue.shift() : -1);
            break;
        case 'size':
            console.log(queue.length);
            break;
        case 'empty':
            console.log(queue.length === 0 ? 1 : 0);
            break;
        case 'front':
            console.log(queue.length >= 1 ? queue[0] : -1);
            break;
        case 'back':
            console.log(queue.length >= 1 ? queue[queue.length - 1] : -1);
            break;
        default:
            break;
    }
}
