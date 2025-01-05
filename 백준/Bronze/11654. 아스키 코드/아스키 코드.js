const input = require('fs').readFileSync(0, 'utf-8');
if (typeof input === 'String') console.log(String.fromCharCode(input));
else console.log(input.charCodeAt(0));
