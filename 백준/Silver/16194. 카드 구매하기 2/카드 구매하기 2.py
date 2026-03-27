N = int(input())
value_list = list(map(int, input().split()))
dp = [0] * (N + 1)
for i in range(N):
    dp[i + 1] = value_list[i]

for i in range(2, N + 1):
    for j in range(1, i):
        dp[i] = min(dp[i - j] + value_list[j - 1], dp[i])

print(dp[N])
