def pibo(n):
    if n <= 2:
        return 1
    return (pibo(n - 1) + pibo(n - 2))  % 1234567

def solution(n):
    dp = [0] * 100001
    dp[1] = 1
    for i in range(2,100001):
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
    return dp[n]