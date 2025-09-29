const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('');
const result = input.map((item) => {
    const targetAsciiNumber = item.charCodeAt();
    if (targetAsciiNumber >= 65 && targetAsciiNumber <= 90) {
        if (targetAsciiNumber > 77) {
            return String.fromCharCode(targetAsciiNumber - 77 + 64);
        } else {
            return String.fromCharCode(targetAsciiNumber + 13);
        }
    } else if (targetAsciiNumber >= 97 && targetAsciiNumber <= 122) {
        if (targetAsciiNumber > 109) {
            return String.fromCharCode(targetAsciiNumber - 109 + 96);
        } else {
            return String.fromCharCode(targetAsciiNumber + 13);
        }
    } else {
        return item;
    }
});

console.log(result.join(''));
