const fs = require('fs');
let [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
