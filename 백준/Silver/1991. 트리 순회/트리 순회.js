const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0])
const node_list = input.slice(1).map(item => item.split(" "))
const graph = {}
for (const [root, leftNode, rightNode] of node_list) {
    if (!graph[root]) graph[root] = []
    graph[root].push(leftNode)
    graph[root].push(rightNode)
}

const prevResult = []

const prevCirculation = (curr) => {
    if (curr === '.') return
    const [leftNode, rightNode] = graph[curr]
    prevResult.push(curr)
    if (leftNode !== ".") prevCirculation(leftNode)
    if (rightNode !== ".") prevCirculation(rightNode)
}

prevCirculation("A")
console.log(prevResult.join(""))

const middleResult = []

const middleCirculation = (curr) => {
    if (curr === '.') return
    const [leftNode, rightNode] = graph[curr]
    if (leftNode !== ".") middleCirculation(leftNode)
    middleResult.push(curr)
    if (rightNode !== ".") middleCirculation(rightNode)
}

middleCirculation("A")

console.log(middleResult.join(""))
const backResult = []

const backCirculation = (curr) => {
    if (curr === '.') return
    const [leftNode, rightNode] = graph[curr]
    if (leftNode !== ".") backCirculation(leftNode)
    if (rightNode !== ".") backCirculation(rightNode)
    backResult.push(curr)
}

backCirculation("A")
console.log(backResult.join(""))