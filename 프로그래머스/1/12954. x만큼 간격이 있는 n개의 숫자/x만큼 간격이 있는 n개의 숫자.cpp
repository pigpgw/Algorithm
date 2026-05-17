#include <string>
#include <vector>

using namespace std;

vector<long long> solution(int x, int n) {
    vector<long long> answer;
    // x 부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 리턴
    int curr = x;
    for (int i = 0; i < n; i++){
        answer.push_back(curr);
        curr += x;
    }
    return answer;
}