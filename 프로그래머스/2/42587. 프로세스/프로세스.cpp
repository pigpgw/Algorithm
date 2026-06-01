#include <string>
#include <vector>

using namespace std;

int solution(vector<int> priorities, int location) {
    int answer = 0;
    vector<pair<int,int>> q;
    for (int i = 0; i < priorities.size(); i++){
        q.push_back({priorities[i],i});
    }
    
    while (true){
        auto curr = q[0];
        q.erase(q.begin());
        int curr_priority = curr.first;
        int curr_loc = curr.second;
        bool hasHigher = false;
        for (int i = 0; i < q.size(); i++){
            if (curr_priority < q[i].first){
                hasHigher = true;
                break;
            }
        }
        
        if (hasHigher){
            q.push_back({curr_priority,curr_loc});
        } else {
            answer++;
            if (curr_loc == location){
                return answer;
            }
        }
    }
}