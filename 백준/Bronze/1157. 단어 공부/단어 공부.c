#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main() {
  int arr[26] = {0};
  char str[1000000];
  scanf("%s", str);
  for (int i = 0; str[i] != '\0'; i++) {
    char curr = str[i];
    if (curr >= 'a' && curr <= 'z') {
      arr[curr - 'a'] += 1;
    }
    if (curr >= 'A' && curr <= 'Z') {
      arr[curr - 'A'] += 1;
    }
  }
  int max = 0;
  for (int i = 0; i < 26; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  char result[1000000];
  int size = 0;
  for (int i = 0; i < 26; i++) {
    if (arr[i] == max) {
      result[size++] = i;
    }
  }

  if (size >= 2) {
    printf("?");
  } else {
    printf("%c", 'A' + result[0]);
  }

  return 0;
}