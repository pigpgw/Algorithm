#include<string>
#include <iostream>
#include<vector>

using namespace std;

bool solution(string s)
{
    vector<char> arr;
    // 스택에 뽑을게 없는데 닫는 괄호가 나왔다 or 끝나고보니 남아있다.
    for (char par : s){
        if (par == '('){
            arr.push_back(par);
        } else {
            if (arr.size() == 0){
                return false;
            } else {
                arr.pop_back();
            }
        }
    }
    return arr.empty();
}