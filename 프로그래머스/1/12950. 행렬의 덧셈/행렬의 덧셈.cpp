#include <string>
#include <vector>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
    int N = arr1.size();
    int M = arr1[0].size();
    vector<vector<int>> answer(N,vector<int>(M,0));
    for (int i = 0; i <  N; i++){
        for (int j = 0; j < M; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}