#include <stdio.h>

int main() {
    int arr[33];

    for (int i = 0; i < 32; i++) {
        arr[i] = 0;
    }

    for (int i = 0; i < 28; i++) {
        int curr;
        scanf("%d", &curr);
        arr[curr] = 1;
    }

    int min = 0;
    int secondMin = 0;

    for (int i = 1; i < 31; i++) {
        if (arr[i] == 0) {
            if (min == 0) {
                min = i;
            } else {
                secondMin = i;
            }
        }
    }

    printf("%d\n", min);
    printf("%d\n", secondMin);

    return 0;
}