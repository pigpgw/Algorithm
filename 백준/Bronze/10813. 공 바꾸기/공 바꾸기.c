#include<stdio.h>

int main() {
    int N,M;
    scanf("%d %d",&N,&M);
    int arr[N];
    for (int i = 0; i < N; i++){
        arr[i] = i + 1;
    }
    for (int l = 0; l < M; l++){
        int i,j;
        scanf("%d %d",&i, &j);
        int store = arr[i - 1];
        arr[i - 1] = arr[j - 1];
        arr[j - 1] = store;
    }

    for (int i = 0; i < N; i++){
        printf("%d ",arr[i]);
    }
}