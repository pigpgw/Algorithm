#include<stdio.h>

int main() {
    int arr[10];
    for (int i = 0; i < 9; i++){
        scanf("%d",&arr[i]);
    }
    int max = 0;
    int maxIdx = 0;
    for (int i = 0; i < 9; i++){
        int curr = arr[i];
        if (max < curr){
            max = curr;
            maxIdx = i;
        }
    }
    printf("%d\n",max);
    printf("%d",maxIdx + 1);
}