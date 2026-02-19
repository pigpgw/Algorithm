const fs = require('fs');
const [A, B, V] = fs.readFileSync(0, 'utf8').trim().split(" ").map(Number)

// A올라가
// B밤에 내려와
// 다 올라가는데는?

if (V <= A) {
    console.log(1)
} else {
    console.log(Math.ceil((V - A) / (A - B)) + 1)
}