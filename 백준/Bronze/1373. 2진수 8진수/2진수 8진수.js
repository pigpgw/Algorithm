const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number);
// console.log(input);

const decimer = [];
while (input.length > 0) {
    decimer.push(input.splice(-3));
}
let result = '';
for (const item of decimer) {
    let store = 0;
    for (let i = 0; i < item.length; i++) {
        store += 2 ** i * item[item.length - 1 - i];
    }
    result += store;
}
console.log(result.split('').reverse().join(''));
