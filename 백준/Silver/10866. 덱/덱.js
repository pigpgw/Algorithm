const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];
const order_list = input.slice(1);

const dec = [];

const result = [];
for (const order_content of order_list) {
    const [order, num] = order_content.split(' ');
    switch (order) {
        case 'push_front':
            dec.unshift(num);
            break;
        case 'push_back':
            dec.push(num);
            break;
        case 'pop_front':
            if (dec.length > 0) result.push(dec.shift());
            else result.push(-1);
            break;
        case 'pop_back':
            if (dec.length > 0) result.push(dec.pop());
            else result.push(-1);
            break;
        case 'size':
            result.push(dec.length);
            break;
        case 'empty':
            result.push(dec.length === 0 ? 1 : 0);
            break;
        case 'front':
            result.push(dec.length === 0 ? -1 : dec[0]);
            break;
        case 'back':
            result.push(dec.length === 0 ? -1 : dec.at(-1));
            break;
    }
}

console.log(result.join('\n'));
