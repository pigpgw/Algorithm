const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const numberList = input[1].split(" ").map(Number).sort((a, b) => a - b); // 숫자로 변환 후 정렬
const seq = [];
const result = [];

const dfs = (count) => {
    if (count === m) {
        result.push(seq.join(" ")); // ✅ 배열에 저장
        return;
    }

    for (let i = 0; i < n; i++) {
        seq.push(numberList[i]);
        dfs(count + 1);
        seq.pop();
    }
};

dfs(0);
console.log(result.join("\n")); // ✅ 한 번만 출력
