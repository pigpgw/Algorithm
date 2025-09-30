const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const result = [];
for (let i = 0; input.length > i; i++) {
    result.push(input.slice(i));
}
for (const item of result.sort()) {
    console.log(item);
}
