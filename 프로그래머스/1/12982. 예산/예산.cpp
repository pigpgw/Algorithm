#include <iostream>
#include <stdio.h>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

// 최대 지원 가능한 부서 개수
// 단 원하는 금액만큼 해줘야함
// d 길이는 1 ~ 100
// 신청 금액 ₩ ~ 100000
// 예산 = 1 ~ 10000000

// 1번 풀이
//. 예산 정렬후 리턴

int solution(vector<int> d, int budget) {
    int answer = 0;
    sort(d.begin(),d.end());
    int i = 0;
    int lenBudget = d.size();
    while (i < lenBudget){
        if (d[i] > budget) break;
        budget-= d[i];
        answer += 1;
        i++;
    }
    return answer;
}