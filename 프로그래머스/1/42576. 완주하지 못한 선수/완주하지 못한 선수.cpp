#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    unordered_map<string,int> mp;
    for (int i = 0; i < participant.size(); i++){
        string curr = participant[i];
        auto it = mp.find(curr);
        if (it == mp.end()){
            mp[curr] = 1;
        } else {
            mp[curr] += 1;
        }
    }
    for (int i = 0; i < completion.size(); i++){
        string curr = completion[i];
        auto it = mp.find(curr);
        if (it != mp.end()){
            mp[curr] -= 1;
        }
    }
    for (auto item : mp){
        if (item.second > 0){
            return item.first;
        }
    }
    return "";
}