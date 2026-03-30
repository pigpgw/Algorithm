A = int(input())
A_list = list(map(int, input().split()))

dp = [0] * A
for i in range(A):
    dp[i] = 1

for i in range(A - 1, -1, -1):
    for j in range(A - 1, i, -1):
        if A_list[i] > A_list[j]:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))
