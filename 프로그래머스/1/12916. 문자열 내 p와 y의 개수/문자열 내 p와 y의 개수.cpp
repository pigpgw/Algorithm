#include <string>
#include <iostream>
#include <cctype>
using namespace std;

bool solution(string s)
{
    bool answer = true;
    int pcount = 0;
    int ycount = 0;
    for (int i = 0; i < s.size(); i++){
        char curr = tolower(s[i]);
        if (curr == 'p') pcount += 1;
        if (curr == 'y') ycount += 1;
    }
    return pcount == ycount ? true : false;
}