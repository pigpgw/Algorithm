#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string my_string, string overwrite_string, int s) {
    string answer = "";
    // s ~ s + overwiret~len
    answer = my_string.replace(s,overwrite_string.length(),overwrite_string);
    cout << answer;
    
    return answer;
}