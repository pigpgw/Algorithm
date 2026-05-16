#include <string>
#include <vector>

using namespace std;

bool solution(int x) {
    string c = to_string(x);
    int digitSum = 0;
    for (int i = 0; i < c.size(); i++){
        digitSum += c[i] - '0';
    }
    
    return x % digitSum == 0 ? true : false;
}