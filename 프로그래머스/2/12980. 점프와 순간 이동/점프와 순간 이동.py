def solution(n):
    # 건전지 사용량 최솟값
    # 점프시 건전지 이동한만큼 사용
    # 순간이동 : (현재까지 온 거리) x 2 = 건전지 미사용
    # N이 2의 배수아니면 -1씩 뺴기 2의 배수면 순간이동
    result = 0
    while n > 0:
        if n % 2 != 0:
            n -=1
            result += 1
        else:
            n /= 2
    return result