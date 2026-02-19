const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")
const T = input[0].split(" ").map(Number)
const case_list = input.slice(1).map(item => item.split(""))
for (const list of case_list) {
    let score = 0
    let acc = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] === "O") {
            score += (acc + 1)
            acc += 1
        } else {
            acc = 0
        }
    }
    console.log(score)
}