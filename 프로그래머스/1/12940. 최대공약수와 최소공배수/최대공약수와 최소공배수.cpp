#include <string>
#include <vector>

using namespace std;

// 최대 공약수 = a , b = b , a % b
int GCD (int a,int b){
    while (b > 0){
        int temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}

// 최소 공배수 = (a * b) / GCD
int LCM (int a, int b){
    return (a * b) / GCD(a,b);
}

vector<int> solution(int n, int m) {
    return {GCD(n,m),LCM(n,m)};
}