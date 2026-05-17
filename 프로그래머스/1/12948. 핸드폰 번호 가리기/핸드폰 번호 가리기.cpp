#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    string answer = "";
    // 길이에서 4를 뺴고 0부터 대체
    int len = phone_number.size();
    for (int i = 0; i < len; i++){
        if (i < len - 4){
            answer += "*";
        } else {
            answer += phone_number[i];
        }
    }
    return answer;
}