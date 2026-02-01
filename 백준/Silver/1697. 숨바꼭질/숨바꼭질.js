const fs = require('fs')
const [N,K] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);


let result = Infinity

const queue = [[N,0]]
const visited = Array.from({length: 100001})
let head = 0


while (head < queue.length){
    const [x,depth] = queue[head++]
    visited[x] = true

    if (x === K){
        console.log(depth)
        return
    }

    for (const nx of [x-1,x + 1, 2 * x]){
        if (nx === K){
            console.log(depth + 1)
            return
        }
        if (nx < 0 || nx > 100000) continue
        if (visited[nx]) continue
        queue.push([nx,depth + 1])
        visited[nx] = true
    }
}

