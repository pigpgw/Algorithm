#include <string>
#include <vector>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 0;
    // 남은 트럭 있냐  없으면 종료
    // 다리위 무게와 다음 트럭 무개가 가능하냐
        // 안되면 초만 흐름
        // 되면 올림
    
    int time = 0;
    int total_weight = 0;
    vector<int> arr(bridge_length,0); 
    while (true){
        time++;
        
        total_weight -= arr[0];
        arr.erase(arr.begin());
        
        // 
        if (!truck_weights.empty() && truck_weights[0] + total_weight <= weight){
            total_weight += truck_weights[0];
            arr.push_back(truck_weights[0]);
            truck_weights.erase(truck_weights.begin());
        } else {
            arr.push_back(0);
        }
        // 남은 트럭 없고, 다리 위 무게도 0이면 종료
        if (truck_weights.empty() && total_weight == 0) {
            return time;
        }
    }
    return time;
}