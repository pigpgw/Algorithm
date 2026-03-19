#include<stdio.h>

int main() {
    int N,M;
    scanf("%d %d",&N,&M);
    int arr[N];
    for (int i = 0; i < N; i++){
        arr[i] = 0;
    }
    for (int l = 0; l < M; l++){
        int i,j,k;
        scanf("%d %d %d",&i, &j, &k);
        for (int m = i - 1; m <= j - 1; m++ ){
            arr[m] = k;
        }
    }

    for (int i = 0; i < N; i++){
        printf("%d ",arr[i]);
    }
}