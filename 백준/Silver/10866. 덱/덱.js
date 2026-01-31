const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);
const order_list = input.slice(1);

// 선입 선출 fifo 자료구조
// 배열 끝에 요소를 추가하면 push 처음에 추가하려면 unshfit
// 배열 맨 앞 값 제거 shift 배열 맨뒤 Pop
const deck = [];

for (const item of order_list) {
    const l = item.split(' ');
    let order = l[0];
    let target = l.length === 2 ? l[1] : undefined;
    switch (order) {
        case 'push_front':
            deck.unshift(target);
            break;
        case 'push_back':
            deck.push(target);
            break;
        case 'pop_front':
            console.log(deck.length >= 1 ? deck.shift() : -1);
            break;
        case 'pop_back':
            console.log(deck.length >= 1 ? deck.pop() : -1);
            break;
        case 'size':
            console.log(deck.length);
            break;
        case 'empty':
            console.log(deck.length === 0 ? 1 : 0);
            break;
        case 'front':
            console.log(deck.length >= 1 ? deck[0] : -1);
            break;
        case 'back':
            console.log(deck.length >= 1 ? deck[deck.length - 1] : -1);
            break;
        default:
            break;
    }
}
