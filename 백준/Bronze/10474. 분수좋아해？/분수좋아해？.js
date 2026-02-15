const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
for (const item of input) {
    const [A, B] = item.split(' ').map(Number);
    if (A === 0 && B === 0) return;
    const share = Math.floor(A / B);
    const mod = A % B;
    console.log(`${share} ${mod} / ${B}`);
}
