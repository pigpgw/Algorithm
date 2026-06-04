#include <iostream>
#include <vector>

using namespace std;

int solution(int n, int a, int b)
{
    int answer = 1;
    vector<int> arr;
    for (int i = 1; i <= n; i++){
        arr.push_back(i);
    }
    while (true){
        vector<int> tmp;
        for (int i = 0; i < arr.size(); i += 2){
            int n1 = arr[i];
            int n2 = arr[i + 1];
            if ((n1 == a && n2 == b) || (n1 == b && n2 == a)) return answer;
            if (n1 == a || n2 == a){
                tmp.push_back(a);
            } else if (n2 == b || n1 == b){
                tmp.push_back(b);
            } else {
                tmp.push_back(n2);
            }
        }
        arr = tmp;
        answer++;
    }
}