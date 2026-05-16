#include <string>
#include <vector>

using namespace std;

int solution(int a, int d, vector<bool> included) {
    int answer = 0;
    // d는 결국 차이 a부터 시작해서 d의 차이만큼 벌려서 추가하는데 그 값은 included
    // included배열은 i + 1번째 공차를 더할지
    // a + (d * (i + 1)) 근데 included[i] 가
    for (int i = 0; i < included.size(); i++){
        if (included[i]){
            answer += a + (d * (i));
        }
    }
    return answer;
}