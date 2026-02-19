const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n").map(Number)
const A = input[0]
const B = input[1]
const C = input[2]
const result = A * B * C
const arr = String(result)
const store = {}
for (let i = 0; i <= 9; i++) {
    store[i] = 0
}
for (let i = 0; i <= 9; i++) {
    store[arr[i]] += 1
}
for (let i = 0; i <= 9; i++) {
    console.log(store[i])
}
