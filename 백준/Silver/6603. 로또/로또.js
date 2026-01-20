const fs = require('fs');
const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map(Number));

for (let t = 0; t < input.length; t++) {
    const item_list = input[t];

    const k = item_list[0];
    if (k === 0) break;

    const S = item_list.slice(1);
    const Slength = S.length;
    let result = [];
    const backtrack = (curr, arr) => {
        if (arr.length === 6) {
            result.push([...arr]);
            return;
        }

        for (let i = curr; i < Slength; i++) {
            arr.push(S[i]);
            backtrack(i + 1, arr);
            arr.pop();
        }
    };

    backtrack(0, []);

    for (const list of result) {
        console.log(list.join(' '));
    }
    if (t !== input.length - 1) console.log('');
}
