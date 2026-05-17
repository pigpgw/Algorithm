#include <string>
#include <vector>

using namespace std;

int solution(int num) {
    int answer = 0;
    long long  curr = num;
    while (answer < 500 && curr != 1){
        if (curr % 2 == 0){
            curr /= 2;
        } else {
            curr = curr * 3 + 1;
        }
        answer += 1;
    }
    return curr == 1 ? answer : -1;
}