#include <string>
#include <vector>
#include <sstream>
#include <cctype>

using namespace std;

string solution(string s) {
    string answer = "";
    // 문자열 순회하기 공백나오면 0
    int currIdx = 0;
    for (int i = 0; i < s.size(); i++){
        if (s[i] == ' '){
            currIdx = 0;
            continue;
        } 
        currIdx += 1;
        if (currIdx % 2 == 0){
            s[i] = tolower(s[i]);
        } else {
            s[i] = toupper(s[i]);
        }
    }
    
    return s;
}