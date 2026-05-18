#include <string>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

// 3진법 표현 : n이 0이 될때까지 나눈거 더하기 근데 앞에 추가해야함
// 그걸 10진법으로

string ten_to_three(int number,int target_decimal){
    string result = "";
    while (number > 0){
        result = to_string(number % target_decimal) + result;
        number /= target_decimal;
    }
    return result;
}

int base_to_ten(string number,int base_decimal){
    int result = 0;
    for (int i = 0; i < number.size(); i++){
        result += (number[number.size() - i - 1] - '0') * pow(base_decimal,i); 
    }
    return result;
}

int solution(int n) {
    // 1. 10 -> 3진수 
    string three_num = ten_to_three(n,3);
    // 2. 반대로 회전
    string reverse_three_num = three_num;
    reverse(reverse_three_num.begin(),reverse_three_num.end());
    
    // 3. 3진수 -> 10진수
    return base_to_ten(reverse_three_num,3);
}