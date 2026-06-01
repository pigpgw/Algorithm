#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    unordered_map<string,int> mp;
    for (string people : participant){
        if (mp.find(people) != mp.end()){
            mp[people] += 1;
        } else {
            mp[people] = 1;
        }
    }
    
    for (string people : completion){
        if (mp.find(people) != mp.end()){
            mp[people] -= 1;
        }
    }
    for (auto [name, count] : mp){
        if (count > 0) return name;
    }
}