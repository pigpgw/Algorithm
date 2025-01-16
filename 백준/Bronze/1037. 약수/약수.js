const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const measureCount = input[0];
const measureList = input[1].split(' ');

// 약수 개수와 자리수로 N 구하기
console.log(measureList.length !== 1 ? Math.max(...measureList) * Math.min(...measureList) : measureList[0] ** 2);
