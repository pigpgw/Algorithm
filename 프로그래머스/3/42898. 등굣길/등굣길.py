def solution(m, n, puddles):
    dp = [[0] * m for _ in range(n)]
    dp[0][0] = 1
    puddle_set = set()
    for puddlex,puddley in puddles:
        puddle_set.add((puddley - 1,puddlex - 1))
    for i in range(n):
        for j in range(m):
            if dp[i][j] == -1:
                continue
            else:
                if i + 1 < n and (i + 1,j) not in puddle_set:
                    dp[i + 1][j] += dp[i][j] % 1000000007
                if j + 1 < m and (i,j + 1) not in puddle_set:
                    dp[i][j + 1] += dp[i][j] % 1000000007
    return dp[n-1][m-1] % 1000000007