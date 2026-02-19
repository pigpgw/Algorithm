const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(" ")
const [A, B] = input
let result = 0
const RA = Number(A.split("").reverse().join(""))
const RB = Number(B.split("").reverse().join(""))
console.log(Math.max(RA, RB))