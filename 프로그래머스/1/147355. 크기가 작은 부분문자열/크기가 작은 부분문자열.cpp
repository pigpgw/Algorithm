#include <string>
#include <vector>

using namespace std;

int solution(string t, string p) {
    int answer = 0;
    size_t lent = t.size();
    size_t lenp = p.size();
    long long  p_number = stoll(p);
    for (int i = 0; i <= lent-lenp; i++){
        long long  curr = stoll(t.substr(i,lenp));
        if (curr <= p_number) answer += 1; 
    }
    return answer;
}