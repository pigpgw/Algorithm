const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const stringList = input.slice(1);
stringList.map((item) => {
    const [multipleNumber, string] = item.split(' ');
    const repeatedString = string
        .split('')
        .map((char) => char.repeat(multipleNumber))
        .join('');
    console.log(repeatedString);
});
