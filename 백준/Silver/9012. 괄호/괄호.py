import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
bracket_list = [list(input().strip()) for _ in range(n)]

def check(string_list):
    queue = deque(string_list)
    left = 0
    right = 0
    # print(queue)

    while queue:
        item = queue.popleft()
        if item == '(':
            left += 1
        else:
            right += 1
        if right > left:
            return 'NO'
    return 'YES' if left == right else 'NO'

for arr in bracket_list:
    print(check(arr))