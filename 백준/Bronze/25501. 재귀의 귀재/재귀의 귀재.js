let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift()
const inputList = input


inputList.forEach(list => {
    let fncCount = 0;
    const recursion = (s, l,  r) => {
        fncCount += 1;
        if(l >= r) return 1;
        else if(s[l] != s[r]) return 0;
        else return recursion(s, l+1, r-1);
    }
    
    const isPalindrome = (s) => {
        return recursion(s, 0, s.length-1);
    }
    console.log(isPalindrome(list),fncCount)
})