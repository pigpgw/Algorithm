let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number)

const recursion = (stringlist) => {
    if (stringlist.length <= 1) return stringlist;
    else return recursion(stringlist.slice(0,(stringlist.length/3))) + " ".repeat(stringlist.length/3) + recursion(stringlist.slice(2 * stringlist.length/3))
}

input.forEach(number => {
    let list = "-".repeat(Math.pow(3,number))
    console.log(recursion(list))    
})


