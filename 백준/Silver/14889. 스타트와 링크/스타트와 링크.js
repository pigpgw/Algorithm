const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const board = input.slice(1).map((item) => item.split(' ').map(Number));

const people_list = Array.from({ length: N }, (_, idx) => idx);
const team_member = N / 2;
let result = 999999;

const bfs = (curr, arr) => {
    if (arr.length === N / 2) {
        const another_team = people_list.filter((person) => !arr.includes(person));
        let currentTeamPower = 0;
        let anotherTeamPower = 0;
        for (let i = 0; i < team_member; i++) {
            for (let j = i + 1; j < team_member; j++) {
                anotherTeamPower += board[another_team[i]][another_team[j]] + board[another_team[j]][another_team[i]];
            }
        }
        for (let i = 0; i < team_member; i++) {
            for (let j = i + 1; j < team_member; j++) {
                currentTeamPower += board[arr[i]][arr[j]] + board[arr[j]][arr[i]];
            }
        }

        result = Math.min(result, Math.abs(currentTeamPower - anotherTeamPower));
    }

    for (let i = curr; i < N; i++) {
        arr.push(people_list[i]);
        bfs(i + 1, arr);
        arr.pop();
    }
};

bfs(0, []);
console.log(result);
