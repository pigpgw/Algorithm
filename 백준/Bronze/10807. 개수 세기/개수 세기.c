#include<stdio.h>

int main() {
    int N;
    int arr[100];
    scanf("%d",&N);

    for (int i = 0; i < N; i++){
        scanf("%d", &arr[i]);
    }

    int v;
    scanf("%d",&v);

    int count = 0;
    for (int i = 0; i < N; i++){
        int curr_i = arr[i];
        if (curr_i == v) {
            count += 1;
        }
    }

    printf("%d",count);
}