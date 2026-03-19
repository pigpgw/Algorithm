#include <stdio.h>
#include <string.h>

int main() {
  int arr[6];
  for (int i = 0; i < 6; i++) {
    scanf("%d", &arr[i]);
  }

  int answer[6] = {1, 1, 2, 2, 2, 8};
  for (int i = 0; i < 6; i++) {
    printf("%d ", answer[i] - arr[i]);
  }
  return 0;
}