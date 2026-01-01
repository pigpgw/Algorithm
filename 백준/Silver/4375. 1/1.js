const fs = require('fs');
let n_list = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
for (const n of n_list) {
    let i = 1;
    let target = 1;
    while (target % n !== 0) {
        i += 1;
        target = (target * 10 + 1) % n;
    }
    console.log(i);
}
