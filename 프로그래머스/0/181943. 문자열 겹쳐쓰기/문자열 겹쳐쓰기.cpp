#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string my_string, string overwrite_string, int s) {
    string answer = "";
    // s ~ s + overwiret~len
    answer = my_string;
    for (int i = s; i < s + overwrite_string.length(); i++){
        answer[i] = overwrite_string[i - s];
    }
    cout << answer;
    
    return answer;
}