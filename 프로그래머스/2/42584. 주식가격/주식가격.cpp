#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> prices) {
    vector<int> answer(prices.size(),0);
    vector<int> s;
    for (int i = 0; i < prices.size(); i++){
        int currPrice = prices[i];
        while (!s.empty() && prices[s.back()] > currPrice){
            int lastIdx = s.back();
            s.pop_back();
            answer[lastIdx] = i - lastIdx;
        }
        s.push_back(i);
    }
    
    while (!s.empty()){
        int lastIdx = s.back();
        s.pop_back();
        answer[lastIdx] = prices.size() - 1 - lastIdx;
    }
    
    return answer;
}