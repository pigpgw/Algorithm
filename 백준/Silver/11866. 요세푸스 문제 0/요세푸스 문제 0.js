const fs = require('fs');
const { resourceUsage } = require('process');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [N, K] = input;
const personList = Array.from({ length: N }, (_, i) => i + 1);
const result = [];
count = 1;
while (personList.length >= 1) {
    if (count !== K) {
        personList.push(personList.shift());
        count += 1;
    } else {
        result.push(personList.shift());
        count = 1;
    }
}

console.log(`<${result.join(', ')}>`);
