import sys
input = sys.stdin.readline
n = int(input())

arr = [input().strip() for _ in range(n)]
arr =list(set(arr))
arr.sort()
arr.sort(key=len)
[print(i) for i in arr]