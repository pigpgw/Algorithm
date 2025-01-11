const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();
// 주어진 값 - 자릿수 * 9 가 최소값 거기서부터 비교해서 값과 같다면 생성자

const max = input.length * 9;
let result = [];
for (let i = input - max; input >= i; i++) {
    let value = String(i).split('').map(Number);
    const x = value.reduce((acc,cur) => acc + cur,0)
    if (i + x === parseInt(input)) result.push(i);
}

const l = Math.min(...result);
if (result.length !== 0) console.log(l)
else console.log(0)