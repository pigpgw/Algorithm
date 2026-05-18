#include <vector>
#include <iostream>
#include <stack>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    vector<int> stack;
    
    for (int i = 0; i <  arr.size(); i++){
        if (stack.size() > 0 && stack[stack.size() - 1] == arr[i]) continue;
        stack.push_back(arr[i]);
    }
    return stack;
}