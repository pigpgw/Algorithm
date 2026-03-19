#include <ctype.h>
#include <stdio.h>
#include <string.h>

int groupChecker(char str[]) {
  int visited[26] = {0};
  char prev = 0;

  int len = strlen(str);
  for (int i = 0; i < len; i++) {
    char curr = str[i];
    if (curr != prev) {
      if (visited[curr - 'a']) {
        return 0;
      }
      visited[curr - 'a'] = 1;
    }
    prev = curr;
  }
  return 1;
}

int main() {
  int N;
  scanf("%d", &N);
  int count = 0;
  for (int i = 0; i < N; i++) {
    char s[101];
    scanf("%s", s);
    if (groupChecker(s)) {
      count++;
    }
  }
  printf("%d", count);
  return 0;
}