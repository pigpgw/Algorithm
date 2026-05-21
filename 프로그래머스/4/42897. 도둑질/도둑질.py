def solution(money):
    # 첫집을 터냐 안터냐
    n = len(money)
    # 첫집 털기
    dp1 = [0] * n
    dp1[0] = money[0]
    dp1[1] = money[0]
    for i in range(2,n - 1):
        dp1[i] = max(dp1[i - 2] + money[i],dp1[i - 1])
    
    # 첫집 안털기
    dp2 = [0] * n
    dp2[1] = money[1]
    for i in range(2,n):
        dp2[i] = max(dp2[i - 2] + money[i],dp2[i - 1])
    return max(dp1[n - 2],dp2[n - 1])