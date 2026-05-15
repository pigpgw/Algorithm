#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main(void) {
    string str;
    cin >> str;
    
    string answer = "";
    for (auto c : str){
        if ('a' <= c && c <= 'z'){
            answer += c - ('a' - 'A');
        } else {
            answer += c + ('a' - 'A');
        }
    }
    cout << answer << endl;
}