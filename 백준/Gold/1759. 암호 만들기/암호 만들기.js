const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const alphaber_list = input[1].split(' ').sort();

const result = [];

function isVowel(char) {
    return /^[aeiou]$/.test(char); // 소문자만 체크, 문제에서 알파벳 소문자로 가정
}

const validLimt = (arr) => {
    let vowels = 0;
    let consonants = 0;
    for (const char of arr) {
        // 알파벳인지 확인
        if (/^[a-zA-Z]$/.test(char)) {
            if (isVowel(char)) vowels++;
            else consonants++;
        }
    }
    return vowels >= 1 && consonants >= 2 ? true : false;
};

const bfs = (curr, arr) => {
    if (arr.length === L) {
        if (validLimt(arr)) result.push(arr.join(''));
        return;
    }
    for (let i = curr; i < C; i++) {
        arr.push(alphaber_list[i]);
        bfs(i + 1, arr);
        arr.pop();
    }
};

bfs(0, []);

result.sort();

for (const item of result) {
    console.log(item);
}
