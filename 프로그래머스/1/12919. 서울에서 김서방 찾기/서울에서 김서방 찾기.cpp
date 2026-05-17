#include <string>
#include <vector>

using namespace std;

string solution(vector<string> seoul) {
    // 배열 seoul에서 "Kim" 위치 찾아 반환
    int loc = -1;
    for (int i = 0; i < seoul.size(); i++){
        if (seoul[i] == "Kim"){
            loc = i;
        }
    }
    string answer = ("김서방은 " + to_string(loc) + "에 있다");
    return answer;
}