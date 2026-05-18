#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    for (int l = 0; l < commands.size(); l++){
        int i = commands[l][0];
        int j = commands[l][1];
        int k = commands[l][2];
        vector<int> arr;
        for (int m = i - 1; m < j; m++){
            arr.push_back(array[m]);
        }
        sort(arr.begin(),arr.end());
        answer.push_back(arr[k - 1]);
    }
    return answer;
}