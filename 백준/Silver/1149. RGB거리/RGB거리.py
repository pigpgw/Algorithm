N = int(input())
dp = [[0] * 3 for _ in range(N)]


for i in range(0, N):
    R, G, B = list(map(int, input().split()))
    dp[i][0] = R
    dp[i][1] = G
    dp[i][2] = B

for i in range(1, N):
    dp[i][0] += min(dp[i - 1][1], dp[i - 1][2])
    dp[i][1] += min(dp[i - 1][0], dp[i - 1][2])
    dp[i][2] += min(dp[i - 1][0], dp[i - 1][1])

print(min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]))
