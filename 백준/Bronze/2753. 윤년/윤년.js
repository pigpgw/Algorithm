const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim()
const year = Number(input)

const isLeapYAear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
console.log(isLeapYAear ? 1 : 0)
