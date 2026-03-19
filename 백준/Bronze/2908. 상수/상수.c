#include <stdio.h>
#include <string.h>

struct Pair {
  char key;
  int value;
};

int result(int a) {
  int result = 0;
  while (a > 0) {
    result = result * 10 + (a % 10);
    a /= 10;
  }
  return result;
}

int main() {
  int A, B;
  scanf("%d %d", &A, &B);
  int reversedA = result(A);
  int reversedB = result(B);
  if (reversedB < reversedA) {
    printf("%d", reversedA);
  } else {
    printf("%d", reversedB);
  }
  return 0;
}