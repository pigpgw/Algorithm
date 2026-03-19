#include<stdio.h>

int main() {
    int a;
    int b;
    scanf("%d %d",&a, &b);
    int resultH;
    int resultM;
    if (b - 45 >= 0){
        resultH = a;
        resultM = b - 45;
    } else {
        if (a - 1 < 0){
            resultH = 23;
        } else {
            resultH = a - 1;
        }
        resultM = 60 -(45 - b);
    }
    printf("%d %d",resultH,resultM);
}