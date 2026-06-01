#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

int solution(vector<vector<string>> clothes) {
    int answer = 1;
    unordered_map<string,vector<string>> mp;
    for (auto cloth : clothes){
        string cloth_name = cloth[0];
        string cloth_sort = cloth[1];
        mp[cloth_sort].push_back(cloth_name);
    }
    
    for (auto [key, value] : mp){
        answer *= (value.size() + 1);
    }
     
    return answer - 1;
}