const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const T = input[0];
const input_list = input.slice(1);

const generate_prime_array = (n) => {
    const array = [];
    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            array.push(i);
        }
    }
    return array;
};

for (const n of input_list) {
    const sieve = new Array(n).fill(false);
    const prime_array = generate_prime_array(n);
    for (const prime of prime_array) {
        sieve[prime] = true;
    }

    let answer = null;
    for (let i = Math.floor(n / 2); i >= 2; i--) {
        if (sieve[i] && sieve[n - i]) {
            answer = [i, n - i];
            break;
        }
    }
    console.log(answer[0], answer[1]);
}
