const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim()

let result = 0

for (let i = 1; i <= input; i++) {
    const arr = String(i).split("").map(Number);
    if (arr.length <= 2) result += 1
    else {
        const gap = arr[1] - arr[0]
        let isHan = true
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i] !== gap) {
                isHan = false
                break
            }
        }
        if (isHan) result += 1
    }
}

console.log(result)