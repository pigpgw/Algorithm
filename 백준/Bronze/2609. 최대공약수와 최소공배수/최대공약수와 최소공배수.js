const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const N = input[0];
const M = input[1];
let the_greatest_common_dominator = 1;
for (let i = 2; i <= (N > M ? M : N); i++) {
    if (N % i == 0 && M % i == 0) {
        the_greatest_common_dominator = i;
    }
}

console.log(the_greatest_common_dominator);
let i = 0;
while (true) {
    i++;
    let the_list_common_multiple = (N > M ? M : N) * i;
    if (the_list_common_multiple % N == 0 && the_list_common_multiple % M == 0) {
        console.log(the_list_common_multiple);
        break;
    }
}
