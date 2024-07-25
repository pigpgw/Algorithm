import sys
input = sys.stdin.readline

N = int(input())
arr = [0] * (N + 1)
for i in range(1, N + 1):
    arr[i] = int(input())

dp = [0] * (N + 1)
dp[1] = arr[1]
if N >= 2:
    dp[2] = arr[1] + arr[2]
for i in range(3, N + 1):
    dp[i] = max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i])

print(dp[N])