const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// 소문자 아스키는 97 ~ 122
for (const sentance of input) {
    if (sentance === '*') break;
    let alphabet = sentance
        .split('')
        .filter((item) => item !== ' ')
        .map((item) => item.toLowerCase())
        .sort();
    alphabet = [...new Set(alphabet)];
    let i = 97;
    let result = true;
    for (const item of alphabet) {
        if (item.charCodeAt(0) !== i) {
            result = false;
            break;
        } else {
            i += 1;
        }
    }
    if (i !== 123) result = false;
    result ? console.log('Y') : console.log('N');
}
