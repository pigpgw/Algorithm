const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let result = [];

for (let i = 0; i < input.length; i++) {
    result.push(input.slice(i));
}

result = result.sort();
for (const list of result) {
    console.log(list);
}
