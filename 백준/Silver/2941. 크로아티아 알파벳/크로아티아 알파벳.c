#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main() {
  char s[100];
  scanf("%s", s);
  int len = strlen(s);
  int count = 0;
  for (int i = 0; i < len;) {
    if (s[i] == 'd' && s[i + 1] == 'z' && s[i + 2] == '=') {
      count++;
      i += 3;
    } else if ((s[i] == 'c' && s[i + 1] == '=') ||
               (s[i] == 'c' && s[i + 1] == '-') ||
               (s[i] == 'd' && s[i + 1] == '-') ||
               (s[i] == 'l' && s[i + 1] == 'j') ||
               (s[i] == 'n' && s[i + 1] == 'j') ||
               (s[i] == 's' && s[i + 1] == '=') ||
               (s[i] == 'z' && s[i + 1] == '=')) {
      count++;
      i += 2;
    } else {
      i += 1;
      count++;
    }
  }

  printf("%d", count);
  return 0;
}