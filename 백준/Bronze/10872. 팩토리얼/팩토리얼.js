const input = require('fs').readFileSync(0, 'utf-8').trim();
const factorial = (x) => {
    if (x <= 1) return 1;
    else return (x *= factorial(x - 1));
};

console.log(factorial(Number(input)));
