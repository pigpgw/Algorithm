const fs = require('fs');
const [x, y, w, h] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const value = [Math.abs(w - x), Math.abs(0 - x), Math.abs(h - y), Math.abs(0 - y)]
console.log(Math.min(...value))