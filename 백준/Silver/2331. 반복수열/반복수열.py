import sys
from collections import deque

input = sys.stdin.readline
n, m = list(map(int, input().split()))
arr = []

def dfs(v, p):
    hi = list(map(int, str(v)))
    another_number = 0
    for i in hi:
        another_number += i ** p
    if another_number not in arr:
        arr.append(another_number)
        dfs(another_number, p)
    else:
        target_length = arr.index(another_number)
        print(target_length)
        return

arr.append(n)  # Start the sequence with the initial number
dfs(n, m)
