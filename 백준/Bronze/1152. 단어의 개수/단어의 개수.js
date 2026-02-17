const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

if (input === '') {
    console.log(0);
} else {
    console.log(input.split(' ').filter((item) => item !== '').length);
}
