const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number(input[0]);
const input_list = input.slice(1).map((item) => item.split(''));

// 다음단어가 현재와 같으면 제거 후 sotre에 저장 근데 store에 있다면 그룹단어 아님
let result = 0;

for (const word of input_list) {
    const set = new Set();
    let isTrue = true;
    for (let i = 0; i < word.length; i++) {
        const curr = word[i];
        if (curr === word[i + 1]) {
            continue;
        } else {
            if (set.has(curr)) {
                isTrue = false;
                break;
            } else {
                set.add(curr);
            }
        }
    }
    isTrue ? (result += 1) : null;
}

console.log(result);
