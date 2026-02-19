const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n")
const C = input[0].split(" ").map(Number)
const case_list = input.slice(1).map(item => item.split(" ").map(Number))

for (const list of case_list) {
    const N = list[0]
    const score_list = list.slice(1)
    const average = score_list.reduce((acc, cur) => acc + cur, 0) / N
    console.log(`${((score_list.filter(item => item > average).length / N) * 100).toFixed(3)}%`)
}