const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const Color = {
    black: {
        value: 0,
        double: 1,
    },
    brown: {
        value: 1,
        double: 10,
    },
    red: {
        value: 2,
        double: 100,
    },
    orange: {
        value: 3,
        double: 1000,
    },
    yellow: {
        value: 4,
        double: 10000,
    },
    green: {
        value: 5,
        double: 100000,
    },
    blue: {
        value: 6,
        double: 1000000,
    },
    violet: {
        value: 7,
        double: 10000000,
    },
    grey: {
        value: 8,
        double: 100000000,
    },
    white: {
        value: 9,
        double: 1000000000,
    },
};

let result = '';
for (let i = 0; i < input.length; i++) {
    if (i !== 2) {
        result += String(Color[input[i]].value);
    } else {
        result = Color[input[i]].double * Number(result);
    }
}

console.log(result);
